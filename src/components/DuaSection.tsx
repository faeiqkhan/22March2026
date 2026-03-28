import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import FloatingParticles from "./FloatingParticles";

const DuaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setSubmitted(true);
      setMessage("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-warm-cream via-blush/30 to-alabaster" />
      <FloatingParticles count={10} />

      <div ref={ref} className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-8"
        >
          Duas & Blessings
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <p
            className="font-arabic text-3xl md:text-4xl text-gold leading-relaxed mb-4"
            dir="rtl"
            style={{
              textShadow: "0 0 40px rgba(197, 160, 89, 0.2)",
            }}
          >
            رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ
          </p>
          <p className="font-body text-sm text-rose-taupe italic">
            "Our Lord, grant us from among our spouses and offspring comfort to our eyes"
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-2xl md:text-4xl italic text-deep-charcoal mb-12"
        >
          Share Your Blessings
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto"
        >
          <div className="glass rounded-2xl p-1.5">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Leave a dua or message..."
              rows={4}
              className="w-full bg-transparent px-6 py-4 font-body text-deep-charcoal placeholder:text-rose-taupe/50 focus:outline-none resize-none text-base"
            />
          </div>
          <button
            type="submit"
            className="mt-4 px-8 py-3 rounded-full bg-gold/10 font-body text-sm tracking-widest uppercase text-gold transition-all duration-500 hover:bg-gold/20"
            style={{
              boxShadow: "0 0 0 rgba(197, 160, 89, 0)",
              transition: "box-shadow 0.5s, background-color 0.5s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 0 20px rgba(197, 160, 89, 0.2)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.boxShadow = "0 0 0 rgba(197, 160, 89, 0)";
            }}
          >
            Send Blessing
          </button>

          {submitted && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 font-body text-sm text-gold"
            >
              JazakAllah Khair — your dua has been received ✨
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default DuaSection;
