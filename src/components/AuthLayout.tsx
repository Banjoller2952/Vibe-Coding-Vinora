import React, { useState } from 'react';
import { BrandPanel } from './BrandPanel';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
import { ThemeToggle } from './ThemeToggle';
import { CheckCircle2 } from 'lucide-react';

interface AuthLayoutProps {
  theme: 'light' | 'dark';
  authMode: 'login' | 'register';
  onToggleTheme: (theme: 'light' | 'dark') => void;
  onToggleAuthMode: (mode: 'login' | 'register') => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  theme,
  authMode,
  onToggleTheme,
  onToggleAuthMode,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSignInSuccess = (userEmail: string) => {
    setToastMessage(`Welcome back! Signed in as ${userEmail}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleRegisterSuccess = (name: string, userEmail: string) => {
    setToastMessage(`Account created successfully for ${name} (${userEmail})!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  return (
    <div className="vinora-layout" data-theme={theme}>
      {/* Floating Controls Bar (Theme + Auth Mode) */}
      <ThemeToggle
        theme={theme}
        authMode={authMode}
        onToggleTheme={onToggleTheme}
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
          />
        ) : (
          <RegisterForm
            onRegisterSuccess={handleRegisterSuccess}
            onSwitchToLogin={() => onToggleAuthMode('login')}
          />
        )}
      </div>

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 size={20} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};
