import { useState, useEffect } from 'react';
import { AuthLayout } from './components/AuthLayout';

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleToggleTheme = (newTheme: 'light' | 'dark') => {
    setTheme(newTheme);
  };

  const handleToggleAuthMode = (newMode: 'login' | 'register') => {
    setAuthMode(newMode);
  };

  return (
    <AuthLayout
      theme={theme}
      authMode={authMode}
      onToggleTheme={handleToggleTheme}
      onToggleAuthMode={handleToggleAuthMode}
    />
  );
}

export default App;
