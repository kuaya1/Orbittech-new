"use client";

import React from 'react';
import { Button } from "@/components";

export default function ResourcesPage() {
  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Main content pieces data
  const mainResources = [
    {
      title: 'Complete Installation Guide',
      description: 'Step-by-step guides for Starlink, mesh WiFi, and business network installations. Everything you need to know about the process.',
      icon: '📖',
      href: '/resources/installation-guide',
      category: 'Guides',
      readTime: '15 min read'
    },
    {
      title: 'Frequently Asked Questions',
      description: 'Comprehensive answers to the most common questions about our services, pricing, and technical support.',
      icon: '❓',
      href: '/resources/faq',
      category: 'Support',
      readTime: '10 min read'
    },
    {
      title: 'Internet Speed Test & Tools',
      description: 'Test your current internet speed, check for outages, and access troubleshooting tools to optimize your connection.',
      icon: '⚡',
      href: '/resources/speed-test',
      category: 'Tools',
      readTime: '5 min use'
    },
    {
      title: 'DMV Coverage Map',
      description: 'Interactive map showing our service areas across Virginia, Maryland, and Washington DC with availability details.',
      icon: '🗺️',
      href: '/resources/coverage-map',
      category: 'Coverage',
      readTime: '3 min browse'
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      title: 'Starlink vs Traditional Satellite Internet: What\'s the Difference?',
      excerpt: 'Understanding the key differences between Starlink and traditional satellite internet providers in terms of speed, latency, and reliability.',
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '8 min read',
      href: '/resources/blog/starlink-vs-traditional-satellite',
      image: '/blog/starlink-comparison.jpg'
    },
    {
      title: 'How to Eliminate WiFi Dead Zones in Your Home',
      excerpt: 'Professional tips and techniques for identifying and eliminating WiFi dead zones using mesh systems and strategic placement.',
      category: 'Home Networking',
      date: 'March 10, 2024',
      readTime: '6 min read',
      href: '/resources/blog/eliminate-wifi-dead-zones',
      image: '/blog/wifi-dead-zones.jpg'
    },
    {
      title: 'Business Internet Requirements: What You Need to Know',
      excerpt: 'A comprehensive guide to choosing the right internet solution for your business, including bandwidth, reliability, and security considerations.',
      category: 'Business',
      date: 'March 5, 2024',
      readTime: '10 min read',
      href: '/resources/blog/business-internet-requirements',
      image: '/blog/business-internet.jpg'
    },
    {
      title: 'Rural Internet Options in Northern Virginia',
      excerpt: 'Exploring the best internet options for rural properties in Northern Virginia, including Starlink, fixed wireless, and cellular solutions.',
      category: 'Rural Connectivity',
      date: 'February 28, 2024',
      readTime: '7 min read',
      href: '/resources/blog/rural-internet-northern-virginia',
      image: '/blog/rural-internet.jpg'
    },
    {
      title: 'Network Security Best Practices for Small Businesses',
      excerpt: 'Essential security measures every small business should implement to protect their network and sensitive data from cyber threats.',
      category: 'Security',
      date: 'February 20, 2024',
      readTime: '9 min read',
      href: '/resources/blog/network-security-best-practices',
      image: '/blog/network-security.jpg'
    },
    {
      title: 'Understanding Internet Speed: Mbps, Latency, and What You Actually Need',
      excerpt: 'Demystifying internet speed terminology and helping you determine the right speed for your household or business needs.',
      category: 'Education',
      date: 'February 15, 2024',
      readTime: '5 min read',
      href: '/resources/blog/understanding-internet-speed',
      image: '/blog/internet-speed.jpg'
    }
  ];

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
            fontSize: 'var(--text-6xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Your Guide to Better Connectivity
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Expert insights, installation guides, and helpful resources to help you make informed 
            decisions about your internet connectivity needs in the DMV area.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('main-resources')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Resources
          </Button>
        </div>
      </section>

      {/* Main Content Pieces */}
      <section id="main-resources" style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Essential Resources
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Everything you need to know about internet connectivity, from installation guides to troubleshooting tools.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {mainResources.map((resource, index) => (
              <div 
                key={index} 
                style={{
                  backgroundColor: 'var(--brand-white)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-2xl)',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => window.location.href = resource.href}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.borderColor = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <div style={{
                    fontSize: '3rem',
                    lineHeight: 1,
                  }}>
                    {resource.icon}
                  </div>
                  <div>
                    <div style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--accent-blue)',
                      fontWeight: 'var(--font-weight-medium)',
                      marginBottom: 'var(--space-xs)',
                    }}>
                      {resource.category}
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-headline)',
                      fontSize: 'var(--text-xl)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--brand-navy)',
                      lineHeight: 'var(--leading-tight)',
                      margin: 0,
                    }}>
                      {resource.title}
                    </h3>
                  </div>
                </div>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-lg)',
                  flex: 1,
                }}>
                  {resource.description}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingTop: 'var(--space-md)',
                  borderTop: '1px solid var(--border-light)',
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                  }}>
                    {resource.readTime}
                  </span>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-blue)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}>
                    Learn More →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Latest Blog Posts
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Stay up-to-date with the latest insights, tips, and news about internet connectivity and technology.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                style={{
                  backgroundColor: 'var(--brand-white)',
                  borderRadius: 'var(--radius-xl)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease-in-out',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onClick={() => window.location.href = post.href}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                {/* Blog Post Image Placeholder */}
                <div style={{
                  height: '200px',
                  backgroundColor: 'var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  fontSize: 'var(--text-lg)',
                }}>
                  📷 Blog Image
                </div>

                <div style={{
                  padding: 'var(--space-xl)',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-md)',
                    marginBottom: 'var(--space-md)',
                  }}>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--accent-blue)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--brand-sky)',
                      padding: 'var(--space-xs) var(--space-sm)',
                      borderRadius: 'var(--radius-md)',
                    }}>
                      {post.category}
                    </span>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)',
                    }}>
                      {post.date}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    lineHeight: 'var(--leading-tight)',
                    marginBottom: 'var(--space-md)',
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-lg)',
                    flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 'var(--space-md)',
                    borderTop: '1px solid var(--border-light)',
                  }}>
                    <span style={{
                      fontSize: 'var(--text-xs)',
                      color: 'var(--text-muted)',
                    }}>
                      {post.readTime}
                    </span>
                    <span style={{
                      fontSize: 'var(--text-sm)',
                      color: 'var(--accent-blue)',
                      fontWeight: 'var(--font-weight-medium)',
                    }}>
                      Read More →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View All Blog Posts Button */}
          <div style={{
            textAlign: 'center',
            marginTop: 'var(--space-4xl)',
          }}>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/resources/blog'}
            >
              View All Blog Posts
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{
            backgroundColor: 'var(--brand-white)',
            border: '1px solid var(--border-light)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-4xl)',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Stay Connected with Orbit Tech
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-2xl) auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Get the latest connectivity tips, technology updates, and exclusive offers 
              delivered straight to your inbox.
            </p>

            <div style={{
              display: 'flex',
              gap: 'var(--space-md)',
              maxWidth: '400px',
              margin: '0 auto',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  flex: 1,
                  minWidth: '250px',
                  padding: 'var(--space-md)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-base)',
                  fontFamily: 'var(--font-body)',
                }}
              />
              <Button 
                variant="primary" 
                size="md"
                onClick={() => alert('Newsletter signup functionality would be implemented here')}
              >
                Subscribe
              </Button>
            </div>

            <p style={{
              fontSize: 'var(--text-xs)',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-md)',
            }}>
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

