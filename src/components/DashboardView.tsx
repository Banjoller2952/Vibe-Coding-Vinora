import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
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

const ALL_12_MONTHS_BASE = [
  { label: 'Jan', income: 2800, expense: 1950 },
  { label: 'Feb', income: 3100, expense: 2100 },
  { label: 'Mar', income: 3350, expense: 2400 },
  { label: 'Apr', income: 3400, expense: 2050 },
  { label: 'May', income: 3850, expense: 2480 },
  { label: 'Jun', income: 3450, expense: 2300 },
  { label: 'Jul', income: 3870, expense: 1483.04 },
  { label: 'Aug', income: 3600, expense: 2200 },
  { label: 'Sep', income: 3900, expense: 2500 },
  { label: 'Oct', income: 4100, expense: 2600 },
  { label: 'Nov', income: 3750, expense: 2400 },
  { label: 'Dec', income: 4500, expense: 3100 },
];

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

  // Timeframe Navigation State: '6M' or '12M', startMonthIndex (1 = Feb, so Feb-Jul)
  const [timeframeMode, setTimeframeMode] = useState<'6M' | '12M'>('6M');
  const [startMonthIndex, setStartMonthIndex] = useState<number>(1);

  // Dynamic July income, expenses, net, and spending percentage
  const julyIncome = useMemo(() => {
    const addedIncome = transactions.reduce((sum, tx) => (tx.amount > 0 ? sum + tx.amount : sum), 0);
    return 3870.0 + addedIncome;
  }, [transactions]);

  const julyExpenses = useMemo(() => {
    const addedExpenses = transactions.reduce((sum, tx) => (tx.amount < 0 ? sum + Math.abs(tx.amount) : sum), 0);
    return 1483.04 + addedExpenses;
  }, [transactions]);

  const julyNet = julyIncome - julyExpenses;
  const spendingPct = Math.min(100, Math.round((julyExpenses / julyIncome) * 100));

  const categoryTotals = useMemo(() => {
    const map: Record<string, number> = {
      Rent: 1180.0,
      Groceries: 106.39,
      Utilities: 74.9,
      Transport: 68.9,
      Leisure: 42.9,
    };

    transactions.forEach((tx) => {
      if (tx.amount < 0) {
        const cat = tx.category || 'Leisure';
        map[cat] = (map[cat] || 0) + Math.abs(tx.amount);
      }
    });

    return map;
  }, [transactions]);

  // Dynamic 12-Month Data Construction
  const allMonthsData = useMemo(() => {
    return ALL_12_MONTHS_BASE.map((m) => {
      if (m.label === 'Jul') {
        return { ...m, income: julyIncome, expense: julyExpenses };
      }
      return m;
    });
  }, [julyIncome, julyExpenses]);

  // Selected Visible Months based on 6M / 12M and startMonthIndex
  const visibleData = useMemo(() => {
    if (timeframeMode === '12M') {
      return allMonthsData.map((d, i) => ({
        ...d,
        x: 50 + i * (430 / 11),
      }));
    }
    const sliced = allMonthsData.slice(startMonthIndex, startMonthIndex + 6);
    return sliced.map((d, i) => ({
      ...d,
      x: 60 + i * 80,
    }));
  }, [allMonthsData, timeframeMode, startMonthIndex]);

  const maxVal = Math.max(...visibleData.flatMap((d) => [d.income, d.expense]), 1000);
  const yMax = Math.ceil((maxVal * 1.15) / 1000) * 1000 || 4000;
  const topY = 25;
  const bottomY = 155;
  const chartHeight = bottomY - topY;

  const monthData = visibleData.map((pt) => ({
    ...pt,
    incY: Math.max(topY, Math.min(bottomY, bottomY - (pt.income / yMax) * chartHeight)),
    expY: Math.max(topY, Math.min(bottomY, bottomY - (pt.expense / yMax) * chartHeight)),
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

  const isDark = theme === 'dark' || (theme === 'system' && (typeof document !== 'undefined' && document.documentElement.getAttribute('data-theme') === 'dark'));
  const incomeColor = isDark ? '#75E1A7' : '#225A39';
  const expenseColor = isDark ? '#FDB022' : '#B1683E';

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
              <div className={`balance-badge ${julyNet >= 0 ? 'positive' : 'negative'}`}>
                {julyNet >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                <span>{julyNet >= 0 ? '+' : ''}{formatMoney(julyNet, displayCurrency)} this month</span>
              </div>
            </div>
          </div>

          <p className="hero-insight-text">
            You're spending {spendingPct}% of what you earn this month. {spendingPct <= 50 ? "On this pace, you'll close July with a comfortable margin." : spendingPct <= 80 ? "On this pace, you're maintaining a moderate budget margin." : "Keep an eye on expenses as you approach your monthly income limit."}
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
          <div className="stat-amount">{formatMoney(julyIncome, displayCurrency)}</div>
          <div className="stat-growth positive">+12% vs June</div>
        </div>

        <div className="stat-card expenses-card">
          <div className="stat-card-header">
            <span className="stat-title">EXPENSES · JULY</span>
            <div className="stat-icon-wrapper">
              <TrendingUp size={16} />
            </div>
          </div>
          <div className="stat-amount">{formatMoney(julyExpenses, displayCurrency)}</div>
          <div className="stat-growth negative">-8% vs June</div>
        </div>
      </div>

      {/* ROW 2: Six Months of Flow Chart & Where It Went */}
      <div className="dash-card chart-card">
        <div className="card-header-flex">
          <div>
            <h3 className="card-title">Flow of funds</h3>
            <p className="card-subtitle">Income against expenses, monthly</p>
          </div>
          
          <div className="chart-range-controls">
            {timeframeMode === '6M' && (
              <button
                type="button"
                className="btn-range-arrow"
                disabled={startMonthIndex <= 0}
                onClick={() => setStartMonthIndex((prev) => Math.max(0, prev - 1))}
                title="Previous 6 months"
              >
                <ChevronLeft size={14} />
              </button>
            )}

            <span className="card-range-badge">
              {timeframeMode === '6M'
                ? `${monthData[0]?.label} — ${monthData[monthData.length - 1]?.label}`
                : 'Jan — Dec'}
            </span>

            {timeframeMode === '6M' && (
              <button
                type="button"
                className="btn-range-arrow"
                disabled={startMonthIndex >= 6}
                onClick={() => setStartMonthIndex((prev) => Math.min(6, prev + 1))}
                title="Next 6 months"
              >
                <ChevronRight size={14} />
              </button>
            )}

            <div className="timeframe-toggle-pill">
              <button
                type="button"
                className={`timeframe-btn ${timeframeMode === '6M' ? 'active' : ''}`}
                onClick={() => setTimeframeMode('6M')}
              >
                6M
              </button>
              <button
                type="button"
                className={`timeframe-btn ${timeframeMode === '12M' ? 'active' : ''}`}
                onClick={() => setTimeframeMode('12M')}
              >
                12M
              </button>
            </div>
          </div>
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
            <text x="30" y="24" className="axis-label" textAnchor="end">{yMax}</text>
            <text x="30" y="59" className="axis-label" textAnchor="end">{Math.round(yMax * 0.75)}</text>
            <text x="30" y="94" className="axis-label" textAnchor="end">{Math.round(yMax * 0.5)}</text>
            <text x="30" y="129" className="axis-label" textAnchor="end">{Math.round(yMax * 0.25)}</text>
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

            {/* Month X Axis Labels */}
            {monthData.map((pt, idx) => {
              const isHovered = hoveredMonthIndex === idx;
              return (
                <g key={pt.label}>
                  {/* X Axis Label */}
                  <text
                    x={pt.x}
                    y="176"
                    className={`axis-label ${isHovered ? 'axis-label-active' : ''}`}
                    textAnchor="middle"
                    fontWeight={isHovered ? '700' : '500'}
                    fill={isHovered ? (isDark ? '#F7F7F7' : '#181D27') : undefined}
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

          </svg>

          {/* HTML Overlay Tooltip & Dots for 100% geometrically round circle nodes */}
          <div className="chart-html-dots-overlay">
            {monthData.map((pt, idx) => {
              const isHovered = hoveredMonthIndex === idx;
              const leftPct = (pt.x / 500) * 100;
              const incTopPct = (pt.incY / 180) * 100;
              const expTopPct = (pt.expY / 180) * 100;

              return (
                <React.Fragment key={pt.label}>
                  {(activeSeries === 'all' || activeSeries === 'income') && (
                    <div
                      className={`chart-html-dot ${isHovered ? 'hovered' : ''}`}
                      style={{
                        left: `${leftPct}%`,
                        top: `${incTopPct}%`,
                        backgroundColor: incomeColor,
                      }}
                      onMouseEnter={() => setHoveredMonthIndex(idx)}
                      onMouseLeave={() => setHoveredMonthIndex(null)}
                    />
                  )}
                  {(activeSeries === 'all' || activeSeries === 'expense') && (
                    <div
                      className={`chart-html-dot expense ${isHovered ? 'hovered' : ''}`}
                      style={{
                        left: `${leftPct}%`,
                        top: `${expTopPct}%`,
                        backgroundColor: expenseColor,
                      }}
                      onMouseEnter={() => setHoveredMonthIndex(idx)}
                      onMouseLeave={() => setHoveredMonthIndex(null)}
                    />
                  )}
                </React.Fragment>
              );
            })}

            {/* HTML Floating Tooltip Box */}
            {hoveredMonthIndex !== null && (() => {
              const pt = monthData[hoveredMonthIndex];
              const leftPct = (pt.x / 500) * 100;
              const net = pt.income - pt.expense;

              return (
                <div
                  className="chart-html-tooltip-card"
                  style={{
                    left: `${Math.max(12, Math.min(88, leftPct))}%`,
                  }}
                >
                  <div className="tooltip-header-row">
                    <span className="tooltip-month-label">{pt.label}</span>
                    <span className={`tooltip-net-val ${net >= 0 ? 'positive' : 'negative'}`}>
                      {net >= 0 ? `+${formatMoney(net, displayCurrency)}` : formatMoney(net, displayCurrency)}
                    </span>
                  </div>

                  <div className="tooltip-data-row">
                    <span className="tooltip-row-left">
                      <svg width="8" height="8" viewBox="0 0 8 8" className="tooltip-legend-svg">
                        <circle cx="4" cy="4" r="3.5" fill={incomeColor} />
                      </svg>
                      <span className="tooltip-row-label">Inc:</span>
                    </span>
                    <span className="tooltip-row-val" style={{ color: incomeColor }}>
                      {formatMoney(pt.income, displayCurrency)}
                    </span>
                  </div>

                  <div className="tooltip-data-row">
                    <span className="tooltip-row-left">
                      <svg width="8" height="8" viewBox="0 0 8 8" className="tooltip-legend-svg">
                        <circle cx="4" cy="4" r="3.5" fill={expenseColor} />
                      </svg>
                      <span className="tooltip-row-label">Exp:</span>
                    </span>
                    <span className="tooltip-row-val" style={{ color: expenseColor }}>
                      {formatMoney(pt.expense, displayCurrency)}
                    </span>
                  </div>
                </div>
              );
            })()}
          </div>
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
          {Object.entries(categoryTotals).map(([catName, val]) => {
            const barPct = Math.min(100, Math.round((val / (julyExpenses || 1)) * 100));
            const catColors: Record<string, string> = {
              Rent: '#1a261f',
              Groceries: '#2e7d32',
              Utilities: '#3b827e',
              Transport: '#d4a359',
              Leisure: '#4a7bb0',
            };
            const barColor = catColors[catName] || '#5b7cb8';

            return (
              <div key={catName} className="cat-item">
                <div className="cat-header">
                  <span className="cat-name">{catName}</span>
                  <span className="cat-val">{formatMoney(-val, displayCurrency)}</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-bar"
                    style={{ width: `${barPct}%`, backgroundColor: barColor, transition: 'width 0.3s ease' }}
                  ></div>
                </div>
              </div>
            );
          })}
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
