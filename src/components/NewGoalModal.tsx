import React, { useState, useEffect } from 'react';
import { X, Search, Check, Plus, Trash2 } from 'lucide-react';
import { SavingsGoal } from './SavingsView';
import { DeleteConfirmModal } from './DeleteConfirmModal';

export interface CategoryOption {
  id: string;
  name: string;
  color: string;
}

const INITIAL_CATEGORIES: CategoryOption[] = [
  { id: 'cat-all', name: 'All categories', color: '#b0b4b9' },
  { id: 'cat-rent', name: 'Rent', color: '#181d27' },
  { id: 'cat-transport', name: 'Transport', color: '#d6a75c' },
  { id: 'cat-leisure', name: 'Leisure', color: '#5b7cb8' },
  { id: 'cat-utilities', name: 'Utilities', color: '#4a7885' },
  { id: 'cat-salary', name: 'Salary', color: '#143d24' },
  { id: 'cat-freelance', name: 'Freelance', color: '#0f766e' },
  { id: 'cat-shopping', name: 'Shopping', color: '#c26d40' },
  { id: 'cat-health', name: 'Health', color: '#bd6c45' },
  { id: 'cat-cafes', name: 'Cafés', color: '#cf9e48' },
  { id: 'cat-groceries', name: 'Groceries', color: '#1e2430' },
];

const INITIAL_SUGGESTIONS: CategoryOption[] = [
  { id: 'sug-travel', name: 'Travel', color: '#36b37e' },
  { id: 'sug-gear', name: 'Gear', color: '#c26d40' },
  { id: 'sug-safety', name: 'Safety net', color: '#225a39' },
  { id: 'sug-edu', name: 'Education', color: '#8b5cf6' },
  { id: 'sug-car', name: 'Car', color: '#ec4899' },
  { id: 'sug-wedding', name: 'Wedding', color: '#f43f5e' },
  { id: 'sug-retire', name: 'Retirement', color: '#10b981' },
];

const CATEGORY_COLOR_PALETTE = [
  '#36b37e', // Green / Travel
  '#c26d40', // Orange / Shopping / Health / Gear
  '#225a39', // Forest Green / Safety net
  '#5b7cb8', // Slate Blue / Leisure
  '#4a7885', // Teal / Utilities
  '#0f766e', // Emerald / Freelance
  '#8b5cf6', // Purple / Education
  '#ec4899', // Pink / Car
  '#f43f5e', // Rose / Wedding
  '#10b981', // Mint / Retirement
  '#d6a75c', // Mustard / Transport / Cafes
];

interface NewGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddGoal?: (goal: Omit<SavingsGoal, 'id'>) => void;
  onUpdateGoal?: (goal: SavingsGoal) => void;
  onDeleteGoal?: (goalId: string) => void;
  goalToEdit?: SavingsGoal | null;
}

