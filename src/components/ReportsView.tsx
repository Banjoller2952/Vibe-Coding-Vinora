import React, { useState } from 'react';

interface ReportsViewProps {
  theme?: 'light' | 'dark';
}

interface CategoryExpense {
  name: string;
  amount: number;
  color: string;
}

const MONTHLY_DATA = [
  { label: 'Feb', income: 3100, expense: 2100 },
  { label: 'Mar', income: 3350, expense: 2400 },
  { label: 'Apr', income: 3400, expense: 2050 },
  { label: 'May', income: 3850, expense: 2480 },
  { label: 'Jun', income: 3450, expense: 2300 },
  { label: 'Jul', income: 3870, expense: 1483.04 },
];

const CATEGORY_EXPENSES: CategoryExpense[] = [
  { name: 'Rent', amount: 1180.0, color: '#1a261f' },
  { name: 'Groceries', amount: 106.39, color: '#2e7d32' },
  { name: 'Utilities', amount: 74.9, color: '#3b827e' },
  { name: 'Transport', amount: 68.9, color: '#d4a359' },
  { name: 'Leisure', amount: 42.9, color: '#4a7bb0' },
  { name: 'Cafés', amount: 9.95, color: '#c26d40' },
];

export const ReportsView: React.FC<ReportsViewProps> = ({ theme }) => {
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Current Month (July) metrics
  const currentIncome = 3870.0;
  const currentExpense = 1483.04;
  const netSaved = currentIncome - currentExpense; // 2386.96
  const savingsRate = Math.round((netSaved / currentIncome) * 100); // 62%

  // Total Category Expense for Donut chart
  const totalCategoryExpense = CATEGORY_EXPENSES.reduce((sum, item) => sum + item.amount, 0);

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
            €{currentIncome.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        <div className="reports-stat-card">
          <span className="stat-card-label">Expenses</span>
          <span className="stat-card-value">
            €{currentExpense.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>

        <div className="reports-stat-card">
          <span className="stat-card-label">Net saved</span>
          <span className="stat-card-value positive">
            +€{netSaved.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
              <text x="35" y="29" className="chart-axis-label" textAnchor="end">4000</text>
              <text x="35" y="66.5" className="chart-axis-label" textAnchor="end">3000</text>
              <text x="35" y="104" className="chart-axis-label" textAnchor="end">2000</text>
              <text x="35" y="141.5" className="chart-axis-label" textAnchor="end">1000</text>
              <text x="35" y="179" className="chart-axis-label" textAnchor="end">0</text>

              {/* Bars for Each Month */}
              {MONTHLY_DATA.map((item, i) => {
                const colX = 75 + i * 70;
                const incHeight = (item.income / 4000) * 150;
                const expHeight = (item.expense / 4000) * 150;

                const incY = 175 - incHeight;
                const expY = 175 - expHeight;

                const isHovered = hoveredBarIndex === i;

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
                          x={colX - 45}
                          y={Math.min(incY, expY) - 38}
                          width="96"
                          height="32"
                          rx="6"
                          className="bar-tooltip-bg"
                        />
                        <text
                          x={colX + 3}
                          y={Math.min(incY, expY) - 24}
                          className="bar-tooltip-inc"
                          textAnchor="middle"
                        >
                          Inc: €{item.income}
                        </text>
                        <text
                          x={colX + 3}
                          y={Math.min(incY, expY) - 12}
                          className="bar-tooltip-exp"
                          textAnchor="middle"
                        >
                          Exp: €{item.expense}
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
                  {CATEGORY_EXPENSES.map((cat) => {
                    const segmentLen = (cat.amount / totalCategoryExpense) * donutC;
                    const strokeDash = `${segmentLen - 1.5} ${donutC - segmentLen + 1.5}`;
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
              {CATEGORY_EXPENSES.map((cat) => {
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
                      -€{cat.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
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
              You brought in <strong>€3,870.00</strong> and spent <strong>€1,483.04</strong> in July.
            </p>
          </div>

          <div className="plain-word-col">
            <p>
              That's a savings rate of <strong>62%</strong> — well above the 20% you'd need to reach your Kyoto goal on time.
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
