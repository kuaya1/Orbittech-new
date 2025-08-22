"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function MeshWiFiSetupPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    homeSize: '',
    currentWiFi: '',
    deadZones: '',
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

  // Mesh WiFi-specific data
  const benefits = [
    'Eliminate WiFi dead zones completely throughout your property',
    'Seamless roaming between access points - no more dropped connections',
    'Enterprise-grade security features with WPA3 encryption',
    'Easy management through intuitive mobile app interface',
    'Scalable system that grows with your needs - add nodes anytime',
    'Professional installation with optimal placement and configuration'
  ];

  const process = [
    {
      step: 1,
      title: 'WiFi Analysis',
      description: 'We conduct a comprehensive WiFi survey using professional tools to identify dead zones, interference sources, and optimal access point placement throughout your property.',
      icon: '📊'
    },
    {
      step: 2,
      title: 'System Design',
      description: 'Our engineers design a custom mesh network layout tailored to your property\'s unique architecture, materials, and usage patterns for optimal coverage.',
      icon: '📐'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'We install and configure your mesh system with optimal node placement, seamless integration with existing network, and professional cable management.',
      icon: '🔧'
    },
    {
      step: 4,
      title: 'Optimization & Training',
      description: 'We fine-tune network settings, test coverage throughout your property, configure advanced features, and provide complete system training.',
      icon: '🎯'
    }
  ];

  const pricing = [
    {
      package: 'Home Mesh System',
      price: '$399',
      description: 'Perfect for homes up to 3,000 sq ft',
      features: [
        'Comprehensive WiFi coverage analysis',
        'Professional 3-node mesh system installation',
        'Basic network optimization and configuration',
        'Mobile app setup and basic training',
        '2-year system warranty included',
        'Email support for technical questions'
      ]
    },
    {
      package: 'Large Home System',
      price: '$699',
      popular: true,
      description: 'Ideal for homes up to 6,000 sq ft',
      features: [
        'Detailed WiFi survey with heat mapping',
        'Professional 5-node mesh system installation',
        'Advanced placement optimization and testing',
        'Guest network and parental controls setup',
        '3-year system warranty included',
        'Complete network training and documentation',
        '6 months priority technical support'
      ]
    },
    {
      package: 'Enterprise System',
      price: '$1,299',
      description: 'Commercial-grade for offices and large properties',
      features: [
        'Professional site survey with detailed analysis',
        'Scalable enterprise mesh system installation',
        'Advanced security configuration and monitoring',
        'VLAN setup and network segmentation',
        '5-year system warranty included',
        'Staff training for IT team (up to 10 people)',
        '1 year managed support included',
        'Monthly performance monitoring and reports'
      ]
    }
  ];

  const faqs = [
    {
      question: 'How is mesh WiFi different from a regular router or WiFi extender?',
      answer: 'Mesh systems use multiple access points that work together as a single network, providing seamless coverage without the speed loss typical of extenders. Unlike traditional routers that broadcast from a single point, mesh systems create a "blanket" of coverage with intelligent routing between nodes.'
    },
    {
      question: 'Will I need to switch networks as I move around my home?',
      answer: 'No, that\'s the beauty of mesh systems! They provide seamless roaming, meaning your devices automatically connect to the strongest signal without any interruption or manual network switching. You\'ll have one network name throughout your entire property.'
    },
    {
      question: 'Can I add more nodes to my mesh system later?',
      answer: 'Yes, mesh systems are designed to be scalable. You can easily add more nodes to extend coverage as your needs grow or if you expand your property. We can help you determine the optimal placement for additional nodes.'
    },
    {
      question: 'How do you determine the best placement for mesh nodes?',
      answer: 'We use professional WiFi analysis tools to map signal strength, identify interference sources, and determine optimal placement. Factors include your home\'s layout, building materials, existing interference, and usage patterns to ensure maximum coverage and performance.'
    },
    {
      question: 'What about security with mesh WiFi systems?',
      answer: 'Our mesh systems include enterprise-grade security features including WPA3 encryption, automatic security updates, advanced threat protection, and guest network isolation. Many systems also include built-in firewalls and intrusion detection.'
    },
    {
      question: 'How much internet speed do I need for a mesh system to work well?',
      answer: 'Mesh systems work with any internet speed, but faster internet will provide better performance across all devices. We recommend at least 100 Mbps for homes with multiple users and devices. We can help optimize your system regardless of your current internet speed.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const subject = encodeURIComponent(`Mesh WiFi Setup Request from ${formData.name}`);
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
      alert('Thank you for your interest in mesh WiFi setup! Your email client should open with your request. We\'ll contact you within 24 hours to schedule your free WiFi analysis.');
      
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
            Professional Mesh WiFi Setup
          </h1>
          <p style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 'var(--font-weight-medium)',
            opacity: 0.9,
          }}>
            Eliminate Dead Zones with Whole-Home Coverage
          </p>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Transform your home or office with enterprise-grade mesh WiFi systems that provide seamless, 
            high-speed coverage in every corner of your property. Say goodbye to dead zones forever.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free WiFi Analysis
          </Button>
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
            Why Choose Professional Mesh WiFi Setup?
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
            Our Mesh WiFi Setup Process
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
            Mesh WiFi Setup Packages
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
            Mesh WiFi Setup FAQs
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
                Eliminate WiFi Dead Zones Today
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Get a free WiFi analysis and custom quote for your mesh network installation.
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
                    Home Size
                  </label>
                  <select
                    name="homeSize"
                    value={formData.homeSize}
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
                    <option value="">Select home size...</option>
                    <option value="small">Under 2,000 sq ft</option>
                    <option value="medium">2,000 - 4,000 sq ft</option>
                    <option value="large">4,000 - 6,000 sq ft</option>
                    <option value="xlarge">Over 6,000 sq ft</option>
                    <option value="commercial">Commercial/Office</option>
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
                  Property Address
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
                  Current WiFi Issues
                </label>
                <input
                  type="text"
                  name="currentWiFi"
                  value={formData.currentWiFi}
                  onChange={handleInputChange}
                  placeholder="e.g., Dead zones in bedrooms, slow speeds upstairs"
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
                  Problem Areas
                </label>
                <input
                  type="text"
                  name="deadZones"
                  value={formData.deadZones}
                  onChange={handleInputChange}
                  placeholder="Which rooms or areas have poor WiFi coverage?"
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
                  placeholder="Tell us about your home layout, number of devices, or specific requirements..."
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
                Schedule Free WiFi Analysis
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
