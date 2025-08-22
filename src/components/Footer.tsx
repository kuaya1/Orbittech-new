"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
  const footerStyles: React.CSSProperties = {
    backgroundColor: 'var(--brand-navy)',
    color: 'var(--text-inverse)',
    padding: 'var(--space-4xl) 0 var(--space-xl) 0',
  };

  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const gridStyles: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 'var(--space-2xl)',
    marginBottom: 'var(--space-2xl)',
  };

  const columnStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-md)',
  };

  const logoStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-xl)',
    fontWeight: 'var(--font-weight-bold)',
    color: 'var(--text-inverse)',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--space-sm)',
    marginBottom: 'var(--space-md)',
  };

  const headingStyles: React.CSSProperties = {
    fontFamily: 'var(--font-headline)',
    fontSize: 'var(--text-lg)',
    fontWeight: 'var(--font-weight-semibold)',
    color: 'var(--text-inverse)',
    marginBottom: 'var(--space-md)',
  };

  const linkStyles: React.CSSProperties = {
    color: 'var(--text-inverse)',
    textDecoration: 'none',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    opacity: 0.9,
    transition: 'opacity 0.2s ease-in-out',
    padding: 'var(--space-xs) 0',
  };

  const textStyles: React.CSSProperties = {
    color: 'var(--text-inverse)',
    fontSize: 'var(--text-base)',
    fontFamily: 'var(--font-body)',
    lineHeight: 'var(--leading-relaxed)',
    opacity: 0.9,
  };

  const socialIconStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 'var(--radius-lg)',
    color: 'var(--text-inverse)',
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
    fontSize: 'var(--text-lg)',
  };

  const socialContainerStyles: React.CSSProperties = {
    display: 'flex',
    gap: 'var(--space-md)',
    marginTop: 'var(--space-md)',
  };

  const bottomBarStyles: React.CSSProperties = {
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
    paddingTop: 'var(--space-lg)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 'var(--space-md)',
  };

  const copyrightStyles: React.CSSProperties = {
    ...textStyles,
    fontSize: 'var(--text-sm)',
    opacity: 0.7,
  };

  return (
    <footer style={footerStyles}>
      <div style={containerStyles}>
        <div style={gridStyles}>
          {/* Company Column */}
          <div style={columnStyles}>
            <Link href="/" style={logoStyles}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'var(--accent-blue)',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-inverse)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-bold)',
              }}>
                O
              </div>
              Orbit Tech
            </Link>
            <p style={textStyles}>
              Your trusted partner for cutting-edge internet solutions in the DMV area. 
              We specialize in Starlink installations, mesh WiFi systems, and business 
              connectivity solutions that keep you connected to what matters most.
            </p>
          </div>

          {/* Services Column */}
          <div style={columnStyles}>
            <h3 style={headingStyles}>Services</h3>
            <Link 
              href="/services/starlink" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Starlink Installation
            </Link>
            <Link 
              href="/services/mesh-wifi" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Mesh WiFi Setup
            </Link>
            <Link 
              href="/services/business" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Business Solutions
            </Link>
            <Link 
              href="/service-areas" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Service Areas
            </Link>
          </div>

          {/* Company Links Column */}
          <div style={columnStyles}>
            <h3 style={headingStyles}>Company</h3>
            <Link 
              href="/about" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              About Us
            </Link>
            <Link 
              href="/resources" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Resources
            </Link>
            <Link 
              href="/contact" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Contact
            </Link>
            <Link 
              href="/privacy" 
              style={linkStyles}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.9'}
            >
              Privacy Policy
            </Link>
          </div>

          {/* Contact Us Column */}
          <div style={columnStyles}>
            <h3 style={headingStyles}>Contact Us</h3>
            <div style={textStyles}>
              <strong>Orbit Tech Solutions LLC</strong>
            </div>
            <div style={textStyles}>
              1234 Technology Drive<br />
              Reston, VA 20190
            </div>
            <div style={textStyles}>
              <strong>Phone:</strong> (571) 999-6915<br />
              <strong>Email:</strong> contact@theorbittech.com
            </div>
            <div style={textStyles}>
              <strong>Hours:</strong><br />
              Mon-Fri: 8:00 AM - 6:00 PM<br />
              Sat: 9:00 AM - 4:00 PM<br />
              Sun: Emergency Service Only
            </div>
            
            {/* Social Media Icons */}
            <div style={socialContainerStyles}>
              <a 
                href="https://facebook.com/orbittech" 
                style={socialIconStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Facebook"
              >
                📘
              </a>
              <a 
                href="https://linkedin.com/company/orbittech" 
                style={socialIconStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="LinkedIn"
              >
                💼
              </a>
              <a 
                href="https://twitter.com/orbittech" 
                style={socialIconStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Twitter"
              >
                🐦
              </a>
              <a 
                href="https://instagram.com/orbittech" 
                style={socialIconStyles}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                aria-label="Instagram"
              >
                📷
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={bottomBarStyles}>
          <div style={copyrightStyles}>
            © {new Date().getFullYear()} Orbit Tech Solutions LLC. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-lg)' }}>
            <Link 
              href="/terms" 
              style={{...copyrightStyles, textDecoration: 'none'}}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              Terms of Service
            </Link>
            <Link 
              href="/privacy" 
              style={{...copyrightStyles, textDecoration: 'none'}}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
