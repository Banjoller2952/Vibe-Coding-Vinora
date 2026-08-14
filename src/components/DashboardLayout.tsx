import React, { useState } from 'react';
import {
  Sparkles,
  LayoutDashboard,
  ArrowLeftRight,
  PiggyBank,
  PieChart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Wallet,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { UserProfile } from './LoginForm';
import { LogTransactionModal, TransactionItem } from './LogTransactionModal';
import { VinoraBrandIcon } from './VinoraBrandIcon';

interface DashboardLayoutProps {
  user: UserProfile;
  theme: 'light' | 'dark';
  onToggleTheme: (theme: 'light' | 'dark') => void;
  onSignOut: () => void;
}

const INITIAL_TRANSACTIONS: TransactionItem[] = [
  { id: '1', badge: 'GR', title: 'Whole Foods', category: 'Groceries', date: '22 Jul', amount: -64.28 },
  { id: '2', badge: 'CA', title: 'Blue Bottle Coffee', category: 'Cafés', date: '21 Jul', amount: -5.75 },
  { id: '3', badge: 'CA', title: 'Cortado', category: 'Cafés', date: '20 Jul', amount: -4.20 },
  { id: '4', badge: 'TR', title: 'Metro card top-up', category: 'Transport', date: '19 Jul', amount: -30.00 },
  { id: '5', badge: 'LE', title: 'Vinyl — Bill Evans', category: 'Leisure', date: '18 Jul', amount: -28.40 },
  { id: '6', badge: 'FR', title: 'Freelance — Poster design', category: 'Freelance', date: '15 Jul', amount: 420.00 },
];

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  user,
  theme,
  onToggleTheme,
  onSignOut,
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'transactions' | 'savings' | 'reports' | 'settings'>('dashboard');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [transactions, setTransactions] = useState<TransactionItem[]>(INITIAL_TRANSACTIONS);
  const [hoveredMonthIndex, setHoveredMonthIndex] = useState<number | null>(null);

  // Compute available balance from base 10807.51 + any new added transactions
  const totalAddedAmount = transactions.slice(INITIAL_TRANSACTIONS.length).reduce((sum, item) => sum + item.amount, 0);
  const currentBalance = 10807.51 + totalAddedAmount;

  const handleAddTransaction = (newTx: Omit<TransactionItem, 'id'>) => {
    const item: TransactionItem = {
      ...newTx,
      id: Date.now().toString(),
    };
    setTransactions([item, ...transactions]);
  };

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

  // Colors for badges
  const badgeColorMap: Record<string, string> = {
    GR: '#2E7D32',
    CA: '#C62828',
    TR: '#F57F17',
    LE: '#1565C0',
    FR: '#00838F',
    RE: '#424242',
    UT: '#6A1B9A',
  };

  // Greeting name
  const firstName = user.name.split(' ')[0].toUpperCase();

  const handleNavClick = (tab: 'dashboard' | 'transactions' | 'savings' | 'reports' | 'settings') => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="vinora-dashboard-app" data-theme={theme}>
      {/* Mobile Top Bar */}
      <header className="dash-mobile-header">
        <div className="mobile-header-left">
          <button
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="dash-logo mobile-logo">
            <VinoraBrandIcon size={32} variant={theme === 'dark' ? 'green' : 'green'} />
            <span className="logo-text">Vinora</span>
          </div>
        </div>

        <div className="mobile-header-right">
          <button
            className="mobile-theme-btn"
            onClick={() => onToggleTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <div className="mobile-user-avatar">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="user-avatar-img" />
            ) : (
              <div className="user-avatar-initials">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Backdrop overlay for mobile drawer */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`dash-sidebar ${isSidebarCollapsed ? 'collapsed' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-top">
          {/* Logo */}
          <div className="dash-logo">
            <VinoraBrandIcon size={34} variant={theme === 'dark' ? 'green' : 'green'} />
            {!isSidebarCollapsed && <span className="logo-text">Vinora</span>}
          </div>

          {/* Nav Items */}
          <nav className="dash-nav">
            <button
              className={`nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => handleNavClick('dashboard')}
              title="Dashboard"
            >
              <LayoutDashboard size={18} />
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>Dashboard</span>}
            </button>

            <button
              className={`nav-item ${activeTab === 'transactions' ? 'active' : ''}`}
              onClick={() => handleNavClick('transactions')}
              title="Transactions"
            >
              <ArrowLeftRight size={18} />
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>Transactions</span>}
            </button>

            <button
              className={`nav-item ${activeTab === 'savings' ? 'active' : ''}`}
              onClick={() => handleNavClick('savings')}
              title="Savings"
            >
              <PiggyBank size={18} />
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>Savings</span>}
            </button>

            <button
              className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
              onClick={() => handleNavClick('reports')}
              title="Reports"
            >
              <PieChart size={18} />
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>Reports</span>}
            </button>

            <div className="nav-divider"></div>

            <button
              className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
              onClick={() => handleNavClick('settings')}
              title="Settings"
            >
              <Settings size={18} />
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>Settings</span>}
            </button>
          </nav>
        </div>

        {/* Sidebar Bottom User & Collapse */}
        <div className="sidebar-bottom">
          <div className="sidebar-user-card">
            {user.avatar ? (
              <img src={user.avatar} alt={user.name} className="user-avatar-img" />
            ) : (
              <div className="user-avatar-initials">
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            {(!isSidebarCollapsed || isMobileMenuOpen) && (
              <div className="user-info-text">
                <span className="user-fullname" title={user.name}>{user.name}</span>
                <button className="btn-signout" onClick={onSignOut}>
                  <LogOut size={12} />
                  <span>SIGN OUT</span>
                </button>
              </div>
            )}
          </div>

          {/* Theme Switcher & Collapse button */}
          <div className="sidebar-action-row">
            <button
              className="dash-theme-btn"
              onClick={() => onToggleTheme(theme === 'light' ? 'dark' : 'light')}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
            >
              {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              {(!isSidebarCollapsed || isMobileMenuOpen) && <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>}
            </button>

            <button
              className="dash-collapse-btn"
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              title={isSidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
            >
              {isSidebarCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
              {!isSidebarCollapsed && <span>Collapse</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dash-main">
        <div className="dash-scroll-container">
          {activeTab !== 'dashboard' ? (
            /* Tab Placeholder Views */
            <div className="tab-placeholder-card">
              <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
              <p>You are viewing the {activeTab} panel in Vinora. Content loads seamlessly.</p>
              <button className="btn-primary-small" onClick={() => setActiveTab('dashboard')}>
                Return to Dashboard
              </button>
            </div>
          ) : (
            /* Main Dashboard View */
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
                    <button className="btn-log-tx" onClick={() => setIsLogModalOpen(true)}>
                      <Plus size={16} />
                      <span>Log a transaction</span>
                    </button>
                    <button className="btn-see-month">
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
                    <path
                      d={incomeAreaPath}
                      fill="url(#incomeGrad)"
                    />
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
                    <path
                      d={expenseAreaPath}
                      fill="url(#expenseGrad)"
                    />
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
                      <g key={pt.label} onMouseEnter={() => setHoveredMonthIndex(idx)} onMouseLeave={() => setHoveredMonthIndex(null)}>
                        <circle cx={pt.x} cy={pt.incY} r={hoveredMonthIndex === idx ? 6 : 4} fill={theme === 'dark' ? '#5FAF7A' : '#225A39'} className="chart-dot" />
                        <circle cx={pt.x} cy={pt.expY} r={hoveredMonthIndex === idx ? 6 : 4} fill="#C26D40" className="chart-dot" />
                        <text x={pt.x} y="176" className="axis-label" textAnchor="middle">{pt.label}</text>

                        {/* Interactive Tooltip on hover */}
                        {hoveredMonthIndex === idx && (
                          <g>
                            <rect x={pt.x - 45} y={10} width="90" height="34" rx="6" fill={theme === 'dark' ? '#1f2430' : '#ffffff'} stroke="rgba(0,0,0,0.15)" />
                            <text x={pt.x} y={23} fontSize="9" fontWeight="bold" fill={theme === 'dark' ? '#5FAF7A' : '#225A39'} textAnchor="middle">
                              Inc: €{pt.income}
                            </text>
                            <text x={pt.x} y={36} fontSize="9" fontWeight="bold" fill="#C26D40" textAnchor="middle">
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
                  <button className="btn-view-all" onClick={() => setActiveTab('transactions')}>
                    View all
                  </button>
                </div>

                <div className="activity-list">
                  {transactions.map((tx) => (
                    <div key={tx.id} className="activity-item">
                      <div className="activity-left">
                        <div
                          className="tx-badge"
                          style={{ backgroundColor: badgeColorMap[tx.badge] || '#546E7A' }}
                        >
                          {tx.badge}
                        </div>
                        <div className="tx-details">
                          <span className="tx-title">{tx.title}</span>
                          <span className="tx-meta">{tx.category} · {tx.date}</span>
                        </div>
                      </div>
                      <div className={`tx-amount ${tx.amount > 0 ? 'positive' : ''}`}>
                        {tx.amount > 0 ? `+€${tx.amount.toFixed(2)}` : `-€${Math.abs(tx.amount).toFixed(2)}`}
                      </div>
                    </div>
                  ))}
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

                <button className="btn-all-goals" onClick={() => setActiveTab('savings')}>
                  All savings goals
                </button>
              </div>

            </div>
          )}

          {/* Footer Bar */}
          <footer className="dash-footer">
            <div className="footer-tagline">
              Where did it come from · where did it go · are you on track · what next.
            </div>
            <div className="footer-version">
              Vinora · v1.0 · Calm by design
            </div>
          </footer>
        </div>
      </main>

      {/* Modal for Logging Transaction */}
      <LogTransactionModal
        isOpen={isLogModalOpen}
        onClose={() => setIsLogModalOpen(false)}
        onAddTransaction={handleAddTransaction}
      />
    </div>
  );
};
