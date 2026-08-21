import React, { useState, useMemo } from 'react';
import {
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  X,
  Edit3,
  Trash2,
  ChevronDown,
} from 'lucide-react';
import { TransactionItem } from './LogTransactionModal';

export interface ExtendedTransactionItem extends TransactionItem {
  note?: string;
  subtitle?: string;
  dateGroup?: string;
}

interface TransactionsViewProps {
  transactions: ExtendedTransactionItem[];
  onOpenLogModal: () => void;
  onDeleteTransaction?: (id: string) => void;
  onEditTransaction?: (transaction: ExtendedTransactionItem) => void;
  onUpdateTransactionColor?: (id: string, color?: string) => void;
}

// Preset color palette for custom badge color selection matching Figma
export const PALETTE_COLORS = [
  '#1f5335',
  '#c05621',
  '#d99b38',
  '#ffffff',
  '#0b3319',
  '#5073b8',
  '#3b6f7a',
  '#008b8b',
  '#c85043',
  '#4e9b58',
  '#8c56a8',
  '#c89a24',
];

// Color palette mapping for category badges matching Figma design tokens
export const BADGE_COLOR_MAP: Record<string, { bg: string; text: string }> = {
  GR: { bg: '#2e7d32', text: '#ffffff' }, // Groceries - Deep green
  CA: { bg: '#c05621', text: '#ffffff' }, // Cafés - Terracotta/orange-brown
  TR: { bg: '#b45309', text: '#ffffff' }, // Transport - Warm amber gold
  LE: { bg: '#2563eb', text: '#ffffff' }, // Leisure - Slate denim blue
  FR: { bg: '#0d9488', text: '#ffffff' }, // Freelance - Teal cyan
  UT: { bg: '#475569', text: '#ffffff' }, // Utilities - Slate grey
  SA: { bg: '#1b4d2e', text: '#ffffff' }, // Salary - Dark forest green
  RE: { bg: '#0e2e1b', text: '#ffffff' }, // Rent - Deep pine forest green
};

