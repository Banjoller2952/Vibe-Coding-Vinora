import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';

interface ControlsProps {
  authMode: 'login' | 'register';
  onToggleAuthMode: (mode: 'login' | 'register') => void;
}

export const ThemeToggle: React.FC<ControlsProps> = ({
  authMode,
  onToggleAuthMode,
}) => {
  return (
    <div className="theme-switcher-bar" role="region" aria-label="Page Controls">
      <div style={{ display: 'flex', gap: '2px' }}>
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
    </div>
  );
};
