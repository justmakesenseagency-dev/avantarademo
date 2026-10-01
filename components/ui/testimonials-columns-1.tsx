"use client";
import React from "react";
import { motion } from "motion/react";

export interface TestimonialItem {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: TestimonialItem[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-8 sm:p-10 rounded-2xl border border-[#E7DDCD] bg-[#FAF7F2] shadow-sm max-w-xs w-full hover:border-[#7A8065]/50 transition-colors"
                  key={i}
                >
                  <p className="text-sm font-light leading-relaxed text-[#29251F]/85 italic">
                    “{text}”
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#E7DDCD]/70">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      referrerPolicy="no-referrer"
                      className="h-10 w-10 rounded-full object-cover border border-[#E7DDCD]"
                    />
                    <div className="flex flex-col text-left">
                      <div className="font-editorial text-base font-semibold text-[#29251F] leading-tight">
                        {name}
                      </div>
                      <div className="text-xs text-[#29251F]/60 font-light tracking-normal mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
