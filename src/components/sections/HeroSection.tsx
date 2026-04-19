"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Button";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { ASSET_PREFIX } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { GalleryModal } from "../GalleryModal";

const heroGallery = [
  `${ASSET_PREFIX}/VN Hero Gallery/DJI_0462_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/DJI_0463_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/DJI_0465_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/Villa -61_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/Villa -62_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/Villa -63_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/Villa -64_converted.webp`,
  `${ASSET_PREFIX}/VN Hero Gallery/Villa -65_converted.webp`,
];

export default function HeroSection() {
  const [galleryIndex, setGalleryIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const { lang } = useLanguage();

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
      {/* Background Image / Optimized for LCP */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          src={`${ASSET_PREFIX}/Hero_converted.webp`}
          alt="Villa Norah Aerial View"
          className="w-full h-full object-cover object-[center_35%] md:object-center"
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          // @ts-ignore
          fetchpriority="high"
          loading="eager"
          decoding="sync"
          width={1920}
          height={1080}
        />
        {/* Subtle dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
      </div>

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
      <GalleryModal
        images={heroGallery}
        activeIndex={galleryIndex}
        onClose={() => setGalleryIndex(null)}
        onNext={nextImage}
        onPrev={prevImage}
        direction={direction}
      />
    </section>
  );
}
