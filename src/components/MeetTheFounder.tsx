import React, { useState } from 'react';
import { FOUNDER_INFO, BRAND_INFO } from '../data/content';
import { ArrowRight, Calendar, User, Instagram, Phone } from 'lucide-react';
import founderImg from '../assets/images/ankiit_ohdar.jpg';

interface MeetTheFounderProps {
  onExploreWork: () => void;
  onBookConsultation: () => void;
}

export const MeetTheFounder: React.FC<MeetTheFounderProps> = ({
  onExploreWork,
  onBookConsultation,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section id="founder" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
      <div className="bg-[#FAF7F2] border border-[#E7DDCD] rounded-md p-6 sm:p-10 lg:p-14 transition-all shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Column 1: Founder Portrait (Photo first on mobile) */}
          <div className="lg:col-span-5 order-1">
            <div className="relative aspect-[3/4] sm:aspect-[4/5] max-w-md mx-auto rounded-sm overflow-hidden border border-[#E7DDCD] bg-[#E7DDCD]/30 shadow-md">
              <img
                src={founderImg || FOUNDER_INFO.imageSrc}
                alt={FOUNDER_INFO.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Column 2: Biography & Actions */}
          <div className="lg:col-span-7 order-2 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#B9785B] font-semibold block">
                {FOUNDER_INFO.sectionHeading}
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F] tracking-tight uppercase">
                {FOUNDER_INFO.name}
              </h2>
              <span className="text-xs sm:text-sm uppercase tracking-[0.16em] text-[#7A8065] font-medium block">
                {FOUNDER_INFO.role}
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#29251F]/80 font-light leading-relaxed max-w-xl">
              {FOUNDER_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onExploreWork}
                className="py-2.5 px-5 border border-[#E7DDCD] hover:border-[#29251F]/50 bg-white text-[#29251F] text-xs uppercase tracking-[0.14em] font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 group"
                aria-label="Explore his work in the Events portfolio"
              >
                <span>Explore his work</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onBookConsultation}
                className="py-2.5 px-6 bg-[#29251F] hover:bg-[#29251F]/90 text-[#F5F0E8] text-xs uppercase tracking-[0.14em] font-medium rounded-sm transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
                aria-label="Book a free event consultation with Ankiit Ohdar"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B9785B]" />
                <span>Book a consultation</span>
              </button>
            </div>

            {/* Quick Profile Trust Marker */}
            <div className="pt-4 border-t border-[#E7DDCD]/70 flex flex-wrap items-center gap-4 text-xs text-[#29251F]/70">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#29251F] inline-flex items-center gap-1.5 underline underline-offset-4"
              >
                <Instagram className="w-3.5 h-3.5 text-[#7A8065]" />
                <span>{BRAND_INFO.plannerCredit}</span>
              </a>
              <span>·</span>
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="hover:text-[#29251F] inline-flex items-center gap-1.5 font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#B9785B]" />
                <span>{BRAND_INFO.phoneFormatted}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
