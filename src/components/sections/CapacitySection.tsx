"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "../Button";
import { RoomDetailsModal } from "./RoomDetailsModal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";

const roomImages = [
  `${ASSET_PREFIX}/VN Rooms/20210823_163235.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_163716.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_163921.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_164159.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_164247.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_164721.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_165531.jpg`,
  `${ASSET_PREFIX}/VN Rooms/20210823_165753.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -102.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -103.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -109.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -116.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -118.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -54.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -60.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -62.jpg`,
  `${ASSET_PREFIX}/VN Rooms/Villa -68.jpg`,
];

export default function CapacitySection() {
  const { lang } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 md:py-32 px-4 md:px-8 max-w-[100rem] mx-auto text-center flex flex-col items-center justify-center">
      
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: false, margin: "-100px" }}
         transition={{ duration: 0.8 }}
         className="max-w-3xl mb-16"
      >
        <h2 className="font-serif text-4xl md:text-6xl mb-8">
          {lang === 'fr' ? 'Séjours & Réceptions' : 'Rooms & Gatherings'}
        </h2>
        <p className="text-brand-charcoal/80 leading-relaxed text-sm md:text-base font-light mb-12">
          {lang === 'fr'
            ? "Déployée sur trois niveaux et près de 800 m², Villa Norah associe l’intimité d’une résidence privée à l’élégance d’un lieu pensé pour recevoir. La villa comprend 12 chambres et suites, dont plusieurs disposent d’une vue sur la mer ou le jardin, d’un balcon, d’une terrasse ou d’un accès direct vers l’extérieur, ainsi que des espaces de réception adaptés aux séjours privés, aux réunions intimistes et aux événements élégants."
            : "Spread across three storeys and approximately 800 sqm, Villa Norah combines the intimacy of a private residence with the ease of a composed hosting setting. The villa offers 12 bedrooms and suites, many with sea views, garden views, balconies, terraces or direct outdoor access, alongside reception spaces suited to private stays, intimate gatherings and elegant events."}
        </p>
        
        <div className="flex items-center justify-center gap-4 text-[0.65rem] md:text-xs tracking-[0.2em] uppercase opacity-60 mb-12 flex-wrap">
          <span>{lang === 'fr' ? '12 chambres et suites' : '12 rooms & suites'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'fr' ? '800 m²' : '800 sqm'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'fr' ? 'espaces de réception' : 'reception spaces'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'fr' ? 'jardins botaniques' : 'botanical grounds'}</span>
          <span className="hidden sm:inline">·</span>
          <span>{lang === 'fr' ? 'piscine extérieure' : 'outdoor pool'}</span>
        </div>

        <Button onClick={() => setIsModalOpen(true)}>
          {lang === 'fr' ? 'Voir le détail des chambres' : 'View Room Details'}
        </Button>
      </motion.div>

      {/* Rooms Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="w-full relative max-w-7xl mx-auto mb-16"
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 md:-ml-6">
          <button onClick={scrollLeft} className="bg-white/80 p-2 border border-brand-charcoal/10 hover:bg-white transition-colors shadow-sm">
            <ChevronLeft size={24} className="text-brand-charcoal" strokeWidth={1} />
          </button>
        </div>
        
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 md:gap-6 snap-x snap-mandatory thin-scrollbar pb-6 px-4 md:px-0"
        >
          {roomImages.map((src, idx) => (
            <div key={idx} className="shrink-0 w-[280px] md:w-[400px] aspect-[4/5] snap-center overflow-hidden relative group">
              <div className="absolute inset-0 bg-brand-charcoal/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Room detail ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 md:-mr-6">
          <button onClick={scrollRight} className="bg-white/80 p-2 border border-brand-charcoal/10 hover:bg-white transition-colors shadow-sm">
            <ChevronRight size={24} className="text-brand-charcoal" strokeWidth={1} />
          </button>
        </div>
      </motion.div>

      <RoomDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </section>
  );
}