export const TransactionsView: React.FC<TransactionsViewProps> = ({
  transactions,
  onOpenLogModal,
  onDeleteTransaction,
  onEditTransaction,
  onUpdateTransactionColor,
}) => {
  const [filterTab, setFilterTab] = useState<'all' | 'income' | 'expense'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'date-desc' | 'date-asc' | 'amount-high' | 'amount-low'>('date-desc');
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Helper to format currency correctly
  const formatAmount = (num: number, includeSign = true) => {
    const isNegative = num < 0;
    const absVal = Math.abs(num).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (!includeSign) return `€${absVal}`;
    return isNegative ? `-€${absVal}` : `+€${absVal}`;
  };

  // Extract unique categories for filter dropdown
  const categories = useMemo(() => {
    const set = new Set<string>();
    transactions.forEach((tx) => {
      if (tx.category) set.add(tx.category);
    });
    return Array.from(set);
  }, [transactions]);

  // Filter and sort transactions
  const filteredTransactions = useMemo(() => {
    return transactions
      .filter((tx) => {
        // 1. Filter by Tab (All / Income / Expense)
        if (filterTab === 'income' && tx.amount <= 0) return false;
        if (filterTab === 'expense' && tx.amount >= 0) return false;

        // 2. Filter by Category
        if (selectedCategory !== 'all' && tx.category !== selectedCategory) return false;

        // 3. Filter by Search Query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const titleMatch = tx.title.toLowerCase().includes(q);
          const noteMatch = tx.note ? tx.note.toLowerCase().includes(q) : false;
          const subMatch = tx.subtitle ? tx.subtitle.toLowerCase().includes(q) : false;
          const catMatch = tx.category.toLowerCase().includes(q);
          const badgeMatch = tx.badge.toLowerCase().includes(q);
          const dateMatch = (tx.dateGroup || tx.date).toLowerCase().includes(q);

          return titleMatch || noteMatch || subMatch || catMatch || badgeMatch || dateMatch;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'amount-high') return Math.abs(b.amount) - Math.abs(a.amount);
        if (sortBy === 'amount-low') return Math.abs(a.amount) - Math.abs(b.amount);
        return 0;
      });
  }, [transactions, filterTab, selectedCategory, searchQuery, sortBy]);

  // Group transactions by dateGroup
  const groupedTransactions = useMemo(() => {
    const groups: { dateGroup: string; items: ExtendedTransactionItem[]; total: number }[] = [];
    const map = new Map<string, { items: ExtendedTransactionItem[]; total: number }>();

    filteredTransactions.forEach((tx) => {
      const groupKey = tx.dateGroup || tx.date || 'Other';
      if (!map.has(groupKey)) {
        const groupObj = { items: [], total: 0 };
        map.set(groupKey, groupObj);
        groups.push({ dateGroup: groupKey, items: groupObj.items, total: 0 });
      }
      const group = map.get(groupKey)!;
      group.items.push(tx);
      group.total += tx.amount;
    });

    groups.forEach((g) => {
      const entry = map.get(g.dateGroup);
      if (entry) g.total = entry.total;
    });

    return groups;
  }, [filteredTransactions]);

  const handleActionMenuToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setActiveMenuId(activeMenuId === id ? null : id);
  };

  const closeMenus = () => {
    setActiveMenuId(null);
  };

  // Helper to render Category and Note in exact format: "Category: Note" or "Category"
  const renderSubtitle = (item: ExtendedTransactionItem) => {
    if (item.note && item.note.trim()) {
      return (
        <span className="tx-subtitle-row">
          <span className="tx-category-highlight">{item.category}:</span>{' '}
          <span className="tx-note-highlight">{item.note}</span>
        </span>
      );
    }
    if (item.subtitle && item.subtitle.includes(':')) {
      const parts = item.subtitle.split(':');
      return (
        <span className="tx-subtitle-row">
          <span className="tx-category-highlight">{parts[0].trim()}:</span>{' '}
          <span className="tx-note-highlight">{parts.slice(1).join(':').trim()}</span>
        </span>
      );
    }
    if (item.subtitle && item.subtitle.includes('·')) {
      const parts = item.subtitle.split('·');
      return (
        <span className="tx-subtitle-row">
          <span className="tx-category-highlight">{parts[0].trim()}:</span>{' '}
          <span className="tx-note-highlight">{parts.slice(1).join('·').trim()}</span>
        </span>
      );
    }
    return <span className="tx-category-highlight">{item.category || item.subtitle}</span>;
  };

  return (
    <div className="transactions-page" onClick={closeMenus}>
      {/* HEADER SECTION */}
      <div className="tx-page-header">
        <div className="tx-header-left">
          <span className="tx-overline">LEDGER</span>
          <h1 className="tx-title">Transactions</h1>
          <p className="tx-subtitle">
            Every single transaction — money in and money out — is automatically logged so you never lose the thread.
          </p>
        </div>

        <div className="tx-header-right">
          <button className="btn-new-entry" onClick={onOpenLogModal}>
            <Plus size={16} />
            <span>New entry</span>
          </button>
        </div>
      </div>

      {/* FILTER & SEARCH BAR (Pill Container) */}
      <div className="tx-toolbar">
        {/* Search Field */}
        <div className="tx-search-wrapper">
          <Search size={18} className="tx-search-icon" />
          <input
            type="text"
            className="tx-search-input"
            placeholder="Search title, merchant, note..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="tx-clear-search-btn" onClick={() => setSearchQuery('')}>
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter Controls (Segmented Tabs + More Filters Button) */}
        <div className="tx-controls-right">
          {/* Segmented Control Pill (All | Income | Expense) */}
          <div className="tx-segmented-control">
            <button
              className={`tx-segment-btn ${filterTab === 'all' ? 'active' : ''}`}
              onClick={() => setFilterTab('all')}
            >
              All
            </button>
            <button
              className={`tx-segment-btn ${filterTab === 'income' ? 'active' : ''}`}
              onClick={() => setFilterTab('income')}
            >
              Income
            </button>
            <button
              className={`tx-segment-btn ${filterTab === 'expense' ? 'active' : ''}`}
              onClick={() => setFilterTab('expense')}
            >
              Expense
            </button>
          </div>

          {/* More Filters Toggle Button */}
          <button
            className={`btn-more-filters ${isMoreFiltersOpen || selectedCategory !== 'all' ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMoreFiltersOpen(!isMoreFiltersOpen);
            }}
          >
            <SlidersHorizontal size={15} />
            <span>More filters</span>
            {(selectedCategory !== 'all' || sortBy !== 'date-desc') && (
              <span className="filter-active-dot" />
            )}
          </button>
        </div>
      </div>

      {/* EXPANDABLE MORE FILTERS PANEL */}
      {isMoreFiltersOpen && (
        <div className="tx-more-filters-panel" onClick={(e) => e.stopPropagation()}>
          <div className="more-filters-grid">
            <div className="filter-group">
              <label className="filter-label">Category</label>
              <div className="filter-select-wrapper">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown size={14} className="select-arrow" />
              </div>
            </div>

            <div className="filter-group">
              <label className="filter-label">Sort By</label>
              <div className="filter-select-wrapper">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="filter-select"
                >
                  <option value="date-desc">Date: Newest First</option>
                  <option value="date-asc">Date: Oldest First</option>
                  <option value="amount-high">Amount: High to Low</option>
                  <option value="amount-low">Amount: Low to High</option>
                </select>
                <ChevronDown size={14} className="select-arrow" />
              </div>
            </div>

            <div className="filter-actions">
              {(selectedCategory !== 'all' || sortBy !== 'date-desc') && (
                <button
                  className="btn-reset-filters"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSortBy('date-desc');
                  }}
                >
                  Reset filters
                </button>
              )}
              <button className="btn-close-filters" onClick={() => setIsMoreFiltersOpen(false)}>
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TRANSACTIONS LIST SECTION */}
      <div className="tx-list-container">
        {groupedTransactions.length === 0 ? (
          <div className="tx-empty-state">
            <div className="empty-icon-circle">
              <Search size={24} />
            </div>
            <h3>No transactions found</h3>
            <p>We couldn't find any transactions matching your current filters or search term.</p>
            <button
              className="btn-clear-all-filters"
              onClick={() => {
                setFilterTab('all');
                setSearchQuery('');
                setSelectedCategory('all');
                setSortBy('date-desc');
              }}
            >
              Clear filters
            </button>
          </div>
        ) : (
          groupedTransactions.map((group) => (
            <div key={group.dateGroup} className="tx-group">
              {/* Group Header Row */}
              <div className="tx-group-header">
                <h3 className="tx-group-date">{group.dateGroup}</h3>
                <span className="tx-group-sum">{formatAmount(group.total)}</span>
              </div>

              {/* Group Items Card Container */}
              <div className="tx-group-card">
                {group.items.map((item) => {
                  const defaultBadgeStyle = BADGE_COLOR_MAP[item.badge] || { bg: '#2e7d32', text: '#ffffff' };
                  const activeBg = item.color || defaultBadgeStyle.bg;
                  const activeText = activeBg.toLowerCase() === '#ffffff' ? '#181d27' : '#ffffff';
                  const isMenuOpen = activeMenuId === item.id;

                  return (
                    <div key={item.id} className={`tx-item-card ${isMenuOpen ? 'menu-active' : ''}`}>
                      {/* Left Badge (CatShow) */}
                      <div
                        className="tx-badge"
                        style={{ backgroundColor: activeBg, color: activeText }}
                        title={`CatShow: ${item.badge}`}
                      >
                        {item.badge}
                      </div>

                      {/* Details Column (Title + Category: Note) */}
                      <div className="tx-details">
                        <div className="tx-title-text">{item.title}</div>
                        <div className="tx-subtitle-text">
                          {renderSubtitle(item)}
                        </div>
                      </div>

                      {/* Amount */}
                      <div className={`tx-amount ${item.amount > 0 ? 'positive' : 'negative'}`}>
                        {formatAmount(item.amount)}
                      </div>

                      {/* Three dots Menu */}
                      <div className="tx-menu-wrapper">
                        <button
                          className="tx-menu-btn"
                          onClick={(e) => handleActionMenuToggle(e, item.id)}
                          aria-label="Transaction options"
                        >
                          <MoreHorizontal size={16} />
                        </button>

                        {isMenuOpen && (
                          <div className="tx-dropdown-menu" onClick={(e) => e.stopPropagation()}>
                            <button
                              className="dropdown-item"
                              onClick={() => {
                                closeMenus();
                                if (onEditTransaction) onEditTransaction(item);
                              }}
                            >
                              <Edit3 size={15} />
                              <span>Edit entry</span>
                            </button>

                            {onDeleteTransaction && (
                              <button
                                className="dropdown-item delete"
                                onClick={() => {
                                  closeMenus();
                                  onDeleteTransaction(item.id);
                                }}
                              >
                                <Trash2 size={15} />
                                <span>Delete</span>
                              </button>
                            )}

                            <div className="dropdown-divider" />

                            <div className="dropdown-color-section">
                              <span className="color-section-title">Colour</span>
                              <div className="color-swatch-grid">
                                {PALETTE_COLORS.map((c) => {
                                  const isSelected = activeBg.toLowerCase() === c.toLowerCase();
                                  return (
                                    <button
                                      key={c}
                                      className={`color-swatch-btn ${isSelected ? 'active' : ''}`}
                                      style={{ backgroundColor: c }}
                                      title={`Set color: ${c}`}
                                      onClick={() => {
                                        if (onUpdateTransactionColor) {
                                          onUpdateTransactionColor(item.id, c);
                                        } else if (onEditTransaction) {
                                          onEditTransaction({ ...item, color: c });
                                        }
                                      }}
                                    />
                                  );
                                })}
                              </div>

                              <button
                                className="btn-use-category-color"
                                onClick={() => {
                                  if (onUpdateTransactionColor) {
                                    onUpdateTransactionColor(item.id, undefined);
                                  } else if (onEditTransaction) {
                                    const { color, ...rest } = item;
                                    onEditTransaction(rest);
                                  }
                                }}
                              >
                                Use category colour
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </div>

      {/* PAGE FOOTER */}
      <footer className="tx-page-footer">
        <div className="tx-footer-left">
          Where did it come from · where did it go · are you on track · what next.
        </div>
        <div className="tx-footer-right">
          Vinora · v1.0 · Calm by design
        </div>
      </footer>
    </div>
  );
};
