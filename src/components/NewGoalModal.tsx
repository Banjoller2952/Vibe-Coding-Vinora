import React, { useState, useEffect } from 'react';
import { X, Search, Check, Plus } from 'lucide-react';
import { SavingsGoal } from './SavingsView';

export interface CategoryOption {
  id: string;
  name: string;
  color: string;
}

const INITIAL_CATEGORIES: CategoryOption[] = [
  { id: 'cat-all', name: 'All categories', color: '#9ca3af' },
  { id: 'cat-rent', name: 'Rent', color: '#181d27' },
  { id: 'cat-transport', name: 'Transport', color: '#d6a75c' },
  { id: 'cat-leisure', name: 'Leisure', color: '#3b82f6' },
];

const INITIAL_SUGGESTIONS: CategoryOption[] = [
  { id: 'sug-edu', name: 'Education', color: '#8b5cf6' },
  { id: 'sug-car', name: 'Car', color: '#ec4899' },
  { id: 'sug-wedding', name: 'Wedding', color: '#f43f5e' },
  { id: 'sug-retire', name: 'Retirement', color: '#10b981' },
];

const CATEGORY_COLOR_PALETTE = [
  '#36b37e', // Green / Travel
  '#c26d40', // Orange / Gear
  '#225a39', // Forest Green / Safety net
  '#3b82f6', // Blue / Leisure
  '#8b5cf6', // Purple / Education
  '#ec4899', // Pink / Car
  '#f43f5e', // Rose / Wedding
  '#10b981', // Emerald / Retirement
  '#eab308', // Amber / Transport
];

interface NewGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGoal: (goal: Omit<SavingsGoal, 'id'>) => void;
}

