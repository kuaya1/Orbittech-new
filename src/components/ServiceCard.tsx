"use client";

import React from 'react';

import { Button } from './Button';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
  price?: string;
}

export function ServiceCard({ title, description, icon, features, href, price }: ServiceCardProps) {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--brand-white)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-2xl)',
    boxShadow: 'var(--shadow-md)',
    transition: 'all 0.3s ease-in-out',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const iconStyles: React.CSSProperties = {
    fontSize: '3rem',
    marginBottom: 'var(--space-lg)',
    display: 'block',
  };

  const titleStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--brand-navy)',
    marginBottom: 'var(--space-md)',
    lineHeight: 'var(--leading-tight)',
  };

  const descriptionStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    color: 'var(--text-secondary)',
    lineHeight: 'var(--leading-relaxed)',
    marginBottom: 'var(--space-lg)',
  };

  const featureListStyles: React.CSSProperties = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 var(--space-xl) 0',
    flex: 1,
  };

  const featureItemStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-primary)',
    marginBottom: 'var(--space-sm)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--space-sm)',
  };

  const priceStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--accent-green)',
    marginBottom: 'var(--space-lg)',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const hoverStyles = isHovered ? {
    transform: 'translateY(-4px)',
    boxShadow: 'var(--shadow-xl)',
    borderColor: 'var(--accent-blue)',
  } : {};

  return (
    <div 
      style={{...cardStyles, ...hoverStyles}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={iconStyles}>{icon}</div>
      <h3 style={titleStyles}>{title}</h3>
      <p style={descriptionStyles}>{description}</p>
      
      <ul style={featureListStyles}>
        {features.map((feature, index) => (
          <li key={index} style={featureItemStyles}>
            <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      {price && (
        <div style={priceStyles}>
          Starting at {price}
        </div>
      )}

      <Button 
        variant="primary" 
        size="md"
        onClick={() => window.location.href = href}
        style={{ width: '100%' }}
      >
        Learn More
      </Button>
    </div>
  );
}
