import React, { useState } from 'react';
import {
  LayoutDashboard,
  ArrowLeftRight,
  PiggyBank,
  PieChart,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { UserProfile } from './LoginForm';
import { LogTransactionModal, TransactionItem } from './LogTransactionModal';
import { VinoraBrandIcon } from './VinoraBrandIcon';
import { TransactionsView, ExtendedTransactionItem } from './TransactionsView';
import { DashboardView } from './DashboardView';
import { SavingsView } from './SavingsView';
import { ReportsView } from './ReportsView';
import { SettingsView } from './SettingsView';

interface DashboardLayoutProps {
  user: UserProfile;
  theme: 'light' | 'dark' | 'system';
  onToggleTheme: (theme: 'light' | 'dark' | 'system') => void;
  onSignOut: () => void;
}

const INITIAL_TRANSACTIONS: ExtendedTransactionItem[] = [
  {
    id: 'tx-1',
    badge: 'GR',
    title: 'Whole Foods',
    category: 'Groceries',
    note: 'Weekly shop',
    subtitle: 'Groceries: Weekly shop',
    date: '22 Jul',
    dateGroup: 'Wednesday 22 July',
    amount: -64.28,
  },
  {
    id: 'tx-2',
    badge: 'CA',
    title: 'Blue Bottle Coffee',
    category: 'Cafés',
    note: '',
    subtitle: 'Cafés',
    date: '21 Jul',
    dateGroup: 'Tuesday 21 July',
    amount: -5.75,
  },
  {
    id: 'tx-3',
    badge: 'CA',
    title: 'Cortado',
    category: 'Cafés',
    note: '',
    subtitle: 'Cafés',
    date: '20 Jul',
    dateGroup: 'Monday 20 July',
    amount: -4.20,
  },
  {
    id: 'tx-4',
    badge: 'TR',
    title: 'Metro card top-up',
    category: 'Transport',
    note: '',
    subtitle: 'Transport',
    date: '19 Jul',
    dateGroup: 'Sunday 19 July',
    amount: -30.00,
  },
  {
    id: 'tx-5',
    badge: 'LE',
    title: 'Vinyl — Bill Evans',
    category: 'Leisure',
    note: '',
    subtitle: 'Leisure',
    date: '18 Jul',
    dateGroup: 'Saturday 18 July',
    amount: -28.40,
  },
  {
    id: 'tx-6',
    badge: 'FR',
    title: 'Freelance',
    category: 'Freelance',
    note: 'Poster design',
    subtitle: 'Freelance: Poster design',
    date: '15 Jul',
    dateGroup: 'Wednesday 15 July',
    amount: 420.00,
  },
  {
    id: 'tx-7',
    badge: 'GR',
    title: "Trader Joe's",
    category: 'Groceries',
    note: '',
    subtitle: 'Groceries',
    date: '14 Jul',
    dateGroup: 'Tuesday 14 July',
    amount: -42.11,
  },
  {
    id: 'tx-8',
    badge: 'LE',
    title: 'Cinema — Perfect Days',
    category: 'Leisure',
    note: '',
    subtitle: 'Leisure',
    date: '12 Jul',
    dateGroup: 'Sunday 12 July',
    amount: -14.50,
  },
  {
    id: 'tx-9',
    badge: 'UT',
    title: 'Electricity',
    category: 'Utilities',
    note: '',
    subtitle: 'Utilities',
    date: '10 Jul',
    dateGroup: 'Friday 10 July',
    amount: -74.90,
  },
  {
    id: 'tx-10',
    badge: 'TR',
    title: 'Uber to airport',
    category: 'Transport',
    note: '',
    subtitle: 'Transport',
    date: '08 Jul',
    dateGroup: 'Wednesday 08 July',
    amount: -38.00,
  },
  {
    id: 'tx-11',
    badge: 'SA',
    title: 'Salary — Acme Studio',
    category: 'Salary',
    note: '',
    subtitle: 'Salary',
    date: '01 Jul',
    dateGroup: 'Wednesday 01 July',
    amount: 3450.00,
  },
  {
    id: 'tx-12',
    badge: 'RE',
    title: 'Studio rent — July',
    category: 'Rent',
    note: '',
    subtitle: 'Rent',
    date: '01 Jul',
    dateGroup: 'Wednesday 01 July',
    amount: -1180.00,
  },
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
  const [editingTransaction, setEditingTransaction] = useState<ExtendedTransactionItem | null>(null);
  const [transactions, setTransactions] = useState<ExtendedTransactionItem[]>(INITIAL_TRANSACTIONS);

  // Global Currency Preferences State
  const [displayCurrency, setDisplayCurrency] = useState<string>('EUR');
  const [convertCurrency, setConvertCurrency] = useState<string>('IDR');

  // Compute available balance from base 10807.51 + any new added transactions
  const totalAddedAmount = transactions.slice(INITIAL_TRANSACTIONS.length).reduce((sum, item) => sum + item.amount, 0);
  const currentBalance = 10807.51 + totalAddedAmount;

  const handleAddTransaction = (newTx: Omit<TransactionItem, 'id'>) => {
    const today = new Date();
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dayName = dayNames[today.getDay()];
    const dateNum = String(today.getDate()).padStart(2, '0');
    const monthName = monthNames[today.getMonth()];
    const dateGroup = `${dayName} ${dateNum} ${monthName}`;

    const item: ExtendedTransactionItem = {
      ...newTx,
      id: Date.now().toString(),
      subtitle: newTx.note ? `${newTx.category}: ${newTx.note}` : newTx.category,
      dateGroup: dateGroup,
    };
    setTransactions([item, ...transactions]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const handleRestoreTransaction = (tx: ExtendedTransactionItem) => {
    setTransactions((prev) => [tx, ...prev]);
  };

  const handleOpenEditModal = (tx: ExtendedTransactionItem) => {
    setEditingTransaction(tx);
    setIsLogModalOpen(true);
  };

  const handleEditTransaction = (updatedTx: ExtendedTransactionItem) => {
    setTransactions(transactions.map((tx) => (tx.id === updatedTx.id ? {
      ...updatedTx,
      subtitle: updatedTx.note ? `${updatedTx.category}: ${updatedTx.note}` : updatedTx.category,
    } : tx)));
    setEditingTransaction(null);
  };

  const handleUpdateTransactionColor = (id: string, color?: string) => {
    setTransactions(transactions.map((tx) => (tx.id === id ? { ...tx, color } : tx)));
  };

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

          {/* Collapse button */}
          <div className="sidebar-action-row">
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
          {activeTab === 'transactions' ? (
            <TransactionsView
              transactions={transactions}
              onOpenLogModal={() => {
                setEditingTransaction(null);
                setIsLogModalOpen(true);
              }}
              onDeleteTransaction={handleDeleteTransaction}
              onEditTransaction={handleOpenEditModal}
              onUpdateTransactionColor={handleUpdateTransactionColor}
              onRestoreTransaction={handleRestoreTransaction}
              displayCurrency={displayCurrency}
            />
          ) : activeTab === 'savings' ? (
            <SavingsView theme={theme} displayCurrency={displayCurrency} />
          ) : activeTab === 'reports' ? (
            <ReportsView theme={theme} displayCurrency={displayCurrency} transactions={transactions} />
          ) : activeTab === 'settings' ? (
            <SettingsView
              theme={theme}
              onToggleTheme={onToggleTheme}
              displayCurrency={displayCurrency}
              setDisplayCurrency={setDisplayCurrency}
              convertCurrency={convertCurrency}
              setConvertCurrency={setConvertCurrency}
            />
          ) : (
            /* Main Dashboard View */
            <DashboardView
              user={user}
              theme={theme}
              transactions={transactions}
              currentBalance={currentBalance}
              onOpenLogModal={() => setIsLogModalOpen(true)}
              onNavigateTab={(tab) => setActiveTab(tab)}
              displayCurrency={displayCurrency}
            />
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

      {/* Modal for Logging / Editing Transaction */}
      <LogTransactionModal
        isOpen={isLogModalOpen}
        onClose={() => {
          setIsLogModalOpen(false);
          setEditingTransaction(null);
        }}
        onAddTransaction={handleAddTransaction}
        initialData={editingTransaction}
        onEditTransaction={handleEditTransaction}
        displayCurrency={displayCurrency}
      />
    </div>
  );
};
