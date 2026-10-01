import React, { useState } from 'react';
import {
  BRAND_INFO,
  EVENT_SERVICES,
  IMAGES,
  PLANNING_PROCESS_STEPS,
  PORTFOLIO_ITEMS,
} from '../data/content';
import { PortfolioItem } from '../types';
import { EnquiryForm } from './EnquiryForm';
import { PortfolioModal } from './PortfolioModal';
import { MeetTheFounder } from './MeetTheFounder';
import DemoOne from '@/components/ui/demo';
import ContactWithGlobe from '@/components/ui/contact-with-globe';
import {
  Phone,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Info,
  ExternalLink,
  ChevronRight,
  MapPin,
  Clock,
  HeartHandshake,
} from 'lucide-react';

interface EventsViewProps {
  onSwitchToExperiences: () => void;
  onOpenConsultation: () => void;
}

export const EventsView: React.FC<EventsViewProps> = ({
  onSwitchToExperiences,
  onOpenConsultation,
}) => {
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<PortfolioItem | null>(null);
  const [selectedServiceForForm, setSelectedServiceForForm] = useState<string>('Weddings');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForForm(serviceTitle);
    scrollToSection('events-contact');
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#B9785B] font-semibold">
              <span>Avantaara Offering 02</span>
              <span>·</span>
              <span>Event Planning by {BRAND_INFO.plannerCredit}</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#29251F] leading-[1.08] tracking-tight text-balance">
              We plan it all, so you can be there for it.
            </h1>

            <p className="text-base sm:text-lg text-[#29251F]/75 font-light leading-relaxed max-w-xl">
              Thoughtful event planning, ceremony coordination, and celebratory styling.
              Led by Ankit Ohdar ({BRAND_INFO.plannerCredit}), we orchestrate every detail
              from timeline to stage design so your family can be fully present.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollToSection('events-contact')}
                className="py-3.5 px-6 bg-[#29251F] hover:bg-[#29251F]/90 text-[#F5F0E8] font-medium text-xs uppercase tracking-[0.16em] rounded-sm transition-all text-center cursor-pointer shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#B9785B]" />
                <span>Book a Free Consultation</span>
              </button>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-5 border border-[#E7DDCD] hover:border-[#7A8065] bg-white/60 text-[#29251F] font-medium text-xs uppercase tracking-[0.16em] rounded-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#7A8065]" />
                <span>WhatsApp ({BRAND_INFO.phoneFormatted})</span>
              </a>
            </div>

            {/* Public profile signals */}
            <div className="pt-4 border-t border-[#E7DDCD]/70 flex flex-wrap items-center gap-4 text-xs text-[#29251F]/70">
              <span className="flex items-center gap-1.5 font-medium text-[#29251F]">
                <MapPin className="w-3.5 h-3.5 text-[#B9785B]" />
                {BRAND_INFO.defaultLocation}
              </span>
              <span>·</span>
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="hover:underline flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#29251F]" />
                {BRAND_INFO.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#E7DDCD] shadow-lg bg-[#E7DDCD]/30">
              <img
                src={IMAGES.eventsHero}
                alt="Avantaara Events celebration lighting and floral staging"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/70 via-[#29251F]/20 to-transparent" />
              
              <div className="absolute top-4 right-4">
                <span className="text-[10px] uppercase tracking-wider text-[#F5F0E8] bg-[#29251F]/70 backdrop-blur-md px-2.5 py-1 rounded-sm border border-white/10">
                  Free Event Consultation Available
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-[#F5F0E8] space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E7DDCD]">
                  Celebration Staging & Illumination
                </span>
                <p className="text-sm font-light text-[#F5F0E8]/90">
                  Comprehensive planning covering bridal entries, varmala, haldi, and full production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <MeetTheFounder
        onExploreWork={() => scrollToSection('portfolio')}
        onBookConsultation={() => scrollToSection('events-contact')}
      />

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E7DDCD] pb-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B9785B] font-semibold">
              Event Planning Scope
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F]">
              Services We Curate
            </h2>
            <p className="text-sm text-[#29251F]/75 font-light">
              From family milestones to grand multi-day celebrations, we manage every layer.
            </p>
          </div>

          <div className="text-xs text-[#29251F]/60">
            <span>Free initial consultation on every event type</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EVENT_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-sm border border-[#E7DDCD] bg-[#FAF7F2] hover:border-[#B9785B] hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-wider text-[#B9785B] font-medium block">
                  {service.subtitle}
                </span>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#29251F]">
                  {service.title}
                </h3>

                <p className="text-sm text-[#29251F]/75 font-light leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-3 border-t border-[#E7DDCD]/70 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-[#29251F]/60 font-semibold block">
                    What We Coordinate:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#29251F]/80">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#B9785B] font-bold">·</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7DDCD] flex items-center justify-between">
                <button
                  onClick={() => handleSelectService(service.title)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#29251F] hover:text-[#B9785B] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Plan This Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-[#E7DDCD] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B9785B] font-semibold">
              Visual Portfolio
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F]">
              Visible Portfolio Themes
            </h2>
            <p className="text-sm text-[#29251F]/75 font-light">
              Themes highlighted on @avantaaraevents: bridal entries, destination venues in Jharkhand, daytime varmalas, flower-filled haldi, and celebration lighting.
            </p>
          </div>

          <div className="text-xs text-[#29251F]/60">
            <span>Click any card to inspect details</span>
          </div>
        </div>

        {/* Portfolio Notice Banner */}
        <div className="mb-8 p-4 rounded-sm bg-[#E7DDCD]/40 border border-[#E7DDCD] flex items-start gap-3 text-xs text-[#29251F]/80">
          <Info className="w-4 h-4 text-[#7A8065] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#29251F]">Portfolio Placeholder Note:</strong> Below are editable visual cards showcasing the event categories highlighted on{' '}
            <a
              href={BRAND_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-medium hover:text-[#29251F]"
            >
              @avantaaraevents
            </a>
            . Replace with official high-resolution photographs from past celebrations as needed.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedPortfolioItem(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPortfolioItem(item);
                }
              }}
              className="group text-left border border-[#E7DDCD] bg-[#FAF7F2] rounded-sm overflow-hidden hover:border-[#B9785B] hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9785B]"
              aria-label={`View portfolio item: ${item.title}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E7DDCD]/40">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/70 via-transparent to-transparent opacity-60" />
                
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] uppercase tracking-wider text-[#F5F0E8] bg-[#29251F]/60 backdrop-blur-md px-2 py-0.5 rounded-sm">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 text-[11px] text-[#E7DDCD] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 font-medium">
                  <span>View Details</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-2xl font-semibold text-[#29251F] group-hover:text-[#B9785B] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-[#7A8065] block mb-2 font-medium">
                    {item.subtitle}
                  </span>
                  <p className="text-xs text-[#29251F]/75 font-light leading-relaxed">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E7DDCD]/60 flex items-center justify-between text-[11px] text-[#29251F]/60">
                  <span>Editable Card</span>
                  <span className="text-[#B9785B] font-medium group-hover:underline">
                    Inquire Style →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Suggested 3-Step Planning Process */}
      <section id="process" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="p-8 sm:p-12 lg:p-16 rounded-md bg-[#FAF7F2] border border-[#E7DDCD]">
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] text-[#7A8065] font-semibold">
              Suggested Explanation
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F]">
              How We Plan Together
            </h2>
            <p className="text-sm sm:text-base text-[#29251F]/70 font-light leading-relaxed">
              A collaborative, calm approach designed to eliminate stress and keep the focus on what truly matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PLANNING_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="space-y-4 p-6 rounded-sm bg-white/70 border border-[#E7DDCD] relative"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#B9785B] font-bold">
                    Step {step.step}
                  </span>
                  <HeartHandshake className="w-4 h-4 text-[#7A8065]" />
                </div>
                <h3 className="font-editorial text-2xl font-medium text-[#29251F]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#29251F]/75 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[#E7DDCD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#29251F]/70">
            <span>
              Initial discovery calls are 100% complimentary with zero pressure.
            </span>
            <button
              onClick={() => scrollToSection('events-contact')}
              className="text-xs uppercase tracking-wider font-semibold text-[#29251F] hover:text-[#B9785B] underline underline-offset-4 cursor-pointer"
            >
              Schedule Your Free Consultation →
            </button>
          </div>
        </div>
      </section>

      {/* Reviews and Client Voices Area */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-[#FAF7F2] border border-[#E7DDCD] rounded-md p-6 sm:p-10 text-center space-y-6 shadow-sm">
          <div className="space-y-2 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.22em] text-[#B9785B] font-semibold">
              Client Voices & Stories
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#29251F] font-light">
              Celebrations Remembered
            </h2>
            <p className="text-sm text-[#29251F]/75 font-light">
              Couples, families, and hosts share their experience with Avantaara’s mindful curation and serene execution.
            </p>
          </div>

          <DemoOne className="mt-2 mb-0 border-none bg-transparent shadow-none" />
        </div>
      </section>

      {/* Contact & Consultation Section */}
      <section id="events-contact" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 relative">
        <div id="contact" className="absolute -top-24" />
        <ContactWithGlobe
          title="Plan Your Celebration"
          subtitle="Direct Concierge"
          description="Schedule a complimentary consultation with Ankiit Ohdar. From weddings and varmala concepts to multi-day destination events across Jharkhand and India."
          defaultOccasion={selectedServiceForForm || "Wedding / Full Celebration"}
        />
      </section>

      {/* Portfolio Detail Modal */}
      {selectedPortfolioItem && (
        <PortfolioModal
          item={selectedPortfolioItem}
          onClose={() => setSelectedPortfolioItem(null)}
        />
      )}
    </div>
  );
};
