"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function FAQPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // FAQ categories and questions
  const faqCategories = [
    {
      category: 'General Services',
      questions: [
        {
          question: 'What services does Orbit Tech provide?',
          answer: 'We specialize in three main areas: professional Starlink satellite internet installation, mesh WiFi system setup for whole-home coverage, and comprehensive business internet solutions. We serve residential and commercial customers throughout the DMV area with expert installation, ongoing support, and system optimization.'
        },
        {
          question: 'What areas do you service?',
          answer: 'We proudly serve the entire DMV area, including Northern Virginia (Loudoun, Fairfax, Prince William counties), Maryland (Montgomery, Prince George\'s counties), and Washington DC. Our local expertise means we understand the unique connectivity challenges of each area and can provide tailored solutions.'
        },
        {
          question: 'How do I know which service is right for me?',
          answer: 'We offer free consultations to assess your specific needs. Starlink is ideal for rural areas with limited internet options, mesh WiFi solves coverage issues in larger homes, and business solutions provide enterprise-grade reliability. Our experts will evaluate your location, usage patterns, and requirements to recommend the best solution.'
        },
        {
          question: 'Do you offer emergency or after-hours service?',
          answer: 'Yes! We provide 24/7 emergency support for existing customers experiencing critical connectivity issues. For new installations, we offer flexible scheduling including evenings and weekends to accommodate your schedule.'
        }
      ]
    },
    {
      category: 'Starlink Services',
      questions: [
        {
          question: 'What is Starlink and how does it work?',
          answer: 'Starlink is SpaceX\'s satellite internet constellation that provides high-speed internet via low-Earth orbit satellites. Unlike traditional satellite internet, Starlink offers speeds up to 200+ Mbps with low latency (20-40ms), making it suitable for streaming, gaming, and video calls. It works anywhere with a clear view of the sky.'
        },
        {
          question: 'How fast is Starlink internet?',
          answer: 'Starlink typically provides download speeds between 50-200+ Mbps with upload speeds of 10-20 Mbps. Latency is usually 20-40ms, which is excellent for real-time applications. Speeds can vary based on location, weather, and network congestion, but it\'s significantly faster than traditional satellite internet.'
        },
        {
          question: 'Do I need a clear view of the sky for Starlink?',
          answer: 'Yes, Starlink requires an unobstructed view of the northern sky. Our professional site assessment identifies the optimal placement location and evaluates potential obstructions like trees, buildings, or power lines. We use specialized tools to ensure the best possible signal reception.'
        },
        {
          question: 'Can Starlink work in bad weather?',
          answer: 'Starlink is designed to work in most weather conditions including light rain and snow. Heavy precipitation or severe storms may cause temporary service interruptions, but the system typically recovers quickly. The dish has a built-in heating element to melt snow and ice.'
        }
      ]
    },
    {
      category: 'Mesh WiFi Services',
      questions: [
        {
          question: 'What is mesh WiFi and how is it different from a regular router?',
          answer: 'Mesh WiFi uses multiple access points (nodes) that work together to create seamless coverage throughout your property. Unlike traditional routers that broadcast from a single point, mesh systems eliminate dead zones and provide consistent speeds everywhere. Your devices automatically connect to the strongest signal without manual switching.'
        },
        {
          question: 'How many mesh nodes do I need for my home?',
          answer: 'The number of nodes depends on your home\'s size, layout, and construction materials. Generally, you need one node per 1,000-1,500 square feet. Our professional WiFi analysis determines the optimal number and placement of nodes for your specific property to ensure complete coverage.'
        },
        {
          question: 'Will mesh WiFi work with my existing internet service?',
          answer: 'Yes! Mesh WiFi systems work with any internet service provider and connection type. We can integrate mesh systems with cable, fiber, DSL, or even Starlink internet. The mesh system replaces your existing router to provide better coverage and performance.'
        },
        {
          question: 'Can I add more nodes to my mesh system later?',
          answer: 'Absolutely! Mesh systems are designed to be scalable. You can easily add more nodes as your needs grow or if you expand your property. We can help you determine the best placement for additional nodes and configure them for optimal performance.'
        }
      ]
    },
    {
      category: 'Business Solutions',
      questions: [
        {
          question: 'What makes business internet different from residential service?',
          answer: 'Business internet includes guaranteed uptime SLAs, priority support with faster response times, static IP addresses, higher upload speeds, and enhanced security features. You also get dedicated account management, the ability to host servers, and service level agreements with financial penalties for downtime.'
        },
        {
          question: 'Do you provide redundant internet connections?',
          answer: 'Yes, we specialize in redundant internet solutions using multiple providers and connection types (fiber, cable, wireless). Automatic failover ensures your business stays online even if one connection fails. This is critical for businesses that can\'t afford downtime.'
        },
        {
          question: 'Can you support multiple office locations?',
          answer: 'Absolutely! We provide multi-site connectivity solutions including site-to-site VPNs, MPLS networks, and SD-WAN implementations. We can connect all your locations with secure, high-performance networks and provide centralized management and monitoring.'
        },
        {
          question: 'What kind of support do business customers receive?',
          answer: 'Business customers receive priority 24/7 technical support with guaranteed response times, proactive monitoring, dedicated account management, and regular performance reviews. We also provide staff training and detailed documentation for your IT team.'
        }
      ]
    },
    {
      category: 'Pricing & Warranties',
      questions: [
        {
          question: 'How much do your services cost?',
          answer: 'Professional Starlink installation costs $499 for standard residential setup. This includes site assessment, mounting hardware, cable routing, speed optimization, and 90-day warranty. The monthly Starlink service is $120 paid directly to Starlink. We provide transparent, upfront pricing with no hidden fees.'
        },
        {
          question: 'What kind of warranty do you offer?',
          answer: 'We provide comprehensive warranties on all our work: 1-2 years on residential installations and up to 5 years on business installations. This covers our installation work, not the equipment itself (which has manufacturer warranties). We also offer extended warranty options for additional peace of mind.'
        },
        {
          question: 'Do you offer financing or payment plans?',
          answer: 'Yes, we offer flexible payment options for larger installations. We accept all major credit cards, and financing is available for qualified customers. Business customers can also arrange monthly service agreements that include equipment and installation costs.'
        },
        {
          question: 'Are there any ongoing monthly fees for your services?',
          answer: 'For installation services (Starlink, mesh WiFi), there are no ongoing fees to Orbit Tech - you just pay your internet service provider. Business solution customers have monthly service fees that include ongoing support, monitoring, and maintenance. All fees are clearly outlined in your service agreement.'
        }
      ]
    },
    {
      category: 'Installation & Support',
      questions: [
        {
          question: 'How long does installation take?',
          answer: 'Installation time varies by service: Starlink installations typically take 2-4 hours, mesh WiFi setups take 2-3 hours, and business installations can take 4-8 hours depending on complexity. We provide detailed time estimates during your consultation and always work efficiently to minimize disruption.'
        },
        {
          question: 'Do I need to be present during installation?',
          answer: 'Yes, we require someone 18 or older to be present during installation for security and approval purposes. You don\'t need to supervise every step, but we need you available for key decisions, final placement approval, and system training.'
        },
        {
          question: 'What happens if I\'m not satisfied with the installation?',
          answer: 'We stand behind our work with comprehensive satisfaction guarantees. If you\'re not completely satisfied, we\'ll work with you to resolve any issues at no additional cost. Our goal is to ensure you\'re thrilled with your new internet service and our professional installation.'
        },
        {
          question: 'Do you provide ongoing technical support?',
          answer: 'Yes! We provide ongoing technical support for all our customers. This includes troubleshooting assistance, system optimization, and help with any connectivity issues. Business customers receive priority support with guaranteed response times, while residential customers have access to our expert support team during business hours.'
        }
      ]
    }
  ];

  // Flatten all questions for search
  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      categoryIndex,
      questionIndex,
      category: category.category
    }))
  );

  // Filter questions based on search term
  const filteredQuestions = searchTerm
    ? allQuestions.filter(q =>
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const displayCategories = searchTerm ? [] : faqCategories;

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
            Frequently Asked Questions
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '700px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Find answers to common questions about our services, installation process, 
            pricing, and support. Can't find what you're looking for? Contact us directly.
          </p>

          {/* Search Bar */}
          <div style={{
            maxWidth: '500px',
            margin: '0 auto',
            position: 'relative',
          }}>
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: 'var(--space-md) var(--space-lg)',
                fontSize: 'var(--text-base)',
                border: 'none',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--brand-white)',
                color: 'var(--text-primary)',
                boxShadow: 'var(--shadow-md)',
              }}
            />
            <div style={{
              position: 'absolute',
              right: 'var(--space-md)',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)',
              fontSize: 'var(--text-lg)',
            }}>
              🔍
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section style={sectionStyles}>
        <div style={containerStyles}>
          {/* Search Results */}
          {searchTerm && (
            <div style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xl)',
                textAlign: 'center',
              }}>
                Search Results for "{searchTerm}" ({filteredQuestions.length} found)
              </h2>
              
              {filteredQuestions.length === 0 ? (
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
                    No results found for your search. Try different keywords or browse our categories below.
                  </p>
                  <Button 
                    variant="secondary" 
                    size="md"
                    onClick={() => setSearchTerm('')}
                  >
                    Clear Search
                  </Button>
                </div>
              ) : (
                <div>
                  {filteredQuestions.map((faq, index) => (
                    <div key={index} style={{
                      backgroundColor: 'var(--brand-white)',
                      marginBottom: 'var(--space-md)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid var(--border-light)',
                    }}>
                      <div style={{
                        padding: 'var(--space-lg)',
                        borderBottom: '1px solid var(--border-light)',
                      }}>
                        <div style={{
                          fontSize: 'var(--text-sm)',
                          color: 'var(--accent-blue)',
                          fontWeight: 'var(--font-weight-medium)',
                          marginBottom: 'var(--space-xs)',
                        }}>
                          {faq.category}
                        </div>
                        <h3 style={{
                          fontSize: 'var(--text-lg)',
                          fontWeight: 'var(--font-weight-semibold)',
                          color: 'var(--brand-navy)',
                          marginBottom: 'var(--space-md)',
                        }}>
                          {faq.question}
                        </h3>
                        <p style={{
                          color: 'var(--text-secondary)',
                          lineHeight: 'var(--leading-relaxed)',
                        }}>
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* FAQ Categories */}
          {displayCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: 'var(--space-4xl)' }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-2xl)',
                textAlign: 'center',
                paddingBottom: 'var(--space-lg)',
                borderBottom: '2px solid var(--brand-sky)',
              }}>
                {category.category}
              </h2>

              <div>
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex; // Unique index for each question
                  return (
                    <div key={questionIndex} style={{
                      backgroundColor: 'var(--brand-white)',
                      marginBottom: 'var(--space-md)',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid var(--border-light)',
                      transition: 'all 0.2s ease',
                    }}>
                      <button
                        onClick={() => setOpenFaq(openFaq === globalIndex ? null : globalIndex)}
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
                          transition: 'background-color 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--brand-sky)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <span style={{ paddingRight: 'var(--space-md)' }}>
                          {faq.question}
                        </span>
                        <span style={{
                          transform: openFaq === globalIndex ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                          fontSize: 'var(--text-base)',
                          flexShrink: 0,
                        }}>
                          ▼
                        </span>
                      </button>
                      {openFaq === globalIndex && (
                        <div style={{
                          padding: '0 var(--space-lg) var(--space-lg) var(--space-lg)',
                          backgroundColor: 'var(--brand-sky)',
                          borderTop: '1px solid var(--border-light)',
                        }}>
                          <p style={{
                            color: 'var(--text-primary)',
                            lineHeight: 'var(--leading-relaxed)',
                            margin: 0,
                          }}>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
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
              Still Have Questions?
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '600px',
              margin: '0 auto var(--space-2xl) auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Can't find the answer you're looking for? Our expert team is here to help. 
              Contact us for personalized assistance with your connectivity needs.
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
                Contact Our Experts
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = 'tel:7035550742'}
              >
                Call (571) 999-6915
              </Button>
            </div>

            <p style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              marginTop: 'var(--space-lg)',
            }}>
              Free consultations available • Response within 24 hours
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
