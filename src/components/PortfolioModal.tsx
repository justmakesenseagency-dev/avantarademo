import React from 'react';
import { PortfolioItem } from '../types';
import { X, Sparkles, MessageCircle, Info } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onEnquireItem?: (item: PortfolioItem) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onEnquireItem,
}) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29251F]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] border border-[#E7DDCD] max-w-3xl w-full rounded-md overflow-hidden shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7DDCD] bg-[#F5F0E8]">
          <div className="flex items-center gap-2 text-xs text-[#29251F]/70">
            <span className="uppercase tracking-widest font-semibold text-[#7A8065]">
              {item.category}
            </span>
            <span>·</span>
            <span>Avantaara Portfolio</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#29251F]/70 hover:text-[#29251F] hover:bg-[#E7DDCD]/50 rounded-sm transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Main Visual */}
          <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden bg-[#E7DDCD]/50 border border-[#E7DDCD]">
            <img
              src={item.imageSrc}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#29251F]">
                {item.title}
              </h3>
              <span className="text-xs uppercase tracking-wider text-[#B9785B] font-medium">
                {item.subtitle}
              </span>
            </div>

            <p className="text-base text-[#29251F]/80 leading-relaxed font-light">
              {item.caption}
            </p>
          </div>

          {/* Editorial / Placeholder Transparency Note */}
          {item.isPlaceholder && (
            <div className="p-4 rounded-sm bg-[#E7DDCD]/40 border border-[#E7DDCD] flex items-start gap-3 text-xs text-[#29251F]/80">
              <Info className="w-4 h-4 text-[#7A8065] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-semibold block text-[#29251F]">
                  Editable Portfolio Card
                </span>
                <p className="leading-relaxed">
                  {item.notes ||
                    'Editable placeholder card. Replace with photography from your celebrations before publishing.'}
                </p>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#E7DDCD]">
            <span className="text-xs text-[#29251F]/60">
              Event planning by Ankit Ohdar ({BRAND_INFO.plannerCredit})
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Ankit, I saw the "${item.title}" in the Avantaara Events portfolio and would like to ask about similar planning for our celebration.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2.5 bg-[#29251F] hover:bg-[#29251F]/90 text-[#F5F0E8] text-xs uppercase tracking-wider font-medium rounded-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#7A8065]" />
                <span>Discuss This Style on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
