import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { Phone, MessageCircle, ArrowRight, Check, Copy, ExternalLink, Calendar, MapPin, User, MessageSquare } from 'lucide-react';

interface EnquiryFormProps {
  defaultOffering?: 'experiences' | 'events';
  prefilledService?: string;
  onSuccess?: () => void;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultOffering = 'events',
  prefilledService = '',
}) => {
  const [name, setName] = useState('');
  const [eventType, setEventType] = useState(
    prefilledService || (defaultOffering === 'experiences' ? 'Curated Private Supper' : 'Wedding / Sangeet')
  );
  const [preferredDate, setPreferredDate] = useState('');
  const [city, setCity] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [message, setMessage] = useState('');
  const [offeringType, setOfferingType] = useState<'experiences' | 'events'>(defaultOffering);
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Generate clean, formatted WhatsApp message text
  const constructWhatsAppMessage = () => {
    const lines = [
      `*Inquiry for ${offeringType === 'experiences' ? 'Avantaara Experiences' : 'Avantaara Events'}*`,
      `*Name:* ${name || '[Not specified]'}`,
      `*Occasion / Type:* ${eventType}`,
      `*Preferred Date:* ${preferredDate || '[Flexible / To discuss]'}`,
      `*City / Location:* ${city || '[To discuss]'}`,
    ];

    if (guestCount) {
      lines.push(`*Estimated Guests:* ${guestCount}`);
    }

    if (message.trim()) {
      lines.push(`*Vision / Details:* ${message.trim()}`);
    }

    lines.push('\n_Hello Ankit & Avantaara Team, I would like to schedule a free consultation to discuss our celebration._');

    return lines.join('\n');
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(constructWhatsAppMessage());
    return `${BRAND_INFO.whatsappUrl}?text=${text}`;
  };

  const handleCopyMessage = () => {
    const text = constructWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open WhatsApp directly with the pre-filled message
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-[#FAF7F2] border border-[#E7DDCD] rounded-md p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="space-y-3 mb-8">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs uppercase tracking-[0.2em] text-[#7A8065] font-semibold">
            Direct Consultation
          </span>
          <span className="text-xs text-[#29251F]/60">
            Free initial conversation · Direct to WhatsApp
          </span>
        </div>
        <h3 className="font-editorial text-3xl sm:text-4xl font-light text-[#29251F]">
          Tell us about what you are celebrating.
        </h3>
        <p className="text-sm text-[#29251F]/70 font-light leading-relaxed">
          Share your occasion details below. We connect directly over WhatsApp or phone 
          so you receive quick, personalized assistance.
        </p>
      </div>

      {/* Offering Selector Tabs */}
      <div className="grid grid-cols-2 gap-2 p-1 bg-[#E7DDCD]/50 rounded-sm mb-6">
        <button
          type="button"
          onClick={() => {
            setOfferingType('events');
            if (eventType === 'Curated Private Supper' || eventType === 'The Sunset Salon') {
              setEventType('Wedding / Sangeet');
            }
          }}
          className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
            offeringType === 'events'
              ? 'bg-[#29251F] text-[#F5F0E8] shadow-sm'
              : 'text-[#29251F]/70 hover:text-[#29251F]'
          }`}
        >
          Avantaara Events
        </button>
        <button
          type="button"
          onClick={() => {
            setOfferingType('experiences');
            if (eventType === 'Wedding / Sangeet' || eventType === 'Haldi Ceremony') {
              setEventType('Curated Private Supper');
            }
          }}
          className={`py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
            offeringType === 'experiences'
              ? 'bg-[#29251F] text-[#F5F0E8] shadow-sm'
              : 'text-[#29251F]/70 hover:text-[#29251F]'
          }`}
        >
          Avantaara Experiences
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="client-name" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
              Your Name <span className="text-[#B9785B]">*</span>
            </label>
            <div className="relative">
              <input
                id="client-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Priyanshu Sharma"
                className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3.5 py-2.5 text-sm text-[#29251F] placeholder:text-[#29251F]/35 focus:outline-none focus:border-[#29251F] transition-colors"
              />
            </div>
          </div>

          {/* Event Type */}
          <div className="space-y-1.5">
            <label htmlFor="event-type" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
              Occasion / Event Type <span className="text-[#B9785B]">*</span>
            </label>
            <select
              id="event-type"
              required
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3 py-2.5 text-sm text-[#29251F] focus:outline-none focus:border-[#29251F] transition-colors"
            >
              {offeringType === 'events' ? (
                <>
                  <option value="Weddings">Wedding & Varmala</option>
                  <option value="Sangeet & Cocktail">Sangeet & Cocktail Production</option>
                  <option value="Flower-Filled Haldi">Flower-Filled Haldi</option>
                  <option value="Destination Wedding in Jharkhand">Destination Wedding in Jharkhand</option>
                  <option value="Milestone Anniversary">Milestone Anniversary</option>
                  <option value="Birthday Celebration">Birthday Celebration</option>
                  <option value="Housewarming / Griha Pravesh">Housewarming / Griha Pravesh</option>
                  <option value="Baby Shower / Godh Bharai">Baby Shower / Godh Bharai</option>
                  <option value="Cultural / Social Gathering">Cultural / Social Gathering</option>
                  <option value="Other Custom Celebration">Other Custom Celebration</option>
                </>
              ) : (
                <>
                  <option value="The Sunset Salon">The Sunset Salon (Twilight & Acoustic)</option>
                  <option value="Curated Private Supper">Curated Private Supper (Tactile Dining)</option>
                  <option value="Mindful Milestone Gathering">Mindful Milestone Gathering</option>
                  <option value="Seasonal Hearth & Campfire">Seasonal Hearth & Campfire</option>
                  <option value="Intimate Anniversary Gathering">Intimate Anniversary Gathering</option>
                  <option value="Bespoke Sensory Experience">Bespoke Sensory Experience</option>
                </>
              )}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Preferred Date */}
          <div className="space-y-1.5 sm:col-span-1">
            <label htmlFor="event-date" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
              Preferred Date <span className="text-[#B9785B]">*</span>
            </label>
            <input
              id="event-date"
              type="text"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              placeholder="e.g. Nov 2026 or Dec 18"
              className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3.5 py-2.5 text-sm text-[#29251F] placeholder:text-[#29251F]/35 focus:outline-none focus:border-[#29251F] transition-colors"
            />
          </div>

          {/* City / Venue */}
          <div className="space-y-1.5 sm:col-span-1">
            <label htmlFor="event-city" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
              City / Location <span className="text-[#B9785B]">*</span>
            </label>
            <input
              id="event-city"
              type="text"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g. Ranchi, Jamshedpur, Kolkata..."
              className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3.5 py-2.5 text-sm text-[#29251F] placeholder:text-[#29251F]/35 focus:outline-none focus:border-[#29251F] transition-colors"
            />
          </div>

          {/* Guest Count */}
          <div className="space-y-1.5 sm:col-span-1">
            <label htmlFor="event-guests" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
              Guests (approx)
            </label>
            <input
              id="event-guests"
              type="text"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              placeholder="e.g. 50, 200, 500"
              className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3.5 py-2.5 text-sm text-[#29251F] placeholder:text-[#29251F]/35 focus:outline-none focus:border-[#29251F] transition-colors"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label htmlFor="event-message" className="block text-xs font-medium uppercase tracking-wider text-[#29251F]/80">
            Tell us about your celebration vision
          </label>
          <textarea
            id="event-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Share any special preferences, ceremony elements, or questions for Ankit..."
            className="w-full bg-white border border-[#E7DDCD] rounded-sm px-3.5 py-2.5 text-sm text-[#29251F] placeholder:text-[#29251F]/35 focus:outline-none focus:border-[#29251F] transition-colors resize-y"
          />
        </div>

        {/* Action Button & Direct WhatsApp Trigger */}
        <div className="pt-2 space-y-4">
          <button
            type="submit"
            className="w-full py-3.5 px-6 bg-[#29251F] hover:bg-[#29251F]/90 text-[#F5F0E8] font-medium text-xs uppercase tracking-[0.16em] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm group"
          >
            <MessageCircle className="w-4 h-4 text-[#7A8065] group-hover:scale-110 transition-transform" />
            <span>Send Details via WhatsApp (+91 85099 05590)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Quick Alternative Tools: Direct Call or Copy Text */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#29251F]/70">
            <div className="flex items-center gap-4">
              <a
                href={`tel:${BRAND_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 hover:text-[#29251F] font-medium underline underline-offset-4"
              >
                <Phone className="w-3.5 h-3.5 text-[#B9785B]" />
                Call {BRAND_INFO.phoneFormatted}
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#29251F] font-medium underline underline-offset-4"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#7A8065]" />
                Direct WhatsApp Message
              </a>
            </div>

            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 text-xs text-[#29251F]/80 hover:text-[#29251F] border border-[#E7DDCD] bg-white px-2.5 py-1 rounded-sm cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to clipboard' : 'Copy inquiry text'}</span>
            </button>
          </div>
        </div>

        {/* Notice of Transparency */}
        <p className="text-[11px] text-[#29251F]/60 text-center font-light pt-2">
          Your inquiry opens directly in your WhatsApp app. No server database storage or unsolicited emails.
        </p>
      </form>
    </div>
  );
};
