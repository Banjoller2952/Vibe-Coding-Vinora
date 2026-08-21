import React, { useState, useEffect } from 'react';
import { X, PlusCircle, MinusCircle } from 'lucide-react';

export interface TransactionItem {
  id: string;
  badge: string; // CatShow (e.g. GR, CA, TR, LE, FR, UT, SA, RE)
  title: string;
  category: string;
  note?: string; // Optional note (e.g. Weekly shop, Poster design)
  date: string;
  amount: number;
  color?: string; // Optional custom color override
}

const CATEGORY_BADGE_MAP: Record<string, string> = {
  Groceries: 'GR',
  Cafés: 'CA',
  Transport: 'TR',
  Rent: 'RE',
  Utilities: 'UT',
  Leisure: 'LE',
  Freelance: 'FR',
  Salary: 'SA',
};

interface LogTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: Omit<TransactionItem, 'id'>) => void;
  initialData?: (TransactionItem & { note?: string; dateGroup?: string }) | null;
  onEditTransaction?: (transaction: TransactionItem & { note?: string; dateGroup?: string }) => void;
}

export const LogTransactionModal: React.FC<LogTransactionModalProps> = ({
  isOpen,
  onClose,
  onAddTransaction,
  initialData,
  onEditTransaction,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [badge, setBadge] = useState('GR');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || '');
      setCategory(initialData.category || 'Groceries');
      setBadge(initialData.badge || CATEGORY_BADGE_MAP[initialData.category] || 'GR');
      setNote(initialData.note || '');
      setAmount(Math.abs(initialData.amount).toString());
      setType(initialData.amount >= 0 ? 'income' : 'expense');
    } else {
      setTitle('');
      setCategory('Groceries');
      setBadge('GR');
      setNote('');
      setAmount('');
      setType('expense');
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
    if (CATEGORY_BADGE_MAP[newCategory]) {
      setBadge(CATEGORY_BADGE_MAP[newCategory]);
    } else {
      setBadge(newCategory.slice(0, 2).toUpperCase());
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const numAmount = parseFloat(amount);
    const finalAmount = type === 'expense' ? -Math.abs(numAmount) : Math.abs(numAmount);
    const finalBadge = badge.trim() ? badge.trim().toUpperCase().slice(0, 3) : (CATEGORY_BADGE_MAP[category] || category.slice(0, 2).toUpperCase());

    if (initialData && onEditTransaction) {
      onEditTransaction({
        ...initialData,
        title,
        category,
        badge: finalBadge,
        note: note.trim(),
        amount: finalAmount,
      });
    } else {
      onAddTransaction({
        title,
        category,
        badge: finalBadge,
        note: note.trim(),
        date: 'Today',
        amount: finalAmount,
      });
    }

    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{initialData ? 'Edit Transaction' : 'Log a Transaction'}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="type-toggle">
            <button
              type="button"
              className={`type-btn ${type === 'expense' ? 'active-expense' : ''}`}
              onClick={() => setType('expense')}
            >
              <MinusCircle size={16} /> Expense
            </button>
            <button
              type="button"
              className={`type-btn ${type === 'income' ? 'active-income' : ''}`}
              onClick={() => setType('income')}
            >
              <PlusCircle size={16} /> Income
            </button>
          </div>

          <div className="form-field">
            <label>Title / Merchant</label>
            <input
              type="text"
              placeholder="e.g. Whole Foods, Freelance"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label>Category</label>
              <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="Groceries">Groceries</option>
                <option value="Cafés">Cafés</option>
                <option value="Transport">Transport</option>
                <option value="Rent">Rent</option>
                <option value="Utilities">Utilities</option>
                <option value="Leisure">Leisure</option>
                <option value="Freelance">Freelance</option>
                <option value="Salary">Salary</option>
              </select>
            </div>

            <div className="form-field">
              <label>CatShow (Badge Code)</label>
              <input
                type="text"
                placeholder="e.g. GR, FR, CA"
                value={badge}
                maxLength={3}
                onChange={(e) => setBadge(e.target.value.toUpperCase())}
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label>Note / Subtitle (Optional)</label>
              <input
                type="text"
                placeholder="e.g. Weekly shop, Poster design"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </div>

            <div className="form-field">
              <label>Amount (€)</label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              {initialData ? 'Update Transaction' : 'Save Transaction'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
