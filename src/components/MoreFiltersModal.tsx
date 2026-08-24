import React, { useState, useEffect } from 'react';
import { X, Search, Plus, Trash2 } from 'lucide-react';

export interface FilterState {
  category: string;
  minAmount: string;
  maxAmount: string;
  fromDate: string;
  toDate: string;
}

interface MoreFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilters: FilterState;
  onApplyFilters: (filters: FilterState) => void;
  availableCategories: string[];
}

const DEFAULT_CATEGORIES: Record<string, { name: string; color: string }> = {
  Rent: { name: 'Rent', color: '#181d27' },
  Transport: { name: 'Transport', color: '#b45309' },
  Leisure: { name: 'Leisure', color: '#2563eb' },
  Utilities: { name: 'Utilities', color: '#475569' },
  Groceries: { name: 'Groceries', color: '#2e7d32' },
  Cafés: { name: 'Cafés', color: '#c05621' },
  Freelance: { name: 'Freelance', color: '#0d9488' },
  Salary: { name: 'Salary', color: '#1b4d2e' },
  'Dining out': { name: 'Dining out', color: '#d97706' },
  Subscriptions: { name: 'Subscriptions', color: '#7c3aed' },
};

export const MoreFiltersModal: React.FC<MoreFiltersModalProps> = ({
  isOpen,
  onClose,
  initialFilters,
  onApplyFilters,
  availableCategories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialFilters.category || 'all');
  const [categorySearch, setCategorySearch] = useState<string>('');
  const [minAmount, setMinAmount] = useState<string>(initialFilters.minAmount || '');
  const [maxAmount, setMaxAmount] = useState<string>(initialFilters.maxAmount || '');
  const [fromDate, setFromDate] = useState<string>(initialFilters.fromDate || '');
  const [toDate, setToDate] = useState<string>(initialFilters.toDate || '');

  // Active categories list
  const [activeCategories, setActiveCategories] = useState<string[]>([
    'Rent',
    'Transport',
    'Leisure',
    'Utilities',
    'Groceries',
    'Cafés',
    'Freelance',
    'Salary',
  ]);

  // Suggested categories list (Default categories that are currently un-added)
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([
    'Dining out',
    'Subscriptions',
  ]);

  // Toast notification for category deletion
  const [toast, setToast] = useState<{ categoryName: string; isDefault: boolean } | null>(null);

  // Auto-dismiss toast after 6 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Sync any custom categories from transactions
  useEffect(() => {
    if (availableCategories.length > 0) {
      setActiveCategories((prev) => {
        const set = new Set([...prev, ...availableCategories]);
        suggestedCategories.forEach((s) => set.delete(s));
        return Array.from(set);
      });
    }
  }, [availableCategories]);

  useEffect(() => {
    if (isOpen) {
      setSelectedCategory(initialFilters.category || 'all');
      setMinAmount(initialFilters.minAmount || '');
      setMaxAmount(initialFilters.maxAmount || '');
      setFromDate(initialFilters.fromDate || '');
      setToDate(initialFilters.toDate || '');
      setCategorySearch('');
    }
  }, [isOpen, initialFilters]);

  if (!isOpen) return null;

  // Handle deleting a category
  const handleDeleteCategory = (e: React.MouseEvent, catName: string) => {
    e.stopPropagation();

    const isDefault = Boolean(DEFAULT_CATEGORIES[catName]);

    // 1. Remove from activeCategories
    setActiveCategories((prev) => prev.filter((c) => c !== catName));

    // 2. If it's a default category, add to suggestedCategories
    if (isDefault) {
      setSuggestedCategories((prev) => {
        if (!prev.includes(catName)) return [...prev, catName];
        return prev;
      });
    }

    // 3. Show undo toast notification
    setToast({ categoryName: catName, isDefault });

    // 4. Reset selectedCategory if deleted
    if (selectedCategory.toLowerCase() === catName.toLowerCase()) {
      setSelectedCategory('all');
    }
  };

  // Handle undoing a category deletion
  const handleUndo = () => {
    if (!toast) return;

    const { categoryName, isDefault } = toast;

    // Restore to activeCategories
    setActiveCategories((prev) => {
      if (!prev.includes(categoryName)) return [...prev, categoryName];
      return prev;
    });

    // If default category, remove from suggestedCategories
    if (isDefault) {
      setSuggestedCategories((prev) => prev.filter((c) => c !== categoryName));
    }

    // Set as selected category
    setSelectedCategory(categoryName);

    // Clear toast
    setToast(null);
  };

  // Handle selecting a suggested chip
  const handleSelectSuggested = (catName: string) => {
    // 1. Remove from suggestedCategories
    setSuggestedCategories((prev) => prev.filter((c) => c !== catName));

    // 2. Add to activeCategories if not present
    setActiveCategories((prev) => {
      if (!prev.includes(catName)) return [...prev, catName];
      return prev;
    });

    // 3. Select this category
    setSelectedCategory(catName);
  };

  // Filter category options based on search query
  const filteredCategoryOptions = activeCategories.filter((cat) =>
    cat.toLowerCase().includes(categorySearch.toLowerCase().trim())
  );

  const handleReset = () => {
    setSelectedCategory('all');
    setCategorySearch('');
    setMinAmount('');
    setMaxAmount('');
    setFromDate('');
    setToDate('');
  };

  const handleApply = () => {
    onApplyFilters({
      category: selectedCategory,
      minAmount,
      maxAmount,
      fromDate,
      toDate,
    });
    onClose();
  };

  return (
    <div className="modal-backdrop-overlay" onClick={onClose}>
      <div
        className="more-filters-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Toast Undo Notification Banner */}
        {toast && (
          <div className="toast-undo-banner">
            <div className="toast-content-text">
              <span className="toast-title">{toast.categoryName} removed.</span>
              <span className="toast-sub">You can undo this right away.</span>
            </div>
            <button className="btn-toast-undo" onClick={handleUndo}>
              Undo
            </button>
          </div>
        )}

        {/* Header */}
        <div className="modal-header-row">
          <div>
            <h2 className="modal-title-text">More filters</h2>
            <p className="modal-subtitle-text">Narrow the ledger by category, amount, or date.</p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={18} />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="modal-body-content">
          {/* Category Section Box */}
          <div className="filter-field-section">
            <label className="field-label-title">Category</label>
            <div className="category-select-box">
              {/* Category Search Bar */}
              <div className="cat-box-search">
                <Search size={16} className="cat-search-icon" />
                <input
                  type="text"
                  className="cat-search-input"
                  placeholder="Search or create a category..."
                  value={categorySearch}
                  onChange={(e) => setCategorySearch(e.target.value)}
                />
              </div>

              {/* Category Options List */}
              <div className="cat-options-scroll">
                {/* Always render 'All categories' first */}
                {('All categories'.toLowerCase().includes(categorySearch.toLowerCase().trim())) && (
                  <button
                    className={`cat-option-item ${selectedCategory === 'all' ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory('all')}
                  >
                    <span className="cat-option-left">
                      <span className="cat-dot" style={{ backgroundColor: '#9e9e9e' }} />
                      <span className="cat-option-name">All categories</span>
                    </span>
                    {selectedCategory === 'all' && <span className="cat-checkmark">✓</span>}
                  </button>
                )}

                {/* Render active categories */}
                {filteredCategoryOptions.map((cat) => {
                  const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                  const defaultMeta = DEFAULT_CATEGORIES[cat];
                  const dotColor = defaultMeta ? defaultMeta.color : '#799c87';

                  return (
                    <div
                      key={cat}
                      className={`cat-option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span className="cat-option-left">
                        <span className="cat-dot" style={{ backgroundColor: dotColor }} />
                        <span className="cat-option-name">{cat}</span>
                      </span>

                      <div className="cat-option-actions">
                        {isSelected && <span className="cat-checkmark">✓</span>}
                        <button
                          className="cat-delete-btn"
                          title={`Delete ${cat}`}
                          onClick={(e) => handleDeleteCategory(e, cat)}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  );
                })}

                {/* Option to create new custom category if search has no exact match */}
                {categorySearch.trim() &&
                  !filteredCategoryOptions.some((c) => c.toLowerCase() === categorySearch.toLowerCase().trim()) &&
                  categorySearch.toLowerCase().trim() !== 'all categories' && (
                    <button
                      className="cat-option-item custom-create"
                      onClick={() => {
                        const newCat = categorySearch.trim();
                        if (!activeCategories.includes(newCat)) {
                          setActiveCategories([...activeCategories, newCat]);
                        }
                        setSelectedCategory(newCat);
                        setCategorySearch('');
                      }}
                    >
                      <span className="cat-option-left">
                        <Plus size={14} />
                        <span>Use "{categorySearch.trim()}"</span>
                      </span>
                    </button>
                  )}
              </div>

              {/* SUGGESTED Chips Section */}
              {suggestedCategories.length > 0 && (
                <div className="suggested-chips-section">
                  <span className="suggested-label">SUGGESTED</span>
                  <div className="suggested-chips-flex">
                    {suggestedCategories.map((cat) => (
                      <button
                        key={cat}
                        className={`chip-btn ${selectedCategory.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
                        onClick={() => handleSelectSuggested(cat)}
                      >
                        + {cat}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Amount Range (Min amount & Max amount) */}
          <div className="filter-two-col-grid">
            <div className="field-col">
              <label className="field-label-title">Min amount</label>
              <input
                type="number"
                step="any"
                className="filter-text-input"
                placeholder="e.g. 10"
                value={minAmount}
                onChange={(e) => setMinAmount(e.target.value)}
              />
            </div>

            <div className="field-col">
              <label className="field-label-title">Max amount</label>
              <input
                type="number"
                step="any"
                className="filter-text-input"
                placeholder="e.g. 500"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
              />
            </div>
          </div>

          {/* Date Range (From & To) */}
          <div className="filter-two-col-grid">
            <div className="field-col">
              <label className="field-label-title">From</label>
              <input
                type="date"
                className="filter-text-input"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
            </div>

            <div className="field-col">
              <label className="field-label-title">To</label>
              <input
                type="date"
                className="filter-text-input"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Modal Action Buttons Footer */}
        <div className="modal-footer-actions">
          <button className="btn-modal-reset" onClick={handleReset}>
            Reset
          </button>
          <button className="btn-modal-apply" onClick={handleApply}>
            Apply filters
          </button>
        </div>
      </div>
    </div>
  );
};
