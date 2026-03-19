import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = ({ className, testimonials, duration = 10 }) => {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
        style={{ willChange: 'transform' }}
      >
        {[...new Array(2).fill(0)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-accent-pink/60 shadow-sm hover:shadow-md transition-shadow duration-300 max-w-xs w-full"
              >
                <div className="flex gap-0.5 text-gold text-base mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
                <p className="font-cormorant text-base italic text-stone leading-relaxed">
                  &ldquo;{text}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-accent-pink/40">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-dm font-medium text-sm text-charcoal leading-5">{name}</div>
                    <div className="font-dm text-xs text-stone leading-5">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
