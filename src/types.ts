export type ViewMode = 'landing' | 'experiences' | 'events';

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  caption: string;
  imageSrc: string;
  aspectRatio?: string;
  isPlaceholder?: boolean;
  notes?: string;
}

export interface ExperienceConcept {
  id: string;
  title: string;
  descriptor: string;
  vibe: string;
  description: string;
  elements: string[];
}

export interface EnquiryData {
  name: string;
  email?: string;
  phone?: string;
  eventType: string;
  preferredDate: string;
  city: string;
  guestCount?: string;
  message: string;
  offeringType: 'experiences' | 'events';
}
