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
import { formatMoney } from '../lib/currency';

interface DashboardViewProps {
  user: UserProfile;
  theme: 'light' | 'dark' | 'system';
  transactions: ExtendedTransactionItem[];
  currentBalance: number;
  onOpenLogModal: () => void;
  onNavigateTab: (tab: 'dashboard' | 'transactions' | 'savings' | 'reports' | 'settings') => void;
  displayCurrency?: string;
}

export const DashboardView: React.FC<DashboardViewProps> = ({
  user,
  theme,
  transactions,
  currentBalance,
  onOpenLogModal,
  onNavigateTab,
  displayCurrency = 'EUR',
}) => {
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);
  const [activeSeries, setActiveSeries] = useState<'all' | 'income' | 'expense'>('all');

  // Six months of flow chart data
  const rawMonthData = [
    { label: 'Feb', income: 3100, expense: 2100, x: 60 },
    { label: 'Mar', income: 3350, expense: 2400, x: 140 },
    { label: 'Apr', income: 3400, expense: 2050, x: 220 },
    { label: 'May', income: 3850, expense: 2480, x: 300 },
    { label: 'Jun', income: 3450, expense: 2300, x: 380 },
    { label: 'Jul', income: 3870, expense: 1483, x: 460 },
  ];

  const yMax = 4000;
  const topY = 20;
  const bottomY = 160;
  const chartHeight = bottomY - topY;

  const monthData = rawMonthData.map((pt) => ({
    ...pt,
    incY: bottomY - (pt.income / yMax) * chartHeight,
    expY: bottomY - (pt.expense / yMax) * chartHeight,
  }));

  // Monotone Cubic Spline (Fritsch-Carlson) for smooth, natural curves without overshoot
  const getMonotoneCubicPath = (points: { x: number; y: number }[]) => {
    if (points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x},${points[0].y}`;

    const n = points.length;
    const dxs: number[] = [];
    const dys: number[] = [];
    const ms: number[] = [];

    for (let i = 0; i < n - 1; i++) {
      const dx = points[i + 1].x - points[i].x;
      const dy = points[i + 1].y - points[i].y;
      dxs.push(dx);
      dys.push(dy);
      ms.push(dy / dx);
    }

    const c1s: number[] = [ms[0]];
    for (let i = 0; i < n - 2; i++) {
      const m = ms[i];
      const mNext = ms[i + 1];
      if (m * mNext <= 0) {
        c1s.push(0);
      } else {
        const dx = dxs[i];
        const dxNext = dxs[i + 1];
        const common = dx + dxNext;
        c1s.push((3 * common) / ((common + dxNext) / m + (common + dx) / mNext));
      }
    }
    c1s.push(ms[ms.length - 1]);

    const c2s: number[] = [];
    for (let i = 0; i < c1s.length - 1; i++) {
      const m = ms[i];
      if (m === 0) {
        c2s.push(0);
        c1s[i + 1] = 0;
      } else {
        const a = c1s[i] / m;
        const b = c1s[i + 1] / m;
        const h = Math.hypot(a, b);
        if (h > 9) {
          const t = 3 / h;
          c2s.push(t * a * m);
          c1s[i + 1] = t * b * m;
        } else {
          c2s.push(c1s[i]);
        }
      }
    }
    c2s.push(c1s[c1s.length - 1]);

    let path = `M ${points[0].x.toFixed(2)},${points[0].y.toFixed(2)}`;
    for (let i = 0; i < n - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      const dx = dxs[i];

      const cp1x = p1.x + dx / 3;
      const cp1y = p1.y + (c2s[i] * dx) / 3;

      const cp2x = p2.x - dx / 3;
      const cp2y = p2.y - (c1s[i + 1] * dx) / 3;

      path += ` C ${cp1x.toFixed(2)},${cp1y.toFixed(2)} ${cp2x.toFixed(2)},${cp2y.toFixed(2)} ${p2.x.toFixed(2)},${p2.y.toFixed(2)}`;
    }

    return path;
  };

  const incomePoints = monthData.map((pt) => ({ x: pt.x, y: pt.incY }));
  const expensePoints = monthData.map((pt) => ({ x: pt.x, y: pt.expY }));

  const incomeLinePath = getMonotoneCubicPath(incomePoints);
  const incomeAreaPath = `${incomeLinePath} L 460,160 L 60,160 Z`;

  const expenseLinePath = getMonotoneCubicPath(expensePoints);
  const expenseAreaPath = `${expenseLinePath} L 460,160 L 60,160 Z`;

  const incomeColor = theme === 'dark' ? '#5FAF7A' : '#225A39';
  const expenseColor = theme === 'dark' ? '#E07A48' : '#C26D40';

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
                {formatMoney(currentBalance, displayCurrency)}
              </h1>
              <div className="balance-badge">
                <ArrowUpRight size={14} />
                <span>+{formatMoney(2386.96, displayCurrency)} this month</span>
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
          <div className="stat-amount">{formatMoney(3870, displayCurrency)}</div>
          <div className="stat-growth positive">+12% vs June</div>
        </div>

        <div className="stat-card expenses-card">
          <div className="stat-card-header">
            <span className="stat-title">EXPENSES · JULY</span>
            <div className="stat-icon-wrapper">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="stat-amount">{formatMoney(1483.04, displayCurrency)}</div>
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
                <stop offset="0%" stopColor={incomeColor} stopOpacity="0.22" />
                <stop offset="100%" stopColor={incomeColor} stopOpacity="0.0" />
              </linearGradient>
              <linearGradient id="expenseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={expenseColor} stopOpacity="0.18" />
                <stop offset="100%" stopColor={expenseColor} stopOpacity="0.0" />
              </linearGradient>

              {/* Ambient Glow drop shadows */}
              <filter id="incomeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor={incomeColor} floodOpacity="0.35" />
              </filter>
              <filter id="expenseGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor={expenseColor} floodOpacity="0.35" />
              </filter>
              <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.12" />
              </filter>
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

            {/* Vertical Guideline on Hover */}
            {hoveredMonthIndex !== null && (
              <line
                x1={monthData[hoveredMonthIndex].x}
                y1="20"
                x2={monthData[hoveredMonthIndex].x}
                y2="160"
                className="chart-vertical-guide"
              />
            )}

            {/* Income Area Fill */}
            {(activeSeries === 'all' || activeSeries === 'income') && (
              <path
                d={incomeAreaPath}
                fill="url(#incomeGrad)"
              />
            )}

            {/* Expense Area Fill */}
            {(activeSeries === 'all' || activeSeries === 'expense') && (
              <path
                d={expenseAreaPath}
                fill="url(#expenseGrad)"
              />
            )}

            {/* Income Smooth Line */}
            {(activeSeries === 'all' || activeSeries === 'income') && (
              <path
                d={incomeLinePath}
                fill="none"
                stroke={incomeColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#incomeGlow)"
              />
            )}

            {/* Expense Smooth Line */}
            {(activeSeries === 'all' || activeSeries === 'expense') && (
              <path
                d={expenseLinePath}
                fill="none"
                stroke={expenseColor}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#expenseGlow)"
              />
            )}

            {/* Month Dots and Axis Labels */}
            {monthData.map((pt, idx) => {
              const isHovered = hoveredMonthIndex === idx;
              return (
                <g key={pt.label}>
                  {/* Income Dot */}
                  {(activeSeries === 'all' || activeSeries === 'income') && (
                    <g>
                      {isHovered && (
                        <circle
                          cx={pt.x}
                          cy={pt.incY}
                          r={10}
                          fill={incomeColor}
                          opacity={0.25}
                          className="chart-dot-pulse"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.incY}
                        r={isHovered ? 5.5 : 4}
                        fill={incomeColor}
                        stroke="#ffffff"
                        strokeWidth={isHovered ? 2 : 0}
                        className="chart-dot"
                      />
                    </g>
                  )}

                  {/* Expense Dot */}
                  {(activeSeries === 'all' || activeSeries === 'expense') && (
                    <g>
                      {isHovered && (
                        <circle
                          cx={pt.x}
                          cy={pt.expY}
                          r={10}
                          fill={expenseColor}
                          opacity={0.25}
                          className="chart-dot-pulse"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.expY}
                        r={isHovered ? 5.5 : 4}
                        fill={expenseColor}
                        stroke="#ffffff"
                        strokeWidth={isHovered ? 2 : 0}
                        className="chart-dot"
                      />
                    </g>
                  )}

                  {/* X Axis Label */}
                  <text
                    x={pt.x}
                    y="176"
                    className={`axis-label ${isHovered ? 'axis-label-active' : ''}`}
                    textAnchor="middle"
                    fontWeight={isHovered ? '700' : '500'}
                    fill={isHovered ? (theme === 'dark' ? '#f0f4f2' : '#1a221e') : undefined}
                  >
                    {pt.label}
                  </text>

                  {/* Wide Hitzone rectangle for super smooth hover detection */}
                  <rect
                    x={pt.x - 35}
                    y="15"
                    width="70"
                    height="155"
                    fill="transparent"
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHoveredMonthIndex(idx)}
                    onMouseLeave={() => setHoveredMonthIndex(null)}
                  />
                </g>
              );
            })}

            {/* Interactive Floating Tooltip */}
            {hoveredMonthIndex !== null && (() => {
              const pt = monthData[hoveredMonthIndex];
              const tooltipWidth = 114;
              const tooltipHeight = 52;
              let tooltipX = pt.x - tooltipWidth / 2;
              if (tooltipX < 10) tooltipX = 10;
              if (tooltipX + tooltipWidth > 490) tooltipX = 490 - tooltipWidth;
              const tooltipY = 10;

              const net = pt.income - pt.expense;

              return (
                <g filter="url(#tooltipShadow)" style={{ pointerEvents: 'none' }}>
                  <rect
                    x={tooltipX}
                    y={tooltipY}
                    width={tooltipWidth}
                    height={tooltipHeight}
                    rx="8"
                    fill={theme === 'dark' ? '#1b221d' : '#ffffff'}
                    stroke={theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'}
                    strokeWidth="1"
                  />
                  {/* Tooltip Header: Month & Net */}
                  <text
                    x={tooltipX + 8}
                    y={tooltipY + 15}
                    fontSize="9.5"
                    fontWeight="700"
                    fill={theme === 'dark' ? '#e2e8e4' : '#2d3732'}
                  >
                    {pt.label}
                  </text>
                  <text
                    x={tooltipX + tooltipWidth - 8}
                    y={tooltipY + 15}
                    fontSize="8.5"
                    fontWeight="600"
                    fill={net >= 0 ? (theme === 'dark' ? '#5FAF7A' : '#225A39') : '#C26D40'}
                    textAnchor="end"
                  >
                    {net >= 0 ? `+€${net.toLocaleString()}` : `-€${Math.abs(net).toLocaleString()}`}
                  </text>

                  {/* Tooltip Income Row */}
                  <circle cx={tooltipX + 12} cy={tooltipY + 28} r="3" fill={incomeColor} />
                  <text
                    x={tooltipX + 19}
                    y={tooltipY + 31}
                    fontSize="8.5"
                    fontWeight="500"
                    fill={theme === 'dark' ? '#9eb3a6' : '#5a6860'}
                  >
                    Inc:
                  </text>
                  <text
                    x={tooltipX + tooltipWidth - 8}
                    y={tooltipY + 31}
                    fontSize="8.5"
                    fontWeight="700"
                    fill={incomeColor}
                    textAnchor="end"
                  >
                    €{pt.income.toLocaleString()}
                  </text>

                  {/* Tooltip Expense Row */}
                  <circle cx={tooltipX + 12} cy={tooltipY + 41} r="3" fill={expenseColor} />
                  <text
                    x={tooltipX + 19}
                    y={tooltipY + 44}
                    fontSize="8.5"
                    fontWeight="500"
                    fill={theme === 'dark' ? '#9eb3a6' : '#5a6860'}
                  >
                    Exp:
                  </text>
                  <text
                    x={tooltipX + tooltipWidth - 8}
                    y={tooltipY + 44}
                    fontSize="8.5"
                    fontWeight="700"
                    fill={expenseColor}
                    textAnchor="end"
                  >
                    €{pt.expense.toLocaleString()}
                  </text>
                </g>
              );
            })()}
          </svg>
        </div>

        {/* Legend with active toggle filters */}
        <div className="chart-legend">
          <button
            className={`legend-item-btn ${activeSeries === 'income' ? 'active' : ''} ${activeSeries === 'expense' ? 'dimmed' : ''}`}
            onClick={() => setActiveSeries(activeSeries === 'income' ? 'all' : 'income')}
            title="Click to toggle Income focus"
          >
            <span className="legend-dot income-dot" style={{ backgroundColor: incomeColor }}></span>
            <span>Income</span>
          </button>
          <button
            className={`legend-item-btn ${activeSeries === 'expense' ? 'active' : ''} ${activeSeries === 'income' ? 'dimmed' : ''}`}
            onClick={() => setActiveSeries(activeSeries === 'expense' ? 'all' : 'expense')}
            title="Click to toggle Expense focus"
          >
            <span className="legend-dot expense-dot" style={{ backgroundColor: expenseColor }}></span>
            <span>Expense</span>
          </button>
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
              <span className="cat-val">{formatMoney(-1180, displayCurrency)}</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-rent" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Groceries</span>
              <span className="cat-val">{formatMoney(-106.39, displayCurrency)}</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-groceries" style={{ width: '42%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Utilities</span>
              <span className="cat-val">{formatMoney(-74.90, displayCurrency)}</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-utilities" style={{ width: '32%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Transport</span>
              <span className="cat-val">{formatMoney(-68.90, displayCurrency)}</span>
            </div>
            <div className="progress-track">
              <div className="progress-bar bar-transport" style={{ width: '28%' }}></div>
            </div>
          </div>

          <div className="cat-item">
            <div className="cat-header">
              <span className="cat-name">Leisure</span>
              <span className="cat-val">{formatMoney(-42.90, displayCurrency)}</span>
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
                  {tx.amount > 0 ? `+${formatMoney(tx.amount, displayCurrency)}` : formatMoney(tx.amount, displayCurrency)}
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
            <span className="goal-big-amount">{formatMoney(1840, displayCurrency)}</span>
            <span className="goal-target-amount">of {formatMoney(3200, displayCurrency)}</span>
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
