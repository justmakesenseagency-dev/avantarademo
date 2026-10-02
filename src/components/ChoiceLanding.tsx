import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ViewMode } from '../types';
import { BRAND_INFO, IMAGES } from '../data/content';
import { ArrowRight, Sparkles, Calendar, Phone, MessageCircle } from 'lucide-react';
import { Testimonials } from '@/components/ui/demo';
import {
  Timeline,
  TimelineText,
} from '@/components/ui/hero-with-pixelbackground-utils/timeline';
import PixelBackground from '@/components/ui/hero-with-pixelbackground-utils/pixel-background';
import { cn } from '@/lib/utils';

interface ChoiceLandingProps {
  onSelectChoice: (choice: 'experiences' | 'events') => void;
}

interface CardImageFanProps {
  images: string[];
  imageAlts: string[];
}

const CardImageFan: React.FC<CardImageFanProps> = ({ images, imageAlts }) => {
  const fanSlots = [
    { width: 'w-[40%]', layout: '-mr-6 z-10', rotate: -6, ty: 10 },
    { width: 'w-[45%]', layout: 'z-20', rotate: 0, ty: -6 },
    { width: 'w-[40%]', layout: '-ml-6 z-10', rotate: 6, ty: 10 },
  ];

  return (
    <div className="relative flex w-full items-center justify-center py-5 my-1">
      {images.slice(0, 3).map((src, i) => {
        const slot = fanSlots[i] ?? fanSlots[1];
        return (
          <div
            key={src}
            className={cn(
              'relative shrink-0 overflow-hidden rounded-xl shadow-lg border border-[#E7DDCD] bg-[#FAF7F2] aspect-[4/5] transition-all duration-500 ease-out group-hover:shadow-xl',
              slot.width,
              slot.layout
            )}
            style={{
              transform: `rotate(${slot.rotate}deg) translateY(${slot.ty}px)`,
            }}
          >
            <img
              src={src}
              alt={imageAlts[i] || 'Avantaara celebration showcase'}
              decoding="async"
              referrerPolicy="no-referrer"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/40 via-transparent to-transparent opacity-60" />
          </div>
        );
      })}
    </div>
  );
};

