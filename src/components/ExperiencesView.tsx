import React, { useState } from 'react';
import { BRAND_INFO, EXPERIENCE_CONCEPTS, IMAGES, SENSORY_PILLARS } from '../data/content';
import { ExperienceConcept } from '../types';
import { EnquiryForm } from './EnquiryForm';
import ContactWithGlobe from '@/components/ui/contact-with-globe';
import { ArrowRight, Sparkles, MessageCircle, Phone, Compass, Wind, Feather, Moon } from 'lucide-react';

interface ExperiencesViewProps {
  onSwitchToEvents: () => void;
  onOpenConsultation: () => void;
}

export const ExperiencesView: React.FC<ExperiencesViewProps> = ({
  onSwitchToEvents,
  onOpenConsultation,
}) => {
  const [selectedConcept, setSelectedConcept] = useState<ExperienceConcept | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="relative pt-6 md:pt-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#7A8065] font-semibold">
              <span>Avantaara Offering 01</span>
              <span>·</span>
              <span>Curated Gatherings</span>
            </div>

            <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-light text-[#29251F] leading-[1.08] tracking-tight text-balance">
              Considered moments, gathered with intention.
            </h1>

            <p className="text-base sm:text-lg text-[#29251F]/75 font-light leading-relaxed max-w-xl">
              Avantaara Experiences designs private, immersive gatherings where atmosphere
              takes center stage. Slower celebrations shaped by natural light, hand-thrown
              tableware, seasonal botanicals, and unhurried conversation.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => scrollToSection('experience-enquiry')}
                className="py-3 px-6 bg-[#29251F] hover:bg-[#29251F]/90 text-[#F5F0E8] font-medium text-xs uppercase tracking-[0.16em] rounded-sm transition-all text-center cursor-pointer shadow-sm"
              >
                Inquire About an Experience
              </button>

              <button
                onClick={onSwitchToEvents}
                className="py-3 px-5 border border-[#E7DDCD] hover:border-[#29251F]/40 bg-white/40 text-[#29251F] font-medium text-xs uppercase tracking-[0.16em] rounded-sm transition-colors text-center cursor-pointer flex items-center justify-center gap-2 group"
              >
                <span>Looking for Full Event Planning?</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quiet attribute */}
            <div className="pt-4 border-t border-[#E7DDCD]/70 flex items-center gap-4 text-xs text-[#29251F]/60">
              <span>Tailored for groups of 4 to 30</span>
              <span>·</span>
              <span>Custom culinary & sensory curation</span>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-[#E7DDCD] shadow-lg bg-[#E7DDCD]/30">
              <img
                src={IMAGES.expHero}
                alt="Avantaara Experiences curated outdoor brunch and dinner salon"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#29251F]/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 text-[#F5F0E8] space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E7DDCD]">
                  The Salon Atmosphere
                </span>
                <p className="text-sm font-light text-[#F5F0E8]/90">
                  Soft candlelight, natural table textures, and relaxed conversation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Sensory Pillars */}
      <section id="pillars" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-[#7A8065] font-semibold">
            Our Sensory Constitution
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F]">
            The Four Foundations of Atmosphere
          </h2>
          <p className="text-sm sm:text-base text-[#29251F]/70 font-light leading-relaxed">
            We avoid generic party templates in favor of elements that speak quietly to the senses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SENSORY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-7 rounded-sm border border-[#E7DDCD] bg-[#FAF7F2] space-y-4 hover:border-[#7A8065] transition-colors"
            >
              <span className="text-xs font-mono font-medium text-[#7A8065] tracking-wider block">
                {pillar.number}
              </span>
              <h3 className="font-editorial text-2xl font-medium text-[#29251F]">
                {pillar.title}
              </h3>
              <p className="text-sm text-[#29251F]/75 font-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Experience Concepts */}
      <section id="concepts" className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#E7DDCD] pb-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.22em] text-[#7A8065] font-semibold">
              Curated Formats
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F]">
              Explore Experience Concepts
            </h2>
            <p className="text-sm text-[#29251F]/75 font-light">
              Each concept serves as an editable creative springboard tailored to your location and occasion.
            </p>
          </div>

          <div className="text-xs text-[#29251F]/60">
            <span>Collaboratively personalized · No rigid packages</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCE_CONCEPTS.map((concept) => (
            <div
              key={concept.id}
              className="p-7 sm:p-9 rounded-md border border-[#E7DDCD] bg-[#FAF7F2] hover:border-[#7A8065] hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#7A8065] font-medium">
                    {concept.descriptor}
                  </span>
                  <span className="text-xs text-[#29251F]/50 italic">
                    {concept.vibe}
                  </span>
                </div>

                <h3 className="font-editorial text-3xl font-semibold text-[#29251F]">
                  {concept.title}
                </h3>

                <p className="text-sm sm:text-base text-[#29251F]/75 font-light leading-relaxed">
                  {concept.description}
                </p>

                <div className="pt-3 space-y-2 border-t border-[#E7DDCD]/70">
                  <span className="text-xs uppercase tracking-wider text-[#29251F]/60 font-semibold block">
                    Curated Elements:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#29251F]/80">
                    {concept.elements.map((el, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#7A8065] font-bold">·</span>
                        <span>{el}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E7DDCD] flex items-center justify-between">
                <a
                  href={`${BRAND_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `Hi Ankit, I am interested in exploring the "${concept.title}" experience concept with Avantaara Experiences.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider font-semibold text-[#29251F] hover:text-[#7A8065] inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#7A8065]" />
                  <span>Inquire for This Concept</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Art Direction Statement / Clarification */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="p-8 sm:p-12 rounded-md bg-[#29251F] text-[#F5F0E8] space-y-6 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[#E7DDCD] font-medium block">
            Creative Brand Philosophy
          </span>
          <h3 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F0E8] max-w-2xl mx-auto leading-tight">
            “The beauty of a gathering lives in how it feels to be there.”
          </h3>
          <p className="text-sm sm:text-base text-[#F5F0E8]/70 font-light max-w-xl mx-auto leading-relaxed">
            Every Avantaara Experience is created collaboratively around your occasion, setting, and guests.
          </p>
          <div className="pt-2">
            <button
              onClick={() => scrollToSection('experience-enquiry')}
              className="px-6 py-3 bg-[#F5F0E8] hover:bg-[#E7DDCD] text-[#29251F] text-xs uppercase tracking-[0.16em] font-semibold rounded-sm transition-colors cursor-pointer"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="experience-enquiry" className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto scroll-mt-24 relative">
        <div id="contact" className="absolute -top-24" />
        <ContactWithGlobe
          title="Begin an Experience"
          subtitle="Direct Concierge"
          description="Plan a bespoke supper, salon, or retreat curated by Ankiit Ohdar and the Avantaara team."
          defaultOccasion="Curated Private Supper"
        />
      </section>
    </div>
  );
};
