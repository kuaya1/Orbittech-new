"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Blog categories
  const categories = ['All', 'Technology', 'Home Networking', 'Business', 'Rural Connectivity', 'Security', 'Education'];

  // Blog posts data
  const blogPosts = [
    {
      title: 'Starlink vs. Traditional ISPs: A DMV Homeowner\'s Guide',
      excerpt: 'Comprehensive comparison of Starlink satellite internet versus traditional ISPs in the DMV area, including speed, reliability, and cost analysis.',
      category: 'Technology',
      date: 'March 15, 2024',
      readTime: '8 min read',
      href: '/resources/blog/starlink-vs-isps-dmv',
      image: '/blog/starlink-comparison.jpg',
      featured: true
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
    },
    {
      title: 'Mesh WiFi vs WiFi Extenders: Which is Right for You?',
      excerpt: 'Detailed comparison of mesh WiFi systems and traditional WiFi extenders, including pros, cons, and best use cases for each.',
      category: 'Home Networking',
      date: 'February 10, 2024',
      readTime: '6 min read',
      href: '/resources/blog/mesh-wifi-vs-extenders',
      image: '/blog/mesh-vs-extenders.jpg'
    },
    {
      title: 'The Future of Rural Internet: Satellite Technology Advances',
      excerpt: 'How new satellite technologies like Starlink are revolutionizing internet access in rural and underserved areas.',
      category: 'Technology',
      date: 'February 5, 2024',
      readTime: '8 min read',
      href: '/resources/blog/future-rural-internet-satellite',
      image: '/blog/future-satellite.jpg'
    }
  ];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);


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
            Orbit Tech Blog
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Expert insights, practical tips, and the latest news about internet connectivity, 
            technology trends, and solutions for the DMV area.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section style={{
          ...sectionStyles,
          paddingTop: 0,
          marginTop: '-var(--space-2xl)',
        }}>
          <div style={containerStyles}>
            <div style={{
              backgroundColor: 'var(--brand-white)',
              borderRadius: 'var(--radius-2xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-xl)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: 0,
            }}>
              {/* Featured Image */}
              <div style={{
                height: '300px',
                backgroundColor: 'var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontSize: 'var(--text-lg)',
              }}>
                📷 Featured Article Image
              </div>

              {/* Featured Content */}
              <div style={{
                padding: 'var(--space-2xl)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
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
                    Featured
                  </span>
                  <span style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--text-muted)',
                  }}>
                    {featuredPost.category} • {featuredPost.date}
                  </span>
                </div>

                <h2 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  lineHeight: 'var(--leading-tight)',
                  marginBottom: 'var(--space-md)',
                }}>
                  {featuredPost.title}
                </h2>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--text-muted)',
                  }}>
                    {featuredPost.readTime}
                  </span>
                  <Button 
                    variant="primary" 
                    size="md"
                    onClick={() => window.location.href = featuredPost.href}
                  >
                    Read Article
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section style={{
        padding: 'var(--space-2xl) 0',
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: 'var(--space-sm) var(--space-lg)',
                  borderRadius: 'var(--radius-lg)',
                  border: 'none',
                  backgroundColor: selectedCategory === category ? 'var(--accent-blue)' : 'var(--brand-white)',
                  color: selectedCategory === category ? 'var(--text-inverse)' : 'var(--text-primary)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: 'var(--shadow-sm)',
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'var(--border-light)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'var(--brand-white)';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {filteredPosts.map((post, index) => (
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
                  📷 Article Image
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

          {/* No Results Message */}
          {filteredPosts.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: 'var(--space-4xl)',
              backgroundColor: 'var(--brand-sky)',
              borderRadius: 'var(--radius-xl)',
            }}>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-lg)',
              }}>
                No articles found in the "{selectedCategory}" category.
              </p>
              <Button 
                variant="secondary" 
                size="md"
                onClick={() => setSelectedCategory('All')}
              >
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{
            backgroundColor: 'var(--brand-white)',
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
              Stay Updated with Our Latest Articles
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '500px',
              margin: '0 auto var(--space-2xl) auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Get the latest connectivity insights, technology updates, and expert tips 
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

