"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Satellite,
  Wifi
} from 'lucide-react';
import { cn } from '@/lib/utils';

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: 'Starlink Installation', href: '/services/starlink-installation' },
      { label: 'Mesh WiFi Setup', href: '/services/mesh-wifi-setup' },
      { label: 'Business Solutions', href: '/services/business-solutions' },
      { label: 'Service Areas', href: '/service-areas' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Blog', href: '/resources/blog' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Contact', href: '/contact' },
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Service Agreement', href: '/service-agreement' },
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/orbittech', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com/company/orbittech', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/orbittech', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/orbittech', label: 'Instagram' },
];

const contactInfo = [
  {
    icon: MapPin,
    text: '1234 Technology Drive, Reston, VA 20190'
  },
  {
    icon: Phone,
    text: '(571) 999-6915',
    href: 'tel:+15719996915'
  },
  {
    icon: Mail,
    text: 'contact@theorbittech.com',
    href: 'mailto:contact@theorbittech.com'
  }
];

const businessHours = [
  'Mon-Fri: 8:00 AM - 6:00 PM',
  'Sat: 9:00 AM - 4:00 PM',
  'Sun: Emergency Service Only'
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-text-inverse">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info - Takes 2 columns on large screens */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Logo */}
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-3 mb-6 group"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-accent-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <Satellite className="w-6 h-6 text-text-inverse" />
                    </div>
                  </div>
                  <span className="font-headline text-2xl font-bold">
                    Orbit Tech
                  </span>
                </Link>

                {/* Description */}
                <p className="text-text-inverse/90 leading-relaxed mb-6 max-w-md">
                  Your trusted partner for cutting-edge internet solutions in the DMV area. 
                  We specialize in Starlink installations, mesh WiFi systems, and business 
                  connectivity solutions.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <item.icon className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-text-inverse/90 hover:text-accent-blue transition-colors duration-200"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-text-inverse/90">{item.text}</span>
                      )}
                    </motion.div>
                  ))}
                  
                  {/* Business Hours */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-start gap-3 pt-2"
                  >
                    <Clock className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" />
                    <div className="text-text-inverse/90">
                      {businessHours.map((hours, index) => (
                        <div key={index} className="text-sm">
                          {hours}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, sectionIndex) => (
              <div key={section.title}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                >
                  <h3 className="font-headline text-lg font-semibold mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.3, 
                          delay: (sectionIndex * 0.1) + (linkIndex * 0.05) 
                        }}
                      >
                        <Link 
                          href={link.href}
                          className="text-text-inverse/80 hover:text-accent-blue transition-colors duration-200 block py-1"
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-text-inverse/20"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <h4 className="font-headline text-lg font-semibold mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-text-inverse/10 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-all duration-200 group"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-text-inverse group-hover:scale-110 transition-transform duration-200" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Service Areas */}
              <div className="text-right">
                <h4 className="font-headline text-lg font-semibold mb-2">
                  Service Areas
                </h4>
                <p className="text-text-inverse/80 text-sm">
                  Maryland • Virginia • Washington DC
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-text-inverse/20 py-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-text-inverse/70">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4" />
              <span>
                © {currentYear} Orbit Tech Solutions LLC. All rights reserved.
              </span>
            </div>
            
            <div className="flex gap-6">
              <Link 
                href="/privacy"
                className="hover:text-accent-blue transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="hover:text-accent-blue transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

