import React, { useState } from 'react';
import {
  Sparkles,
  Plus,
  ArrowUpRight,
  Wallet,
  TrendingUp,
} from 'lucide-react';
import { ExtendedTransactionItem, BADGE_COLOR_MAP } from './TransactionsView';
import { UserProfile } from './LoginForm';

interface DashboardViewProps {
  user: UserProfile;
  theme: 'light' | 'dark';
  transactions: ExtendedTransactionItem[];
  currentBalance: number;
  onOpenLogModal: () => void;
  onNavigateTab: (tab: 'dashboard' | 'transactions' | 'savings' | 'reports' | 'settings') => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  theme,
  transactions,
  currentBalance,
  onOpenLogModal,
  onNavigateTab,
}) => {
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);

  // Six months of flow chart data
  const monthData = [
    { label: 'Feb', income: 3100, expense: 2100, x: 60, incY: 51.5, expY: 86.5 },
    { label: 'Mar', income: 3350, expense: 2400, x: 140, incY: 42.75, expY: 76 },
    { label: 'Apr', income: 3400, expense: 2050, x: 220, incY: 41, expY: 88.25 },
    { label: 'May', income: 3850, expense: 2480, x: 300, incY: 25.25, expY: 73.25 },
    { label: 'Jun', income: 3450, expense: 2300, x: 380, incY: 39.25, expY: 79.5 },
    { label: 'Jul', income: 3870, expense: 1483, x: 460, incY: 24.55, expY: 108.1 },
  ];

  // Helper function for ultra-smooth Bezier cubic spline paths
  const getSmoothPath = (points: { x: number; y: number }[], smoothing = 0.18) => {
    const line = (a: { x: number; y: number }, b: { x: number; y: number }) => {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      return {
        length: Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)),
        angle: Math.atan2(dy, dx),
      };
    };

    const controlPoint = (
      current: { x: number; y: number },
      previous?: { x: number; y: number },
      next?: { x: number; y: number },
      reverse?: boolean
    ) => {
      const p = previous || current;
      const n = next || current;
      const o = line(p, n);
      const angle = o.angle + (reverse ? Math.PI : 0);
      const length = o.length * smoothing;
      const x = current.x + Math.cos(angle) * length;
      const y = current.y + Math.sin(angle) * length;
      return { x, y };
    };

    return points.reduce((acc, point, i, a) => {
      if (i === 0) return `M ${point.x.toFixed(2)},${point.y.toFixed(2)}`;
      const cps = controlPoint(a[i - 1], a[i - 2], point);
      const cpe = controlPoint(point, a[i - 1], a[i + 1], true);
      return `${acc} C ${cps.x.toFixed(2)},${cps.y.toFixed(2)} ${cpe.x.toFixed(2)},${cpe.y.toFixed(2)} ${point.x.toFixed(2)},${point.y.toFixed(2)}`;
    }, '');
  };

  const incomePoints = monthData.map((pt) => ({ x: pt.x, y: pt.incY }));
  const expensePoints = monthData.map((pt) => ({ x: pt.x, y: pt.expY }));

  const incomeLinePath = getSmoothPath(incomePoints, 0.18);
  const incomeAreaPath = `${incomeLinePath} L 460,160 L 60,160 Z`;

  const expenseLinePath = getSmoothPath(expensePoints, 0.18);
  const expenseAreaPath = `${expenseLinePath} L 460,160 L 60,160 Z`;

  // First name greeting fallback to ELENA if generic
  const firstName = user?.name ? user.name.split(' ')[0].toUpperCase() : 'ELENA';

  return (
    <div className="dash-grid">
      {/* ROW 1: Hero Greeting Card & Stat Cards */}
      <div className="hero-greeting-card">
        <div className="hero-top-label">
          <Sparkles size={14} className="hero-sparkle" />
          <span>GOOD EVENING, {firstName}</span>
        </div>

        <div className="hero-balance-section">
          <div className="hero-balance-header">
            <span className="balance-sub">Available balance · 22 Jul 2026</span>
            <div className="balance-row">
              <h1 className="balance-amount">
                €{currentBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </h1>
              <div className="balance-badge">
                <ArrowUpRight size={14} />
                <span>+€2,386.96 this month</span>
              </div>
            </div>
          </div>

          <p className="hero-insight-text">
            You're spending 38% of what you earn this month. On this pace, you'll close July with a comfortable margin.
          </p>

          <div className="hero-action-buttons">
            <button className="btn-log-tx" onClick={onOpenLogModal}>
              <Plus size={16} />
              <span>Log a transaction</span>
            </button>
            <button className="btn-see-month" onClick={() => onNavigateTab('reports')}>
              <span>See the month in full</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Column: Income & Expenses */}
      <div className="hero-stats-col">
        <div className="stat-card income-card">
          <div className="stat-card-header">
            <span className="stat-title">INCOME · JULY</span>
            <div className="stat-icon-wrapper">
              <Wallet size={16} />
            </div>
          </div>
          <div className="stat-amount">€3,870.00</div>
          <div className="stat-growth positive">+12% vs June</div>
        </div>

        <div className="stat-card expenses-card">
          <div className="stat-card-header">
            <span className="stat-title">EXPENSES · JULY</span>
            <div className="stat-icon-wrapper">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="stat-amount">€1,483.04</div>
          <div className="stat-growth negative">-8% vs June</div>
        </div>
      </div>

      {/* ROW 2: Six Months of Flow Chart & Where It Went */}
      <div className="dash-card chart-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Six months of flow</h3>
            <p className="card-subtitle">Income against expenses, monthly</p>
          </div>
          <span className="card-range-badge">Feb — Jul</span>
        </div>

        {/* SVG Line Chart */}
        <div className="chart-wrapper">
          <svg className="flow-chart-svg" viewBox="0 0 500 180" preserveAspectRatio="none">
            <defs>
              <linearGradient id="incomeGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#225a39" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#225a39" stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C26D40" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#C26D40" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Horizontal Grid lines */}
            <line x1="40" y1="20" x2="480" y2="20" className="grid-line" />
            <line x1="40" y1="55" x2="480" y2="55" className="grid-line" />
            <line x1="40" y1="90" x2="480" y2="90" className="grid-line" />
            <line x1="40" y1="125" x2="480" y2="125" className="grid-line" />
            <line x1="40" y1="160" x2="480" y2="160" className="grid-line" />

            {/* Y Axis Labels */}
            <text x="30" y="24" className="axis-label" textAnchor="end">4000</text>
            <text x="30" y="59" className="axis-label" textAnchor="end">3000</text>
            <text x="30" y="94" className="axis-label" textAnchor="end">2000</text>
            <text x="30" y="129" className="axis-label" textAnchor="end">1000</text>
            <text x="30" y="164" className="axis-label" textAnchor="end">0</text>

            {/* Income Area Fill */}
            <path d={incomeAreaPath} fill="url(#incomeGrad)" />
            {/* Income Smooth Line */}
            <path
              d={incomeLinePath}
              fill="none"
              stroke={theme === 'dark' ? '#5FAF7A' : '#225A39'}
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Expense Area Fill */}
            <path d={expenseAreaPath} fill="url(#expenseGrad)" />
            {/* Expense Smooth Line */}
            <path
              d={expenseLinePath}
              fill="none"
              stroke="#C26D40"
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Month Data Dots & Hover Overlay */}
            {monthData.map((pt, idx) => (
              <g
                key={pt.label}
                onMouseEnter={() => setHoveredMonthIndex(idx)}
                onMouseLeave={() => setHoveredMonthIndex(null)}
              >
                <circle
                  cx={pt.x}
                  cy={pt.incY}
                  r={hoveredMonthIndex === idx ? 6 : 4}
                  fill={theme === 'dark' ? '#5FAF7A' : '#225A39'}
                  className="chart-dot"
                />
                <circle
                  cx={pt.x}
                  cy={pt.expY}
                  r={hoveredMonthIndex === idx ? 6 : 4}
                  fill="#C26D40"
                  className="chart-dot"
                />
                <text x={pt.x} y="176" className="axis-label" textAnchor="middle">
                  {pt.label}
                </text>

                {/* Interactive Tooltip on hover */}
                {hoveredMonthIndex === idx && (
                  <g>
                    <rect
                      x={pt.x - 45}
                      y={10}
                      width="90"
                      height="34"
                      rx="6"
                      fill={theme === 'dark' ? '#1f2430' : '#ffffff'}
                      stroke="rgba(0,0,0,0.15)"
                    />
                    <text
                      x={pt.x}
                      y={23}
                      fontSize="9"
                      fontWeight="bold"
                      fill={theme === 'dark' ? '#5FAF7A' : '#225A39'}
                      textAnchor="middle"
                    >
                      Inc: €{pt.income}
                    </text>
                    <text
                      x={pt.x}
                      y={36}
                      fontSize="9"
                      fontWeight="bold"
                      fill="#C26D40"
                      textAnchor="middle"
                    >
                      Exp: €{pt.expense}
                    </text>
                  </g>
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Legend */}
        <div className="chart-legend">
          <div className="legend-item">
            <span className="legend-dot income-dot"></span>
            <span>Income</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot expense-dot"></span>
            <span>Expense</span>
          </div>
        </div>
      </div>

      {/* Where It Went Category Card */}
      <div className="dash-card where-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Where it went</h3>
            <p className="card-subtitle">By category, this month</p>
          </div>
        </div>

        <div className="category-progress-list">
          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Rent</span>
              <span className="cat-val">-€1,180.00</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-rent" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Groceries</span>
              <span className="cat-val">-€106.39</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-groceries" style={{ width: '42%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Utilities</span>
              <span className="cat-val">-€74.90</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-utilities" style={{ width: '32%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Transport</span>
              <span className="cat-val">-€68.90</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-transport" style={{ width: '28%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Leisure</span>
              <span className="cat-val">-€42.90</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-leisure" style={{ width: '20%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* ROW 3: Recent Activity & Featured Goal */}
      <div className="dash-card activity-card">
        <div className="card-header-flex">
          <h3 className="card-title">Recent activity</h3>
          <button className="btn-view-all" onClick={() => onNavigateTab('transactions')}>
            View all
          </button>
        </div>

        <div className="activity-list">
          {transactions.slice(0, 6).map((tx) => {
            const badgeStyle = BADGE_COLOR_MAP[tx.badge] || { bg: '#2e7d32', text: '#ffffff' };
            return (
              <div key={tx.id} className="activity-item">
                <div className="activity-left">
                  <div
                    className="tx-badge"
                    style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.text }}
                  >
                    {tx.badge}
                  </div>
                  <div className="tx-details">
                    <span className="activity-item-title">{tx.title}</span>
                    <span className="tx-meta">{tx.category} · {tx.date}</span>
                  </div>
                </div>
                <div className={`tx-amount ${tx.amount > 0 ? 'positive' : ''}`}>
                  {tx.amount > 0 ? `+€${tx.amount.toFixed(2)}` : `-€${Math.abs(tx.amount).toFixed(2)}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Featured Goal Card */}
      <div className="featured-goal-card">
        <div className="goal-top">
          <div className="goal-header-label">
            <Sparkles size={14} className="goal-sparkle" />
            <span>FEATURED GOAL</span>
          </div>

          <h2 className="goal-title">Kyoto in autumn</h2>
          <p className="goal-subtitle">Two weeks, slow travel</p>
        </div>

        <div className="goal-amount-section">
          <div className="goal-amount-row">
            <span className="goal-big-amount">€1,840.00</span>
            <span className="goal-target-amount">of €3,200.00</span>
          </div>

          <div className="goal-progress-track">
            <div className="goal-progress-bar" style={{ width: '57%' }}></div>
          </div>

          <div className="goal-meta-row">
            <span>57% saved</span>
            <span>By Oct 2026</span>
          </div>
        </div>

        <button className="btn-all-goals" onClick={() => onNavigateTab('savings')}>
          All savings goals
        </button>
      </div>
    </div>
  );
};
