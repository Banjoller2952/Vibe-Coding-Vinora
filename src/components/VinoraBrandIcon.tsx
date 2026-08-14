import React from 'react';

interface VinoraBrandIconProps {
  size?: number;
  iconSize?: number;
  className?: string;
  variant?: 'green' | 'light' | 'dark' | 'transparent';
}

export const VinoraBrandIcon: React.FC<VinoraBrandIconProps> = ({
  size = 36,
  iconSize,
  className = '',
  variant = 'green',
}) => {
  const actualIconSize = iconSize || Math.round(size * 0.58);

  const getVariantStyles = () => {
    switch (variant) {
      case 'light':
        return {
          backgroundColor: '#e2e4e8',
          color: '#1b4d2e',
        };
      case 'dark':
        return {
          backgroundColor: '#272a30',
          color: '#ffffff',
        };
      case 'transparent':
        return {
          backgroundColor: 'transparent',
          color: 'currentColor',
        };
      case 'green':
      default:
        return {
          backgroundColor: '#225a39',
          color: '#ffffff',
        };
    }
  };

  const style = getVariantStyles();

  return (
    <div
      className={`vinora-brand-icon-wrapper ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: `${Math.round(size * 0.28)}px`,
        backgroundColor: style.backgroundColor,
        color: style.color,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.2s ease',
      }}
    >
      <svg
        width={actualIconSize}
        height={actualIconSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 12 4.2 C 12 8.6 15.4 12 19.8 12 C 15.4 12 12 15.4 12 19.8 C 12 15.4 8.6 12 4.2 12 C 8.6 12 12 8.6 12 4.2 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
