"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../Typography";
import { X } from "lucide-react";

const galleryImages = [
  "/Interior and garden and pool/Villa -1.jpg",
  "/Interior and garden and pool/Villa -2.jpg",
  "/Interior and garden and pool/Villa -3.jpg",
  "/Interior and garden and pool/Villa -4.jpg",
  "/Interior and garden and pool/Villa -5.jpg",
  "/Interior and garden and pool/Villa -6.jpg",
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-32 md:py-48 px-4 sm:px-8 max-w-[100rem] mx-auto bg-brand-stone/30">
      <div className="text-center mb-24">
        <span className="text-brand-sage uppercase tracking-widest text-xs font-semibold block mb-4">Curated View</span>
        <SectionHeading>The Norah Experience</SectionHeading>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {galleryImages.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ clipPath: "inset(100% 0 0 0)", y: 40 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
            className={`cursor-pointer overflow-hidden relative group bg-brand-stone ${
              idx === 0 || idx === 3 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'
            }`}
            onClick={() => setSelectedImage(src)}
          >
            <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors duration-500 z-10" />
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-white/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-brand-charcoal z-50 hover:opacity-70 transition-opacity"
            >
              <X size={32} strokeWidth={1} />
            </button>
            <motion.img
              src={selectedImage}
              alt="Selected full screen"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