export const NewGoalModal: React.FC<NewGoalModalProps> = ({
  isOpen,
  onClose,
  onAddGoal,
  onUpdateGoal,
  onDeleteGoal,
  goalToEdit,
}) => {
  const isEditMode = Boolean(goalToEdit);

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
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);

  // Category deletion & toast undo state
  const [deleteCategoryTarget, setDeleteCategoryTarget] = useState<CategoryOption | null>(null);
  const [deletedCategory, setDeletedCategory] = useState<CategoryOption | null>(null);
  const [categoryToast, setCategoryToast] = useState<{ title: string } | null>(null);

  // Auto-dismiss category undo toast after 6 seconds
  useEffect(() => {
    if (categoryToast) {
      const timer = setTimeout(() => {
        setCategoryToast(null);
        setDeletedCategory(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [categoryToast]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setIsDeleteConfirmOpen(false);
      setDeleteCategoryTarget(null);
      if (goalToEdit) {
        setName(goalToEdit.title || '');
        setTargetDate(goalToEdit.targetDate || '');
        setNote(goalToEdit.subtitle || goalToEdit.note || '');
        setTargetAmount(goalToEdit.targetAmount ? goalToEdit.targetAmount.toString() : '');
        setAlreadySaved(goalToEdit.currentAmount !== undefined ? goalToEdit.currentAmount.toString() : '');

        // Find or create category option
        const existingCat = categories.find(
          (c) => c.name.toLowerCase() === goalToEdit.category.toLowerCase()
        );
        if (existingCat) {
          setSelectedCategory(existingCat);
        } else {
          const customCat: CategoryOption = {
            id: `cat-${Date.now()}`,
            name: goalToEdit.category,
            color: goalToEdit.categoryDotColor || '#36b37e',
          };
          setCategories((prev) => [...prev, customCat]);
          setSelectedCategory(customCat);
        }
      } else {
        setName('');
        setTargetDate('');
        setNote('');
        setTargetAmount('');
        setAlreadySaved('');
        setSelectedCategory(categories[0] || INITIAL_CATEGORIES[0]);
      }
    }
  }, [isOpen, goalToEdit]);

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

  const handleOpenDeleteCategory = (cat: CategoryOption, e: React.MouseEvent) => {
    e.stopPropagation();
    setDeleteCategoryTarget(cat);
  };

  const handleConfirmDeleteCategory = () => {
    if (deleteCategoryTarget) {
      const catToDelete = deleteCategoryTarget;
      const isCustomUserCategory = catToDelete.id.startsWith('custom-cat-') &&
        !INITIAL_CATEGORIES.some((c) => c.name.toLowerCase() === catToDelete.name.toLowerCase()) &&
        !INITIAL_SUGGESTIONS.some((s) => s.name.toLowerCase() === catToDelete.name.toLowerCase());

      setCategories((prev) => prev.filter((c) => c.id !== catToDelete.id));
      setDeletedCategory(catToDelete);
      setCategoryToast({ title: catToDelete.name });
      setDeleteCategoryTarget(null);

      // If not custom user category, add back to suggested list
      if (!isCustomUserCategory) {
        setSuggestions((prev) => {
          if (prev.some((s) => s.name.toLowerCase() === catToDelete.name.toLowerCase())) {
            return prev;
          }
          return [...prev, catToDelete];
        });
      }

      if (selectedCategory.id === catToDelete.id) {
        const remaining = categories.filter((c) => c.id !== catToDelete.id);
        setSelectedCategory(remaining[0] || INITIAL_CATEGORIES[0]);
      }
    }
  };

  const handleUndoDeleteCategory = () => {
    if (deletedCategory) {
      setCategories((prev) => [...prev, deletedCategory]);
      setSuggestions((prev) => prev.filter((s) => s.name.toLowerCase() !== deletedCategory.name.toLowerCase()));
      setDeletedCategory(null);
      setCategoryToast(null);
    }
  };

  const handleAddSuggestedCategory = (sug: CategoryOption) => {
    if (!categories.some((c) => c.name.toLowerCase() === sug.name.toLowerCase())) {
      setCategories((prev) => [...prev, sug]);
    }
    setSuggestions((prev) => prev.filter((s) => s.id !== sug.id));
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

    const goalCategory = selectedCategory.name === 'All categories' ? 'General' : selectedCategory.name;

    if (isEditMode && goalToEdit && onUpdateGoal) {
      onUpdateGoal({
        ...goalToEdit,
        title: name.trim(),
        subtitle: note.trim() || undefined,
        note: note.trim() || undefined,
        category: goalCategory,
        categoryDotColor: selectedCategory.color,
        targetDate: targetDate.trim() || undefined,
        currentAmount: savedVal,
        targetAmount: targetVal,
      });
    } else if (onAddGoal) {
      onAddGoal({
        title: name.trim(),
        subtitle: note.trim() || undefined,
        note: note.trim() || undefined,
        category: goalCategory,
        categoryDotColor: selectedCategory.color,
        targetDate: targetDate.trim() || undefined,
        currentAmount: savedVal,
        targetAmount: targetVal,
      });
    }

    onClose();
  };

  const handleDelete = () => {
    setIsDeleteConfirmOpen(true);
  };

  const handleConfirmDelete = () => {
    if (isEditMode && goalToEdit && onDeleteGoal) {
      onDeleteGoal(goalToEdit.id);
      setIsDeleteConfirmOpen(false);
      onClose();
    }
  };

  return (
    <div className="new-goal-modal-backdrop" onClick={onClose}>
      <div className="new-goal-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="new-goal-header-row">
          <div className="new-goal-title-group">
            <h2 className="new-goal-title">{isEditMode ? 'Edit goal' : 'New goal'}</h2>
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
                    <div
                      key={cat.id}
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
                      <div className="cat-item-right">
                        {isSelected && <Check size={16} className="cat-check-icon" />}
                        {cat.name.toLowerCase() !== 'all categories' && (
                          <button
                            type="button"
                            className="cat-delete-btn"
                            title={`Delete ${cat.name}`}
                            onClick={(e) => handleOpenDeleteCategory(cat, e)}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </div>
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
          <div className={`new-goal-footer-actions ${isEditMode ? 'edit-mode' : ''}`}>
            {isEditMode ? (
              <>
                <button
                  type="button"
                  className="btn-goal-delete"
                  onClick={handleDelete}
                >
                  Delete
                </button>
                <div className="edit-right-actions" style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                  <button
                    type="button"
                    className="btn-new-goal-cancel"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn-new-goal-submit">
                    Save goal
                  </button>
                </div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </form>
      </div>

      {/* Goal Delete Confirmation Dialog */}
      <DeleteConfirmModal
        isOpen={isDeleteConfirmOpen}
        itemTitle={goalToEdit?.title || ''}
        itemType="goal"
        onClose={() => setIsDeleteConfirmOpen(false)}
        onConfirmDelete={handleConfirmDelete}
      />

      {/* Category Delete Confirmation Dialog */}
      <DeleteConfirmModal
        isOpen={Boolean(deleteCategoryTarget)}
        itemTitle={deleteCategoryTarget?.name || ''}
        itemType="category"
        onClose={() => setDeleteCategoryTarget(null)}
        onConfirmDelete={handleConfirmDeleteCategory}
      />

      {/* Category Delete Toast Undo Banner */}
      {categoryToast && (
        <div className="toast-undo-floating-wrapper">
          <div className="toast-undo-banner">
            <div className="toast-content-text">
              <span className="toast-title">{categoryToast.title} removed.</span>
              <span className="toast-sub">You can undo this right away.</span>
            </div>
            <button type="button" className="btn-toast-undo" onClick={handleUndoDeleteCategory}>
              Undo
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