export const ChoiceLanding: React.FC<ChoiceLandingProps> = ({ onSelectChoice }) => {
  // Allow keyboard shortcuts 1 and 2
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
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
      {/* Ambient Pixel Background Effect matching the Avantaara warm palette */}
      <div
        className="absolute inset-x-0 top-0 h-80 pointer-events-none z-0 overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, transparent 100%)',
        }}
      >
        <PixelBackground
          gap={8}
          speed={45}
          colors="#E7DDCD,#DDD2C0,#C8BCAB,#B9785B"
          opacity={0.5}
          direction="top"
          className="w-full h-full"
        />
      </div>

      {/* Title & Headline Area with Staggered Motion and Scrubbable Timeline Reveal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto pt-4 md:pt-8 pb-8 md:pb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-2.5"
        >
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7A8065] font-semibold">
            The Art of Gathering
          </span>
          <span className="h-px w-6 bg-[#E7DDCD]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#7A8065] font-semibold">
            Studio
          </span>
        </motion.div>

        <div className="flex flex-col items-center gap-1 sm:gap-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#29251F] leading-[1.08] tracking-tight"
          >
            Two ways to make a moment
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-1"
          >
            <Timeline
              rotation={-1}
              initialLeft={12}
              minWidth={60}
              containerClassName="bg-[#FAF7F2] border-[#B9785B]/60"
              handleClassName="bg-[#FAF7F2] border-[#B9785B]"
              handleIndicatorClassName="bg-[#B9785B]"
            >
              <TimelineText className="font-editorial text-[#B9785B] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight py-2.5">
                Unforgettable.
              </TimelineText>
            </Timeline>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
          className="text-base sm:text-lg text-[#29251F]/75 font-normal max-w-2xl mx-auto leading-relaxed pt-2 text-balance"
        >
          Avantaara creates environments for human connection. Choose between intimate,
          curated personal moments and complete, thoughtfully orchestrated celebrations.
        </motion.p>

        {/* Keyboard hint */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
          className="hidden sm:flex items-center justify-center gap-4 pt-1 text-xs text-[#29251F]/50"
        >
          <span>Press <kbd className="px-1.5 py-0.5 border border-[#E7DDCD] rounded text-[10px] bg-white/60 font-mono">1</kbd> for Experiences</span>
          <span>·</span>
          <span>Press <kbd className="px-1.5 py-0.5 border border-[#E7DDCD] rounded text-[10px] bg-white/60 font-mono">2</kbd> for Events</span>
        </motion.div>
      </div>

      {/* Two Prominent Cards Grid with Hero-10 ImageFan Design */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 flex-1 items-stretch">
        {/* Choice 1: Avantaara Experiences (Targeted by CSS Selector 1) */}
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
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#E7DDCD] bg-[#FAF7F2] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#7A8065] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A8065] cursor-pointer text-left"
          aria-label="Select Avantaara Experiences: Intimate moments and curated gatherings"
        >
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2 pb-2">
            <span className="text-[11px] uppercase tracking-widest text-[#7A8065] font-semibold bg-[#7A8065]/10 border border-[#7A8065]/20 px-3 py-1 rounded-full">
              01 · Curated Moments
            </span>
            <span className="text-xs uppercase tracking-wider text-[#29251F]/60 font-medium">
              Intimate · Sensory · Personal
            </span>
          </div>

          {/* Hero-10 Fanned Images Deck */}
          <CardImageFan
            images={[
              IMAGES.landingExperiences,
              IMAGES.expHero,
              IMAGES.jharkhandVenue,
            ]}
            imageAlts={[
              'Intimate candlelit dining salon',
              'Outdoor floral tablescape and brunch',
              'Scenic retreat and gathering space',
            ]}
          />

          {/* Text Content */}
          <div className="space-y-3 flex-1 mt-2">
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29251F] group-hover:text-[#7A8065] transition-colors text-balance">
              Avantaara Experiences
            </h2>
            <p className="text-sm sm:text-base text-[#29251F]/75 leading-relaxed font-light text-balance">
              Considered moments, private salon suppers, and mindful milestone gatherings.
              Designed around quiet atmosphere, natural lighting, hand-crafted tableware, and unhurried connection.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#29251F]/60 font-medium">
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
          <div className="mt-8 pt-6 border-t border-[#E7DDCD] flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#29251F] group-hover:text-[#7A8065] transition-colors flex items-center gap-2">
              Explore Experiences
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-[#29251F]/50 font-mono">/experiences</span>
          </div>
        </div>

        {/* Choice 2: Avantaara Events (Targeted by CSS Selector 2) */}
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
          className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#E7DDCD] bg-[#FAF7F2] p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:border-[#B9785B] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9785B] cursor-pointer text-left"
          aria-label="Select Avantaara Events: Weddings, ceremonies and full-scale celebrations"
        >
          {/* Header Metadata */}
          <div className="flex items-center justify-between gap-2 pb-2">
            <span className="text-[11px] uppercase tracking-widest text-[#B9785B] font-semibold bg-[#B9785B]/10 border border-[#B9785B]/20 px-3 py-1 rounded-full">
              02 · Full Celebrations
            </span>
            <span className="text-xs uppercase tracking-wider text-[#29251F]/60 font-medium">
              Weddings · Sangeet · Destination
            </span>
          </div>

          {/* Hero-10 Fanned Images Deck */}
          <CardImageFan
            images={[
              IMAGES.bridalEntry,
              IMAGES.varmala,
              IMAGES.landingEvents,
            ]}
            imageAlts={[
              'Bridal procession entry and styling',
              'Varmala stage ceremony with floral decor',
              'Luxury wedding celebration pavilion and lighting',
            ]}
          />

          {/* Text Content */}
          <div className="space-y-3 flex-1 mt-2">
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#29251F] group-hover:text-[#B9785B] transition-colors text-balance">
              Avantaara Events
            </h2>
            <p className="text-sm sm:text-base text-[#29251F]/75 leading-relaxed font-light text-balance">
              We plan it all, so you can be there for it. Comprehensive event planning led by{' '}
              <span className="font-medium text-[#29251F]">{BRAND_INFO.plannerCredit}</span> covering weddings,
              varmalas, flower-filled haldi ceremonies, destination venues in Jharkhand, and vibrant milestone occasions.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs text-[#29251F]/60 font-medium">
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
          <div className="mt-8 pt-6 border-t border-[#E7DDCD] flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.16em] font-semibold text-[#29251F] group-hover:text-[#B9785B] transition-colors flex items-center gap-2">
              Explore Events
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <span className="text-xs text-[#29251F]/50 font-mono">/events</span>
          </div>
        </div>
      </div>

      {/* Testimonials Animated Showcase in Overview Section */}
      <div className="relative z-10">
        <Testimonials />
      </div>

      {/* Bottom Direct Contact & Reassurance Bar */}
      <div className="relative z-10 mt-8 pt-8 border-t border-[#E7DDCD] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#29251F]/70">
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
