"use client";

import React from 'react';

export default function McLeanStarlinkPage() {
  // Reuse styles from other pages
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  return (
    <>
      {/* Hero Section */}
      <section style={{
        ...sectionStyles,
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-slate) 100%)',
        color: 'var(--text-inverse)',
        textAlign: 'center',
      }}>
        <div style={containerStyles}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Starlink Installation McLean, VA | Historic Home Specialists
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Professional Starlink installation for McLean's historic homes. HOA-compliant mounting, tree obstruction solutions, same-day service. Join 100+ satisfied McLean customers.
          </p>
          
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <button style={{
              padding: 'var(--space-md) var(--space-xl)',
              backgroundColor: 'var(--accent-orange)',
              color: 'var(--brand-white)',
              border: 'none',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onClick={() => window.location.href = 'tel:5719996915'}
            >
              Call (571) 999-6915
            </button>
            <button style={{
              padding: 'var(--space-md) var(--space-xl)',
              backgroundColor: 'transparent',
              color: 'var(--text-inverse)',
              border: '2px solid var(--text-inverse)',
              borderRadius: 'var(--radius-lg)',
              fontSize: 'var(--text-lg)',
              fontWeight: 'var(--font-weight-semibold)',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onClick={() => window.location.href = '/contact'}
            >
              Free Site Assessment
            </button>
          </div>
        </div>
      </section>

      {/* McLean-Specific Content */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            marginBottom: 'var(--space-4xl)',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-lg)',
              }}>
                Why McLean Residents Choose Starlink
              </h2>
              <ul style={{
                listStyle: 'none',
                padding: 0,
              }}>
                {[
                  'No more Comcast outages during storms',
                  'Faster than waiting 3+ years for Fios',
                  '200+ Mbps speeds vs. 25 Mbps DSL',
                  'Works during power grid failures',
                  'Perfect for McLean\'s wooded lots',
                ].map((benefit, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 'var(--space-md)',
                    fontSize: 'var(--text-lg)',
                    color: 'var(--text-primary)',
                  }}>
                    <span style={{
                      color: 'var(--accent-green)',
                      marginRight: 'var(--space-md)',
                      fontSize: 'var(--text-xl)',
                    }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-lg)',
              }}>
                McLean Historic Home Expertise
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-lg)',
              }}>
                We specialize in installing Starlink on McLean's historic properties while maintaining architectural integrity and HOA compliance.
              </p>
              <div style={{
                backgroundColor: 'var(--brand-sky)',
                padding: 'var(--space-lg)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <h3 style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  Recent McLean Installation
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                }}>
                  "Finally ditched Comcast after 15 years of outages! Went from 25 Mbps to 250 Mbps. Eric installed it perfectly in McLean - now my kids can actually do homework without buffering." - Jennifer Martinez, McLean, VA
                </p>
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div style={{
            backgroundColor: 'var(--brand-white)',
            padding: 'var(--space-4xl)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-lg)',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Complete Starlink Installation - $599
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '800px',
              margin: '0 auto var(--space-2xl) auto',
            }}>
              Everything included: site assessment, professional mounting, cable routing, network setup, and 2-year warranty. Same-day installation available.
            </p>
            
            <div style={{
              display: 'flex',
              gap: 'var(--space-lg)',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <button style={{
                padding: 'var(--space-lg) var(--space-2xl)',
                backgroundColor: 'var(--accent-orange)',
                color: 'var(--brand-white)',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => window.location.href = 'tel:5719996915'}
              >
                Call (571) 999-6915 Now
              </button>
              <button style={{
                padding: 'var(--space-lg) var(--space-2xl)',
                backgroundColor: 'transparent',
                color: 'var(--brand-navy)',
                border: '2px solid var(--brand-navy)',
                borderRadius: 'var(--radius-lg)',
                fontSize: 'var(--text-xl)',
                fontWeight: 'var(--font-weight-semibold)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onClick={() => window.location.href = '/contact'}
              >
                Schedule Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}