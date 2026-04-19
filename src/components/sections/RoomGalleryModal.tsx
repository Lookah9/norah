"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

interface RoomGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const rooms = [
  { name: "Master Suite", feature: "Sea View", floor: "Upper Level", size: "45 sqm", image: "/Rooms/20210823_163213.jpg" },
  { name: "Garden Room", feature: "Terrace Access", floor: "Ground Level", size: "32 sqm", image: "/Rooms/20210823_163235.jpg" },
  { name: "Balcony Suite", feature: "Balcony", floor: "Upper Level", size: "38 sqm", image: "/Rooms/20210823_163513.jpg" },
  { name: "Courtyard Room", feature: "En-suite", floor: "Ground Level", size: "30 sqm", image: "/Rooms/20210823_163626.jpg" },
  { name: "Library Suite", feature: "Garden View", floor: "Main Level", size: "40 sqm", image: "/Rooms/20210823_163716.jpg" },
  { name: "Guest Room", feature: "En-suite", floor: "Upper Level", size: "28 sqm", image: "/Rooms/20210823_163847.jpg" },
];

export function RoomGalleryModal({ isOpen, onClose }: RoomGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % rooms.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + rooms.length) % rooms.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-brand-ivory/95 backdrop-blur-md"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 p-2 text-brand-charcoal opacity-70 hover:opacity-100 transition-opacity z-50"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <div className="w-full max-w-6xl h-full pb-20 pt-10 md:py-10 flex flex-col items-center justify-center relative">
            
            <div className="w-full text-center mb-8 hidden md:block">
              <span className="text-brand-sage uppercase tracking-widest text-xs font-semibold block mb-2">Accommodation</span>
              <h2 className="font-serif text-3xl text-brand-charcoal">The Suites & Rooms</h2>
            </div>

            <div className="relative w-full flex-grow flex items-center justify-center">
              <button 
                onClick={prev}
                className="absolute left-0 md:-left-12 p-3 text-brand-charcoal opacity-50 hover:opacity-100 transition-opacity z-10 bg-brand-ivory/50 md:bg-transparent rounded-full"
              >
                <ChevronLeft size={40} strokeWidth={1} />
              </button>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full max-h-[70vh] flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="w-full md:w-2/3 h-64 md:h-full relative overflow-hidden">
                    <img 
                      src={rooms[currentIndex].image} 
                      alt={rooms[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6 md:pl-8">
                    <div>
                      <h3 className="font-serif text-3xl mb-2">{rooms[currentIndex].name}</h3>
                      <p className="text-brand-charcoal/60 uppercase tracking-widest text-xs font-medium">Selected details</p>
                    </div>
                    
                    <div className="space-y-4 text-sm max-w-xs">
                      <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                        <span className="opacity-70">Feature</span>
                        <span className="font-medium text-right">{rooms[currentIndex].feature}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                        <span className="opacity-70">Floor</span>
                        <span className="font-medium text-right">{rooms[currentIndex].floor}</span>
                      </div>
                      <div className="flex justify-between border-b border-brand-charcoal/10 pb-2">
                        <span className="opacity-70">Size</span>
                        <span className="font-medium text-right">{rooms[currentIndex].size}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button 
                onClick={next}
                className="absolute right-0 md:-right-12 p-3 text-brand-charcoal opacity-50 hover:opacity-100 transition-opacity z-10 bg-brand-ivory/50 md:bg-transparent rounded-full"
              >
                <ChevronRight size={40} strokeWidth={1} />
              </button>
            </div>
            
            <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center gap-2">
              {rooms.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? 'bg-brand-charcoal w-6' : 'bg-brand-charcoal/30'}`}
                />
              ))}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
