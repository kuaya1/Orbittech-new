"use client";

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  style?: React.CSSProperties;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  style = {},
}: ButtonProps) {
  const getButtonStyles = () => {
    const baseStyles: React.CSSProperties = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-headline)',
      fontWeight: 'var(--font-weight-semibold)',
      borderRadius: 'var(--radius-lg)',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'all 0.2s ease-in-out',
      opacity: disabled ? 0.5 : 1,
      outline: 'none',
    };

    const sizeStyles = {
      sm: {
        padding: 'var(--space-sm) var(--space-md)',
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-tight)',
      },
      md: {
        padding: 'var(--space-md) var(--space-lg)',
        fontSize: 'var(--text-base)',
        lineHeight: 'var(--leading-normal)',
      },
      lg: {
        padding: 'var(--space-lg) var(--space-xl)',
        fontSize: 'var(--text-lg)',
        lineHeight: 'var(--leading-normal)',
      },
    };

    const variantStyles = {
      primary: {
        backgroundColor: 'var(--accent-blue)',
        color: 'var(--text-inverse)',
        boxShadow: 'var(--shadow-sm)',
      },
      secondary: {
        backgroundColor: 'var(--brand-slate)',
        color: 'var(--text-inverse)',
        boxShadow: 'var(--shadow-sm)',
      },
      tertiary: {
        backgroundColor: 'transparent',
        color: 'var(--accent-blue)',
        border: '2px solid var(--accent-blue)',
      },
    };

    return {
      ...baseStyles,
      ...sizeStyles[size],
      ...variantStyles[variant],
    };
  };

  const getHoverStyles = () => {
    const hoverStyles = {
      primary: {
        backgroundColor: 'var(--brand-navy)',
        boxShadow: 'var(--shadow-md)',
      },
      secondary: {
        backgroundColor: 'var(--brand-navy)',
        boxShadow: 'var(--shadow-md)',
      },
      tertiary: {
        backgroundColor: 'var(--accent-blue)',
        color: 'var(--text-inverse)',
      },
    };
    return hoverStyles[variant];
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const buttonStyles = {
    ...getButtonStyles(),
    ...(isHovered && !disabled ? getHoverStyles() : {}),
    ...style,
  };

  return (
    <button
      type={type}
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
}
