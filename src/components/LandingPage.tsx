import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Zap,
  Activity,
  Shield,
  Target,
  BarChart3,
  Globe,
  Repeat,
  ShieldCheck,
  Pencil,
  Sun,
  Moon,
} from 'lucide-react';
import { VinoraBrandIcon } from './VinoraBrandIcon';

interface LandingPageProps {
  theme: 'light' | 'dark' | 'system';
  onToggleTheme: (theme: 'light' | 'dark' | 'system') => void;
  onOpenApp: () => void;
}

const CURRENCIES = [
  { code: 'USD', name: 'US Dollar', rateToUsd: 1, example: '1 USD = 1.00 USD — base currency' },
  { code: 'EUR', name: 'Euro', rateToUsd: 0.92, example: '1 EUR = 1.09 USD — updated live' },
  { code: 'IDR', name: 'Indonesian Rupiah', rateToUsd: 16350, example: '1 USD = 16,350 IDR — calculated when you open the app' },
  { code: 'GBP', name: 'British Pound', rateToUsd: 0.79, example: '1 GBP = 1.27 USD — live conversion' },
  { code: 'JPY', name: 'Japanese Yen', rateToUsd: 154.5, example: '1 USD = 154.50 JPY — real-time rates' },
  { code: 'SGD', name: 'Singapore Dollar', rateToUsd: 1.35, example: '1 SGD = 0.74 USD — instant calculation' },
  { code: 'AUD', name: 'Australian Dollar', rateToUsd: 1.52, example: '1 AUD = 0.66 USD — multi-currency books' },
  { code: 'MYR', name: 'Malaysian Ringgit', rateToUsd: 4.71, example: '1 MYR = 0.21 USD — seamless conversion' },
];

