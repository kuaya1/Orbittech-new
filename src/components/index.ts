// Export all components from this file for clean imports
// This allows imports like: import { Button, Header, Footer, ServiceCard, TestimonialCard } from '@/components';

// UI Components
export { Button } from './ui/Button';

// Layout Components
export { Header } from './layout/Header';
export { Footer } from './layout/Footer';
export { Container } from './Container';
export { Section } from './Section';

// Section Components
export { Hero } from './sections/Hero';
export { Services } from './sections/Services';
export { Testimonials } from './sections/Testimonials';

// UI Components
export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/Card';

// Legacy Components (for backward compatibility)
export { ServiceCard } from './ServiceCard';
export type { ServiceCardProps } from './ServiceCard';
export { TestimonialCard } from './TestimonialCard';
export type { TestimonialCardProps } from './TestimonialCard';
export { AnimatedText } from './AnimatedText';