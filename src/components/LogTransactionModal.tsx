import React, { useState } from 'react';
import { X, PlusCircle, MinusCircle } from 'lucide-react';

export interface TransactionItem {
  id: string;
  badge: string;
  title: string;
  category: string;
  date: string;
  amount: number;
}

interface LogTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: Omit<TransactionItem, 'id'>) => void;
}

export const LogTransactionModal: React.FC<LogTransactionModalProps> = ({
  isOpen,
  onClose,
  onAddTransaction,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Groceries');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('expense');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const numAmount = parseFloat(amount);
    const finalAmount = type === 'expense' ? -Math.abs(numAmount) : Math.abs(numAmount);
    
    // Extract badge initial
    const badge = category.slice(0, 2).toUpperCase();

    onAddTransaction({
      title,
      category,
      badge,
      date: 'Today',
      amount: finalAmount,
    });

    // Reset
    setTitle('');
    setAmount('');
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Log a Transaction</h3>
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
              placeholder="e.g. Whole Foods, Freelance Project"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-grid">
            <div className="form-field">
              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
              Save Transaction
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
