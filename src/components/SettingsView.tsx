import React from 'react';
import { Sun, Moon, Laptop, RefreshCw } from 'lucide-react';
import { CURRENCIES, formatMoney, getRatesLastUpdatedText } from '../lib/currency';

const CURRENCY_LIST = Object.values(CURRENCIES);

interface SettingsViewProps {
  theme: 'light' | 'dark' | 'system';
  onToggleTheme: (theme: 'light' | 'dark' | 'system') => void;
  displayCurrency: string;
  setDisplayCurrency: (code: string) => void;
  convertCurrency: string;
  setConvertCurrency: (code: string) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  theme,
  onToggleTheme,
  displayCurrency,
  setDisplayCurrency,
  convertCurrency,
  setConvertCurrency,
}) => {
  const displayObj = CURRENCIES[displayCurrency] || CURRENCIES.EUR;
  const convertObj = CURRENCIES[convertCurrency] || CURRENCIES.IDR;

  // Calculate live conversion rate
  const formattedRate = (convertObj.rateToEUR / displayObj.rateToEUR).toLocaleString('en-US', {
    maximumFractionDigits: 2,
  });

  const exampleDisplayVal = 1240.5;
  const exampleFormattedStr = formatMoney(exampleDisplayVal, displayObj.code);
  const exampleConvertedStr = formatMoney(exampleDisplayVal, convertObj.code);

  return (
    <div className="settings-view-container">
      {/* Page Header */}
      <div className="settings-page-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">
          Set which currency your numbers are shown in and how Vinora looks.
        </p>
      </div>

      {/* Main Settings Cards List */}
      <div className="settings-cards-stack">
        {/* SECTION 1: CURRENCY */}
        <div className="settings-card-box">
          <div className="settings-card-header">
            <div className="settings-icon-badge">
              <RefreshCw size={18} />
            </div>
            <div className="settings-header-text">
              <h2 className="settings-card-title">Currency</h2>
              <p className="settings-card-subtitle">
                Select the currency your amounts are displayed and written in, then select the currency you want to convert them to.
              </p>
            </div>
          </div>

          {/* Sub-block A: Display as */}
          <div className="settings-sub-section">
            <span className="settings-sub-label">Display as</span>
            <div className="currency-grid-4">
              {CURRENCY_LIST.map((c) => {
                const isSelected = displayCurrency === c.code;
                return (
                  <button
                    key={`disp-${c.code}`}
                    type="button"
                    className={`currency-card-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => setDisplayCurrency(c.code)}
                  >
                    <div className="currency-symbol">{c.symbol}</div>
                    <div className="currency-code">{c.code}</div>
                    <div className="currency-name">{c.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sub-block B: See convert */}
          <div className="settings-sub-section">
            <span className="settings-sub-label">See convert</span>
            <div className="currency-grid-4">
              {CURRENCY_LIST.map((c) => {
                const isSelected = convertCurrency === c.code;
                return (
                  <button
                    key={`conv-${c.code}`}
                    type="button"
                    className={`currency-card-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => setConvertCurrency(c.code)}
                  >
                    <div className="currency-symbol">{c.symbol}</div>
                    <div className="currency-code">{c.code}</div>
                    <div className="currency-name">{c.name}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Exchange Rate Live Banner Box */}
          <div className="exchange-rate-banner-box">
            <div className="banner-formula-row">
              <RefreshCw size={15} className="banner-refresh-icon" />
              <span className="banner-formula-text">
                1 {displayObj.code} = {formattedRate} {convertObj.code}
              </span>
            </div>
            <p className="banner-timestamp">
              Live rate · {getRatesLastUpdatedText()}
            </p>
            <p className="banner-example">
              Example: {exampleFormattedStr} shows as {exampleConvertedStr}
            </p>
          </div>
        </div>

        {/* SECTION 2: APPEARANCE */}
        <div className="settings-card-box">
          <div className="settings-card-header">
            <div className="settings-icon-badge">
              <Sun size={18} />
            </div>
            <div className="settings-header-text">
              <h2 className="settings-card-title">Appearance</h2>
              <p className="settings-card-subtitle">
                Currently showing {theme} mode.
              </p>
            </div>
          </div>

          {/* Mode Selection 3 Cards */}
          <div className="appearance-grid-3">
            <button
              type="button"
              className={`appearance-card-item ${theme === 'light' ? 'selected' : ''}`}
              onClick={() => onToggleTheme('light')}
            >
              <div className="appearance-text-group">
                <div className="appearance-mode-title">Light</div>
                <div className="appearance-mode-sub">Paper-quiet, daytime</div>
              </div>
              <Sun size={18} className="appearance-mode-icon" />
            </button>

            <button
              type="button"
              className={`appearance-card-item ${theme === 'dark' ? 'selected' : ''}`}
              onClick={() => onToggleTheme('dark')}
            >
              <div className="appearance-text-group">
                <div className="appearance-mode-title">Dark</div>
                <div className="appearance-mode-sub">Low glare, evening</div>
              </div>
              <Moon size={18} className="appearance-mode-icon" />
            </button>

            <button
              type="button"
              className={`appearance-card-item ${theme === 'system' ? 'selected' : ''}`}
              onClick={() => onToggleTheme('system')}
            >
              <div className="appearance-text-group">
                <div className="appearance-mode-title">System</div>
                <div className="appearance-mode-sub">Follows your device</div>
              </div>
              <Laptop size={18} className="appearance-mode-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
