import React from 'react';
import { BRAND_INFO } from '../data/content';
import { EnquiryForm } from './EnquiryForm';
import { X, Phone, MessageCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultOffering?: 'experiences' | 'events';
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultOffering = 'events',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#29251F]/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FAF7F2] border border-[#E7DDCD] max-w-2xl w-full rounded-md overflow-hidden shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7DDCD] bg-[#F5F0E8] sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="font-editorial text-xl font-semibold text-[#29251F]">
              Book a Free Consultation
            </span>
            <span className="text-xs text-[#7A8065]">· Avantaara</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#29251F]/70 hover:text-[#29251F] hover:bg-[#E7DDCD]/50 rounded-sm transition-colors cursor-pointer"
            aria-label="Close consultation modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <EnquiryForm
            defaultOffering={defaultOffering}
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
};
