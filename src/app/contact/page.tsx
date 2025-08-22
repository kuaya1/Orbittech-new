"use client";

import React, { useState } from 'react';
import { Button } from "@/components";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Styles
  const containerStyles: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 var(--space-lg)',
  };

  const sectionStyles: React.CSSProperties = {
    padding: 'var(--space-4xl) 0',
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // For now, we'll use a simple mailto approach until backend is set up
      const subject = encodeURIComponent(`New Quote Request from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Service: ${formData.service}
Preferred Contact: ${formData.preferredContact}

Message:
${formData.message}
      `);
      
      // Open email client with pre-filled information
      window.location.href = `mailto:contact@theorbittech.com?subject=${subject}&body=${body}`;
      
      // Show success message
      alert('Thank you for your message! Your email client should open with your request. We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        preferredContact: 'email'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try calling us directly at (571) 999-6915.');
    }
    
    setIsSubmitting(false);
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
        paddingBottom: 'var(--space-2xl)',
      }}>
        <div style={containerStyles}>
          <h1 style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'var(--text-6xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--space-lg)',
            lineHeight: 'var(--leading-tight)',
          }}>
            Get in Touch
          </h1>
          <p style={{
            fontSize: 'var(--text-xl)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 'var(--leading-relaxed)',
            opacity: 0.95,
          }}>
            Ready to upgrade your internet? Have questions about our services? 
            We're here to help with expert advice and free consultations.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section style={{
        ...sectionStyles,
        paddingTop: 0,
      }}>
        <div style={containerStyles}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: 'var(--space-4xl)',
            marginTop: '-var(--space-2xl)', // Overlap with hero
          }}>
            
            {/* Left Column - Contact Information */}
            <div style={{
              backgroundColor: 'var(--brand-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-xl)',
              height: 'fit-content',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-xl)',
              }}>
                Contact Information
              </h2>

              {/* Business Name */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Business Name
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Orbit Tech Solutions LLC
                </p>
              </div>

              {/* Address */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  📍 Address
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  1234 Technology Drive<br />
                  Reston, VA 20190
                </p>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  Phone
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  <a 
                    href="tel:5719996915" 
                    style={{
                      color: 'var(--accent-blue)',
                      textDecoration: 'none',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    (571) 999-6915
                  </a>
                </p>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  Email
                </h3>
                <p style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  <a 
                    href="mailto:contact@theorbittech.com" 
                    style={{
                      color: 'var(--accent-blue)',
                      textDecoration: 'none',
                      fontWeight: 'var(--font-weight-medium)',
                    }}
                  >
                    contact@theorbittech.com
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div style={{ marginBottom: 'var(--space-xl)' }}>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  🕒 Business Hours
                </h3>
                <div style={{
                  fontSize: 'var(--text-base)',
                  color: 'var(--text-primary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  <p style={{ marginBottom: 'var(--space-xs)' }}>
                    <strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM
                  </p>
                  <p style={{ marginBottom: 'var(--space-xs)' }}>
                    <strong>Saturday:</strong> 9:00 AM - 4:00 PM
                  </p>
                  <p style={{ marginBottom: 'var(--space-xs)' }}>
                    <strong>Sunday:</strong> Emergency Service Only
                  </p>
                  <p style={{ 
                    fontSize: 'var(--text-sm)', 
                    color: 'var(--text-secondary)',
                    marginTop: 'var(--space-sm)',
                  }}>
                    24/7 emergency support available for existing customers
                  </p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-md)',
              }}>
                <Button 
                  variant="primary" 
                  size="md"
                  onClick={() => window.location.href = 'tel:5719996915'}
                  style={{ width: '100%' }}
                >
                  Call Now
                </Button>
                <Button 
                  variant="secondary" 
                  size="md"
                  onClick={() => window.location.href = 'mailto:contact@theorbittech.com'}
                  style={{ width: '100%' }}
                >
                  Send Email
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div style={{
              backgroundColor: 'var(--brand-white)',
              padding: 'var(--space-2xl)',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-xl)',
              height: 'fit-content',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--brand-navy)',
                marginBottom: 'var(--space-lg)',
              }}>
                Send Us a Message
              </h2>
              <p style={{
                fontSize: 'var(--text-base)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-xl)',
                lineHeight: 'var(--leading-relaxed)',
              }}>
                Fill out the form below and we'll get back to you within 24 hours with a custom quote and consultation.
              </p>

              <form onSubmit={handleFormSubmit}>
                {/* Name and Email Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
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
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
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
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
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
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                    />
                  </div>
                  <div>
                    <label style={{
                      display: 'block',
                      marginBottom: 'var(--space-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      color: 'var(--text-primary)',
                      fontSize: 'var(--text-sm)',
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
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                  }}>
                    Service Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                      backgroundColor: 'var(--brand-white)',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  >
                    <option value="">Select a service...</option>
                    <option value="starlink">Starlink Installation</option>
                    <option value="mesh-wifi">Mesh WiFi Setup</option>
                    <option value="business">Business Solutions</option>
                    <option value="consultation">General Consultation</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                {/* Preferred Contact Method */}
                <div style={{ marginBottom: 'var(--space-lg)' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                  }}>
                    Preferred Contact Method
                  </label>
                  <div style={{
                    display: 'flex',
                    gap: 'var(--space-lg)',
                    flexWrap: 'wrap',
                  }}>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      cursor: 'pointer',
                    }}>
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--accent-blue)' }}
                      />
                      Email
                    </label>
                    <label style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-sm)',
                      cursor: 'pointer',
                    }}>
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        style={{ accentColor: 'var(--accent-blue)' }}
                      />
                      Phone
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 'var(--space-xl)' }}>
                  <label style={{
                    display: 'block',
                    marginBottom: 'var(--space-sm)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--text-primary)',
                    fontSize: 'var(--text-sm)',
                  }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project, location, and any specific requirements..."
                    style={{
                      width: '100%',
                      padding: 'var(--space-md)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-base)',
                      fontFamily: 'var(--font-body)',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent-blue)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                  />
                </div>

                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg"
                  disabled={isSubmitting}
                  style={{ width: '100%' }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

                <p style={{
                  fontSize: 'var(--text-xs)',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginTop: 'var(--space-md)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  We respect your privacy and will never share your information. 
                  Response time: within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section style={{
        ...sectionStyles,
        backgroundColor: 'var(--brand-sky)',
      }}>
        <div style={containerStyles}>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
            <h2 style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 'var(--font-weight-semibold)',
              color: 'var(--brand-navy)',
              marginBottom: 'var(--space-lg)',
            }}>
              Visit Our Office
            </h2>
            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}>
              Located in the heart of Reston, VA, we're centrally positioned to serve 
              the entire DMV area with fast, reliable service.
            </p>
          </div>

          {/* Map Container */}
          <div style={{
            backgroundColor: 'var(--brand-white)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'var(--space-lg)',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <div style={{
              width: '100%',
              height: '400px',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              position: 'relative',
            }}>
              <img 
                src="/PXL_20250629_150923060.MP~2 (1).jpg" 
                alt="Professional Starlink installation by Orbit Tech in the DMV area"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                color: 'white',
                padding: 'var(--space-lg)',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-medium)',
                  marginBottom: 'var(--space-sm)',
                }}>
                  Serving the DMV Area
                </p>
                <p style={{ fontSize: 'var(--text-base)' }}>
                  Based in Reston, VA - Professional installations across Virginia, Maryland & DC
                </p>
              </div>
            </div>

            {/* Directions and Parking Info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: 'var(--space-xl)',
              marginTop: 'var(--space-xl)',
              padding: 'var(--space-lg)',
              backgroundColor: 'var(--brand-sky)',
              borderRadius: 'var(--radius-lg)',
            }}>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  🚗 Directions
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Easy access from Route 7, Dulles Toll Road, and I-495. 
                  Located in the Reston Town Center area.
                </p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  🅿️ Parking
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Free parking available in our building lot. 
                  Visitor spaces clearly marked near the main entrance.
                </p>
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--brand-navy)',
                  marginBottom: 'var(--space-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                }}>
                  🚇 Public Transit
                </h3>
                <p style={{
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-secondary)',
                  lineHeight: 'var(--leading-relaxed)',
                }}>
                  Wiehle-Reston East Metro station is 1.5 miles away. 
                  Several bus routes serve the area.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
