"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function InstallationGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  // Installation steps data
  const installationSteps = [
    {
      step: 1,
      title: 'Initial Consultation & Site Assessment',
      duration: '30-60 minutes',
      description: 'Our process begins with understanding your specific needs and evaluating your property to ensure optimal service delivery.',
      details: [
        'Free consultation to discuss your internet needs and usage patterns',
        'Professional site survey to identify the best installation locations',
        'Assessment of potential obstacles like trees, buildings, or terrain',
        'Evaluation of existing infrastructure and wiring requirements',
        'Custom recommendation based on your property and requirements',
        'Transparent pricing with no hidden fees or surprises'
      ],
      whatToExpect: 'Our certified technician will arrive with professional testing equipment to evaluate signal strength, identify optimal placement locations, and discuss your specific needs. This is completely free with no obligation.',
      yourRole: 'Be available to discuss your internet usage, show us around your property, and ask any questions you might have about the process.'
    },
    {
      step: 2,
      title: 'Scheduling & Preparation',
      duration: '1-3 business days',
      description: 'Once you approve our recommendation, we handle all the logistics to prepare for your installation day.',
      details: [
        'Scheduling your installation at a convenient time for you',
        'Ordering and preparing all necessary equipment and materials',
        'Coordinating with utility companies if required',
        'Providing you with a detailed installation timeline',
        'Pre-installation checklist and preparation instructions',
        'Confirmation call 24 hours before your appointment'
      ],
      whatToExpected: 'We\'ll work with your schedule to find the perfect installation time. You\'ll receive detailed information about what to expect and how to prepare.',
      yourRole: 'Choose a convenient installation time, ensure access to your property, and complete any simple preparation steps we provide.'
    },
    {
      step: 3,
      title: 'Professional Installation Day',
      duration: '2-6 hours depending on complexity',
      description: 'Our certified technicians handle the complete installation process with minimal disruption to your daily routine.',
      details: [
        'Arrival of our professional installation team with all equipment',
        'Final site verification and placement confirmation with you',
        'Professional mounting of equipment with weatherproof installation',
        'Clean, organized cable routing with minimal visual impact',
        'Network configuration and integration with existing systems',
        'Complete cleanup and removal of all installation materials'
      ],
      whatToExpect: 'Our team arrives with clearly marked vehicles and professional uniforms. We\'ll protect your property, work efficiently, and keep you informed throughout the process.',
      yourRole: 'Provide access to installation areas, be available for final placement approval, and ensure pets are secured for safety.'
    },
    {
      step: 4,
      title: 'System Testing & Optimization',
      duration: '30-60 minutes',
      description: 'We thoroughly test your new system to ensure optimal performance and reliability before considering the job complete.',
      details: [
        'Comprehensive speed and connectivity testing throughout your property',
        'Signal strength verification and optimization adjustments',
        'Testing of all connected devices and network integration',
        'Performance benchmarking and documentation',
        'Identification and resolution of any potential issues',
        'Final system calibration for maximum performance'
      ],
      whatToExpect: 'We\'ll test your connection from multiple locations, verify speeds meet or exceed expectations, and ensure all your devices connect properly.',
      yourRole: 'Test the connection on your devices with our guidance and let us know if you notice any issues or have questions.'
    },
    {
      step: 5,
      title: 'Training & Handover',
      duration: '15-30 minutes',
      description: 'We ensure you\'re completely comfortable with your new system before we leave your property.',
      details: [
        'Complete walkthrough of your new system and its features',
        'Training on any management apps or control interfaces',
        'Explanation of troubleshooting basics and when to call us',
        'Provision of all documentation, warranties, and contact information',
        'Setup of monitoring and support systems',
        'Scheduling of any follow-up visits if needed'
      ],
      whatToExpect: 'We\'ll show you how everything works, answer all your questions, and make sure you\'re confident using your new system.',
      yourRole: 'Ask questions, take notes if helpful, and let us know if you\'d like additional training on any features.'
    },
    {
      step: 6,
      title: 'Ongoing Support & Monitoring',
      duration: 'Continuous',
      description: 'Our relationship doesn\'t end with installation. We provide ongoing support to ensure your system continues performing optimally.',
      details: [
        '24/7 system monitoring for proactive issue detection',
        'Regular performance check-ins and optimization updates',
        'Priority technical support with guaranteed response times',
        'Free troubleshooting and minor adjustments as needed',
        'Annual system health checks and maintenance',
        'Upgrade recommendations as technology evolves'
      ],
      whatToExpect: 'You\'ll have direct access to our support team, proactive monitoring of your system, and regular check-ins to ensure everything is working perfectly.',
      yourRole: 'Contact us with any questions or concerns, and take advantage of our ongoing support services whenever needed.'
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'How long does the entire installation process take from start to finish?',
      answer: 'From initial consultation to completed installation, the process typically takes 3-7 business days. The actual installation day usually takes 2-6 hours depending on the complexity of your setup and the type of service being installed.'
    },
    {
      question: 'Do I need to be present during the entire installation?',
      answer: 'Yes, we require someone 18 or older to be present during the installation for security and approval purposes. You don\'t need to watch every step, but we\'ll need you available for key decisions and final approval of the installation.'
    },
    {
      question: 'Will the installation damage my property or landscaping?',
      answer: 'We take great care to minimize any impact on your property. Our technicians are trained in clean installation techniques, and we always restore any areas we disturb. We\'ll discuss the installation plan with you beforehand to address any concerns.'
    },
    {
      question: 'What happens if weather conditions are poor on installation day?',
      answer: 'Safety is our top priority. If weather conditions are unsafe for installation (heavy rain, high winds, ice), we\'ll reschedule your appointment at no charge. We\'ll contact you as soon as possible to arrange a new time.'
    },
    {
      question: 'Can I use my internet during the installation process?',
      answer: 'If you have existing internet service, we try to minimize disruption. However, there may be brief periods where your current service is interrupted as we integrate the new system. We\'ll coordinate with you to minimize any inconvenience.'
    },
    {
      question: 'What if I\'m not satisfied with the installation or performance?',
      answer: 'We stand behind our work with comprehensive warranties and satisfaction guarantees. If you\'re not completely satisfied, we\'ll work with you to resolve any issues. Our goal is to ensure you\'re thrilled with your new internet service.'
    },
    {
      question: 'Do you provide training on how to use the new system?',
      answer: 'Absolutely! We include comprehensive training as part of every installation. We\'ll show you how to use any management apps, explain basic troubleshooting, and ensure you\'re comfortable with all aspects of your new system.'
    },
    {
      question: 'What should I do to prepare for the installation?',
      answer: 'We\'ll provide you with a detailed preparation checklist, but generally you should ensure clear access to installation areas, secure any pets, and be prepared to discuss your internet usage needs with our technicians.'
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
            fontSize: 'var(--text-5xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            The Orbit Tech Installation Process: What to Expect
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '800px',
            margin: '0 auto var(--space-2xl) auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            A complete, step-by-step guide to our professional installation process. 
            From initial consultation to ongoing support, here\'s exactly what you can expect 
            when you choose Orbit Tech for your internet connectivity needs.
          </p>
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => document.getElementById('installation-steps')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Installation Steps
          </Button>
        </div>
      </section>

      {/* Installation Steps */}
      <section id="installation-steps" style={sectionStyles}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Step-by-Step Installation Process
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Our proven 6-step process ensures a smooth, professional installation experience 
              with minimal disruption to your daily routine.
            </p>
          </div>

          {installationSteps.map((step, index) => (
            <div key={index} style={{
              marginBottom: 'var(--space-4xl)',
              backgroundColor: index % 2 === 0 ? 'var(--brand-white)' : 'var(--brand-sky)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-2xl)',
              boxShadow: 'var(--shadow-md)',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: 'var(--space-2xl)',
                alignItems: 'start',
              }}>
                {/* Step Number and Image Placeholder */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  minWidth: '200px',
                }}>
                  <div style={{
                    backgroundColor: 'var(--accent-blue)',
                    color: 'var(--text-inverse)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-weight-bold)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    {step.step}
                  </div>
                  
                  {/* Image Placeholder */}
                  <div style={{
                    width: '180px',
                    height: '120px',
                    backgroundColor: 'var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    fontSize: 'var(--text-sm)',
                    textAlign: 'center',
                    marginBottom: 'var(--space-md)',
                  }}>
                    📷<br />Step {step.step} Image
                  </div>
                  
                  <div style={{
                    fontSize: 'var(--text-sm)',
                    color: 'var(--accent-blue)',
                    fontWeight: 'var(--font-weight-medium)',
                    textAlign: 'center',
                  }}>
                    Duration: {step.duration}
                  </div>
                </div>

                {/* Step Content */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: 'var(--text-2xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    color: 'var(--brand-navy)',
                    marginBottom: 'var(--space-md)',
                    lineHeight: 'var(--leading-tight)',
                  }}>
                    {step.title}
                  </h3>

                  <p style={{
                    fontSize: 'var(--text-lg)',
                    color: 'var(--text-primary)',
                    lineHeight: 'var(--leading-relaxed)',
                    marginBottom: 'var(--space-lg)',
                  }}>
                    {step.description}
                  </p>

                  {/* What's Included */}
                  <div style={{ marginBottom: 'var(--space-lg)' }}>
                    <h4 style={{
                      fontSize: 'var(--text-lg)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--brand-navy)',
                      marginBottom: 'var(--space-md)',
                    }}>
                      What's Included:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                    }}>
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 'var(--space-sm)',
                          marginBottom: 'var(--space-sm)',
                        }}>
                          <span style={{
                            color: 'var(--accent-green)',
                            fontWeight: 'bold',
                            flexShrink: 0,
                          }}>✓</span>
                          <span style={{
                            fontSize: 'var(--text-base)',
                            color: 'var(--text-primary)',
                            lineHeight: 'var(--leading-relaxed)',
                          }}>
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What to Expect and Your Role */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-lg)',
                  }}>
                    <div style={{
                      backgroundColor: index % 2 === 0 ? 'var(--brand-sky)' : 'var(--brand-white)',
                      padding: 'var(--space-lg)',
                      borderRadius: 'var(--radius-lg)',
                    }}>
                      <h5 style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--brand-navy)',
                        marginBottom: 'var(--space-sm)',
                      }}>
                        What to Expect:
                      </h5>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 'var(--leading-relaxed)',
                        margin: 0,
                      }}>
                        {step.whatToExpect}
                      </p>
                    </div>

                    <div style={{
                      backgroundColor: index % 2 === 0 ? 'var(--brand-sky)' : 'var(--brand-white)',
                      padding: 'var(--space-lg)',
                      borderRadius: 'var(--radius-lg)',
                    }}>
                      <h5 style={{
                        fontSize: 'var(--text-base)',
                        fontWeight: 'var(--font-weight-semibold)',
                        color: 'var(--brand-navy)',
                        marginBottom: 'var(--space-sm)',
                      }}>
                        Your Role:
                      </h5>
                      <p style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--text-secondary)',
                        lineHeight: 'var(--leading-relaxed)',
                        margin: 0,
                      }}>
                        {step.yourRole}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Installation FAQs */}
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
              Installation Process FAQs
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Common questions about our installation process and what you can expect.
            </p>
          </div>

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
                    fontSize: 'var(--text-base)',
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

      {/* Call to Action */}
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
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              marginBottom: 'var(--space-2xl)',
              maxWidth: '600px',
              margin: '0 auto var(--space-2xl) auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Now that you know what to expect, let's schedule your free consultation 
              and site assessment. Our professional installation process ensures you get 
              the best possible internet experience.
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
                Schedule Free Consultation
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => window.location.href = 'tel:5719996915'}
              >
                Call (571) 999-6915
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
