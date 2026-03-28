import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FamilyNote = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="absolute inset-0 bg-alabaster" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-6">
              From Our Families
            </p>
            <h2 className="font-display text-3xl md:text-4xl italic text-deep-charcoal mb-8">
              A Note of Gratitude
            </h2>
            <div className="space-y-4">
              <p className="font-body text-base text-rose-taupe leading-[1.8]">
                We are grateful to Allah for bringing our families together
                in this blessed gathering. What began as a meeting of hearts
                is now a shared prayer for a beautiful tomorrow.
              </p>
              <p className="font-body text-base text-rose-taupe leading-[1.8]">
                We ask you to keep this intention in your prayers,
                and may Allah grant what is best for everyone involved.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex items-center justify-center"
          >
            <div className="glass rounded-3xl p-12 text-center">
              <p className="font-arabic text-2xl text-gold mb-4" dir="rtl">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <p className="font-body text-sm text-rose-taupe italic">
                In the name of Allah, the Most Gracious, the Most Merciful
              </p>
              <div className="w-12 h-px bg-gold/30 mx-auto mt-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FamilyNote;
