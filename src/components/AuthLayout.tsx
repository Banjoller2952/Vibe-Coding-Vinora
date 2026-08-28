import React, { useState } from 'react';
import { BrandPanel } from './BrandPanel';
import { LoginForm, UserProfile } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ThemeToggle } from './ThemeToggle';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthLayoutProps {
  theme: 'light' | 'dark' | 'system';
  authMode: 'login' | 'register';
  onToggleTheme?: (theme: 'light' | 'dark' | 'system') => void;
  onToggleAuthMode: (mode: 'login' | 'register') => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  theme,
  authMode,
  onToggleAuthMode,
  onLoginSuccess,
}) => {
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleSignInSuccess = (user: UserProfile) => {
    showToast(`Welcome back! Signed in as ${user.name}`, 'success');
    setTimeout(() => {
      onLoginSuccess(user);
    }, 400);
  };

  const handleRegisterSuccess = (user: UserProfile) => {
    showToast(`Account created successfully for ${user.name}! Redirecting...`, 'success');
    setTimeout(() => {
      onLoginSuccess(user);
    }, 400);
  };

  const handleErrorMsg = (msg: string) => {
    showToast(msg, 'error');
  };

  return (
    <div className="vinora-layout" data-theme={theme}>
      {/* Floating Controls Bar */}
      <ThemeToggle
        authMode={authMode}
        onToggleAuthMode={onToggleAuthMode}
      />

      {/* Left Brand / Quote Hero Section */}
      <BrandPanel />

      {/* Right Login / Register Auth Section */}
      <div className="auth-panel">
        {authMode === 'login' ? (
          <LoginForm
            onSignInSuccess={handleSignInSuccess}
            onSwitchToRegister={() => onToggleAuthMode('register')}
            onErrorMsg={handleErrorMsg}
          />
        ) : (
          <RegisterForm
            onRegisterSuccess={handleRegisterSuccess}
            onSwitchToLogin={() => onToggleAuthMode('login')}
            onErrorMsg={handleErrorMsg}
          />
        )}
      </div>

      {/* Toast Feedback */}
      {toast && (
        <div
          className="toast-notification"
          style={toast.type === 'error' ? { background: '#991B1B' } : undefined}
        >
          {toast.type === 'success' ? (
            <CheckCircle2 size={20} color="#10B981" />
          ) : (
            <AlertCircle size={20} color="#FCA5A5" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

