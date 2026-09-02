import React, { useState, useEffect, useRef } from 'react';
import { X, Search, Check, Plus, Trash2, Calendar, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { CURRENCIES } from '../lib/currency';
import { getCategoryCustomColors, saveCategoryColor } from '../lib/categoryColors';

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
  displayCurrency?: string;
}

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const SHORT_MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export const COLOR_PALETTE_SWATCHES = [
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

export const LogTransactionModal: React.FC<LogTransactionModalProps> = ({
  isOpen,
  onClose,
  onAddTransaction,
  initialData,
  onEditTransaction,
  displayCurrency = 'EUR',
}) => {
  const isEditMode = Boolean(initialData);

  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState(displayCurrency);
  const [date, setDate] = useState('');
  const [note, setNote] = useState('');

  // Custom Currency Dropdown, Date Picker & Color Picker Popover State
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [colorPickerTarget, setColorPickerTarget] = useState<{ id: string; name: string; color: string } | null>(null);

  // Draggable Popover State
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

  const todayDateObj = new Date();
  const [pickerYear, setPickerYear] = useState(todayDateObj.getFullYear());
  const [pickerMonth, setPickerMonth] = useState(todayDateObj.getMonth());

  const currencyDropdownRef = useRef<HTMLDivElement>(null);
  const datePickerRef = useRef<HTMLDivElement>(null);

  // Close popovers on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyDropdownRef.current && !currencyDropdownRef.current.contains(e.target as Node)) {
        setIsCurrencyDropdownOpen(false);
      }
      if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
        setIsDatePickerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Category state
  const [categories, setCategories] = useState<CategoryOption[]>(INITIAL_CATEGORIES);
  const [suggestions, setSuggestions] = useState<CategoryOption[]>(INITIAL_SUGGESTIONS);
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption>(INITIAL_CATEGORIES[10] || INITIAL_CATEGORIES[0]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category custom colors from localStorage / central store
  const syncCustomColors = () => {
    const customColors = getCategoryCustomColors();
    setCategories((prev) =>
      prev.map((c) => ({ ...c, color: customColors[c.name] || c.color }))
    );
    setSuggestions((prev) =>
      prev.map((s) => ({ ...s, color: customColors[s.name] || s.color }))
    );
  };

  useEffect(() => {
    syncCustomColors();
    const handleColorChange = () => syncCustomColors();
    window.addEventListener('vinora_category_colors_changed', handleColorChange);
    return () => window.removeEventListener('vinora_category_colors_changed', handleColorChange);
  }, []);

  const handleCategoryColorChange = (catId: string, catName: string, newColor: string) => {
    saveCategoryColor(catName, newColor);
    setCategories((prev) =>
      prev.map((c) => (c.id === catId || c.name === catName ? { ...c, color: newColor } : c))
    );
    setSuggestions((prev) =>
      prev.map((s) => (s.id === catId || s.name === catName ? { ...s, color: newColor } : s))
    );
    if (selectedCategory.id === catId || selectedCategory.name === catName) {
      setSelectedCategory((prev) => ({ ...prev, color: newColor }));
    }
  };

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
        setTitle(initialData.title || '');
        const activeCurr = displayCurrency || 'EUR';
        const rate = CURRENCIES[activeCurr]?.rateToEUR || 1;
        const converted = Math.abs(initialData.amount || 0) * rate;

        let formattedAmountStr = '';
        if (converted > 0) {
          if (['IDR', 'JPY', 'KRW', 'VND'].includes(activeCurr)) {
            formattedAmountStr = Math.round(converted).toString();
          } else {
            formattedAmountStr = Number(converted.toFixed(2)).toString().replace('.', ',');
          }
        }

        setAmount(formattedAmountStr);
        setType(initialData.amount >= 0 ? 'income' : 'expense');
        setNote(initialData.note || '');
        setDate(initialData.date || initialData.dateGroup || '');
        setCurrency(activeCurr);

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
        setTitle('');
        setAmount('');
        setType('expense');
        setCurrency(displayCurrency);
        setDate('');
        setNote('');
        setSelectedCategory(categories.find((c) => c.name === 'Groceries') || categories[0] || INITIAL_CATEGORIES[0]);
      }
    }
  }, [initialData, isOpen, displayCurrency]);

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

  const handleSelectCurrency = (newCode: string) => {
    if (newCode === currency) {
      setIsCurrencyDropdownOpen(false);
      return;
    }

    const oldRate = CURRENCIES[currency]?.rateToEUR || 1;
    const newRate = CURRENCIES[newCode]?.rateToEUR || 1;
    const rawVal = parseFloat(amount.replace(',', '.'));

    if (!isNaN(rawVal) && rawVal > 0) {
      const amountInEUR = rawVal / oldRate;
      const convertedNew = amountInEUR * newRate;
      let formattedNew = '';
      if (['IDR', 'JPY', 'KRW', 'VND'].includes(newCode)) {
        formattedNew = Math.round(convertedNew).toString();
      } else {
        formattedNew = Number(convertedNew.toFixed(2)).toString().replace('.', ',');
      }
      setAmount(formattedNew);
    }

    setCurrency(newCode);
    setIsCurrencyDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !amount) return;

    const parsedVal = parseFloat(amount.replace(',', '.')) || 0;
    const currRate = CURRENCIES[currency]?.rateToEUR || 1;
    const amountInEUR = parsedVal / currRate;
    const finalAmount = type === 'expense' ? -Math.abs(amountInEUR) : Math.abs(amountInEUR);
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

  const currInfo = CURRENCIES[currency] || CURRENCIES[displayCurrency] || CURRENCIES.EUR;

  // Calendar Helpers
  const handlePrevMonth = () => {
    if (pickerMonth === 0) {
      setPickerMonth(11);
      setPickerYear(pickerYear - 1);
    } else {
      setPickerMonth(pickerMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (pickerMonth === 11) {
      setPickerMonth(0);
      setPickerYear(pickerYear + 1);
    } else {
      setPickerMonth(pickerMonth + 1);
    }
  };

  const handleSelectDateDay = (day: number) => {
    const monthStr = SHORT_MONTHS[pickerMonth];
    setDate(`${day} ${monthStr}`);
    setIsDatePickerOpen(false);
  };

  const daysInMonth = new Date(pickerYear, pickerMonth + 1, 0).getDate();
  const firstDayOfWeek = new Date(pickerYear, pickerMonth, 1).getDay();

  return (
    <div className="new-goal-modal-backdrop" onClick={onClose}>
      <div className="new-goal-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="new-goal-header-row">
          <div className="new-goal-title-group">
            <h2 className="new-goal-title">{isEditMode ? 'Edit entry' : 'New entry'}</h2>
            <p className="new-goal-subtitle">
              {isEditMode ? 'Adjust the details of this entry.' : 'Log a new spending or income transaction.'}
            </p>
          </div>
          <button className="new-goal-close-btn" onClick={onClose}>
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
                <span className="amount-currency-prefix">{currInfo.symbol}</span>
                <input
                  type="text"
                  className="amount-number-input"
                  placeholder="10"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                />
                <div className="amount-currency-select-container" ref={currencyDropdownRef}>
                  <button
                    type="button"
                    className={`amount-currency-select-badge ${isCurrencyDropdownOpen ? 'active' : ''}`}
                    onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                  >
                    <span>{currency}</span>
                    <ChevronDown size={14} className={`currency-chevron ${isCurrencyDropdownOpen ? 'open' : ''}`} />
                  </button>

                  {isCurrencyDropdownOpen && (
                    <div className="custom-currency-popover-menu">
                      {Object.keys(CURRENCIES).map((cCode) => {
                        const cItem = CURRENCIES[cCode];
                        const isSelected = currency === cCode;
                        return (
                          <button
                            key={cCode}
                            type="button"
                            className={`currency-option-row ${isSelected ? 'selected' : ''}`}
                            onClick={() => handleSelectCurrency(cCode)}
                          >
                            <div className="currency-option-left">
                              <span className="currency-option-code">{cCode}</span>
                              <span className="currency-option-name">{cItem.name}</span>
                            </div>
                            <span className="currency-option-symbol">{cItem.symbol}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Date Column */}
            <div className="new-goal-field" style={{ position: 'relative' }} ref={datePickerRef}>
              <label className="new-goal-label">Date</label>
              <div className="date-input-wrapper">
                <input
                  type="text"
                  className="date-text-input"
                  placeholder="dd/mm/yyyy"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <button
                  type="button"
                  className="date-calendar-btn"
                  onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                  title="Pick date from GUI Calendar"
                  aria-label="Open Calendar GUI"
                >
                  <Calendar size={16} className="date-calendar-icon" />
                </button>
              </div>

              {isDatePickerOpen && (
                <div className="custom-calendar-popover">
                  <div className="calendar-popover-header">
                    <button type="button" className="cal-nav-btn" onClick={handlePrevMonth}>
                      <ChevronLeft size={16} />
                    </button>
                    <span className="cal-month-title">
                      {MONTH_NAMES[pickerMonth]} {pickerYear}
                    </span>
                    <button type="button" className="cal-nav-btn" onClick={handleNextMonth}>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="calendar-weekdays-grid">
                    <span>Su</span>
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                  </div>

                  <div className="calendar-days-grid">
                    {Array.from({ length: firstDayOfWeek }).map((_, idx) => (
                      <span key={`empty-${idx}`} className="cal-day-cell empty"></span>
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, idx) => {
                      const dayNum = idx + 1;
                      const isSelected = date === `${dayNum} ${SHORT_MONTHS[pickerMonth]}`;
                      const isToday =
                        todayDateObj.getDate() === dayNum &&
                        todayDateObj.getMonth() === pickerMonth &&
                        todayDateObj.getFullYear() === pickerYear;

                      return (
                        <button
                          key={`day-${dayNum}`}
                          type="button"
                          className={`cal-day-cell day-btn ${isSelected ? 'selected' : ''} ${isToday ? 'is-today' : ''}`}
                          onClick={() => handleSelectDateDay(dayNum)}
                        >
                          {dayNum}
                        </button>
                      );
                    })}
                  </div>

                  <div className="calendar-popover-footer">
                    <button
                      type="button"
                      className="cal-btn-today"
                      onClick={() => {
                        const today = new Date();
                        setDate(`${today.getDate()} ${SHORT_MONTHS[today.getMonth()]}`);
                        setIsDatePickerOpen(false);
                      }}
                    >
                      Today
                    </button>
                  </div>
                </div>
              )}
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
                        <button
                          type="button"
                          className="cat-dot-color-wrapper"
                          title={`Click to change color for ${cat.name}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setColorPickerTarget({ id: cat.id, name: cat.name, color: cat.color });
                          }}
                        >
                          <span
                            className="cat-dot-indicator"
                            style={{ backgroundColor: cat.color }}
                          />
                        </button>
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
                      handleCategoryColorChange(colorPickerTarget.id, colorPickerTarget.name, swatchColor);
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
                      handleCategoryColorChange(colorPickerTarget.id, colorPickerTarget.name, val);
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
