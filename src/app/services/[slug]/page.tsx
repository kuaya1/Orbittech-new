"use client";

import React, { useState } from 'react';
import { Button } from "@/components";
import { notFound } from 'next/navigation';

// Service data structure
interface ServiceData {
  slug: string;
  title: string;
  subtitle: string;
  heroDescription: string;
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
    icon: string;
  }[];
  pricing: {
    package: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  ctaTitle: string;
  ctaDescription: string;
}

// Service data
const servicesData: Record<string, ServiceData> = {
  starlink: {
    slug: 'starlink',
    title: 'Professional Starlink Installation',
    subtitle: 'High-Speed Satellite Internet for Rural & Remote Areas',
    heroDescription: 'Get blazing-fast internet anywhere with professional Starlink installation. Our certified technicians ensure optimal placement and configuration for maximum performance.',
    benefits: [
      'High-speed internet up to 200+ Mbps',
      'Low latency for gaming and video calls',
      'No data caps or throttling',
      'Works anywhere with clear sky view',
      'Professional installation and setup',
      'Ongoing technical support'
    ],
    process: [
      {
        step: 1,
        title: 'Site Assessment',
        description: 'We evaluate your property to determine the optimal placement for your Starlink dish, ensuring clear sky visibility and minimal obstructions.',
        icon: '🔍'
      },
      {
        step: 2,
        title: 'Professional Installation',
        description: 'Our certified technicians mount and align your Starlink system, run cables, and configure your network for optimal performance.',
        icon: '🛠️'
      },
      {
        step: 3,
        title: 'Testing & Optimization',
        description: 'We thoroughly test your connection, optimize settings, and ensure all devices are connected and working properly.',
        icon: '⚡'
      },
      {
        step: 4,
        title: 'Training & Support',
        description: 'We provide complete training on your new system and ongoing support to keep you connected.',
        icon: '🎓'
      }
    ],
    pricing: [
      {
        package: 'Basic Installation',
        price: '$299',
        description: 'Standard ground mount installation',
        features: [
          'Site survey and assessment',
          'Ground mount installation',
          'Basic cable routing (up to 100ft)',
          'Network configuration',
          '1-year installation warranty',
          'Basic training session'
        ]
      },
      {
        package: 'Premium Installation',
        price: '$499',
        popular: true,
        description: 'Roof mount with professional cable management',
        features: [
          'Comprehensive site survey',
          'Professional roof mount',
          'Advanced cable management',
          'Mesh network integration',
          '2-year installation warranty',
          'Complete training and documentation',
          '3 months priority support'
        ]
      },
      {
        package: 'Enterprise Setup',
        price: '$799',
        description: 'Commercial-grade installation with redundancy',
        features: [
          'Multi-point site analysis',
          'Commercial-grade mounting',
          'Redundant cable routing',
          'Business network integration',
          '5-year installation warranty',
          'Staff training for up to 10 people',
          '1 year priority support',
          'Monthly performance reports'
        ]
      }
    ],
    faqs: [
      {
        question: 'How fast is Starlink internet?',
        answer: 'Starlink typically provides download speeds between 50-200+ Mbps with low latency, making it suitable for streaming, gaming, and video conferencing.'
      },
      {
        question: 'Do I need a clear view of the sky?',
        answer: 'Yes, Starlink requires an unobstructed view of the northern sky. Our site assessment will determine the best placement for optimal performance.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Most installations are completed in 2-4 hours, depending on the complexity of the setup and cable routing requirements.'
      },
      {
        question: 'What happens if there\'s bad weather?',
        answer: 'Starlink is designed to work in most weather conditions. Heavy snow or severe storms may cause temporary service interruptions.'
      },
      {
        question: 'Is there a data limit?',
        answer: 'Starlink residential service has no hard data caps, though speeds may be reduced during peak usage times in congested areas.'
      }
    ],
    ctaTitle: 'Ready to Get Connected?',
    ctaDescription: 'Schedule your free site assessment and get a custom quote for your Starlink installation.'
  },
  'mesh-wifi': {
    slug: 'mesh-wifi',
    title: 'Professional Mesh WiFi Installation',
    subtitle: 'Eliminate Dead Zones with Whole-Home Coverage',
    heroDescription: 'Transform your home or office with enterprise-grade mesh WiFi systems that provide seamless, high-speed coverage in every corner of your property.',
    benefits: [
      'Eliminate WiFi dead zones completely',
      'Seamless roaming between access points',
      'Enterprise-grade security features',
      'Easy management through mobile app',
      'Scalable system grows with your needs',
      'Professional installation and optimization'
    ],
    process: [
      {
        step: 1,
        title: 'WiFi Analysis',
        description: 'We conduct a comprehensive WiFi survey to identify dead zones, interference sources, and optimal access point placement.',
        icon: '📊'
      },
      {
        step: 2,
        title: 'System Design',
        description: 'Our engineers design a custom mesh network layout tailored to your property\'s unique layout and requirements.',
        icon: '📐'
      },
      {
        step: 3,
        title: 'Professional Installation',
        description: 'We install and configure your mesh system, ensuring optimal placement and seamless integration with your existing network.',
        icon: '🔧'
      },
      {
        step: 4,
        title: 'Optimization & Testing',
        description: 'We fine-tune your network settings, test coverage throughout your property, and provide complete system training.',
        icon: '🎯'
      }
    ],
    pricing: [
      {
        package: 'Home Mesh System',
        price: '$399',
        description: 'Perfect for homes up to 3,000 sq ft',
        features: [
          'WiFi coverage analysis',
          '3-node mesh system',
          'Professional installation',
          'Mobile app setup',
          '2-year system warranty',
          'Basic network training'
        ]
      },
      {
        package: 'Large Home System',
        price: '$699',
        popular: true,
        description: 'Ideal for homes up to 6,000 sq ft',
        features: [
          'Comprehensive WiFi survey',
          '5-node mesh system',
          'Advanced placement optimization',
          'Guest network configuration',
          '3-year system warranty',
          'Complete network training',
          '6 months priority support'
        ]
      },
      {
        package: 'Enterprise System',
        price: '$1,299',
        description: 'Commercial-grade for offices and large properties',
        features: [
          'Professional site survey',
          'Scalable enterprise mesh system',
          'Advanced security configuration',
          'VLAN and network segmentation',
          '5-year system warranty',
          'Staff training for IT team',
          '1 year managed support',
          'Monthly performance monitoring'
        ]
      }
    ],
    faqs: [
      {
        question: 'How is mesh WiFi different from a regular router?',
        answer: 'Mesh systems use multiple access points that work together to create seamless coverage, unlike traditional routers that broadcast from a single point.'
      },
      {
        question: 'Will I need to switch networks as I move around?',
        answer: 'No, mesh systems provide seamless roaming. Your devices automatically connect to the strongest signal without any interruption.'
      },
      {
        question: 'Can I add more nodes later?',
        answer: 'Yes, mesh systems are designed to be scalable. You can easily add more nodes to extend coverage as your needs grow.'
      },
      {
        question: 'How do you determine node placement?',
        answer: 'We use professional WiFi analysis tools to map signal strength and identify optimal placement for maximum coverage and performance.'
      },
      {
        question: 'What about security?',
        answer: 'Our mesh systems include enterprise-grade security features including WPA3 encryption, automatic security updates, and advanced threat protection.'
      }
    ],
    ctaTitle: 'Eliminate WiFi Dead Zones Today',
    ctaDescription: 'Get a free WiFi analysis and custom quote for your mesh network installation.'
  },
  business: {
    slug: 'business',
    title: 'Business Internet Solutions',
    subtitle: 'Enterprise-Grade Connectivity for Your Business',
    heroDescription: 'Reliable, scalable internet solutions designed for businesses that demand maximum uptime, security, and performance. From small offices to enterprise deployments.',
    benefits: [
      'Guaranteed uptime with SLA backing',
      'Redundant internet connections',
      'Enterprise-grade security',
      '24/7 monitoring and support',
      'Scalable bandwidth options',
      'Dedicated account management'
    ],
    process: [
      {
        step: 1,
        title: 'Business Assessment',
        description: 'We analyze your business requirements, current infrastructure, and growth plans to design the perfect connectivity solution.',
        icon: '📋'
      },
      {
        step: 2,
        title: 'Custom Design',
        description: 'Our engineers create a tailored network design with redundancy, security, and scalability built in from the ground up.',
        icon: '🏗️'
      },
      {
        step: 3,
        title: 'Professional Deployment',
        description: 'We handle the complete installation with minimal disruption to your business operations, including after-hours deployment options.',
        icon: '🚀'
      },
      {
        step: 4,
        title: 'Ongoing Management',
        description: 'Continuous monitoring, proactive maintenance, and dedicated support ensure your business stays connected.',
        icon: '🛡️'
      }
    ],
    pricing: [
      {
        package: 'Small Business',
        price: '$299/mo',
        description: 'Perfect for small offices (5-25 employees)',
        features: [
          'Dedicated internet connection',
          'Basic firewall and security',
          'Email and web hosting',
          'Business-hours support',
          '99.5% uptime SLA',
          'Monthly usage reports'
        ]
      },
      {
        package: 'Growing Business',
        price: '$599/mo',
        popular: true,
        description: 'Ideal for medium businesses (25-100 employees)',
        features: [
          'Redundant internet connections',
          'Advanced security suite',
          'Cloud services integration',
          'Priority 24/7 support',
          '99.9% uptime SLA',
          'Dedicated account manager',
          'Quarterly business reviews'
        ]
      },
      {
        package: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large organizations',
        features: [
          'Multi-site connectivity',
          'Enterprise security platform',
          'Custom application hosting',
          'White-glove 24/7 support',
          '99.99% uptime SLA',
          'Dedicated technical team',
          'Monthly strategic reviews',
          'Disaster recovery planning'
        ]
      }
    ],
    faqs: [
      {
        question: 'What makes business internet different from residential?',
        answer: 'Business internet includes guaranteed uptime SLAs, priority support, static IP addresses, and enhanced security features designed for commercial use.'
      },
      {
        question: 'Do you offer redundant connections?',
        answer: 'Yes, we provide redundant internet connections from multiple providers to ensure maximum uptime for mission-critical businesses.'
      },
      {
        question: 'Can you work with our existing IT team?',
        answer: 'Absolutely. We collaborate closely with your IT staff and can provide training and documentation for seamless integration.'
      },
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer 24/7 technical support with guaranteed response times, proactive monitoring, and dedicated account management.'
      },
      {
        question: 'How do you handle security?',
        answer: 'Our business solutions include enterprise-grade firewalls, intrusion detection, VPN capabilities, and regular security updates.'
      }
    ],
    ctaTitle: 'Upgrade Your Business Connectivity',
    ctaDescription: 'Schedule a free business assessment and get a custom quote for your enterprise internet solution.'
  }
};

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
            {service.title}
          </h1>
          <p style={{
            fontSize: 'var(--text-2xl)',
            marginBottom: 'var(--space-lg)',
            fontWeight: 'var(--font-weight-medium)',
            opacity: 0.9,
          }}>
            {service.subtitle}
          </p>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            {service.heroDescription}
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Free Quote
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
            Why Choose Our {service.title}?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-xl)',
          }}>
            {service.benefits.map((benefit, index) => (
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
            Our Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {service.process.map((step, index) => (
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
            Pricing & Packages
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
          }}>
            {service.pricing.map((pkg, index) => (
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
                  className="w-full"
                >
                  Get Started
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
            Frequently Asked Questions
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {service.faqs.map((faq, index) => (
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
                {service.ctaTitle}
              </h2>
              <p style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--text-secondary)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                {service.ctaDescription}
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
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
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
                  placeholder="Tell us about your project requirements..."
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
                Get Free Quote
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}