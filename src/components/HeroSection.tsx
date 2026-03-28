import { motion } from "framer-motion";
import heroImage from "@/assets/hero-light.jpg";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-alabaster/70 via-alabaster/40 to-alabaster/90" />
      </div>

      {/* Grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none animate-grain"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      <FloatingParticles count={20} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="mb-8"
        >
          <p className="font-arabic text-3xl md:text-4xl text-gold leading-relaxed mb-4" dir="rtl">
            وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>
          <p className="font-body text-sm tracking-widest uppercase text-rose-taupe">
            "And He placed between you affection and mercy"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="w-16 h-px bg-gold/40 mx-auto mb-8" />
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl italic text-deep-charcoal mb-4 tracking-tight">
            Huzaifa
          </h1>
          <p className="font-body text-lg md:text-xl text-gold tracking-[0.3em] uppercase mb-4">&</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl italic text-deep-charcoal mb-6 tracking-tight">
            Owaiz
          </h1>
          <p className="font-body text-base md:text-lg text-rose-taupe max-w-xl mx-auto leading-relaxed">
            With the blessings of Allah, two families came together
            with the intention of a shared future.
          </p>
          <p className="font-body text-sm text-gold mt-6 tracking-widest uppercase">
            21st March 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <div className="w-px h-16 bg-gradient-to-b from-gold/40 to-transparent mx-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
