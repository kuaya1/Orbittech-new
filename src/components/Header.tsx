"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '/' },
    { 
      label: 'Services', 
      href: '/services',
      submenu: [
        { label: 'Starlink Installation', href: '/services/starlink' },
        { label: 'Mesh WiFi Setup', href: '/services/mesh-wifi' },
        { label: 'Business Solutions', href: '/services/business' },
      ]
    },
    { label: 'Service Areas', href: '/service-areas' },
    { label: 'About Us', href: '/about' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ];

  const headerStyles: React.CSSProperties = {
    backgroundColor: 'var(--brand-white)',
    borderBottom: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-sm)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '80px',
  };

  const logoStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-2xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--brand-navy)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
  };

  const navStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-xl)',
  };

  const navLinkStyles: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-base)',
    fontWeight: 'var(--font-weight-medium)',
    color: 'var(--text-primary)',
    textDecoration: 'none',
    padding: 'var(--space-sm) var(--space-md)',
    borderRadius: 'var(--radius-md)',
    transition: 'all 0.2s ease-in-out',
    position: 'relative',
  };

  const mobileMenuButtonStyles: React.CSSProperties = {
    flexDirection: 'column',
    gap: '4px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 'var(--space-sm)',
  };

  const hamburgerLineStyles: React.CSSProperties = {
    width: '24px',
    height: '2px',
    backgroundColor: 'var(--brand-navy)',
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'var(--brand-white)',
    borderTop: '1px solid var(--border-light)',
    boxShadow: 'var(--shadow-lg)',
    display: isMobileMenuOpen ? 'block' : 'none',
    zIndex: 40,
  };

  const mobileNavStyles: React.CSSProperties = {
    padding: 'var(--space-lg)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)',
  };

  const mobileNavLinkStyles: React.CSSProperties = {
    ...navLinkStyles,
    display: 'block',
    padding: 'var(--space-md)',
    borderBottom: '1px solid var(--border-light)',
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <Link href="/" style={logoStyles}>
          <img 
            src="/Starlink Dmv (33).png" 
            alt="Orbit Tech - Professional Starlink Installation DMV"
            style={{
              height: '40px',
              width: 'auto',
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav 
          style={navStyles}
          className="desktop-nav"
        >
          {navigationItems.map((item) => (
            <div key={item.label} style={{ position: 'relative' }}>
              <Link 
                href={item.href} 
                style={navLinkStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-sky)';
                  e.currentTarget.style.color = 'var(--brand-navy)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                {item.label}
                {item.submenu && (
                  <span style={{ marginLeft: 'var(--space-xs)' }}>▾</span>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-md)',
        }}>
          <Button 
            variant="primary" 
            size="md"
            onClick={() => window.location.href = '/contact'}
          >
            Get Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            style={mobileMenuButtonStyles}
            className="mobile-menu-button"
            onClick={() => {
              console.log('Mobile menu toggle clicked, current state:', isMobileMenuOpen);
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
          >
            <div style={hamburgerLineStyles}></div>
            <div style={hamburgerLineStyles}></div>
            <div style={hamburgerLineStyles}></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={mobileMenuStyles}>
        <nav style={mobileNavStyles}>
          {navigationItems.map((item) => (
            <div key={item.label}>
              <Link 
                href={item.href} 
                style={mobileNavLinkStyles}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.submenu && (
                <div style={{ paddingLeft: 'var(--space-lg)' }}>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.href}
                      style={{
                        ...mobileNavLinkStyles,
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        paddingLeft: 'var(--space-xl)',
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div style={{ paddingTop: 'var(--space-md)' }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => {
                setIsMobileMenuOpen(false);
                window.location.href = '/contact';
              }}
              style={{ width: '100%' }}
            >
              Get Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
