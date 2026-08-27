import React, { useState, useEffect } from 'react';
import { Plus, Calendar, X } from 'lucide-react';
import { NewGoalModal } from './NewGoalModal';

export interface SavingsGoal {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  category: string;
  categoryDotColor?: string;
  targetDate?: string;
  currentAmount: number;
  targetAmount: number;
  isHero?: boolean;
}

interface SavingsViewProps {
  theme?: 'light' | 'dark';
}

const INITIAL_SAVINGS_GOALS: SavingsGoal[] = [
  {
    id: 'goal-1',
    title: 'Kyoto in autumn',
    subtitle: 'Two weeks, slow travel',
    category: 'Travel',
    categoryDotColor: '#36b37e',
    targetDate: 'Oct 2026',
    currentAmount: 1840.0,
    targetAmount: 3200.0,
    isHero: true,
  },
  {
    id: 'goal-2',
    title: 'New lens — 35mm',
    category: 'Gear',
    categoryDotColor: '#c26d40',
    targetDate: 'Sept 2026',
    currentAmount: 620.0,
    targetAmount: 850.0,
    isHero: false,
  },
  {
    id: 'goal-3',
    title: 'Emergency fund',
    subtitle: 'Three months of expenses',
    category: 'Safety net',
    categoryDotColor: '#225a39',
    currentAmount: 4275.0,
    targetAmount: 6000.0,
    isHero: false,
  },
];

