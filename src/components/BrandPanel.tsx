import React from 'react';

export const BrandPanel: React.FC = () => {
  return (
    <div className="brand-panel">
      {/* Brand Header */}
      <div className="brand-header">
        <div className="brand-logo-icon" aria-label="Vinora logo">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* 4-point sparkle icon */}
            <path d="M12 2v20M2 12h20M6 6l12 12M18 6L6 18" opacity="0" />
            <path d="M12 3c0 4.5-4.5 9-9 9 4.5 0 9 4.5 9 9 0-4.5 4.5-9 9-9-4.5 0-9-4.5-9-9z" fill="currentColor" stroke="none" />
          </svg>
        </div>
        <span className="brand-title">Vinora</span>
      </div>

      {/* Hero Quote Content */}
      <div className="brand-content">
        <h1 className="hero-heading">
          Where did it come<br />
          from, where did it go.
        </h1>
        <p className="hero-description">
          A calm ledger for income, spending and savings goals. No noise, no gamification — just a clear view of your month.
        </p>
      </div>

      {/* Brand Footer Tagline */}
      <div className="brand-footer">
        CALM BY DESIGN
      </div>
    </div>
  );
};
