"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Button";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { ASSET_PREFIX } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const heroGallery = [
  `${ASSET_PREFIX}/Aerials of the villa and the pool/DJI_0461.JPG`,
  `${ASSET_PREFIX}/Interior and garden and pool/Villa -10.jpg`,
  `${ASSET_PREFIX}/Interior and garden and pool/Villa -6.jpg`,
  `${ASSET_PREFIX}/Interior and garden and pool/Villa -30.jpg`,
  `${ASSET_PREFIX}/Interior and garden and pool/Villa -12.jpg`
];

export default function HeroSection() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const { lang } = useLanguage();

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "20vw" : "-20vw",
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (dir: number) => ({
      zIndex: 0,
      x: dir < 0 ? "20vw" : "-20vw",
      opacity: 0
    })
  };

  const nextImage = () => {
    if (galleryIndex !== null) {
      setDirection(1);
      setGalleryIndex((galleryIndex + 1) % heroGallery.length);
    }
  };

  const prevImage = () => {
    if (galleryIndex !== null) {
      setDirection(-1);
      setGalleryIndex((galleryIndex - 1 + heroGallery.length) % heroGallery.length);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-end items-center overflow-hidden pb-20 md:pb-32">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${ASSET_PREFIX}/Hero.JPG')`,
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center text-brand-ivory text-center px-4 max-w-6xl"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 2, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="text-[0.7rem] md:text-sm tracking-[0.2em] uppercase opacity-90 mb-14 max-w-xl leading-relaxed font-light mt-8">
          {lang === 'fr' 
            ? "Mariages, retraites, célébrations privées et séjours élégants dans un cadre botanique préservé."
            : "Weddings, retreats, private celebrations and elegant stays in a secluded botanical setting."}
        </p>
        <div className="flex justify-center w-full">
          <Button 
            className="border-white text-white hover:bg-white hover:text-brand-charcoal"
            onClick={() => {
              setDirection(0);
              setGalleryIndex(0);
            }}
          >
            {lang === 'fr' ? 'Voir les images' : 'View Images'}
          </Button>
        </div>
      </motion.div>

      {/* Fullscreen Gallery Overlay */}
      <AnimatePresence custom={direction}>
        {galleryIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-brand-charcoal/50 backdrop-blur-md flex items-center justify-center overflow-hidden"
          >
            <button 
              onClick={() => setGalleryIndex(null)}
              className="absolute top-8 right-8 z-50 text-white border border-white/50 px-6 py-2 rounded-none hover:bg-white/10 uppercase text-[0.65rem] tracking-[0.2em] transition-colors flex items-center gap-2"
            >
              CLOSE
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white z-50 opacity-50 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white z-50 opacity-50 hover:opacity-100 transition-opacity"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>

            <AnimatePresence custom={direction}>
              <motion.img
                key={galleryIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={heroGallery[galleryIndex]}
                alt={`Gallery image ${galleryIndex + 1}`}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-contain absolute inset-0 max-w-[90vw] max-h-[85vh] m-auto"
              />
            </AnimatePresence>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[0.65rem] tracking-[0.2em] uppercase">
              {galleryIndex + 1} / {heroGallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
