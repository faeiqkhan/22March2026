import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SiteFooter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="relative py-24 px-6" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-alabaster to-warm-cream" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        className="relative z-10 text-center"
      >
        <div className="w-8 h-px bg-gold/30 mx-auto mb-8" />
        <p className="font-display text-lg italic text-rose-taupe">
          Made with love and prayers
        </p>
        <p className="font-body text-xs text-rose-taupe/50 mt-4 tracking-widest uppercase">
          March 2026
        </p>
      </motion.div>
    </footer>
  );
};

export default SiteFooter;
