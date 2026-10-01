import React from 'react';
import { ViewMode } from '../types';
import { BRAND_INFO } from '../data/content';
import { Phone, MessageCircle, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: ViewMode, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#29251F] text-[#F5F0E8] border-t border-[#3D372F] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#3D372F]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('landing')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-editorial text-3xl sm:text-4xl tracking-[0.2em] uppercase font-semibold text-[#F5F0E8] group-hover:text-[#E7DDCD] transition-colors">
                {BRAND_INFO.name}
              </span>
            </button>
            <p className="text-sm text-[#F5F0E8]/70 max-w-sm font-light leading-relaxed">
              Two ways to make a moment unforgettable. Thoughtful event planning,
              ceremonies, and curated personal gatherings.
            </p>
            <div className="pt-2 text-xs text-[#E7DDCD]/70 space-y-1">
              <p>
                Event planning by{' '}
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#F5F0E8] transition-colors"
                >
                  Ankit Ohdar ({BRAND_INFO.plannerCredit})
                </a>
              </p>
              <p>Based in {BRAND_INFO.defaultLocation}</p>
            </div>
          </div>

          {/* Offerings Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#E7DDCD] font-medium">
              Our Two Offerings
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F0E8]/80 font-light">
              <li>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="hover:text-[#F5F0E8] text-left transition-colors flex items-center gap-1 group"
                >
                  <span>Avantaara Experiences</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
                <span className="block text-xs text-[#F5F0E8]/50 mt-0.5">
                  Considered moments & salon suppers
                </span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => onNavigate('events')}
                  className="hover:text-[#F5F0E8] text-left transition-colors flex items-center gap-1 group"
                >
                  <span>Avantaara Events</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
                <span className="block text-xs text-[#F5F0E8]/50 mt-0.5">
                  Weddings, Sangeet, Haldi & full production
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.18em] text-[#E7DDCD] font-medium">
              Consultations & Inquiries
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 text-[#F5F0E8]/90 hover:text-[#F5F0E8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#B9785B]" />
                <span className="font-mono tracking-tight text-sm">
                  {BRAND_INFO.phoneFormatted}
                </span>
              </a>

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F5F0E8]/90 hover:text-[#F5F0E8] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#7A8065]" />
                <span>Chat via WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F5F0E8]/90 hover:text-[#F5F0E8] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#E7DDCD]" />
                <span>@avantaaraevents on Instagram</span>
              </a>
            </div>
          </div>
        </div>

        {/* Editorial Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[#F5F0E8]/50 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {BRAND_INFO.name}. All rights reserved.
          </p>
          <p className="max-w-xl text-left md:text-right font-light leading-relaxed">
            Portfolio imagery and concepts are art-directed editorial representations
            ready for official client replacement. Free consultation available upon request.
          </p>
        </div>
      </div>
    </footer>
  );
};