export const SavingsView: React.FC<SavingsViewProps> = () => {
  const [goals, setGoals] = useState<SavingsGoal[]>(INITIAL_SAVINGS_GOALS);
  const [isNewGoalModalOpen, setIsNewGoalModalOpen] = useState(false);
  const [contributeGoal, setContributeGoal] = useState<SavingsGoal | null>(null);
  const [editGoal, setEditGoal] = useState<SavingsGoal | null>(null);

  // Contribute state
  const [contributionAmount, setContributionAmount] = useState('');

  // Toast & Undo State
  const [deletedGoal, setDeletedGoal] = useState<SavingsGoal | null>(null);
  const [toast, setToast] = useState<{ title: string } | null>(null);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
        setDeletedGoal(null);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleAddNewGoal = (goalData: Omit<SavingsGoal, 'id'>) => {
    const newGoalItem: SavingsGoal = {
      id: `goal-${Date.now()}`,
      ...goalData,
      isHero: goals.length === 0,
    };

    setGoals((prev) => [...prev, newGoalItem]);
  };

  const handleAddContribution = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contributeGoal || !contributionAmount) return;

    const added = parseFloat(contributionAmount);
    if (isNaN(added) || added <= 0) return;

    setGoals(
      goals.map((g) =>
        g.id === contributeGoal.id
          ? { ...g, currentAmount: Math.min(g.targetAmount, g.currentAmount + added) }
          : g
      )
    );

    setContributeGoal(null);
    setContributionAmount('');
  };

  const handleSaveEditGoal = (updatedGoal: SavingsGoal) => {
    setGoals((prev) => prev.map((g) => (g.id === updatedGoal.id ? updatedGoal : g)));
    setEditGoal(null);
  };

  const handleDeleteGoal = (id: string) => {
    const targetGoal = goals.find((g) => g.id === id);
    if (targetGoal) {
      setDeletedGoal(targetGoal);
      setToast({ title: targetGoal.title });
    }
    setGoals((prev) => prev.filter((g) => g.id !== id));
    setEditGoal(null);
  };

  const handleUndoDelete = () => {
    if (deletedGoal) {
      setGoals((prev) => [...prev, deletedGoal]);
      setDeletedGoal(null);
      setToast(null);
    }
  };

  // Separate hero goal and secondary goals
  const heroGoal = goals.find((g) => g.isHero) || goals[0];
  const gridGoals = goals.filter((g) => g.id !== heroGoal?.id);

  return (
    <div className="savings-view-container">
      {/* Toast Undo Notification Banner */}
      {toast && (
        <div className="toast-undo-floating-wrapper">
          <div className="toast-undo-banner">
            <div className="toast-content-text">
              <span className="toast-title">{toast.title} removed.</span>
              <span className="toast-sub">You can undo this right away.</span>
            </div>
            <button type="button" className="btn-toast-undo" onClick={handleUndoDelete}>
              Undo
            </button>
          </div>
        </div>
      )}
      {/* Top Header Row */}
      <div className="savings-header">
        <div className="savings-header-text">
          <span className="savings-top-label">Toward Something</span>
          <h1 className="savings-title">Savings goal</h1>
          <p className="savings-subtitle">
            A goal you can see is a goal you'll reach. Small contributions, calmy compounded.
          </p>
        </div>

        <button className="btn-new-goal" onClick={() => setIsNewGoalModalOpen(true)}>
          <Plus size={18} />
          <span>New goal</span>
        </button>
      </div>

      {/* Main Hero Card (Kyoto / Top Goal) */}
      {heroGoal && (() => {
        const pct = Math.min(100, Math.round((heroGoal.currentAmount / heroGoal.targetAmount) * 100));
        const remaining = Math.max(0, heroGoal.targetAmount - heroGoal.currentAmount);

        return (
          <div className="savings-hero-card">
            <div className="hero-card-header">
              <div className="hero-title-group">
                <h2 className="hero-goal-title">{heroGoal.title}</h2>
                {heroGoal.subtitle && <p className="hero-goal-subtitle">{heroGoal.subtitle}</p>}
              </div>

              <div className="hero-badges-row">
                <div className="savings-badge hero-cat-badge">
                  <span className="badge-dot" style={{ backgroundColor: heroGoal.categoryDotColor || '#36b37e' }}></span>
                  <span>{heroGoal.category}</span>
                </div>
                {heroGoal.targetDate && (
                  <div className="savings-badge hero-date-badge">
                    <Calendar size={13} />
                    <span>{heroGoal.targetDate}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="hero-amount-section">
              <div className="hero-amount-row">
                <span className="hero-big-amount">
                  €{heroGoal.currentAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="hero-target-amount">
                  of €{heroGoal.targetAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="hero-progress-track">
                <div className="hero-progress-fill" style={{ width: `${pct}%` }}></div>
              </div>

              <div className="hero-meta-row">
                <span>{pct}% saved</span>
                <span>
                  €{remaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} to go
                </span>
              </div>
            </div>

            <div className="hero-actions-row">
              <button className="btn-hero-contribute" onClick={() => setContributeGoal(heroGoal)}>
                Contribute
              </button>
              <button className="btn-hero-edit" onClick={() => setEditGoal(heroGoal)}>
                Edit Goal
              </button>
            </div>
          </div>
        );
      })()}

      {/* Grid Row for Secondary Goals */}
      <div className="savings-grid-row">
        {gridGoals.map((goal) => {
          const pct = Math.min(100, Math.round((goal.currentAmount / goal.targetAmount) * 100));
          const remaining = Math.max(0, goal.targetAmount - goal.currentAmount);

          return (
            <div key={goal.id} className="savings-grid-card">
              <div className="card-top-header">
                <div>
                  <h3 className="grid-goal-title">{goal.title}</h3>
                  {goal.subtitle && <p className="grid-goal-subtitle">{goal.subtitle}</p>}
                </div>

                <div className="grid-badges-row">
                  <div className="savings-badge">
                    <span className="badge-dot" style={{ backgroundColor: goal.categoryDotColor || '#c26d40' }}></span>
                    <span>{goal.category}</span>
                  </div>
                  {goal.targetDate && (
                    <div className="savings-badge">
                      <Calendar size={12} />
                      <span>{goal.targetDate}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid-amount-section">
                <div className="grid-amount-row">
                  <span className="grid-big-amount">
                    €{goal.currentAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                  <span className="grid-target-amount">
                    of €{goal.targetAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="grid-progress-track">
                  <div className="grid-progress-fill" style={{ width: `${pct}%` }}></div>
                </div>

                <div className="grid-meta-row">
                  <span>{pct}% saved</span>
                  <span>
                    €{remaining.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} to go
                  </span>
                </div>
              </div>

              <div className="grid-actions-row">
                <button className="btn-grid-contribute" onClick={() => setContributeGoal(goal)}>
                  Contribute
                </button>
                <button className="btn-grid-edit" onClick={() => setEditGoal(goal)}>
                  Edit Goal
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal: Create New Goal */}
      <NewGoalModal
        isOpen={isNewGoalModalOpen}
        onClose={() => setIsNewGoalModalOpen(false)}
        onAddGoal={handleAddNewGoal}
      />

      {/* Modal: Contribute to Goal */}
      {contributeGoal && (
        <div className="modal-backdrop" onClick={() => setContributeGoal(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Contribute to "{contributeGoal.title}"</h3>
              <button className="btn-modal-close" onClick={() => setContributeGoal(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddContribution} className="modal-form">
              <p className="contribute-modal-sub">
                Currently saved: €{contributeGoal.currentAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })} of €
                {contributeGoal.targetAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </p>

              <div className="quick-amount-pills">
                {[50, 100, 250, 500].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className="pill-quick-amt"
                    onClick={() => setContributionAmount(amt.toString())}
                  >
                    +€{amt}
                  </button>
                ))}
              </div>

              <div className="form-group">
                <label>Contribution Amount (€)</label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="Enter amount"
                  value={contributionAmount}
                  onChange={(e) => setContributionAmount(e.target.value)}
                  required
                />
              </div>

              <div className="modal-footer-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setContributeGoal(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Confirm contribution
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Edit Goal */}
      <NewGoalModal
        isOpen={Boolean(editGoal)}
        goalToEdit={editGoal}
        onClose={() => setEditGoal(null)}
        onUpdateGoal={handleSaveEditGoal}
        onDeleteGoal={handleDeleteGoal}
      />
    </div>
  );
};
