import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-alabaster via-warm-cream to-alabaster" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8"
        >
          The Moment
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="font-display text-3xl md:text-5xl italic text-deep-charcoal mb-12"
        >
          Where Two Paths Met
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="space-y-6"
        >
          <p className="font-body text-base md:text-lg text-rose-taupe leading-[1.8]">
            In the presence of our elders, with the grace of the Almighty,
            two paths began to converge. It was a gathering held not in haste,
            but in hope — a quiet, sacred moment where families met with open hearts
            and sincere intentions.
          </p>
          <p className="font-body text-base md:text-lg text-rose-taupe leading-[1.8]">
            There were no grand announcements, only prayers whispered softly,
            smiles exchanged warmly, and a shared understanding that something
            beautiful had been set into motion — by His will alone.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="w-24 h-px bg-gold/30 mx-auto mt-16"
        />
      </div>
    </section>
  );
};

export default StorySection;
