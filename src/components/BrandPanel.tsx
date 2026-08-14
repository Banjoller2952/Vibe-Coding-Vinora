import React from 'react';
import { VinoraBrandIcon } from './VinoraBrandIcon';

export const BrandPanel: React.FC = () => {
  return (
    <div className="brand-panel">
      {/* Brand Header */}
      <div className="brand-header">
        <VinoraBrandIcon size={38} variant="green" />
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
