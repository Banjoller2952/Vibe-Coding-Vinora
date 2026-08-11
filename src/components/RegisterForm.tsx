import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

interface RegisterFormProps {
  onRegisterSuccess: (name: string, email: string) => void;
  onSwitchToLogin: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onRegisterSuccess, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onRegisterSuccess(name, email);
    }, 600);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onRegisterSuccess('Google User', 'user@google.com');
    }, 600);
  };

  return (
    <div className="auth-container">
      {/* Header */}
      <div className="auth-header">
        <h2 className="auth-title">Create your account</h2>
        <p className="auth-subtitle">A minute to set up, a clearer month ahead.</p>
      </div>

      {/* Google Button */}
      <button
        type="button"
        className="btn-google"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
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
        <span>Sign in with Google</span>
      </button>

      {/* Divider */}
      <div className="divider-container">
        <div className="divider-line"></div>
        <span className="divider-text">OR</span>
        <div className="divider-line"></div>
      </div>

      {/* Register Form */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
        <div className="form-group">
          <label className="form-label" htmlFor="name-input">
            Name
          </label>
          <div className="input-wrapper">
            <input
              id="name-input"
              type="text"
              className="form-input"
              placeholder="John Doe/Jane Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="register-email-input">
            Email
          </label>
          <div className="input-wrapper">
            <input
              id="register-email-input"
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
          <label className="form-label" htmlFor="register-password-input">
            Password
          </label>
          <div className="input-wrapper">
            <input
              id="register-password-input"
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

        <button type="submit" className="btn-primary" disabled={isLoading}>
          {isLoading ? (
            <span>Creating account...</span>
          ) : (
            <>
              <span>Sign up</span>
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="auth-footer">
        Already have an account?{' '}
        <span className="auth-link" onClick={onSwitchToLogin} role="button" tabIndex={0}>
          Sign in
        </span>
      </div>
    </div>
  );
};
