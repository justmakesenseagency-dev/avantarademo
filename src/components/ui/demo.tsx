import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

// Celebrations and event testimonials tailored to Avantaara's aesthetic
export const eventTestimonials = [
  {
    name: 'Priyanka & Rahul',
    username: '@priyanka.r',
    body: 'The floral varmala entry and serene aisle choreography was straight out of a dream.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    country: '💍 Ranchi',
  },
  {
    name: 'Aanandita Verma',
    username: '@verma_aanandita',
    body: 'Ankiit and his team managed our 3-day destination wedding with flawless grace and calm.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    country: '✨ Kolkata',
  },
  {
    name: 'Vikram Sengupta',
    username: '@vikram_s',
    body: 'The live sufi music, lighting ambiance and fragrance layering left every guest spellbound.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    country: '🏛️ Jamshedpur',
  },
  {
    name: 'Sneha & Dev',
    username: '@sneha.dev',
    body: 'Our Haldi setup looked like a living painting with marigold cascades and warm brass accents.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    country: '🌸 Patna',
  },
  {
    name: 'Rohit Keshri',
    username: '@rohit_keshri',
    body: 'Exceptional hospitality coordination and timeline management. Truly bespoke.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    country: '🕊️ Delhi NCR',
  },
  {
    name: 'Meera & Tanmay',
    username: '@meera.tanmay',
    body: 'Avantaara elevated our 25th anniversary soirée into an unforgettable sensory journey.',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    country: '🌿 Ranchi',
  },
  {
    name: 'Kavita Agarwal',
    username: '@kavita_a',
    body: 'The soundscape and acoustic curations were subtle, elevated, and deeply memorable.',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    country: '🕯️ Mumbai',
  },
  {
    name: 'Arjun Mathur',
    username: '@arjun.m',
    body: 'Stress-free execution from venue scouting to post-reception guest transport.',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    country: '✨ Bengaluru',
  },
];

function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
}: (typeof eventTestimonials)[number]) {
  return (
    <Card className="w-56 bg-[#FAF7F2] border-[#E7DDCD] shadow-sm hover:border-[#29251F]/40 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 border border-[#E7DDCD]">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-[#E7DDCD]/50 text-xs font-serif text-[#29251F]">
              {name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col text-left">
            <figcaption className="text-xs font-medium text-[#29251F] flex items-center gap-1 font-serif">
              <span>{name}</span> <span className="text-[10px] text-[#7A8065]">{country}</span>
            </figcaption>
            <p className="text-[11px] font-mono text-[#29251F]/50">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2.5 text-xs text-[#29251F]/80 font-light leading-relaxed text-left">
          “{body}”
        </blockquote>
      </CardContent>
    </Card>
  );
}

export function DemoOne({ className }: { className?: string } = {}) {
  return (
    <div
      className={cn(
        "mt-14 sm:mt-18 lg:mt-20 mb-10 sm:mb-14 border border-[#E7DDCD] rounded-md relative flex h-96 w-full max-w-4xl mx-auto flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] bg-[#FAF7F2]/50 shadow-sm",
        className
      )}
    >
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-60px) translateY(0px) translateZ(-80px) rotateX(16deg) rotateY(-8deg) rotateZ(16deg)',
        }}
      >
        {/* Column 1: Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={4} className="[--duration:36s]">
          {eventTestimonials.map((review) => (
            <TestimonialCard key={`c1-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Column 2: Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:40s]">
          {eventTestimonials.map((review) => (
            <TestimonialCard key={`c2-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Column 3: Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={4} className="[--duration:44s]">
          {eventTestimonials.map((review) => (
            <TestimonialCard key={`c3-${review.username}`} {...review} />
          ))}
        </Marquee>
        {/* Column 4: Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={4} className="[--duration:38s]">
          {eventTestimonials.map((review) => (
            <TestimonialCard key={`c4-${review.username}`} {...review} />
          ))}
        </Marquee>

        {/* Gradient overlays matching warm ivory theme */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F5F0E8] to-transparent"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F5F0E8] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F5F0E8] to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F5F0E8] to-transparent"></div>
      </div>
    </div>
  );
}

export { DemoOne as Testimonials };
export { default as HeroSectionwithPixelBackground } from "@/components/ui/hero-with-pixelbackground";
export { default as HeroWithPixelBackgroundDemo } from "@/components/ui/hero-with-pixelbackground-demo";
export { default as Hero10Example } from "@/components/ui/hero-10-demo";
export { Hero10 } from "@/components/ui/hero-10";
export default DemoOne;
