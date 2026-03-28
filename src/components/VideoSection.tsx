import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import galleryVid from '../assets/gallery-vid.mp4';

const VideoSection = () => {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(ref, { once: false, margin: "0px" });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(console.error);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section className="relative py-32 md:py-48 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-alabaster via-deep-charcoal/5 to-alabaster" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4"
        >
          Relive the Moment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-display text-3xl md:text-5xl italic text-deep-charcoal mb-16"
        >
          In Motion
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="relative aspect-video rounded-2xl overflow-hidden"
          style={{
            boxShadow: "0 30px 60px -15px rgba(45, 41, 38, 0.15), 0 0 40px rgba(197, 160, 89, 0.08)",
          }}
        >
          <video
            ref={videoRef}
            src={galleryVid}
            loop
            preload="auto"
            onClick={() => videoRef.current?.play()}
            onLoadedData={() => videoRef.current?.play().catch(console.error)}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
