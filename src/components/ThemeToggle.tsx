import React from 'react';
import { Sun, Moon, LogIn, UserPlus } from 'lucide-react';

interface ControlsProps {
  theme: 'light' | 'dark';
  authMode: 'login' | 'register';
  onToggleTheme: (theme: 'light' | 'dark') => void;
  onToggleAuthMode: (mode: 'login' | 'register') => void;
}

export const ThemeToggle: React.FC<ControlsProps> = ({
  theme,
  authMode,
  onToggleTheme,
  onToggleAuthMode,
}) => {
  return (
    <div className="theme-switcher-bar" role="region" aria-label="Theme & Page Controls">
      {/* Auth View Switcher */}
      <div style={{ display: 'flex', gap: '2px', paddingRight: '6px', borderRight: '1px solid rgba(150, 150, 150, 0.2)' }}>
        <button
          type="button"
          className={`theme-toggle-btn ${authMode === 'login' ? 'active' : ''}`}
          onClick={() => onToggleAuthMode('login')}
          aria-label="Switch to Login page"
        >
          <LogIn size={13} />
          <span>Login</span>
        </button>
        <button
          type="button"
          className={`theme-toggle-btn ${authMode === 'register' ? 'active' : ''}`}
          onClick={() => onToggleAuthMode('register')}
          aria-label="Switch to Register page"
        >
          <UserPlus size={13} />
          <span>Register</span>
        </button>
      </div>

      {/* Theme Switcher */}
      <div style={{ display: 'flex', gap: '2px', paddingLeft: '6px' }}>
        <button
          type="button"
          className={`theme-toggle-btn ${theme === 'light' ? 'active' : ''}`}
          onClick={() => onToggleTheme('light')}
          aria-label="Switch to Light mode"
        >
          <Sun size={13} />
          <span>Light</span>
        </button>
        <button
          type="button"
          className={`theme-toggle-btn ${theme === 'dark' ? 'active' : ''}`}
          onClick={() => onToggleTheme('dark')}
          aria-label="Switch to Dark mode"
        >
          <Moon size={13} />
          <span>Dark</span>
        </button>
      </div>
    </div>
  );
};
