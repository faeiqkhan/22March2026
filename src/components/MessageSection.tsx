import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Some moments are not measured in time,",
  "but in the warmth they leave behind.",
  "",
  "This was one such moment —",
  "where prayers were whispered,",
  "hands were held in gratitude,",
  "and hearts were aligned in hope.",
  "",
  "May Allah bless this journey,",
  "from its first step to its destined end.",
];

const MessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-alabaster to-warm-cream" />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-12"
        >
          A Message
        </motion.p>

        <div className="space-y-3">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.12,
                ease: [0.23, 1, 0.32, 1],
              }}
              className={`font-display text-lg md:text-xl italic leading-relaxed ${
                line === "" ? "h-4" : "text-deep-charcoal/80"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.23, 1, 0.32, 1] }}
          className="w-16 h-px bg-gold/30 mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default MessageSection;
