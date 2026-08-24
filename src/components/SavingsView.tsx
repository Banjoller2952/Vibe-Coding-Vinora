import React, { useState } from 'react';
import { Plus, Calendar, X, Trash2 } from 'lucide-react';

export interface SavingsGoal {
  id: string;
  title: string;
  subtitle?: string;
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

  // Form State for New Goal
  const [newTitle, setNewTitle] = useState('');
  const [newSubtitle, setNewSubtitle] = useState('');
  const [newCategory, setNewCategory] = useState('Travel');
  const [newTargetDate, setNewTargetDate] = useState('Dec 2026');
  const [newCurrentAmount, setNewCurrentAmount] = useState('');
  const [newTargetAmount, setNewTargetAmount] = useState('');

  // Contribute state
  const [contributionAmount, setContributionAmount] = useState('');

  const handleCreateGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newTargetAmount) return;

    const targetVal = parseFloat(newTargetAmount) || 1000;
    const currentVal = parseFloat(newCurrentAmount) || 0;

    const dotColors: Record<string, string> = {
      Travel: '#36b37e',
      Gear: '#c26d40',
      'Safety net': '#225a39',
      Life: '#3b82f6',
      Vehicle: '#eab308',
    };

    const newGoalItem: SavingsGoal = {
      id: `goal-${Date.now()}`,
      title: newTitle,
      subtitle: newSubtitle,
      category: newCategory,
      categoryDotColor: dotColors[newCategory] || '#36b37e',
      targetDate: newTargetDate,
      currentAmount: currentVal,
      targetAmount: targetVal,
      isHero: false,
    };

    setGoals([...goals, newGoalItem]);
    setIsNewGoalModalOpen(false);
    // Reset fields
    setNewTitle('');
    setNewSubtitle('');
    setNewCurrentAmount('');
    setNewTargetAmount('');
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

  const handleSaveEditGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editGoal) return;

    setGoals(goals.map((g) => (g.id === editGoal.id ? editGoal : g)));
    setEditGoal(null);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id));
    setEditGoal(null);
  };

  // Separate hero goal and secondary goals
  const heroGoal = goals.find((g) => g.isHero) || goals[0];
  const gridGoals = goals.filter((g) => g.id !== heroGoal?.id);

  return (
    <div className="savings-view-container">
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
      {isNewGoalModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsNewGoalModalOpen(false)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Create new savings goal</h3>
              <button className="btn-modal-close" onClick={() => setIsNewGoalModalOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateGoal} className="modal-form">
              <div className="form-group">
                <label>Goal Title</label>
                <input
                  type="text"
                  placeholder="e.g. New Laptop, Paris Trip"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subtitle / Description (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. MacBook Pro M3, 2 weeks travel"
                  value={newSubtitle}
                  onChange={(e) => setNewSubtitle(e.target.value)}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Target Amount (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="2500.00"
                    value={newTargetAmount}
                    onChange={(e) => setNewTargetAmount(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Current Saved (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    value={newCurrentAmount}
                    onChange={(e) => setNewCurrentAmount(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Category Tag</label>
                  <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
                    <option value="Travel">Travel</option>
                    <option value="Gear">Gear</option>
                    <option value="Safety net">Safety net</option>
                    <option value="Life">Life</option>
                    <option value="Vehicle">Vehicle</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Target Date</label>
                  <input
                    type="text"
                    placeholder="e.g. Dec 2026"
                    value={newTargetDate}
                    onChange={(e) => setNewTargetDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="modal-footer-actions">
                <button type="button" className="btn-modal-cancel" onClick={() => setIsNewGoalModalOpen(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-modal-submit">
                  Create goal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
      {editGoal && (
        <div className="modal-backdrop" onClick={() => setEditGoal(null)}>
          <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Edit savings goal</h3>
              <button className="btn-modal-close" onClick={() => setEditGoal(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveEditGoal} className="modal-form">
              <div className="form-group">
                <label>Goal Title</label>
                <input
                  type="text"
                  value={editGoal.title}
                  onChange={(e) => setEditGoal({ ...editGoal, title: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subtitle</label>
                <input
                  type="text"
                  value={editGoal.subtitle || ''}
                  onChange={(e) => setEditGoal({ ...editGoal, subtitle: e.target.value })}
                />
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>Current Saved (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editGoal.currentAmount}
                    onChange={(e) => setEditGoal({ ...editGoal, currentAmount: parseFloat(e.target.value) || 0 })}
                  />
                </div>

                <div className="form-group">
                  <label>Target Amount (€)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={editGoal.targetAmount}
                    onChange={(e) => setEditGoal({ ...editGoal, targetAmount: parseFloat(e.target.value) || 1 })}
                  />
                </div>
              </div>

              <div className="modal-footer-actions edit-footer">
                <button
                  type="button"
                  className="btn-modal-delete"
                  onClick={() => handleDeleteGoal(editGoal.id)}
                >
                  <Trash2 size={15} />
                  <span>Delete</span>
                </button>
                <div className="edit-right-actions">
                  <button type="button" className="btn-modal-cancel" onClick={() => setEditGoal(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn-modal-submit">
                    Save changes
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
