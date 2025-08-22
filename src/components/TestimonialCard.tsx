"use client";

import React from 'react';

export interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  service: string;
  rating: number;
}

export function TestimonialCard({ quote, author, location, service, rating }: TestimonialCardProps) {
  const cardStyles: React.CSSProperties = {
    backgroundColor: 'var(--brand-white)',
    border: '1px solid var(--border-light)',
    borderRadius: 'var(--radius-xl)',
    padding: 'var(--space-2xl)',
    boxShadow: 'var(--shadow-md)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  const quoteStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-lg)',
    color: 'var(--text-primary)',
    lineHeight: 'var(--leading-relaxed)',
    marginBottom: 'var(--space-lg)',
    fontStyle: 'italic',
    flex: 1,
  };

  const ratingStyles: React.CSSProperties = {
    display: 'flex',
    gap: '2px',
    marginBottom: 'var(--space-md)',
  };

  const authorStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--brand-navy)',
    marginBottom: 'var(--space-xs)',
  };

  const locationStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--text-secondary)',
    marginBottom: 'var(--space-xs)',
  };

  const serviceStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)',
    color: 'var(--accent-blue)',
    fontWeight: 'var(--font-weight-medium)',
  };

  const quoteIconStyles: React.CSSProperties = {
    position: 'absolute',
    top: 'var(--space-lg)',
    right: 'var(--space-lg)',
    fontSize: '2rem',
    color: 'var(--brand-sky)',
    opacity: 0.5,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index}
        style={{
          color: index < rating ? 'var(--accent-amber)' : 'var(--border-medium)',
          fontSize: 'var(--text-lg)',
        }}
      >
        ★
      </span>
    ));
  };

  return (
    <div style={cardStyles}>
      <div style={quoteIconStyles}>"</div>
      
      <div style={ratingStyles}>
        {renderStars(rating)}
      </div>

      <blockquote style={quoteStyles}>
        "{quote}"
      </blockquote>

      <div>
        <div style={authorStyles}>{author}</div>
        <div style={locationStyles}>{location}</div>
        <div style={serviceStyles}>{service}</div>
      </div>
    </div>
  );
}
