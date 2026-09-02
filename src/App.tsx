import { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthLayout } from './components/AuthLayout';
import { DashboardLayout } from './components/DashboardLayout';
import { UserProfile } from './components/LoginForm';
import { auth, onAuthStateChanged, signOut } from './lib/firebase';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('light');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'dashboard'>('landing');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    if (theme === 'system') {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
          email: firebaseUser.email || '',
          avatar: firebaseUser.photoURL || undefined,
          uid: firebaseUser.uid,
        });
        setCurrentView('dashboard');
      } else {
        setUser(null);
      }
      setInitializing(false);
    });

    return () => unsubscribe();
  }, []);

  const handleToggleTheme = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
  };

  const handleToggleAuthMode = (newMode: 'login' | 'register') => {
    setAuthMode(newMode);
  };

  const handleLoginSuccess = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
    setCurrentView('dashboard');
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out:', error);
    }
    setUser(null);
    setCurrentView('landing');
  };

  if (initializing) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          background: 'var(--bg-main, #0b0f19)',
          color: 'var(--text-main, #f3f4f6)',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              border: '3px solid rgba(255, 255, 255, 0.1)',
              borderTopColor: '#225a39',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              margin: '0 auto 1rem',
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          <p style={{ margin: 0, fontSize: '0.95rem', opacity: 0.8 }}>Loading Vinora...</p>
        </div>
      </div>
    );
  }

  // If user is logged in and view is dashboard
  if (user && currentView === 'dashboard') {
    return (
      <DashboardLayout
        user={user}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onSignOut={handleSignOut}
      />
    );
  }

  // If view is landing
  if (currentView === 'landing') {
    return (
      <LandingPage
        theme={theme}
        onToggleTheme={handleToggleTheme}
        onOpenApp={() => {
          if (user) {
            setCurrentView('dashboard');
          } else {
            setCurrentView('auth');
          }
        }}
      />
    );
  }

  // Fallback to AuthLayout (login/register screen)
  return (
    <AuthLayout
      theme={theme}
      authMode={authMode}
      onToggleTheme={handleToggleTheme}
      onToggleAuthMode={handleToggleAuthMode}
      onLoginSuccess={handleLoginSuccess}
    />
  );
}

export default App;
