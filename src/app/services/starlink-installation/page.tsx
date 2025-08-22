"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function StarlinkInstallationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    currentInternet: '',
    message: ''
  });

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Starlink-specific data
  const benefits = [
    'High-speed internet up to 200+ Mbps download speeds',
    'Low latency (20-40ms) perfect for gaming and video calls',
    'No data caps or throttling - unlimited usage',
    'Works anywhere with clear sky view - perfect for rural areas',
    'Professional installation with optimal dish placement',
    'Ongoing technical support and system monitoring'
  ];

  const process = [
    {
      step: 1,
      title: 'Site Assessment',
      description: 'We evaluate your property to determine the optimal placement for your Starlink dish, ensuring clear sky visibility and minimal obstructions for maximum performance.',
      icon: '🔍'
    },
    {
      step: 2,
      title: 'Professional Installation',
      description: 'Our certified technicians mount and align your Starlink system, run cables professionally, and configure your network for optimal performance and reliability.',
      icon: '🛠️'
    },
    {
      step: 3,
      title: 'Testing & Optimization',
      description: 'We thoroughly test your connection, optimize settings for your specific location, and ensure all devices are connected and working properly.',
      icon: '⚡'
    },
    {
      step: 4,
      title: 'Training & Support',
      description: 'We provide complete training on your new Starlink system and ongoing support to keep you connected when you need it most.',
      icon: '🎓'
    }
  ];

  const pricing = [
    {
      package: 'Basic Installation',
      price: '$299',
      description: 'Standard ground mount installation',
      features: [
        'Comprehensive site survey and assessment',
        'Professional ground mount installation',
        'Basic cable routing (up to 100ft)',
        'Network configuration and testing',
        '1-year installation warranty',
        'Basic system training session'
      ]
    },
    {
      package: 'Premium Installation',
      price: '$499',
      popular: true,
      description: 'Roof mount with professional cable management',
      features: [
        'Detailed site survey with obstruction analysis',
        'Professional roof mount installation',
        'Advanced cable management and weatherproofing',
        'Mesh network integration if needed',
        '2-year installation warranty',
        'Complete training and documentation',
        '3 months priority technical support'
      ]
    },
    {
      package: 'Enterprise Setup',
      price: '$799',
      description: 'Commercial-grade installation with redundancy',
      features: [
        'Multi-point site analysis and planning',
        'Commercial-grade mounting system',
        'Redundant cable routing for reliability',
        'Business network integration',
        '5-year installation warranty',
        'Staff training for up to 10 people',
        '1 year priority support included',
        'Monthly performance reports and monitoring'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How fast is Starlink internet compared to other options?',
      answer: 'Starlink typically provides download speeds between 50-200+ Mbps with upload speeds of 10-20 Mbps. Latency is usually 20-40ms, making it excellent for gaming, video calls, and streaming. This is significantly faster than traditional satellite internet and often better than rural DSL or cellular options.'
    },
    {
      question: 'Do I need a clear view of the sky for Starlink to work?',
      answer: 'Yes, Starlink requires an unobstructed view of the northern sky. Our professional site assessment will determine the best placement for optimal performance. We use specialized tools to identify potential obstructions like trees, buildings, or power lines that could affect your signal.'
    },
    {
      question: 'How long does a typical Starlink installation take?',
      answer: 'Most residential installations are completed in 2-4 hours, depending on the complexity of the setup and cable routing requirements. Commercial installations may take longer due to additional network integration and testing requirements.'
    },
    {
      question: 'What happens to my Starlink service during bad weather?',
      answer: 'Starlink is designed to work in most weather conditions including light rain and snow. Heavy snow accumulation on the dish or severe storms may cause temporary service interruptions, but the system typically recovers quickly once conditions improve.'
    },
    {
      question: 'Are there any data limits with Starlink?',
      answer: 'Starlink residential service has no hard data caps, meaning you can use as much data as you need. However, speeds may be reduced during peak usage times in congested areas. Business plans offer priority data with guaranteed speeds.'
    },
    {
      question: 'Can I move my Starlink system if I relocate?',
      answer: 'Yes, Starlink is portable and can be moved to a new location. However, you\'ll need to update your service address with Starlink and may need professional reinstallation to ensure optimal performance at your new location.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const subject = encodeURIComponent(`Starlink Installation Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Property Type: ${formData.propertyType}
Current Internet: ${formData.currentInternet}

Message:
${formData.message}
      `);
      
      window.location.href = `mailto:contact@theorbittech.com?subject=${subject}&body=${body}`;
      alert('Thank you for your interest in Starlink installation! Your email client should open with your request. We\'ll contact you within 24 hours to schedule your free site assessment.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyType: '',
        currentInternet: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try calling us directly at (571) 999-6915.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
            fontSize: 'var(--text-6xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-md)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Professional Starlink Installation
          </h1>
          <p style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 'var(--font-weight-medium)',
            opacity: 0.9,
          }}>
            High-Speed Satellite Internet for Rural & Remote Areas
          </p>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Get blazing-fast internet anywhere in the DMV area with professional Starlink installation. 
            Our certified technicians ensure optimal placement and configuration for maximum performance and reliability.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Site Assessment
          </Button>
        </div>
      </section>

      {/* Installation Gallery */}
      <section style={{
        padding: 'var(--space-2xl) 0',
        backgroundColor: 'var(--brand-white)',
      }}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-lg)',
          }}>
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
            }}>
              <img 
                src="/PXL_20250629_150948339~2.jpg" 
                alt="Professional Starlink dish installation on residential property"
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
                src="/PXL_20250705_164801698~2 (1).jpg" 
                alt="Starlink installation with professional cable management"
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
                src="/PXL_20250715_170521838~2 (1).jpg" 
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

      {/* Benefits Section */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--brand-navy)',
            textAlign: 'center',
            marginBottom: 'var(--space-2xl)',
          }}>
            Why Choose Professional Starlink Installation?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'var(--space-md)',
                padding: 'var(--space-lg)',
                backgroundColor: 'var(--brand-sky)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <span style={{
                  color: 'var(--accent-green)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  flexShrink: 0,
                }}>✓</span>
                <span style={{
                  fontSize: 'var(--text-lg)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--brand-navy)',
            textAlign: 'center',
            marginBottom: 'var(--space-2xl)',
          }}>
            Our Starlink Installation Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {process.map((step, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                padding: 'var(--space-2xl)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
                boxShadow: 'var(--shadow-md)',
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: 'var(--accent-blue)',
                  color: 'var(--text-inverse)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'var(--font-weight-bold)',
                  fontSize: 'var(--text-lg)',
                }}>
                  {step.step}
                </div>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-lg)' }}>
                  {step.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--brand-navy)',
            textAlign: 'center',
            marginBottom: 'var(--space-2xl)',
          }}>
            Starlink Installation Packages
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {pricing.map((pkg, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                border: pkg.popular ? '2px solid var(--accent-blue)' : '1px solid var(--border-light)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                textAlign: 'center',
                position: 'relative',
                boxShadow: pkg.popular ? 'var(--shadow-xl)' : 'var(--shadow-md)',
              }}>
                {pkg.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'var(--accent-blue)',
                    color: 'var(--text-inverse)',
                    padding: 'var(--space-xs) var(--space-lg)',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: 'var(--text-sm)',
                    fontWeight: 'var(--font-weight-semibold)',
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-md)',
                }}>
                  {pkg.package}
                </h3>
                <div style={{
                  fontSize: 'var(--text-4xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--accent-blue)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  {pkg.price}
                </div>
                <p style={{
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-xl)',
                }}>
                  {pkg.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  marginBottom: 'var(--space-xl)',
                  textAlign: 'left',
                }}>
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 'var(--space-sm)',
                      marginBottom: 'var(--space-sm)',
                    }}>
                      <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>✓</span>
                      <span style={{ fontSize: 'var(--text-base)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "primary" : "secondary"}
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ width: '100%' }}
                >
                  Choose This Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <h2 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-4xl)',
            fontWeight: 'var(--font-weight-semibold)',
            color: 'var(--brand-navy)',
            textAlign: 'center',
            marginBottom: 'var(--space-2xl)',
          }}>
            Starlink Installation FAQs
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--brand-white)',
                marginBottom: 'var(--space-md)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: 'var(--space-lg)',
                    textAlign: 'left',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 'var(--text-lg)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                  }}
                >
                  {faq.question}
                  <span style={{
                    transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                  }}>
                    ▼
                  </span>
                </button>
                {openFaq === index && (
                  <div style={{
                    padding: '0 var(--space-lg) var(--space-lg) var(--space-lg)',
                    color: 'var(--text-secondary)',
                    lineHeight: 'var(--leading-relaxed)',
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{
            backgroundColor: 'var(--brand-white)',
            padding: 'var(--space-4xl)',
            borderRadius: 'var(--radius-2xl)',
            boxShadow: 'var(--shadow-xl)',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-4xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-md)',
              }}>
                Ready for High-Speed Starlink?
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Schedule your free site assessment and get a custom quote for your Starlink installation.
              </p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-lg)',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: 'var(--space-lg)',
                marginBottom: 'var(--space-lg)',
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                    }}
                  />
                </div>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                  }}>
                    Property Type
                  </label>
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--brand-white)',
                    }}
                  >
                    <option value="">Select property type...</option>
                    <option value="residential">Residential Home</option>
                    <option value="rural">Rural Property</option>
                    <option value="business">Business/Commercial</option>
                    <option value="farm">Farm/Agricultural</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)',
                }}>
                  Installation Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address, city, state, zip"
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-base)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)',
                }}>
                  Current Internet Provider
                </label>
                <input
                  type="text"
                  name="currentInternet"
                  value={formData.currentInternet}
                  onChange={handleInputChange}
                  placeholder="e.g., Verizon, Comcast, HughesNet, or None"
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-base)',
                    fontFamily: 'var(--font-body)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)',
                }}>
                  Additional Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your location, any potential obstructions, or specific requirements..."
                  style={{
                    width: '100%',
                    padding: 'var(--space-md)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: 'var(--text-base)',
                    fontFamily: 'var(--font-body)',
                    resize: 'vertical',
                  }}
                />
              </div>

              <Button 
                type="submit"
                variant="primary" 
                size="lg"
                style={{ width: '100%' }}
              >
                Schedule Free Site Assessment
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
