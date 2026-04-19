"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useEffect } from "react";

interface GalleryModalProps {
  images: string[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  direction: number;
}

export function GalleryModal({ 
  images, 
  activeIndex, 
  onClose, 
  onNext, 
  onPrev, 
  direction 
}: GalleryModalProps) {
  
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    
    if (activeIndex !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onNext, onPrev]);

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

  return (
    <AnimatePresence custom={direction}>
      {activeIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] bg-brand-charcoal/50 backdrop-blur-md flex items-center justify-center overflow-hidden"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 z-[110] text-white border border-white/50 px-6 py-2 rounded-none hover:bg-white/10 uppercase text-[0.65rem] tracking-[0.2em] transition-colors flex items-center gap-2"
          >
            CLOSE
          </button>
          
          {/* Navigation Arrows */}
          <button 
            onClick={onPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white z-[110] opacity-50 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button 
            onClick={onNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white z-[110] opacity-50 hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Image Display */}
          <AnimatePresence custom={direction} mode="popLayout">
            {activeIndex !== null && (
              <motion.img
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                src={encodeURI(images[activeIndex])}
                alt={`Gallery image ${activeIndex + 1}`}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full object-contain absolute inset-0 max-w-[90vw] max-h-[85vh] m-auto pointer-events-none"
              />
            )}
          </AnimatePresence>
          
          {/* Index Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-[0.65rem] tracking-[0.2em] uppercase">
            {activeIndex + 1} / {images.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
