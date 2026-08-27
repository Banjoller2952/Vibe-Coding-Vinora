import React, { useState, useEffect } from 'react';
import { X, Search, Check, Plus, Trash2, Calendar, ChevronDown } from 'lucide-react';
import { DeleteConfirmModal } from './DeleteConfirmModal';

export interface TransactionItem {
  id: string;
  badge: string;
  title: string;
  category: string;
  note?: string;
  date: string;
  amount: number;
  color?: string;
}

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

const CATEGORY_BADGE_MAP: Record<string, string> = {
  Groceries: 'GR',
  Cafés: 'CA',
  Transport: 'TR',
  Rent: 'RE',
  Utilities: 'UT',
  Leisure: 'LE',
  Freelance: 'FR',
  Salary: 'SA',
  Shopping: 'SH',
  Health: 'HE',
};

const CATEGORY_COLOR_PALETTE = [
  '#36b37e',
  '#c26d40',
  '#225a39',
  '#5b7cb8',
  '#4a7885',
  '#0f766e',
  '#8b5cf6',
  '#ec4899',
  '#f43f5e',
  '#10b981',
  '#d6a75c',
];

interface LogTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: Omit<TransactionItem, 'id'>) => void;
  initialData?: (TransactionItem & { note?: string; subtitle?: string; dateGroup?: string }) | null;
  onEditTransaction?: (transaction: TransactionItem & { note?: string; subtitle?: string; dateGroup?: string }) => void;
}

export const LogTransactionModal: React.FC<LogTransactionModalProps> = ({
  isOpen,
  onClose,
  onAddTransaction,
  initialData,
  onEditTransaction,
}) => {
  const isEditMode = Boolean(initialData);

  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('EUR');
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  // Category state
  const [categories, setCategories] = useState<CategoryOption[]>(INITIAL_CATEGORIES);
  const [suggestions, setSuggestions] = useState<CategoryOption[]>(INITIAL_SUGGESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(INITIAL_CATEGORIES[10] || INITIAL_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Category deletion state
  const [deleteCategoryTarget, setDeleteCategoryTarget] = useState<CategoryOption | null>(null);
  const [deletedCategory, setDeletedCategory] = useState<CategoryOption | null>(null);
  const [categoryToast, setCategoryToast] = useState<{ title: string } | null>(null);

  // Auto-dismiss category delete toast
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
      setDeleteCategoryTarget(null);

      if (initialData) {
        setTitle(initialData.title || 'Whole Foods');
        setAmount(initialData.amount ? Math.abs(initialData.amount).toString().replace('.', ',') : '64,28');
        setType(initialData.amount >= 0 ? 'income' : 'expense');
        setNote(initialData.note || 'Weekly shop');
        setDate(initialData.date || initialData.dateGroup || '22 Jul');

        // Find or set category option
        const existingCat = categories.find(
          (c) => c.name.toLowerCase() === initialData.category.toLowerCase()
        );
        if (existingCat) {
          setSelectedCategory(existingCat);
        } else {
          const customCat: CategoryOption = {
            id: `cat-${Date.now()}`,
            name: initialData.category,
            color: '#1e2430',
          };
          setCategories((prev) => [...prev, customCat]);
          setSelectedCategory(customCat);
        }
      } else {
        setTitle('Whole Foods');
        setAmount('10');
        setType('expense');
        setCurrency('EUR');
        setDate('');
        setNote('');
        setSelectedCategory(categories.find((c) => c.name === 'Groceries') || categories[0] || INITIAL_CATEGORIES[0]);
      }
    }
  }, [initialData, isOpen]);

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
      setCategories((prev) => prev.filter((c) => c.id !== catToDelete.id));
      setDeletedCategory(catToDelete);
      setCategoryToast({ title: catToDelete.name });
      setDeleteCategoryTarget(null);
      if (selectedCategory.id === catToDelete.id) {
        const remaining = categories.filter((c) => c.id !== catToDelete.id);
        setSelectedCategory(remaining[0] || INITIAL_CATEGORIES[0]);
      }
    }
  };

  const handleUndoDeleteCategory = () => {
    if (deletedCategory) {
      setCategories((prev) => [...prev, deletedCategory]);
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
    if (!title.trim() || !amount) return;

    const numAmount = parseFloat(amount) || 0;
    const finalAmount = type === 'expense' ? -Math.abs(numAmount) : Math.abs(numAmount);
    const catName = selectedCategory.name === 'All categories' ? 'General' : selectedCategory.name;
    const badgeCode = CATEGORY_BADGE_MAP[catName] || catName.slice(0, 2).toUpperCase();

    if (isEditMode && initialData && onEditTransaction) {
      onEditTransaction({
        ...initialData,
        title: title.trim(),
        category: catName,
        badge: badgeCode,
        note: note.trim(),
        amount: finalAmount,
        date: date.trim() || initialData.date || 'Today',
      });
    } else if (onAddTransaction) {
      onAddTransaction({
        title: title.trim(),
        category: catName,
        badge: badgeCode,
        note: note.trim(),
        date: date.trim() || 'Today',
        amount: finalAmount,
      });
    }

    onClose();
  };

  return (
    <div className="new-goal-modal-backdrop" onClick={onClose}>
      <div className="new-goal-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="new-goal-header-row">
          <div className="new-goal-title-group">
            <h2 className="new-goal-title">{isEditMode ? 'Edit entry' : 'New entry'}</h2>
            <p className="new-goal-subtitle">
              {isEditMode ? 'Adjust the details of this entry.' : 'Log something that came in or went out.'}
            </p>
          </div>
          <button className="new-goal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="new-goal-form">
          {/* Segmented Toggle (Expense / Income) */}
          <div className="entry-type-segmented-toggle">
            <button
              type="button"
              className={`entry-type-segmented-btn ${type === 'expense' ? 'active' : ''}`}
              onClick={() => setType('expense')}
            >
              Expense
            </button>
            <button
              type="button"
              className={`entry-type-segmented-btn ${type === 'income' ? 'active' : ''}`}
              onClick={() => setType('income')}
            >
              Income
            </button>
          </div>

          {/* Title Field */}
          <div className="new-goal-field">
            <label className="new-goal-label">Title</label>
            <input
              type="text"
              className="new-goal-input"
              placeholder="Whole Foods"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Sale Amount & Date 2-column grid */}
          <div className="new-goal-grid-2">
            {/* Sale Amount Column */}
            <div className="new-goal-field">
              <label className="new-goal-label">Sale Amount</label>
              <div className="amount-input-wrapper">
                <span className="amount-currency-prefix">€</span>
                <input
                  type="number"
                  step="0.01"
                  className="amount-number-input"
                  placeholder="10"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <div className="amount-currency-select-badge">
                  <span>{currency}</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            {/* Date Column */}
            <div className="new-goal-field">
              <label className="new-goal-label">Date</label>
              <div className="date-input-wrapper">
                <input
                  type="text"
                  className="date-text-input"
                  placeholder="dd/mm/yyyy"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {!date && <Calendar size={16} className="date-calendar-icon" />}
              </div>
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

          {/* Note (optional) */}
          <div className="new-goal-field">
            <label className="new-goal-label">Note (optional)</label>
            <input
              type="text"
              className="new-goal-input"
              placeholder="Weekly shop"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
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
              {isEditMode ? 'Save changes' : 'Save entry'}
            </button>
          </div>
        </form>
      </div>

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
