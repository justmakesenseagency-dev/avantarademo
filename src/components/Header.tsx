import React, { useState } from 'react';
import { ViewMode } from '../types';
import { BRAND_INFO } from '../data/content';
import { Phone, MessageCircle, Menu, X, ArrowRight, Sparkles, Calendar } from 'lucide-react';

interface HeaderProps {
  currentView: ViewMode;
  onNavigate: (view: ViewMode, sectionId?: string) => void;
  onOpenConsultation?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenConsultation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: ViewMode, sectionId?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, sectionId);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#E7DDCD] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('landing')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#29251F] rounded-sm py-1 shrink-0"
          aria-label="Avantaara Home"
        >
          <span className="font-editorial text-2xl sm:text-3xl tracking-[0.2em] uppercase text-[#29251F] font-semibold transition-opacity group-hover:opacity-75">
            {BRAND_INFO.name}
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#29251F]/80">
          <button
            onClick={() => handleNavClick('landing')}
            className={`transition-colors hover:text-[#29251F] py-1 border-b whitespace-nowrap cursor-pointer ${
              currentView === 'landing'
                ? 'border-[#29251F] text-[#29251F] font-semibold'
                : 'border-transparent text-[#29251F]/70'
            }`}
          >
            Overview
          </button>

          <button
            onClick={() => handleNavClick('experiences')}
            className={`transition-colors hover:text-[#29251F] py-1 border-b whitespace-nowrap cursor-pointer ${
              currentView === 'experiences'
                ? 'border-[#29251F] text-[#29251F] font-semibold'
                : 'border-transparent text-[#29251F]/70'
            }`}
          >
            Experiences
          </button>

          <button
            onClick={() => handleNavClick('events')}
            className={`transition-colors hover:text-[#29251F] py-1 border-b whitespace-nowrap cursor-pointer ${
              currentView === 'events'
                ? 'border-[#29251F] text-[#29251F] font-semibold'
                : 'border-transparent text-[#29251F]/70'
            }`}
          >
            Events
          </button>

          <button
            onClick={() =>
              handleNavClick(
                currentView === 'landing' ? 'events' : currentView,
                'contact'
              )
            }
            className="text-[#29251F]/70 hover:text-[#29251F] transition-colors py-1 border-b border-transparent whitespace-nowrap cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-2 lg:gap-2.5 shrink-0">
          {/* Quick switcher between Experiences and Events */}
          {currentView !== 'landing' && (
            <button
              onClick={() =>
                handleNavClick(
                  currentView === 'experiences' ? 'events' : 'experiences'
                )
              }
              className="text-[11px] sm:text-xs uppercase tracking-wider px-2.5 sm:px-3 py-2 text-[#29251F]/80 hover:text-[#29251F] border border-[#E7DDCD] hover:border-[#29251F]/40 transition-colors rounded-sm whitespace-nowrap cursor-pointer shrink-0"
              title={`Switch to ${currentView === 'experiences' ? 'Events' : 'Experiences'}`}
            >
              <span className="hidden xl:inline">Switch to </span>
              <span>{currentView === 'experiences' ? 'Events' : 'Experiences'}</span>
            </button>
          )}

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 text-[11px] sm:text-xs font-medium text-[#29251F] bg-[#E7DDCD]/60 hover:bg-[#E7DDCD] border border-[#E7DDCD] transition-colors rounded-sm shrink-0"
            aria-label="Chat on WhatsApp +91 85099 05590"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#7A8065]" />
            <span className="hidden 2xl:inline">WhatsApp</span>
          </a>

          <button
            onClick={() => {
              if (onOpenConsultation) {
                onOpenConsultation();
              } else {
                handleNavClick('events', 'contact');
              }
            }}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-3.5 lg:px-4 py-2 text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-[#F5F0E8] bg-[#29251F] hover:bg-[#29251F]/90 transition-all rounded-sm whitespace-nowrap shadow-sm cursor-pointer shrink-0"
          >
            <Calendar className="w-3.5 h-3.5 text-[#B9785B] shrink-0 hidden sm:inline" />
            <span>Book <span className="hidden xl:inline">Free </span>Consultation</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#29251F] hover:text-[#7A8065]"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#29251F] hover:text-[#7A8065] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E7DDCD] bg-[#F5F0E8] px-5 py-6 space-y-4">
          <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#E7DDCD]">
            <button
              onClick={() => handleNavClick('experiences')}
              className={`p-3 text-left border rounded-sm transition-colors ${
                currentView === 'experiences'
                  ? 'border-[#29251F] bg-[#E7DDCD]/40'
                  : 'border-[#E7DDCD] bg-white/40'
              }`}
            >
              <span className="block text-xs uppercase tracking-wider text-[#7A8065] mb-1">
                Offering 01
              </span>
              <span className="block font-editorial text-base font-semibold text-[#29251F]">
                Experiences
              </span>
            </button>

            <button
              onClick={() => handleNavClick('events')}
              className={`p-3 text-left border rounded-sm transition-colors ${
                currentView === 'events'
                  ? 'border-[#29251F] bg-[#E7DDCD]/40'
                  : 'border-[#E7DDCD] bg-white/40'
              }`}
            >
              <span className="block text-xs uppercase tracking-wider text-[#B9785B] mb-1">
                Offering 02
              </span>
              <span className="block font-editorial text-base font-semibold text-[#29251F]">
                Events
              </span>
            </button>
          </div>

          <div className="flex flex-col space-y-3 text-sm font-medium text-[#29251F]">
            <button
              onClick={() => handleNavClick('landing')}
              className={`text-left py-1 hover:text-[#7A8065] cursor-pointer ${
                currentView === 'landing' ? 'font-semibold text-[#29251F]' : 'text-[#29251F]/70'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => handleNavClick('experiences')}
              className={`text-left py-1 hover:text-[#7A8065] cursor-pointer ${
                currentView === 'experiences' ? 'font-semibold text-[#29251F]' : 'text-[#29251F]/70'
              }`}
            >
              Avantaara Experiences
            </button>
            <button
              onClick={() => handleNavClick('events')}
              className={`text-left py-1 hover:text-[#7A8065] cursor-pointer ${
                currentView === 'events' ? 'font-semibold text-[#29251F]' : 'text-[#29251F]/70'
              }`}
            >
              Avantaara Events
            </button>
            <button
              onClick={() =>
                handleNavClick(
                  currentView === 'landing' ? 'events' : currentView,
                  'contact'
                )
              }
              className="text-left py-1 text-[#29251F]/70 hover:text-[#7A8065] cursor-pointer"
            >
              Contact & Inquiries
            </button>
          </div>

          <div className="pt-4 border-t border-[#E7DDCD] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) {
                  onOpenConsultation();
                } else {
                  handleNavClick('events', 'contact');
                }
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-wider font-semibold text-[#F5F0E8] bg-[#29251F] rounded-sm"
            >
              Book Free Consultation
            </button>

            <a
              href={`tel:${BRAND_INFO.phoneRaw}`}
              className="w-full py-2.5 flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-medium text-[#29251F] border border-[#E7DDCD] bg-white/60 rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#29251F]" />
              Call {BRAND_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
