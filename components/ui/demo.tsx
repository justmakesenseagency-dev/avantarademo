import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "motion/react";

export const testimonials = [
  {
    text: "The unhurried pace and candlelight at our anniversary supper was breathtaking. Every ceramic piece, the wild floral accents, and the music felt intentional.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    name: "Aanya Sen",
    role: "Private Anniversary Salon · Avantaara Experiences",
  },
  {
    text: "Ankit and his team managed our three-day wedding in Jharkhand flawlessly. From the varmala stage to the fireworks, our family never felt stressed for a single minute.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    name: "Vikram & Neha Agarwal",
    role: "Destination Wedding · Avantaara Events",
  },
  {
    text: "Our flower-filled Haldi was everything we dreamed of. The brass urlis, fresh marigolds, and morning sunlight created the most vibrant atmosphere.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
    name: "Rohit Singhania",
    role: "Haldi & Sangeet Planning · Avantaara Events",
  },
  {
    text: "We hosted an intimate milestone dinner for 14 guests. Avantaara created a table so beautiful and relaxed that no one wanted to leave the conversation.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    name: "Pooja Roy",
    role: "Milestone Supper · Avantaara Experiences",
  },
  {
    text: "The bridal entry coordination was magical. The timing of the floral canopy chadar and music gave us goosebumps. Truly thoughtful planning.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    name: "Meera Kulkarni",
    role: "Wedding Ceremony · Avantaara Events",
  },
  {
    text: "The Griha Pravesh was calm, auspicious, and beautifully managed. The traditional floral torans and havan layout welcomed all our guests with warmth.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    name: "Devendra Verma",
    role: "Housewarming Celebration · Avantaara Events",
  },
  {
    text: "Avantaara understands that atmosphere is about how people feel. The sunset salon for our family milestone was deeply moving and tranquil.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    name: "Tanvi & Sameer",
    role: "Curated Gathering · Avantaara Experiences",
  },
  {
    text: "From our initial free consultation to the final dance at the Sangeet, Ankit’s day-of coordination gave us complete peace of mind.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
    name: "Kavita Jaiswal",
    role: "Sangeet Production · Avantaara Events",
  },
  {
    text: "The seasonal outdoor dinner brought our closest friends together under the evening sky. Every detail was crafted with care and restraint.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&q=80",
    name: "Arjun Nair",
    role: "Seasonal Hearth Gathering · Avantaara Experiences",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-transparent my-16 md:my-24 relative">
      <div className="container z-10 mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[620px] mx-auto text-center"
        >
          <div className="flex justify-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#7A8065] font-semibold border border-[#E7DDCD] py-1.5 px-4 rounded-full bg-[#FAF7F2]">
              Reflections & Stories
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-light text-[#29251F] tracking-tight mt-5">
            Moments remembered with warmth
          </h2>
          <p className="text-sm sm:text-base text-[#29251F]/70 font-light mt-3 max-w-md">
            What clients share about their curated gatherings and celebrations with Avantaara.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-12 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[580px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={16} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={20} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={18} />
        </div>

        <div className="text-center mt-6">
          <span className="text-[11px] text-[#29251F]/50 uppercase tracking-widest font-mono">
            Editable Client Story Showcase · Avantaara Experiences & Events
          </span>
        </div>
      </div>
    </section>
  );
};

export default { Testimonials };
