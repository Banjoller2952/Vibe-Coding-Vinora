import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useGoogleAuth } from '../hooks/useGoogleAuth';
import { GoogleAuthModal } from './GoogleAuthModal';

export interface UserProfile {
  name: string;
  email: string;
  avatar?: string;
}

interface LoginFormProps {
  onSignInSuccess: (user: UserProfile) => void;
  onSwitchToRegister: () => void;
  onErrorMsg?: (msg: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSignInSuccess,
  onSwitchToRegister,
  onErrorMsg,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    isGoogleLoading,
    isModalOpen,
    triggerGoogleLogin,
    closeModal,
    handleSelectAccount,
  } = useGoogleAuth({
    onSuccess: onSignInSuccess,
    onError: onErrorMsg,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const extractedName = email.split('@')[0].replace(/[\._]/g, ' ');
      const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);
      onSignInSuccess({
        name: formattedName || 'Elena Rostova',
        email: email,
      });
    }, 600);
  };

  return (
    <div className="auth-container">
      {/* Header */}
      <div className="auth-header">
        <h2 className="auth-title">Welcome back</h2>
        <p className="auth-subtitle">Sign in to pick up where you left off.</p>
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="btn-google"
        onClick={triggerGoogleLogin}
        disabled={isLoading || isGoogleLoading}
      >
        <svg width="18" height="18" viewBox="0 0 24 24">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.31 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.21 0 10.05 0 12s.47 3.79 1.29 5.42l3.99-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
          />
        </svg>
        <span>{isGoogleLoading ? 'Connecting to Google...' : 'Sign in with Google'}</span>
      </button>

      {/* Divider */}
      <div className="divider-container">
        <div className="divider-line"></div>
        <span className="divider-text">OR</span>
        <div className="divider-line"></div>
      </div>

      {/* Login Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="email-input">
            Email
          </label>
          <div className="input-wrapper">
            <input
              id="email-input"
              type="email"
              className="form-input"
              placeholder="yours@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="password-input">
            Password
          </label>
          <div className="input-wrapper">
            <input
              id="password-input"
              type={showPassword ? 'text' : 'password'}
              className="form-input"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
            />
            <button
              type="button"
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button type="submit" className="btn-primary" disabled={isLoading || isGoogleLoading}>
          {isLoading ? (
            <span>Signing in...</span>
          ) : (
            <>
              <span>Sign in</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        New to Vinora?{' '}
        <span className="auth-link" onClick={onSwitchToRegister} role="button" tabIndex={0}>
          Sign up
        </span>
      </div>

      {/* Fallback Google Auth Modal */}
      <GoogleAuthModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSelectAccount={handleSelectAccount}
      />
    </div>
  );
};


