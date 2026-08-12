import React, { useState } from 'react';
import { X, User, Plus, ArrowRight } from 'lucide-react';
import { UserProfile } from './LoginForm';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAccount: (user: UserProfile) => void;
}

const DEMO_ACCOUNTS: UserProfile[] = [
  {
    name: 'Alex Morgan',
    email: 'alex.morgan@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'Sarah Connor',
    email: 'sarah.connor@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80',
  },
  {
    name: 'David Miller',
    email: 'david.miller@gmail.com',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
  },
];

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  onSelectAccount,
}) => {
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customEmail, setCustomEmail] = useState('');
  const [customName, setCustomName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const derivedName = customName || customEmail.split('@')[0].replace(/[\._]/g, ' ');
      const formattedName = derivedName.charAt(0).toUpperCase() + derivedName.slice(1);
      onSelectAccount({
        name: formattedName,
        email: customEmail,
      });
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div className="google-auth-overlay" onClick={onClose}>
      <div className="google-auth-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="google-auth-header">
          <div className="google-logo-wrapper">
            <svg width="22" height="22" viewBox="0 0 24 24">
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
            <span className="google-auth-title">Sign in with Google</span>
          </div>
          <button className="google-auth-close" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </div>

        <p className="google-auth-subtitle">
          Choose an account to continue to <strong>Vinora</strong>
        </p>

        {!showCustomForm ? (
          <>
            <div className="google-account-list">
              {DEMO_ACCOUNTS.map((account) => (
                <button
                  key={account.email}
                  type="button"
                  className="google-account-item"
                  onClick={() => {
                    onSelectAccount(account);
                    onClose();
                  }}
                >
                  {account.avatar ? (
                    <img src={account.avatar} alt={account.name} className="google-avatar" />
                  ) : (
                    <div className="google-avatar" style={{ background: '#4285F4', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <User size={20} />
                    </div>
                  )}
                  <div className="google-account-info">
                    <div className="google-account-name">{account.name}</div>
                    <div className="google-account-email">{account.email}</div>
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              className="google-add-account-btn"
              onClick={() => setShowCustomForm(true)}
            >
              <Plus size={16} />
              <span>Use another Google account</span>
            </button>
          </>
        ) : (
          <form onSubmit={handleCustomSubmit} className="google-custom-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="google-input"
                placeholder="Jane Doe"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Google Email</label>
              <input
                type="email"
                className="google-input"
                placeholder="your.email@gmail.com"
                value={customEmail}
                onChange={(e) => setCustomEmail(e.target.value)}
                required
              />
            </div>
            <div className="google-custom-actions">
              <button
                type="button"
                className="google-btn-secondary"
                onClick={() => setShowCustomForm(false)}
              >
                Back
              </button>
              <button
                type="submit"
                className="google-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Signing in...' : 'Continue'}
                <ArrowRight size={14} style={{ marginLeft: 6 }} />
              </button>
            </div>
          </form>
        )}

        <div className="google-auth-footer">
          To continue, Google will share your name, email address, and profile picture with Vinora.
        </div>
      </div>
    </div>
  );
};
