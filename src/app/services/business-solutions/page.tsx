"use client";

import React, { useState } from 'react';
import { Button } from "@/components";
import { Check } from 'lucide-react';

export default function BusinessSolutionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    title: '',
    businessType: '',
    employees: '',
    currentProvider: '',
    requirements: '',
    message: '',
    address: '',
    propertyType: '',
    currentInternet: ''
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

  // Business Solutions-specific data
  const benefits = [
    'Guaranteed uptime with SLA backing and 99.9%+ reliability',
    'Redundant internet connections from multiple providers',
    'Enterprise-grade security with advanced threat protection',
    '24/7 monitoring and priority technical support',
    'Scalable bandwidth options that grow with your business',
    'Dedicated account management and quarterly business reviews'
  ];

  const process = [
    {
      step: 1,
      title: 'Business Assessment',
      description: 'We analyze your business requirements, current infrastructure, growth plans, and compliance needs to design the perfect connectivity solution for your organization.',
      icon: '📋'
    },
    {
      step: 2,
      title: 'Custom Design',
      description: 'Our engineers create a tailored network design with redundancy, security, and scalability built in from the ground up, ensuring maximum uptime and performance.',
      icon: '🏗️'
    },
    {
      step: 3,
      title: 'Professional Deployment',
      description: 'We handle the complete installation with minimal disruption to your business operations, including after-hours deployment options and seamless migration.',
      icon: '🚀'
    },
    {
      step: 4,
      title: 'Ongoing Management',
      description: 'Continuous monitoring, proactive maintenance, regular performance reviews, and dedicated support ensure your business stays connected and competitive.',
      icon: '🛡️'
    }
  ];

  const pricing = [
    {
      package: 'Small Business',
      price: '$299/mo',
      description: 'Perfect for small offices (5-25 employees)',
      features: [
        'Dedicated internet connection with guaranteed speeds',
        'Basic firewall and security monitoring',
        'Email hosting and basic cloud services',
        'Business-hours technical support',
        '99.5% uptime SLA with credits',
        'Monthly usage and performance reports'
      ]
    },
    {
      package: 'Growing Business',
      price: '$599/mo',
      popular: true,
      description: 'Ideal for medium businesses (25-100 employees)',
      features: [
        'Redundant internet connections for failover',
        'Advanced security suite with threat detection',
        'Cloud services integration and management',
        'Priority 24/7 technical support',
        '99.9% uptime SLA with guaranteed credits',
        'Dedicated account manager assigned',
        'Quarterly business and performance reviews'
      ]
    },
    {
      package: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Multi-site connectivity and WAN optimization',
        'Enterprise security platform with compliance',
        'Custom application hosting and management',
        'White-glove 24/7 support with escalation',
        '99.99% uptime SLA with penalty clauses',
        'Dedicated technical team and project manager',
        'Monthly strategic reviews and planning',
        'Disaster recovery and business continuity'
      ]
    }
  ];

  const faqs = [
    {
      question: 'What makes business internet different from residential service?',
      answer: 'Business internet includes guaranteed uptime SLAs, priority support with faster response times, static IP addresses, higher upload speeds, and enhanced security features. You also get dedicated account management and the ability to host servers or run business applications.'
    },
    {
      question: 'Do you offer redundant internet connections for maximum uptime?',
      answer: 'Yes, we provide redundant internet connections from multiple providers (fiber, cable, wireless) with automatic failover. This ensures your business stays online even if one connection fails, which is critical for mission-critical operations.'
    },
    {
      question: 'Can you work with our existing IT team and infrastructure?',
      answer: 'Absolutely. We collaborate closely with your IT staff and can integrate with existing infrastructure. We provide detailed documentation, training, and ongoing support to ensure seamless integration with your current systems and processes.'
    },
    {
      question: 'What kind of support and response times do you provide?',
      answer: 'We offer 24/7 technical support with guaranteed response times based on your service level. Priority support includes 15-minute response for critical issues, proactive monitoring, and dedicated account management with direct contact information.'
    },
    {
      question: 'How do you handle security for business networks?',
      answer: 'Our business solutions include enterprise-grade firewalls, intrusion detection and prevention, VPN capabilities, content filtering, and regular security updates. We also provide compliance support for industries with specific regulatory requirements.'
    },
    {
      question: 'Can you support multiple office locations?',
      answer: 'Yes, we specialize in multi-site connectivity solutions including site-to-site VPNs, MPLS networks, and SD-WAN implementations. We can connect all your locations with secure, high-performance networks and centralized management.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const subject = encodeURIComponent(`Business Solutions Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Title: ${formData.title}
Business Type: ${formData.businessType}
Employees: ${formData.employees}
Current Provider: ${formData.currentProvider}
Requirements: ${formData.requirements}

Message:
${formData.message}
      `);
      
      window.location.href = `mailto:info@theorbittech.com?subject=${subject}&body=${body}`;
      alert('Thank you for your interest in our business solutions! Your email client should open with your request. We\'ll contact you within 4 hours to schedule your free business assessment.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        title: '',
        businessType: '',
        employees: '',
        currentProvider: '',
        requirements: '',
        message: '',
        address: '',
        propertyType: '',
        currentInternet: ''
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
            Enterprise Business Solutions
          </h1>
          <p style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 'var(--font-weight-medium)',
            opacity: 0.9,
          }}>
            Enterprise-Grade Connectivity for Your Business
          </p>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Reliable, scalable internet solutions designed for businesses that demand maximum uptime, 
            security, and performance. From small offices to enterprise deployments across the DMV area.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Business Assessment
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
            Why Choose Our Business Solutions?
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
                }}><Check className="w-4 h-4" /></span>
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
            Our Business Implementation Process
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
            Business Solution Packages
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
                      <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}><Check className="w-4 h-4" /></span>
                      <span style={{ fontSize: 'var(--text-base)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={pkg.popular ? "primary" : "secondary"}
                  size="lg"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full"
                >
                  {pkg.price === 'Custom' ? 'Get Custom Quote' : 'Choose This Package'}
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
            Business Solutions FAQs
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
            maxWidth: '700px',
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
                Upgrade Your Business Connectivity
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Schedule a free business assessment and get a custom quote for your enterprise internet solution.
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
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
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
                    Job Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="e.g., IT Manager, CEO, Operations Director"
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
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
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
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
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
                    <option value="">Select business type...</option>
                    <option value="office">Professional Office</option>
                    <option value="retail">Retail/Restaurant</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="other">Other</option>
                  </select>
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
                    Number of Employees
                  </label>
                  <select
                    name="employees"
                    value={formData.employees}
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
                    <option value="">Select employee count...</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-25">11-25 employees</option>
                    <option value="26-50">26-50 employees</option>
                    <option value="51-100">51-100 employees</option>
                    <option value="100+">100+ employees</option>
                  </select>
                </div>
                <div>
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
                    name="currentProvider"
                    value={formData.currentProvider}
                    onChange={handleInputChange}
                    placeholder="e.g., Verizon, Comcast, AT&T"
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

              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label style={{
                  display: 'block',
                  marginBottom: 'var(--space-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--text-primary)',
                }}>
                  Business Requirements
                </label>
                <input
                  type="text"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  placeholder="e.g., High uptime, multiple locations, cloud integration"
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
                  Project Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your current challenges, timeline, budget considerations, or specific requirements..."
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
                className="w-full"
              >
                Schedule Business Assessment
              </Button>

              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
                textAlign: 'center',
                marginTop: 'var(--space-md)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Priority response for business inquiries: within 4 hours during business days. 
                All consultations are confidential and obligation-free.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

