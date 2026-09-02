import React, { useState, useMemo, useEffect } from 'react';
import {
  Plus,
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  X,
  Edit3,
  Trash2,
} from 'lucide-react';
import { TransactionItem } from './LogTransactionModal';
import { MoreFiltersModal, FilterState } from './MoreFiltersModal';
import { DeleteConfirmModal } from './DeleteConfirmModal';
import { formatMoney } from '../lib/currency';

export interface ExtendedTransactionItem extends TransactionItem {
  subtitle?: string;
  dateGroup?: string;
}

interface TransactionsViewProps {
  transactions: ExtendedTransactionItem[];
  onOpenLogModal: () => void;
  onDeleteTransaction?: (id: string) => void;
  onEditTransaction?: (transaction: ExtendedTransactionItem) => void;
  onUpdateTransactionColor?: (id: string, color?: string) => void;
  onRestoreTransaction?: (transaction: ExtendedTransactionItem) => void;
  displayCurrency?: string;
}

// Preset color palette for custom badge color selection matching Figma
export const PALETTE_COLORS = [
  '#c26d40',
  '#d6a75c',
  '#717680',
  '#143d24',
  '#0b3319',
  '#2e7d32',
  '#36b37e',
  '#8b5cf6',
  '#5b7cb8',
  '#181d27',
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
  onRestoreTransaction,
  displayCurrency = 'EUR',
}) => {
  const [filterTab, setFilterTab] = useState<'all' | 'income' | 'expense'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [isMoreFiltersModalOpen, setIsMoreFiltersModalOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<FilterState>({
    category: 'all',
    minAmount: '',
    maxAmount: '',
    fromDate: '',
    toDate: '',
  });

  // Deletion Confirmation & Toast Undo State
  const [deleteTxTarget, setDeleteTxTarget] = useState<ExtendedTransactionItem | null>(null);
  const [deletedTx, setDeletedTx] = useState<ExtendedTransactionItem | null>(null);
  const [txToast, setTxToast] = useState<{ title: string } | null>(null);

  // Auto-dismiss transaction undo toast after 6 seconds
  useEffect(() => {
    if (txToast) {
      const timer = setTimeout(() => {
        setTxToast(null);
        setDeletedTx(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [txToast]);

  const handleOpenDeleteTx = (tx: ExtendedTransactionItem) => {
    setDeleteTxTarget(tx);
  };

  const handleConfirmDeleteTx = () => {
    if (deleteTxTarget) {
      const target = deleteTxTarget;
      if (onDeleteTransaction) onDeleteTransaction(target.id);
      setDeletedTx(target);
      setTxToast({ title: target.title });
      setDeleteTxTarget(null);
    }
  };

  const handleUndoDeleteTx = () => {
    if (deletedTx && onRestoreTransaction) {
      onRestoreTransaction(deletedTx);
      setDeletedTx(null);
      setTxToast(null);
    }
  };

  // Helper to format currency correctly
  const formatAmount = (num: number, includeSign = true) => {
    const formatted = formatMoney(num, displayCurrency);
    if (!includeSign && formatted.startsWith('-')) {
      return formatted.slice(1);
    }
    if (includeSign && num > 0 && !formatted.startsWith('+')) {
      return `+${formatted}`;
    }
    return formatted;
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
    return transactions.filter((tx) => {
      // 1. Filter by Tab (All / Income / Expense)
      if (filterTab === 'income' && tx.amount <= 0) return false;
      if (filterTab === 'expense' && tx.amount >= 0) return false;

      // 2. Filter by Category
      if (
        activeFilters.category !== 'all' &&
        tx.category.toLowerCase() !== activeFilters.category.toLowerCase()
      ) {
        return false;
      }

      // 3. Filter by Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = tx.title.toLowerCase().includes(q);
        const noteMatch = tx.note ? tx.note.toLowerCase().includes(q) : false;
        const subMatch = tx.subtitle ? tx.subtitle.toLowerCase().includes(q) : false;
        const catMatch = tx.category.toLowerCase().includes(q);
        const badgeMatch = tx.badge.toLowerCase().includes(q);
        const dateMatch = (tx.dateGroup || tx.date).toLowerCase().includes(q);

        if (!titleMatch && !noteMatch && !subMatch && !catMatch && !badgeMatch && !dateMatch) return false;
      }

      // 4. Filter by Amount Range (Min & Max amount)
      const absAmt = Math.abs(tx.amount);
      if (activeFilters.minAmount && !isNaN(parseFloat(activeFilters.minAmount))) {
        if (absAmt < parseFloat(activeFilters.minAmount)) return false;
      }
      if (activeFilters.maxAmount && !isNaN(parseFloat(activeFilters.maxAmount))) {
        if (absAmt > parseFloat(activeFilters.maxAmount)) return false;
      }

      // 5. Filter by Date Range (From & To date)
      if (activeFilters.fromDate || activeFilters.toDate) {
        const txDateObj = new Date(tx.date);
        if (!isNaN(txDateObj.getTime())) {
          if (activeFilters.fromDate) {
            const fromObj = new Date(activeFilters.fromDate);
            if (txDateObj < fromObj) return false;
          }
          if (activeFilters.toDate) {
            const toObj = new Date(activeFilters.toDate);
            toObj.setHours(23, 59, 59, 999);
            if (txDateObj > toObj) return false;
          }
        }
      }

      return true;
    });
  }, [transactions, filterTab, searchQuery, activeFilters]);

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

          {/* More Filters Modal Trigger Button */}
          <button
            className={`btn-more-filters ${
              isMoreFiltersModalOpen ||
              activeFilters.category !== 'all' ||
              activeFilters.minAmount ||
              activeFilters.maxAmount ||
              activeFilters.fromDate ||
              activeFilters.toDate
                ? 'active'
                : ''
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setIsMoreFiltersModalOpen(true);
            }}
          >
            <SlidersHorizontal size={15} />
            <span>More filters</span>
            {(activeFilters.category !== 'all' ||
              activeFilters.minAmount ||
              activeFilters.maxAmount ||
              activeFilters.fromDate ||
              activeFilters.toDate) && <span className="filter-active-dot" />}
          </button>
        </div>
      </div>

      {/* MORE FILTERS MODAL (Figma Node 2236-3829) */}
      <MoreFiltersModal
        isOpen={isMoreFiltersModalOpen}
        onClose={() => setIsMoreFiltersModalOpen(false)}
        initialFilters={activeFilters}
        onApplyFilters={(newFilters) => setActiveFilters(newFilters)}
        availableCategories={categories}
      />

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
                setActiveFilters({
                  category: 'all',
                  minAmount: '',
                  maxAmount: '',
                  fromDate: '',
                  toDate: '',
                });
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
                                  handleOpenDeleteTx(item);
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

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmModal
        isOpen={Boolean(deleteTxTarget)}
        itemTitle={deleteTxTarget?.title || ''}
        itemType="transaction"
        onClose={() => setDeleteTxTarget(null)}
        onConfirmDelete={handleConfirmDeleteTx}
      />

      {/* Floating Toast Undo Notification Banner */}
      {txToast && (
        <div className="toast-undo-floating-wrapper">
          <div className="toast-undo-banner">
            <div className="toast-content-text">
              <span className="toast-title">{txToast.title} removed.</span>
              <span className="toast-sub">You can undo this right away.</span>
            </div>
            <button type="button" className="btn-toast-undo" onClick={handleUndoDeleteTx}>
              Undo
            </button>
          </div>
        </div>
      )}

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
