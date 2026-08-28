import React, { useState, useMemo } from 'react';
import { formatMoney } from '../lib/currency';
import { ExtendedTransactionItem } from './TransactionsView';

interface ReportsViewProps {
  theme?: 'light' | 'dark' | 'system';
  displayCurrency?: string;
  transactions?: ExtendedTransactionItem[];
}

interface CategoryExpense {
  name: string;
  amount: number;
  color: string;
}

const BASE_MONTHLY_DATA = [
  { label: 'Feb', income: 3100, expense: 2100 },
  { label: 'Mar', income: 3350, expense: 2400 },
  { label: 'Apr', income: 3400, expense: 2050 },
  { label: 'May', income: 3850, expense: 2480 },
  { label: 'Jun', income: 3450, expense: 2300 },
];

export const ReportsView: React.FC<ReportsViewProps> = ({ theme, displayCurrency = 'EUR', transactions = [] }) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Current Month (July) metrics calculated dynamically
  const currentIncome = useMemo(() => {
    const added = transactions.reduce((sum, tx) => (tx.amount > 0 ? sum + tx.amount : sum), 0);
    return 3870.0 + added;
  }, [transactions]);

  const currentExpense = useMemo(() => {
    const added = transactions.reduce((sum, tx) => (tx.amount < 0 ? sum + Math.abs(tx.amount) : sum), 0);
    return 1483.04 + added;
  }, [transactions]);

  const netSaved = currentIncome - currentExpense;
  const savingsRate = currentIncome > 0 ? Math.round((netSaved / currentIncome) * 100) : 0;

  const monthlyData = [
    ...BASE_MONTHLY_DATA,
    { label: 'Jul', income: currentIncome, expense: currentExpense },
  ];

  const categoryExpenses: CategoryExpense[] = useMemo(() => {
    const map: Record<string, CategoryExpense> = {
      Rent: { name: 'Rent', amount: 1180.0, color: '#1a261f' },
      Groceries: { name: 'Groceries', amount: 106.39, color: '#2e7d32' },
      Utilities: { name: 'Utilities', amount: 74.9, color: '#3b827e' },
      Transport: { name: 'Transport', amount: 68.9, color: '#d4a359' },
      Leisure: { name: 'Leisure', amount: 42.9, color: '#4a7bb0' },
      Cafés: { name: 'Cafés', amount: 9.95, color: '#c26d40' },
    };

    transactions.forEach((tx) => {
      if (tx.amount < 0) {
        const cat = tx.category || 'Leisure';
        if (map[cat]) {
          map[cat].amount += Math.abs(tx.amount);
        } else {
          map[cat] = { name: cat, amount: Math.abs(tx.amount), color: '#5b7cb8' };
        }
      }
    });

    return Object.values(map);
  }, [transactions]);

  // Dynamic Y-axis scale calculation for Bar Chart
  const yMax = useMemo(() => {
    let maxVal = 0;
    monthlyData.forEach((d) => {
      if (d.income > maxVal) maxVal = d.income;
      if (d.expense > maxVal) maxVal = d.expense;
    });
    if (maxVal === 0) return 4000;
    const rawHeadroom = maxVal * 1.15;
    const step = rawHeadroom > 5000 ? 2000 : 1000;
    return Math.ceil(rawHeadroom / step) * step;
  }, [monthlyData]);

  // Total Category Expense for Donut chart
  const totalCategoryExpense = categoryExpenses.reduce((sum, item) => sum + item.amount, 0);

  // Donut chart geometry (Radius R = 56, Circumference = 2 * PI * 56 = 351.86)
  const donutR = 56;
  const donutC = 2 * Math.PI * donutR;
  let accumulatedLength = 0;

  return (
    <div className="reports-view-container">
      {/* Top Page Header */}
      <div className="reports-header">
        <span className="reports-top-label">The Month in Full</span>
        <h1 className="reports-title">Reports</h1>
        <p className="reports-subtitle">
          Numbers that explain themselves—no dashboard to interpret, no charts to decode
        </p>
      </div>

      {/* Row 1: 4 Stat Cards */}
      <div className="reports-stats-grid">
        <div className="reports-stat-card">
          <span className="stat-card-label">Income</span>
          <span className="stat-card-value">
            {formatMoney(currentIncome, displayCurrency)}
          </span>
        </div>

        <div className="reports-stat-card">
          <span className="stat-card-label">Expenses</span>
          <span className="stat-card-value">
            {formatMoney(currentExpense, displayCurrency)}
          </span>
        </div>

        <div className="reports-stat-card">
          <span className="stat-card-label">Net saved</span>
          <span className="stat-card-value positive">
            +{formatMoney(netSaved, displayCurrency)}
          </span>
        </div>

        <div className="reports-stat-card">
          <span className="stat-card-label">Savings rate</span>
          <span className="stat-card-value">{savingsRate}%</span>
        </div>
      </div>

      {/* Row 2: Charts Section (Income vs Expense Bar Chart & Category Distribution Donut) */}
      <div className="reports-charts-grid">
        {/* Left Card: Income vs. Expense Bar Chart */}
        <div className="reports-card bar-chart-card">
          <div className="card-header">
            <h3 className="card-title">Income vs. expense</h3>
            <span className="card-subtitle">Six-month comparison</span>
          </div>

          <div className="bar-chart-wrapper">
            <svg viewBox="0 0 500 210" className="bar-chart-svg">
              {/* Grid Lines */}
              <line x1="45" y1="25" x2="480" y2="25" className="chart-grid-line" />
              <line x1="45" y1="62.5" x2="480" y2="62.5" className="chart-grid-line" />
              <line x1="45" y1="100" x2="480" y2="100" className="chart-grid-line" />
              <line x1="45" y1="137.5" x2="480" y2="137.5" className="chart-grid-line" />
              <line x1="45" y1="175" x2="480" y2="175" className="chart-grid-line" />

              {/* Y-Axis Labels */}
              <text x="35" y="29" className="chart-axis-label" textAnchor="end">{yMax}</text>
              <text x="35" y="66.5" className="chart-axis-label" textAnchor="end">{Math.round(yMax * 0.75)}</text>
              <text x="35" y="104" className="chart-axis-label" textAnchor="end">{Math.round(yMax * 0.5)}</text>
              <text x="35" y="141.5" className="chart-axis-label" textAnchor="end">{Math.round(yMax * 0.25)}</text>
              <text x="35" y="179" className="chart-axis-label" textAnchor="end">0</text>

              {/* Bars for Each Month */}
              {monthlyData.map((item, i) => {
                const colX = 75 + i * 70;
                const incHeight = Math.min(150, Math.max(0, (item.income / yMax) * 150));
                const expHeight = Math.min(150, Math.max(0, (item.expense / yMax) * 150));

                const incY = 175 - incHeight;
                const expY = 175 - expHeight;

                const isHovered = hoveredBarIndex === i;
                const topBarY = Math.min(incY, expY);
                const tooltipY = Math.max(5, topBarY - 38);

                return (
                  <g
                    key={item.label}
                    className="bar-month-group"
                    onMouseEnter={() => setHoveredBarIndex(i)}
                    onMouseLeave={() => setHoveredBarIndex(null)}
                  >
                    {/* Income Bar (Green) */}
                    <rect
                      x={colX - 18}
                      y={incY}
                      width="20"
                      height={incHeight}
                      rx="4"
                      className={`bar-rect bar-income ${isHovered ? 'highlight' : ''}`}
                    />

                    {/* Expense Bar (Orange) */}
                    <rect
                      x={colX + 4}
                      y={expY}
                      width="20"
                      height={expHeight}
                      rx="4"
                      className={`bar-rect bar-expense ${isHovered ? 'highlight' : ''}`}
                    />

                    {/* X-Axis Label */}
                    <text
                      x={colX + 3}
                      y="195"
                      className={`chart-axis-label ${isHovered ? 'active' : ''}`}
                      textAnchor="middle"
                    >
                      {item.label}
                    </text>

                    {/* Hover Tooltip */}
                    {isHovered && (
                      <g className="bar-tooltip-group" style={{ pointerEvents: 'none' }}>
                        <rect
                          x={colX - 54}
                          y={tooltipY}
                          width="114"
                          height="42"
                          rx="8"
                          className="bar-tooltip-bg"
                        />
                        <text
                          x={colX - 44}
                          y={tooltipY + 17}
                          className="bar-tooltip-text inc"
                          fontSize="10"
                          fontWeight="600"
                          fontFamily="Inter, system-ui, sans-serif"
                        >
                          Inc: {formatMoney(item.income, displayCurrency)}
                        </text>
                        <text
                          x={colX - 44}
                          y={tooltipY + 32}
                          className="bar-tooltip-text exp"
                          fontSize="10"
                          fontWeight="600"
                          fontFamily="Inter, system-ui, sans-serif"
                        >
                          Exp: {formatMoney(item.expense, displayCurrency)}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Card: Category Distribution Donut Chart */}
        <div className="reports-card distribution-card">
          <div className="card-header">
            <h3 className="card-title">Distribution</h3>
            <span className="card-subtitle">This month's expenses by category</span>
          </div>

          <div className="distribution-content">
            {/* Donut SVG */}
            <div className="donut-chart-wrapper">
              <svg viewBox="0 0 160 160" className="donut-chart-svg">
                <g transform="rotate(-90 80 80)">
                  {categoryExpenses.map((cat) => {
                    const segmentLen = totalCategoryExpense > 0 ? (cat.amount / totalCategoryExpense) * donutC : 0;
                    const strokeDash = `${Math.max(0, segmentLen - 1.5)} ${donutC - segmentLen + 1.5}`;
                    const strokeOffset = -accumulatedLength;
                    accumulatedLength += segmentLen;

                    const isHovered = hoveredCategory === cat.name;

                    // Theme responsive adjustments for Rent segment dark color
                    const strokeColor =
                      cat.name === 'Rent' && theme === 'dark' ? '#26332a' : cat.color;

                    return (
                      <circle
                        key={cat.name}
                        cx="80"
                        cy="80"
                        r={donutR}
                        fill="transparent"
                        stroke={strokeColor}
                        strokeWidth={isHovered ? "22" : "18"}
                        strokeDasharray={strokeDash}
                        strokeDashoffset={strokeOffset}
                        className="donut-segment"
                        onMouseEnter={() => setHoveredCategory(cat.name)}
                        onMouseLeave={() => setHoveredCategory(null)}
                      />
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Category Legend List */}
            <div className="category-legend-list">
              {categoryExpenses.map((cat) => {
                const isHovered = hoveredCategory === cat.name;
                const dotColor = cat.name === 'Rent' && theme === 'dark' ? '#5faf7a' : cat.color;

                return (
                  <div
                    key={cat.name}
                    className={`legend-row ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setHoveredCategory(cat.name)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className="legend-row-left">
                      <span className="cat-legend-dot" style={{ backgroundColor: dotColor }}></span>
                      <span className="cat-legend-name">{cat.name}</span>
                    </div>
                    <span className="cat-legend-val">
                      {formatMoney(-cat.amount, displayCurrency)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: "In plain words" Summary Card */}
      <div className="reports-card plain-words-card">
        <h3 className="card-title">In plain words</h3>

        <div className="plain-words-grid">
          <div className="plain-word-col">
            <p>
              You brought in <strong>{formatMoney(currentIncome, displayCurrency)}</strong> and spent <strong>{formatMoney(currentExpense, displayCurrency)}</strong> in July.
            </p>
          </div>

          <div className="plain-word-col">
            <p>
              That's a savings rate of <strong>{savingsRate}%</strong> — {savingsRate >= 20 ? "well above" : "below"} the 20% you'd need to reach your Kyoto goal on time.
            </p>
          </div>

          <div className="plain-word-col">
            <p>
              Groceries and rent make up the bulk of your outflow, as they usually do. Nothing unusual worth flagging this month.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
