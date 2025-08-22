"use client";

import React from 'react';
import { Button } from "@/components";

export default function AboutPage() {
  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Team data
  const teamMembers = [
    {
      name: 'Michael Rodriguez',
      title: 'Founder & Lead Technician',
      bio: 'With over 15 years in telecommunications and 8 years in the DMV area, Michael founded Orbit Tech to bring reliable internet solutions to underserved communities.',
      certifications: ['Starlink Certified Installer', 'Ubiquiti Enterprise Certified', 'CompTIA Network+'],
      image: '/team/michael-placeholder.jpg'
    },
    {
      name: 'Sarah Chen',
      title: 'Senior Network Engineer',
      bio: 'Former Verizon engineer with expertise in enterprise networking. Sarah ensures every installation meets the highest technical standards.',
      certifications: ['Cisco CCNA', 'Ubiquiti UniFi Certified', 'Ruckus Wireless Certified'],
      image: '/team/sarah-placeholder.jpg'
    },
    {
      name: 'David Thompson',
      title: 'Installation Specialist',
      bio: 'Local to Northern Virginia for 20+ years, David knows the unique challenges of DMV installations and delivers solutions that last.',
      certifications: ['OSHA Safety Certified', 'Starlink Certified Installer', 'Low Voltage License'],
      image: '/team/david-placeholder.jpg'
    },
    {
      name: 'Jennifer Martinez',
      title: 'Customer Success Manager',
      bio: 'Bilingual customer advocate ensuring every client receives exceptional service and ongoing support throughout their connectivity journey.',
      certifications: ['Customer Success Certified', 'Technical Support Specialist', 'Project Management'],
      image: '/team/jennifer-placeholder.jpg'
    }
  ];

  // Community involvement data
  const communityInvolvement = [
    {
      title: 'Rural Connectivity Initiative',
      description: 'Partnering with local nonprofits to bring high-speed internet to underserved rural communities in Virginia and Maryland.',
      icon: '🌾'
    },
    {
      title: 'Small Business Support Program',
      description: 'Offering discounted services to local small businesses and startups to help them compete in the digital economy.',
      icon: '🏪'
    },
    {
      title: 'Digital Literacy Workshops',
      description: 'Free workshops at community centers teaching seniors and families how to maximize their internet connectivity.',
      icon: '📚'
    },
    {
      title: 'Emergency Response Support',
      description: 'Providing emergency connectivity solutions during natural disasters and community emergencies.',
      icon: '🚨'
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
            Your Local Internet Experts
          </h1>
          <p style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 'var(--font-weight-medium)',
            opacity: 0.9,
          }}>
            Born and raised in the DMV, serving our community since 2018
          </p>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            We understand the unique connectivity challenges of Virginia, Maryland, and Washington DC 
            because we live here too. From rural Loudoun County to urban Alexandria, we're your neighbors 
            helping neighbors stay connected.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => window.location.href = '/contact'}
          >
            Meet Our Team
          </Button>
        </div>
      </section>

      {/* Company Story & Mission */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: 'var(--space-4xl)',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xl)',
                lineHeight: 'var(--leading-tight)',
              }}>
                Our Story
              </h2>
              <div style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--text-primary)',
                marginBottom: 'var(--space-lg)',
              }}>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                  Orbit Tech was founded when our founder experienced firsthand the frustration of poor 
                  internet connectivity in the DMV area. Based in Reston, Virginia, we understand the 
                  unique challenges of bringing reliable internet to both urban and rural communities.
                </p>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                  What started as helping neighbors and friends quickly grew into a mission: bringing 
                  reliable, high-speed internet to every corner of the DMV area. We've since completed 
                  over 500 installations, from urban townhomes to rural farms, always with the same 
                  commitment to quality and service.
                </p>
                <p>
                  Today, we're proud to be the DMV's trusted internet solutions provider, combining 
                  cutting-edge technology with the personal touch that only comes from truly caring 
                  about your community.
                </p>
              </div>
            </div>
            <div style={{
              backgroundColor: 'var(--brand-sky)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-2xl)',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-lg)',
              }}>
                Our Mission
              </h3>
              <p style={{
                fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)',
                color: 'var(--text-primary)',
                fontStyle: 'italic',
                marginBottom: 'var(--space-xl)',
              }}>
                "To connect every home and business in the DMV area with reliable, high-speed internet 
                that empowers them to work, learn, and thrive in the digital age."
              </p>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 'var(--space-lg)',
                textAlign: 'center',
              }}>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--accent-blue)',
                    marginBottom: 'var(--space-xs)',
                  }}>500+</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Happy Customers
                  </div>
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-3xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    color: 'var(--accent-blue)',
                    marginBottom: 'var(--space-xs)',
                  }}>6</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)' }}>
                    Years Serving DMV
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Our Work Speaks for Itself
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Real installations from across the DMV area, showcasing our commitment to quality and professionalism.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250715_170502892~2.jpg" 
                alt="Professional Starlink installation by Orbit Tech team"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250720_180554537~3.jpg" 
                alt="Starlink dish installation with professional mounting"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </div>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250802_161559918.RAW-01.COVER~2 (1).jpg" 
                alt="Completed Starlink installation in Northern Virginia"
                style={{
                  width: '100%',
                  height: '250px',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Expert Team
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Local professionals with the expertise and certifications to deliver exceptional results.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {teamMembers.map((member, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}>
                {/* Photo Placeholder */}
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--border-light)',
                  margin: '0 auto var(--space-lg) auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'var(--text-muted)',
                }}>
                  👤
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-xs)',
                }}>
                  {member.name}
                </h3>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--accent-blue)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--space-md)',
                }}>
                  {member.title}
                </p>

                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {member.bio}
                </p>

                <div>
                  <h4 style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    marginBottom: 'var(--space-sm)',
                  }}>
                    Certifications:
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 'var(--space-xs)',
                    justifyContent: 'center',
                  }}>
                    {member.certifications.map((cert, certIndex) => (
                      <span key={certIndex} style={{
                        fontSize: 'var(--text-xs)',
                        backgroundColor: 'var(--brand-sky)',
                        color: 'var(--brand-navy)',
                        padding: 'var(--space-xs) var(--space-sm)',
                        borderRadius: 'var(--radius-md)',
                        fontWeight: 'var(--font-weight-medium)',
                      }}>
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Giving Back to Our Community
            </h2>
            <p style={{
              fontSize: 'var(--text-xl)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              We believe in strengthening the communities we serve through technology access, 
              education, and local partnerships.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {communityInvolvement.map((initiative, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--space-lg)',
                }}>
                  {initiative.icon}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-md)',
                  lineHeight: 'var(--leading-tight)',
                }}>
                  {initiative.title}
                </h3>

                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>

          {/* Community Stats */}
          <div style={{
            marginTop: 'var(--space-4xl)',
            backgroundColor: 'var(--brand-sky)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-2xl)',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 'var(--space-xl)',
              textAlign: 'center',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--space-xs)',
                }}>50+</div>
                <div style={{ color: 'var(--text-secondary)' }}>Families Connected Through Rural Initiative</div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--space-xs)',
                }}>25+</div>
                <div style={{ color: 'var(--text-secondary)' }}>Small Businesses Supported</div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--space-xs)',
                }}>200+</div>
                <div style={{ color: 'var(--text-secondary)' }}>Workshop Participants</div>
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent-green)',
                  marginBottom: 'var(--space-xs)',
                }}>24/7</div>
                <div style={{ color: 'var(--text-secondary)' }}>Emergency Response Ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        ...sectionStyles,
        background: 'linear-gradient(135deg, var(--brand-navy) 0%, var(--brand-slate) 100%)',
        color: 'var(--text-inverse)',
        textAlign: 'center',
      }}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Ready to Work with Your Local Experts?
          </h2>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '600px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Experience the Orbit Tech difference. Local expertise, professional service, 
            and a commitment to keeping our community connected.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--space-lg)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Your Free Quote
            </Button>
            <Button 
              variant="tertiary" 
              size="lg"
              onClick={() => window.location.href = 'tel:7035550742'}
            >
              Call (571) 999-6915
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