export const LandingPage: React.FC<LandingPageProps> = ({
  theme,
  onToggleTheme,
  onOpenApp,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('IDR');
  const [hoveredBarIndex, setHoveredBarIndex] = useState<number | null>(4);

  const selectedCurrObj = CURRENCIES.find((c) => c.code === selectedCurrency) || CURRENCIES[2];

  const chartData = [
    { label: 'May', height: '40%', amount: '€ 1,120.00' },
    { label: 'Jun', height: '65%', amount: '€ 1,840.50' },
    { label: 'Jul', height: '45%', amount: '€ 1,290.00' },
    { label: 'Aug', height: '85%', amount: '€ 2,410.00' },
    { label: 'Sep', height: '100%', amount: '€ 2,847.50', isCurrent: true },
    { label: 'Oct', height: '55%', amount: '€ 1,560.00' },
  ];

  const toggleNextTheme = () => {
    if (theme === 'light') onToggleTheme('dark');
    else onToggleTheme('light');
  };

  return (
    <div className="vinora-landing-container" data-theme={theme}>
      {/* 1. Header Navigation Bar */}
      <header className="landing-header">
        <div className="landing-header-inner">
          <div className="landing-logo" onClick={onOpenApp} style={{ cursor: 'pointer' }}>
            <VinoraBrandIcon size={34} variant="green" />
            <span className="landing-logo-text">Vinora</span>
          </div>

          <div className="landing-header-actions">
            <button
              className="landing-theme-btn"
              onClick={toggleNextTheme}
              title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <button className="landing-open-btn" onClick={onOpenApp}>
              <span>Open Vinora</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="landing-main">
        {/* 2. Hero Section */}
        <section className="landing-hero-section">
          <div className="landing-eyebrow">CALM BY DESIGN</div>
          <h1 className="landing-hero-title">
            Where did it come from,
            <br />
            where did it go.
          </h1>
          <p className="landing-hero-subtitle">
            A calm ledger for income, spending and savings goals. No noise,
            <br className="desktop-only-br" /> no gamification — just a clear view of your month.
          </p>

          <div className="landing-hero-cta-group">
            <button className="landing-hero-primary-btn" onClick={onOpenApp}>
              <span>Start your ledger</span>
              <ArrowRight size={18} />
            </button>
            <span className="landing-hero-subtext">Free 14-day trial · No card required</span>
          </div>

          {/* Interactive Mockup Widget */}
          <div className="landing-mockup-wrapper">
            <div className="landing-mockup-card">
              <div className="landing-mockup-header">
                <div className="landing-mockup-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
              </div>

              <div className="landing-mockup-body">
                <div className="landing-mockup-top-row">
                  <div>
                    <span className="landing-mockup-label">This month</span>
                    <div className="landing-mockup-value-row">
                      <span className="landing-mockup-value">
                        {hoveredBarIndex !== null
                          ? chartData[hoveredBarIndex].amount
                          : '€ 2,847.50'}
                      </span>
                      <span className="landing-mockup-badge">+12%</span>
                    </div>
                  </div>
                </div>

                {/* Bar Chart Visualizer */}
                <div className="landing-mockup-chart">
                  {chartData.map((bar, idx) => {
                    const isHovered = hoveredBarIndex === idx;
                    const isHighlight = bar.isCurrent || isHovered;
                    return (
                      <div
                        key={idx}
                        className={`landing-chart-bar-wrapper ${isHighlight ? 'active' : ''}`}
                        onMouseEnter={() => setHoveredBarIndex(idx)}
                        onMouseLeave={() => setHoveredBarIndex(4)}
                      >
                        <div
                          className="landing-chart-bar-fill"
                          style={{ height: bar.height }}
                        />
                        <span className="landing-chart-bar-label">{bar.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Entry Skeleton lines */}
                <div className="landing-mockup-skeletons">
                  <div className="skeleton-line long" />
                  <div className="skeleton-line medium" />
                  <div className="skeleton-line short" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Stat Highlights Bar */}
        <section className="landing-stats-section">
          <div className="landing-container-inner">
            <div className="landing-stats-grid">
              <div className="landing-stat-card">
                <div className="landing-stat-icon">
                  <Calendar size={18} />
                </div>
                <div className="landing-stat-value">8</div>
                <div className="landing-stat-label">Days remaining in period</div>
              </div>

              <div className="landing-stat-card">
                <div className="landing-stat-icon">
                  <Zap size={18} />
                </div>
                <div className="landing-stat-value">~5s</div>
                <div className="landing-stat-label">To log a transaction</div>
              </div>

              <div className="landing-stat-card">
                <div className="landing-stat-icon">
                  <Activity size={18} />
                </div>
                <div className="landing-stat-value">Live</div>
                <div className="landing-stat-label">FX conversion rates</div>
              </div>

              <div className="landing-stat-card">
                <div className="landing-stat-icon">
                  <Shield size={18} />
                </div>
                <div className="landing-stat-value">0</div>
                <div className="landing-stat-label">Ads, trackers, or noise</div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section className="landing-features-section">
          <div className="landing-container-inner">
            <div className="landing-section-header">
              <span className="landing-eyebrow">EVERYTHING YOU NEED</span>
              <h2 className="landing-section-title">A ledger, not a casino.</h2>
              <p className="landing-section-subtitle">
                Vinora does a few things carefully, instead of everything badly.
              </p>
            </div>

            <div className="landing-features-grid">
              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <ArrowUpRight size={20} />
                </div>
                <h3 className="landing-feature-title">Income & spending</h3>
                <p className="landing-feature-desc">
                  Log every earned dollar, or category spent in. Your month, total & broken down fast.
                </p>
              </div>

              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <Target size={20} />
                </div>
                <h3 className="landing-feature-title">Savings goals</h3>
                <p className="landing-feature-desc">
                  Set a goal, watch it fill. Progress without the anxiety of daily targets.
                </p>
              </div>

              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <BarChart3 size={20} />
                </div>
                <h3 className="landing-feature-title">Calm reports</h3>
                <p className="landing-feature-desc">
                  Where did it come from, where did it go — instant breakdown charts.
                </p>
              </div>

              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <Globe size={20} />
                </div>
                <h3 className="landing-feature-title">Any currency</h3>
                <p className="landing-feature-desc">
                  USD, EUR, IDR, and more with live conversion rates built in.
                </p>
              </div>

              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <Repeat size={20} />
                </div>
                <h3 className="landing-feature-title">Convert from, convert to</h3>
                <p className="landing-feature-desc">
                  Keep your books in one currency, view them in another — rates update automatically.
                </p>
              </div>

              <div className="landing-feature-card">
                <div className="landing-feature-icon">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="landing-feature-title">Private by default</h3>
                <p className="landing-feature-desc">
                  Your data stays on your device, encrypted, agreed, and reserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. How It Works - Three quiet habits */}
        <section className="landing-habits-section">
          <div className="landing-container-inner">
            <div className="landing-section-header">
              <span className="landing-eyebrow">HOW IT WORKS</span>
              <h2 className="landing-section-title">Three quiet habits.</h2>
            </div>

            <div className="landing-habits-grid">
              <div className="landing-habit-card">
                <div className="landing-habit-top">
                  <div className="landing-habit-icon">
                    <Pencil size={20} />
                  </div>
                  <span className="landing-habit-num">01</span>
                </div>
                <h3 className="landing-habit-title">Write it down</h3>
                <p className="landing-habit-desc">
                  Income or spending. One line per transaction — a few seconds a day.
                </p>
              </div>

              <div className="landing-habit-card">
                <div className="landing-habit-top">
                  <div className="landing-habit-icon">
                    <Target size={20} />
                  </div>
                  <span className="landing-habit-num">02</span>
                </div>
                <h3 className="landing-habit-title">Set a goal</h3>
                <p className="landing-habit-desc">
                  A car, a laptop, an emergency fund. Name it, price it, watch it grow.
                </p>
              </div>

              <div className="landing-habit-card">
                <div className="landing-habit-top">
                  <div className="landing-habit-icon">
                    <BarChart3 size={20} />
                  </div>
                  <span className="landing-habit-num">03</span>
                </div>
                <h3 className="landing-habit-title">See the month</h3>
                <p className="landing-habit-desc">
                  Simple reports show the shape of your money — no spreadsheets required.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Interactive Currency Converter Spotlight */}
        <section className="landing-currency-section">
          <div className="landing-container-inner">
            <div className="landing-section-header">
              <span className="landing-eyebrow">ANY CURRENCY</span>
              <h2 className="landing-section-title">Convert from, convert to.</h2>
              <p className="landing-section-subtitle">
                Keep your books in one currency and view them in another — rates update automatically.
              </p>
            </div>

            {/* Currency Chips */}
            <div className="landing-currency-chips">
              {CURRENCIES.map((curr) => (
                <button
                  key={curr.code}
                  className={`landing-currency-chip ${selectedCurrency === curr.code ? 'active' : ''}`}
                  onClick={() => setSelectedCurrency(curr.code)}
                >
                  {curr.code}
                </button>
              ))}
            </div>

            {/* Live Rate Container */}
            <div className="landing-currency-banner">
              <div className="landing-currency-banner-inner">
                <Repeat size={16} className="landing-currency-icon" />
                <span>{selectedCurrObj.example}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Final Banner CTA */}
        <section className="landing-cta-banner-section">
          <div className="landing-container-inner">
            <div className="landing-cta-card">
              <h2 className="landing-cta-title">Start your calm ledger today.</h2>
              <p className="landing-cta-subtitle">Free to use. Your money, finally calm.</p>
              <button className="landing-cta-btn" onClick={onOpenApp}>
                <span>Open Vinora</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 8. Footer */}
      <footer className="landing-footer">
        <div className="landing-header-inner">
          <div className="landing-footer-left">
            <VinoraBrandIcon size={24} variant="green" />
            <span className="landing-footer-logo-text">Vinora</span>
          </div>

          <div className="landing-footer-right">
            <span>Calm by design</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
