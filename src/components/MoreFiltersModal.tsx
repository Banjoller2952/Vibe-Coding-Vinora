import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Plus, Check, Trash2 } from 'lucide-react';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { getCategoryColor, saveCategoryColor } from '../lib/categoryColors';

const COLOR_PALETTE_SWATCHES = [
  '#1e6d42',
  '#36b37e',
  '#d6a75c',
  '#c26d40',
  '#d92d21',
  '#5b7cb8',
  '#0f766e',
  '#8b5cf6',
  '#ec4899',
  '#181d27',
  '#1b4d2e',
  '#475569',
];

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
  Transport: { name: 'Transport', color: '#d6a75c' },
  Leisure: { name: 'Leisure', color: '#5b7cb8' },
  Utilities: { name: 'Utilities', color: '#4a7885' },
  Salary: { name: 'Salary', color: '#143d24' },
  Freelance: { name: 'Freelance', color: '#0f766e' },
  Shopping: { name: 'Shopping', color: '#c26d40' },
  Health: { name: 'Health', color: '#bd6c45' },
  Cafés: { name: 'Cafés', color: '#cf9e48' },
  Groceries: { name: 'Groceries', color: '#1e2430' },
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

  // Color picker popover state
  const [colorPickerTarget, setColorPickerTarget] = useState<{ name: string; color: string } | null>(null);
  const [popoverPos, setPopoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ mouseX: number; mouseY: number; popX: number; popY: number }>({
    mouseX: 0,
    mouseY: 0,
    popX: 0,
    popY: 0,
  });

  const handleMouseDownHeader = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartRef.current = {
      mouseX: e.clientX,
      mouseY: e.clientY,
      popX: popoverPos.x,
      popY: popoverPos.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - dragStartRef.current.mouseX;
      const dy = e.clientY - dragStartRef.current.mouseY;
      setPopoverPos({
        x: dragStartRef.current.popX + dx,
        y: dragStartRef.current.popY + dy,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    if (!colorPickerTarget) {
      setPopoverPos({ x: 0, y: 0 });
    }
  }, [colorPickerTarget]);

  // Active categories list
  const [activeCategories, setActiveCategories] = useState<string[]>([
    'Rent',
    'Transport',
    'Leisure',
    'Utilities',
    'Salary',
    'Freelance',
    'Shopping',
    'Health',
    'Cafés',
    'Groceries',
  ]);

  // Suggested categories list
  const [suggestedCategories, setSuggestedCategories] = useState<string[]>([
    'Travel',
    'Gear',
    'Safety net',
    'Education',
    'Car',
    'Wedding',
    'Retirement',
  ]);

  const [deleteConfirmTarget, setDeleteConfirmTarget] = useState<string | null>(null);

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
  const handleOpenDeleteCategory = (e: React.MouseEvent, catName: string) => {
    e.stopPropagation();
    setDeleteConfirmTarget(catName);
  };

  const handleConfirmDeleteCategory = () => {
    if (!deleteConfirmTarget) return;
    const catName = deleteConfirmTarget;
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

    setDeleteConfirmTarget(null);
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
    cat.toLowerCase() !== 'all categories' && cat.toLowerCase().includes(categorySearch.toLowerCase().trim())
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
                  const dotColor = getCategoryColor(cat);

                  return (
                    <div
                      key={cat}
                      className={`cat-option-item ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedCategory(cat)}
                    >
                      <span className="cat-option-left">
                        <button
                          type="button"
                          className="cat-dot-color-wrapper"
                          title={`Click to change color for ${cat}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setColorPickerTarget({ name: cat, color: dotColor });
                          }}
                        >
                          <span className="cat-dot" style={{ backgroundColor: dotColor }} />
                        </button>
                        <span className="cat-option-name">{cat}</span>
                      </span>

                      <div className="cat-option-actions">
                        {isSelected && <span className="cat-checkmark">✓</span>}
                        <button
                          className="cat-delete-btn"
                          title={`Delete ${cat}`}
                          onClick={(e) => handleOpenDeleteCategory(e, cat)}
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

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmModal
        isOpen={Boolean(deleteConfirmTarget)}
        itemTitle={deleteConfirmTarget || ''}
        itemType="category"
        onClose={() => setDeleteConfirmTarget(null)}
        onConfirmDelete={handleConfirmDeleteCategory}
      />

      {/* Floating Modern Color Palette Popover Modal */}
      {colorPickerTarget && (
        <div
          className="custom-color-popover-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setColorPickerTarget(null);
          }}
        >
          <div
            className={`custom-color-popover-card ${isDragging ? 'is-dragging' : ''}`}
            style={{
              transform: `translate(${popoverPos.x}px, ${popoverPos.y}px)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="color-popover-header"
              onMouseDown={handleMouseDownHeader}
              title="Click and drag to move window"
            >
              <div className="color-popover-title-group">
                <span className="color-popover-dot-preview" style={{ backgroundColor: colorPickerTarget.color }} />
                <span className="color-popover-title">Color for {colorPickerTarget.name}</span>
              </div>
              <button
                type="button"
                className="color-popover-close"
                onClick={() => setColorPickerTarget(null)}
              >
                <X size={15} />
              </button>
            </div>

            <div className="color-preset-grid">
              {COLOR_PALETTE_SWATCHES.map((swatchColor) => {
                const isCurrent = colorPickerTarget.color.toLowerCase() === swatchColor.toLowerCase();
                return (
                  <button
                    key={swatchColor}
                    type="button"
                    className={`color-swatch-btn ${isCurrent ? 'selected' : ''}`}
                    style={{ backgroundColor: swatchColor }}
                    onClick={() => {
                      saveCategoryColor(colorPickerTarget.name, swatchColor);
                      setColorPickerTarget({ ...colorPickerTarget, color: swatchColor });
                    }}
                  >
                    {isCurrent && <Check size={12} color="#ffffff" />}
                  </button>
                );
              })}
            </div>

            <div className="color-custom-hex-row">
              <span className="hex-label">HEX</span>
              <div className="hex-input-wrapper">
                <input
                  type="text"
                  className="hex-text-input"
                  value={colorPickerTarget.color}
                  onChange={(e) => {
                    const val = e.target.value;
                    setColorPickerTarget({ ...colorPickerTarget, color: val });
                    if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
                      saveCategoryColor(colorPickerTarget.name, val);
                    }
                  }}
                />
                <span className="trigger-swatch" style={{ backgroundColor: colorPickerTarget.color }} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
