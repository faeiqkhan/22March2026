import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const images = [
  { src: gallery1, alt: "Tea ceremony", w: 800, h: 1000, span: "row-span-2" },
  { src: gallery2, alt: "Floral arrangement", w: 1000, h: 800, span: "" },
  { src: gallery3, alt: "Prayer beads", w: 800, h: 800, span: "" },
  { src: gallery4, alt: "Calligraphy", w: 1000, h: 600, span: "col-span-2" },
  { src: gallery5, alt: "Table setting", w: 800, h: 2000, span: "row-span-2" },
  { src: gallery6, alt: "Henna", w: 1000, h: 800, span: "" },
  { src: gallery7, alt: "Incense", w: 800, h: 800, span: "" },
  { src: gallery8, alt: "Zen garden", w: 1000, h: 600, span: "col-span-2" },
  { src: gallery9, alt: "Meditation space", w: 800, h: 1000, span: "row-span-2" },

];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-16"
          ref={ref}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Captured Moments
          </p>
          <h2 className="font-display text-3xl md:text-5xl italic text-deep-charcoal">
            A Glimpse of Grace
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.23, 1, 0.32, 1],
              }}
              className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-lg"
              onClick={() => setSelected(i)}
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={img.w}
                  height={img.h}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/5 transition-colors duration-500 rounded-lg" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
                style={{ boxShadow: "inset 0 0 40px rgba(197, 160, 89, 0.1)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-deep-charcoal/80 backdrop-blur-xl" />
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="relative z-10 max-w-full max-h-[85vh] object-contain rounded-xl"
            />
            <button
              className="absolute top-6 right-6 z-20 p-2 rounded-full glass text-alabaster/80 hover:text-alabaster transition-colors"
              onClick={() => setSelected(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
