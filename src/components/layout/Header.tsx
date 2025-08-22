"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface NavigationItem {
  label: string;
  href: string;
  submenu?: { label: string; href: string; }[];
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { 
    label: 'Services', 
    href: '/services',
    submenu: [
      { label: 'Starlink Installation', href: '/services/starlink-installation' },
      { label: 'Mesh WiFi Setup', href: '/services/mesh-wifi-setup' },
      { label: 'Business Solutions', href: '/services/business-solutions' },
    ]
  },
  { 
    label: 'Service Areas', 
    href: '/service-areas',
    submenu: [
      { label: 'Maryland', href: '/service-areas/maryland' },
      { label: 'Northern Virginia', href: '/service-areas/northern-virginia' },
      { label: 'Washington DC', href: '/service-areas/washington-dc' },
    ]
  },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Resources', 
    href: '/resources',
    submenu: [
      { label: 'Blog', href: '/resources/blog' },
      { label: 'FAQ', href: '/resources/faq' },
      { label: 'Installation Guide', href: '/resources/installation-guide' },
    ]
  },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const DesktopNavItem = ({ item }: { item: NavigationItem }) => {
    const isActive = isActiveLink(item.href);
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <div 
        className="relative group"
        onMouseEnter={() => hasSubmenu && setActiveDropdown(item.label)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link
          href={item.href}
          className={cn(
            "flex items-center gap-1 px-3 py-2 rounded-[var(--radius)] text-sm font-medium transition-colors duration-200",
            isActive
              ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10"
              : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
          )}
        >
          {item.label}
          {hasSubmenu && (
            <ChevronDown 
              className={cn(
                "w-4 h-4 transition-transform duration-200",
                activeDropdown === item.label && "rotate-180"
              )}
            />
          )}
        </Link>

        {/* Desktop Dropdown */}
        {hasSubmenu && (
          <AnimatePresence>
            {activeDropdown === item.label && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-64 bg-[hsl(var(--background))] rounded-[var(--radius)] shadow-lg border border-gray-200 z-50"
              >
                <div className="py-2">
                  {item.submenu?.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className={cn(
                        "block px-4 py-2 text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10 transition-colors duration-200",
                        isActiveLink(subItem.href) && "text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10"
                      )}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  const MobileNavItem = ({ item }: { item: NavigationItem }) => {
    const isActive = isActiveLink(item.href);
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isExpanded = activeDropdown === item.label;

    return (
      <div>
        <div className="flex items-center justify-between">
          <Link
            href={item.href}
            onClick={() => !hasSubmenu && setIsMobileMenuOpen(false)}
            className={cn(
              "flex-1 block px-4 py-3 text-base font-medium transition-colors duration-200",
              isActive
                ? "text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10"
                : "text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/10"
            )}
          >
            {item.label}
          </Link>
          {hasSubmenu && (
            <button
              onClick={() => setActiveDropdown(isExpanded ? null : item.label)}
              className="p-3 text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))]"
            >
              <ChevronDown 
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  isExpanded && "rotate-180"
                )}
              />
            </button>
          )}
        </div>

        {/* Mobile Submenu */}
        {hasSubmenu && (
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden bg-[hsl(var(--primary))]/5"
              >
                {item.submenu?.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "block pl-8 pr-4 py-2 text-sm text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-200",
                      isActiveLink(subItem.href) && "text-[hsl(var(--primary))] font-medium"
                    )}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled 
          ? "bg-[hsl(var(--background))]/95 backdrop-blur-md border-gray-200 shadow-md" 
          : "bg-[hsl(var(--background))] border-gray-200"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 font-bold text-xl text-[hsl(var(--primary))] hover:opacity-80 transition-opacity duration-200"
          >
            <img 
              src="/Starlink Dmv (33).png" 
              alt="Orbit Tech Solutions"
              className="h-10 w-auto"
            />
            <span className="hidden sm:block">Orbit Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <DesktopNavItem key={item.href} item={item} />
            ))}
          </nav>

          {/* CTA Section */}
          <div className="flex items-center gap-4">
            {/* Phone Number - Hidden on mobile */}
            <a 
              href="tel:+15719996915"
              className="hidden xl:flex items-center gap-2 text-[hsl(var(--muted))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(571) 999-6915</span>
            </a>

            {/* CTA Button */}
            <Button 
              variant="primary" 
              size="md"
              onClick={() => window.location.href = '/contact'}
              className="hidden sm:inline-flex"
            >
              Get Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-[hsl(var(--background))] overflow-hidden"
          >
            <nav className="py-4">
              {navigationItems.map((item) => (
                <MobileNavItem key={item.href} item={item} />
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 space-y-3">
                <a 
                  href="tel:+15719996915"
                  className="flex items-center justify-center gap-2 p-3 text-[hsl(var(--primary))] bg-[hsl(var(--primary))]/10 rounded-[var(--radius)] font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call (571) 999-6915
                </a>
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = '/contact';
                  }}
                  className="w-full"
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
