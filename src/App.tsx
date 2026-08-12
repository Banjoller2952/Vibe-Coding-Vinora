import { useState, useEffect } from 'react';
import { AuthLayout } from './components/AuthLayout';
import { DashboardLayout } from './components/DashboardLayout';
import { UserProfile } from './components/LoginForm';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [user, setUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  const handleToggleAuthMode = (newMode: 'login' | 'register') => {
    setAuthMode(newMode);
  };

  const handleLoginSuccess = (loggedInUser: UserProfile) => {
    setUser(loggedInUser);
  };

  const handleSignOut = () => {
    setUser(null);
  };

  return (
    <>
      {user === null ? (
        <AuthLayout
          theme={theme}
          authMode={authMode}
          onToggleTheme={handleToggleTheme}
          onToggleAuthMode={handleToggleAuthMode}
          onLoginSuccess={handleLoginSuccess}
        />
      ) : (
        <DashboardLayout
          user={user}
          theme={theme}
          onToggleTheme={handleToggleTheme}
          onSignOut={handleSignOut}
        />
      )}
    </>
  );
}

export default App;
