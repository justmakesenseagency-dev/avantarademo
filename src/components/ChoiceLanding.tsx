import React, { useEffect } from 'react';
import { ViewMode } from '../types';
import { BRAND_INFO, IMAGES } from '../data/content';
import { ArrowRight, Sparkles, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Testimonials } from '@/components/ui/demo';

interface ChoiceLandingProps {
  onSelectChoice: (choice: 'experiences' | 'events') => void;
}

export const ChoiceLanding: React.FC<ChoiceLandingProps> = ({ onSelectChoice }) => {
  // Allow keyboard shortcuts 1 and 2
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '1') {
        onSelectChoice('experiences');
      } else if (e.key === '2') {
        onSelectChoice('events');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onSelectChoice]);

  return (
    <div className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-8 md:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title & Headline Area */}
        <div className="text-center max-w-3xl mx-auto pt-4 md:pt-8 pb-10 md:pb-14 space-y-4">
        <span className="text-xs uppercase tracking-[0.25em] text-[#7A8065] font-semibold">
          The Art of Gathering
        </span>
        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#29251F] leading-[1.08] tracking-tight">
          Two ways to make a moment unforgettable.
        </h1>
        <p className="text-base sm:text-lg text-[#29251F]/75 font-normal max-w-2xl mx-auto leading-relaxed">
          Avantaara creates environments for human connection. Choose between intimate,
          curated personal moments and complete, thoughtfully orchestrated celebrations.
        </p>

        {/* Keyboard hint */}
        <div className="hidden sm:flex items-center justify-center gap-4 pt-1 text-xs text-[#29251F]/50">
          <span>Press <kbd className="px-1.5 py-0.5 border border-[#E7DDCD] rounded text-[10px] bg-white/60">1</kbd> for Experiences</span>
          <span>·</span>
          <span>Press <kbd className="px-1.5 py-0.5 border border-[#E7DDCD] rounded text-[10px] bg-white/60">2</kbd> for Events</span>
        </div>
      </div>

      {/* Two Prominent Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 flex-1 items-stretch">
        {/* Choice 1: Avantaara Experiences */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelectChoice('experiences')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectChoice('experiences');
            }
          }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-[#E7DDCD] bg-[#FAF7F2] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#7A8065] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A8065] cursor-pointer text-left"
          aria-label="Select Avantaara Experiences: Intimate moments and curated gatherings"
        >
          {/* Background image container with subtle zoom */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#E7DDCD]/40 mb-6 sm:mb-7">
            <img
              src={IMAGES.landingExperiences}
              alt="Avantaara Experiences - Intimate candlelit dinner gathering"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/70 via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-4 left-4">
              <span className="text-[11px] uppercase tracking-widest text-[#F5F0E8] font-semibold bg-[#29251F]/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                01 · Curated Moments
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-[#F5F0E8]">
              <span className="text-xs uppercase tracking-wider text-[#E7DDCD]/90 font-medium">
                Intimate · Sensory · Personal
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3.5 flex-1">
            <div className="flex items-baseline justify-between">
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29251F] group-hover:text-[#7A8065] transition-colors">
                Avantaara Experiences
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#29251F]/75 leading-relaxed font-light">
              Considered moments, private salon suppers, and mindful milestone gatherings. 
              Designed around quiet atmosphere, natural lighting, hand-crafted tableware, and unhurried connection.
            </p>

            <div className="pt-2.5 flex flex-wrap gap-2 text-xs text-[#29251F]/60 font-medium">
              <span>Private Dining</span>
              <span>·</span>
              <span>Sunset Salons</span>
              <span>·</span>
              <span>Milestone Retreats</span>
              <span>·</span>
              <span>Sensory Styling</span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#E7DDCD] flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#29251F] group-hover:text-[#7A8065] transition-colors flex items-center gap-2">
              Explore Experiences
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-[#29251F]/50">/experiences</span>
          </div>
        </div>

        {/* Choice 2: Avantaara Events */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelectChoice('events')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectChoice('events');
            }
          }}
          className="group relative flex flex-col justify-between overflow-hidden rounded-md border border-[#E7DDCD] bg-[#FAF7F2] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#B9785B] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9785B] cursor-pointer text-left"
          aria-label="Select Avantaara Events: Weddings, ceremonies and full-scale celebrations"
        >
          {/* Background image container with subtle zoom */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-sm bg-[#E7DDCD]/40 mb-6 sm:mb-7">
            <img
              src={IMAGES.landingEvents}
              alt="Avantaara Events - Luxury celebration pavilion and staging"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/70 via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-4 left-4">
              <span className="text-[11px] uppercase tracking-widest text-[#F5F0E8] font-semibold bg-[#29251F]/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10">
                02 · Full Celebrations
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 text-[#F5F0E8]">
              <span className="text-xs uppercase tracking-wider text-[#E7DDCD]/90 font-medium">
                Weddings · Sangeet · Destination
              </span>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-3.5 flex-1">
            <div className="flex items-baseline justify-between">
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29251F] group-hover:text-[#B9785B] transition-colors">
                Avantaara Events
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#29251F]/75 leading-relaxed font-light">
              We plan it all, so you can be there for it. Comprehensive event planning led by{' '}
              <span className="font-medium text-[#29251F]">{BRAND_INFO.plannerCredit}</span> covering weddings,
              varmalas, flower-filled haldi ceremonies, destination venues in Jharkhand, and vibrant milestone occasions.
            </p>

            <div className="pt-2.5 flex flex-wrap gap-2 text-xs text-[#29251F]/60 font-medium">
              <span>Weddings</span>
              <span>·</span>
              <span>Anniversaries</span>
              <span>·</span>
              <span>Bridal Entries</span>
              <span>·</span>
              <span>Free Consultation</span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8 sm:mt-10 pt-6 border-t border-[#E7DDCD] flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#29251F] group-hover:text-[#B9785B] transition-colors flex items-center gap-2">
              Explore Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-[#29251F]/50">/events</span>
          </div>
        </div>
      </div>

      {/* Testimonials Animated Showcase in Overview Section */}
      <Testimonials />

      {/* Bottom Direct Contact & Reassurance Bar */}
      <div className="mt-8 pt-8 border-t border-[#E7DDCD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#29251F]/70">
        <div className="flex items-center gap-4">
          <span className="font-medium text-[#29251F]">Direct Concierge:</span>
          <a
            href={`tel:${BRAND_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-[#29251F] underline underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#B9785B]" />
            {BRAND_INFO.phoneFormatted}
          </a>
          <span className="text-[#E7DDCD]">|</span>
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#29251F] underline underline-offset-4"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#7A8065]" />
            WhatsApp Chat
          </a>
        </div>

        <div className="text-center sm:text-right">
          <span>Complimentary consultations available · No obligations</span>
        </div>
      </div>
    </div>
  );
};