export const NewGoalModal: React.FC<NewGoalModalProps> = ({
  isOpen,
  onClose,
  onAddGoal,
}) => {
  const [name, setName] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [note, setNote] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [alreadySaved, setAlreadySaved] = useState('');

  // Category state
  const [categories, setCategories] = useState<CategoryOption[]>(INITIAL_CATEGORIES);
  const [suggestions, setSuggestions] = useState<CategoryOption[]>(INITIAL_SUGGESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(INITIAL_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isOpen) {
      setName('');
      setTargetDate('');
      setNote('');
      setTargetAmount('');
      setAlreadySaved('');
      setSearchQuery('');
      setSelectedCategory(categories[0] || INITIAL_CATEGORIES[0]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter categories based on search
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
  );

  const exactMatchExists = categories.some(
    (cat) => cat.name.toLowerCase() === searchQuery.trim().toLowerCase()
  );

  const handleSelectCategory = (cat: CategoryOption) => {
    setSelectedCategory(cat);
  };

  const handleAddSuggestedCategory = (sug: CategoryOption) => {
    // Add to categories list if not already there
    if (!categories.some((c) => c.name.toLowerCase() === sug.name.toLowerCase())) {
      setCategories((prev) => [...prev, sug]);
    }
    // Remove from suggestions
    setSuggestions((prev) => prev.filter((s) => s.id !== sug.id));
    // Select it
    setSelectedCategory(sug);
  };

  const handleCreateCustomCategory = () => {
    if (!searchQuery.trim()) return;
    const catName = searchQuery.trim();
    const randomColor = CATEGORY_COLOR_PALETTE[categories.length % CATEGORY_COLOR_PALETTE.length];

    const newCat: CategoryOption = {
      id: `custom-cat-${Date.now()}`,
      name: catName,
      color: randomColor,
    };

    setCategories((prev) => [...prev, newCat]);
    setSelectedCategory(newCat);
    setSearchQuery('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !targetAmount) return;

    const targetVal = parseFloat(targetAmount) || 0;
    const savedVal = parseFloat(alreadySaved) || 0;

    onAddGoal({
      title: name.trim(),
      subtitle: note.trim() || undefined,
      note: note.trim() || undefined,
      category: selectedCategory.name === 'All categories' ? 'General' : selectedCategory.name,
      categoryDotColor: selectedCategory.color,
      targetDate: targetDate.trim() || undefined,
      currentAmount: savedVal,
      targetAmount: targetVal,
    });

    onClose();
  };

  return (
    <div className="new-goal-modal-backdrop" onClick={onClose}>
      <div className="new-goal-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="new-goal-header-row">
          <div className="new-goal-title-group">
            <h2 className="new-goal-title">New goal</h2>
            <p className="new-goal-subtitle">
              Name it, set a target, and let the progress do the persuading.
            </p>
          </div>
          <button className="new-goal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="new-goal-form">
          {/* Name Field */}
          <div className="new-goal-field">
            <label className="new-goal-label">Name</label>
            <input
              type="text"
              className="new-goal-input"
              placeholder="Kyoto in Autumn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Target date (optional) */}
          <div className="new-goal-field">
            <label className="new-goal-label">Target date (optional)</label>
            <input
              type="text"
              className="new-goal-input"
              placeholder="e.g. Oct 2026"
              value={targetDate}
              onChange={(e) => setTargetDate(e.target.value)}
            />
          </div>

          {/* Note (optional) */}
          <div className="new-goal-field">
            <label className="new-goal-label">Note (optional)</label>
            <input
              type="text"
              className="new-goal-input"
              placeholder=""
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          {/* Target & Already saved 2-column grid */}
          <div className="new-goal-grid-2">
            <div className="new-goal-field">
              <label className="new-goal-label">Target</label>
              <input
                type="number"
                step="0.01"
                className="new-goal-input"
                placeholder="3200"
                value={targetAmount}
                onChange={(e) => setTargetAmount(e.target.value)}
                required
              />
            </div>
            <div className="new-goal-field">
              <label className="new-goal-label">Already saved</label>
              <input
                type="number"
                step="0.01"
                className="new-goal-input"
                placeholder="0"
                value={alreadySaved}
                onChange={(e) => setAlreadySaved(e.target.value)}
              />
            </div>
          </div>

          {/* Savings category */}
          <div className="new-goal-field">
            <label className="new-goal-label">Savings category</label>
            <div className="new-goal-category-block">
              {/* Search or create category input */}
              <div className="cat-search-box">
                <Search size={16} className="cat-search-icon" style={{ color: '#98a2b3' }} />
                <input
                  type="text"
                  className="cat-search-input-inner"
                  placeholder="Search or create a category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim() && !exactMatchExists) {
                      e.preventDefault();
                      handleCreateCustomCategory();
                    }
                  }}
                />
              </div>

              {/* Category options list */}
              <div className="cat-list-scroll">
                {filteredCategories.map((cat) => {
                  const isSelected = selectedCategory.id === cat.id || selectedCategory.name === cat.name;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      className={`cat-item-btn ${isSelected ? 'selected' : ''}`}
                      onClick={() => handleSelectCategory(cat)}
                    >
                      <div className="cat-item-left">
                        <span
                          className="cat-dot-indicator"
                          style={{ backgroundColor: cat.color }}
                        />
                        <span className="cat-item-name">{cat.name}</span>
                      </div>
                      {isSelected && <Check size={16} className="cat-check-icon" />}
                    </button>
                  );
                })}

                {/* Create custom category action if searching non-existing term */}
                {searchQuery.trim() !== '' && !exactMatchExists && (
                  <button
                    type="button"
                    className="cat-item-btn"
                    style={{ color: '#173e27', fontWeight: 600 }}
                    onClick={handleCreateCustomCategory}
                  >
                    <div className="cat-item-left">
                      <Plus size={15} />
                      <span className="cat-item-name">Create "{searchQuery.trim()}"</span>
                    </div>
                  </button>
                )}
              </div>

              {/* Suggested section */}
              {suggestions.length > 0 && (
                <div className="suggested-section">
                  <span className="suggested-title">SUGGESTED</span>
                  <div className="suggested-chips-row">
                    {suggestions.map((sug) => (
                      <button
                        key={sug.id}
                        type="button"
                        className="sug-chip-btn"
                        onClick={() => handleAddSuggestedCategory(sug)}
                      >
                        <span>+ {sug.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="new-goal-footer-actions">
            <button
              type="button"
              className="btn-new-goal-cancel"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="btn-new-goal-submit">
              Create goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
