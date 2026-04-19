"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";
import { Button } from "../Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";
import { GalleryModal } from "../GalleryModal";

const detailsGallery = [
  `${ASSET_PREFIX}/VN Explore Details/Villa -105_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -107_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -129_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -13_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -14_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -17_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -23_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -30_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -38_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -40_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -43_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -45_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Details/Villa -48_converted.webp`,
];

const viewsGallery = [
  `${ASSET_PREFIX}/VN Explore Views/Villa -123_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -124_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -125_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -126_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -132_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -133_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -61_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -62_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -63_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -64_converted.webp`,
  `${ASSET_PREFIX}/VN Explore Views/Villa -65_converted.webp`,
];

function EditorialScrollySection({ 
  label, 
  heading, 
  body, 
  images, 
  imagePosition = "right" 
}: { 
  label: string; 
  heading: React.ReactNode; 
  body: React.ReactNode; 
  images: string[]; 
  imagePosition?: "left" | "right"; 
}) {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest >= 0.25 && activeIndex !== 1) {
      setDirection(1);
      setActiveIndex(1);
    } else if (latest < 0.25 && activeIndex !== 0) {
      setDirection(-1);
      setActiveIndex(0);
    }
  });

  const handleTabClick = (index: number) => {
    if (index !== activeIndex) {
      setDirection(index > activeIndex ? 1 : -1);
    }
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const top = window.scrollY + rect.top;
    const height = rect.height;
    const scrollableDistance = height - window.innerHeight;
    
    // Scroll to either the beginning or the end of the scrollable sticky area
    const targetY = top + (index === 0 ? 0 : scrollableDistance);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const slideVariants = {
    enter: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? "10%" : "-10%",
    }),
    center: {
      opacity: 1,
      y: "0%",
    },
    exit: (dir: number) => ({
      opacity: 0,
      y: dir > 0 ? "-10%" : "10%",
    })
  };

  const textOrderCls = imagePosition === "left" 
    ? "order-1 md:order-2" 
    : "order-1 md:order-1";
    
  const imageOrderCls = imagePosition === "left" 
    ? "order-2 md:order-1" 
    : "order-2 md:order-2";

  return (
    <section ref={containerRef} className="relative min-h-screen md:h-[150vh]">
      <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center px-8 py-16 md:py-0 max-w-[100rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center w-full">
          
          {/* Text Col */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className={`${textOrderCls} max-w-md mx-auto md:mx-0 w-full`}
          >
            <TextPairing
              label={label}
              heading={<SectionHeading className="text-3xl md:text-5xl lg:text-[3.5rem] leading-[1.1]">{heading}</SectionHeading>}
              body={body}
            />
          </motion.div>

          {/* Image Col */}
          <motion.div 
            className={`${imageOrderCls} h-[60vh] md:h-[75vh] min-h-[500px] md:min-h-[600px] max-h-[800px] overflow-hidden relative w-full`}
          >
            <AnimatePresence mode="popLayout" custom={direction}>
              <motion.img
                key={images[activeIndex]}
                src={encodeURI(images[activeIndex])}
                alt={lang === 'fr' ? 'Le Domaine de Villa Norah' : 'Villa Norah Estate'}
                className="w-full h-full object-cover absolute inset-0 bg-brand-charcoal/10"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: "easeInOut" }}
                loading="lazy"
                width={800}
                height={1000}
              />
            </AnimatePresence>

            {/* Tabs Overlay on Image */}
            <div className={`absolute bottom-6 md:bottom-10 z-20 flex gap-6 text-[0.65rem] tracking-[0.2em] uppercase text-white/50 font-medium ${imagePosition === 'left' ? 'right-6 md:right-10' : 'left-6 md:left-10'}`}>
              <button 
                onClick={() => handleTabClick(0)}
                className={`transition-all duration-500 flex items-center gap-2 ${activeIndex === 0 ? 'text-white' : 'hover:text-white/80'}`}
              >
                <span className={`h-[1px] transition-all duration-500 ${activeIndex === 0 ? 'w-6 bg-white' : 'w-0 bg-transparent'}`}></span>
                01
              </button>
              <button 
                onClick={() => handleTabClick(1)}
                className={`transition-all duration-500 flex items-center gap-2 ${activeIndex === 1 ? 'text-white' : 'hover:text-white/80'}`}
              >
                <span className={`h-[1px] transition-all duration-500 ${activeIndex === 1 ? 'w-6 bg-white' : 'w-0 bg-transparent'}`}></span>
                02
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default function IntroSection() {
  const { lang } = useLanguage();
  
  const [detailsIndex, setDetailsIndex] = useState<number | null>(null);
  const [detailsDir, setDetailsDir] = useState(0);

  const [viewsIndex, setViewsIndex] = useState<number | null>(null);
  const [viewsDir, setViewsDir] = useState(0);

  return (
    <div className="flex flex-col">
      {/* 1st Block */}
      <EditorialScrollySection
        label={lang === 'fr' ? "Le Domaine" : "The Estate"}
        heading={lang === 'fr' ? "Un Esprit des Lieux" : "A sense of time"}
        body={
          <div className="space-y-6">
            <p>
              {lang === 'fr'
                ? "À l’intérieur, la villa préserve la tenue et la richesse d’une demeure historique. Détails décoratifs, matériaux rares et identité architecturale affirmée donnent à chaque espace une présence singulière, tout en maintenant une impression d’harmonie et de raffinement à l’échelle de la maison entière."
                : "Inside, the villa preserves the composure and richness of a historic residence. Decorative detail, rare materials and a strong architectural identity give each space its own presence while maintaining a coherent sense of refinement throughout the house."}
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={() => {
                setDetailsDir(0);
                setDetailsIndex(0);
              }}>
                {lang === 'fr' ? "Plus de détails" : "Explore Details"}
              </Button>
            </div>
          </div>
        }
        images={[
          `${ASSET_PREFIX}/Interior and garden and pool/Villa -10_converted.webp`,
          `${ASSET_PREFIX}/Interior and garden and pool/Villa -34_converted.webp`
        ]}
        imagePosition="right"
      />

      {/* 2nd Block */}
      <EditorialScrollySection
        label={lang === 'fr' ? "Le Domaine" : "The Estate"}
        heading={lang === 'fr' ? "Les Jardins" : "The grounds"}
        body={
          <div className="space-y-6">
            <p>
              {lang === 'fr'
                ? "Entourée de jardins botaniques, de terrasses et de vues dégagées, Villa Norah déploie une sensation d’espace à la fois paisible et généreuse. Le domaine se découvre entre jardins ombragés, pierre baignée de soleil et instants plus calmes au bord de la piscine, dans une atmosphère à la fois intime et ouverte."
                : "Surrounded by botanical gardens, terraces and open views, Villa Norah unfolds with a calm and generous sense of space. The estate moves naturally between shaded greenery, sunlit stone and quieter poolside moments, creating an atmosphere that feels both private and expansive."}
            </p>
            <div className="pt-8">
              <Button variant="outline" onClick={() => {
                setViewsDir(0);
                setViewsIndex(0);
              }}>
                {lang === 'fr' ? "Voir la galerie" : "View Gallery"}
              </Button>
            </div>
          </div>
        }
        images={[
          `${ASSET_PREFIX}/Interior and garden and pool/Villa-130_converted.webp`,
          `${ASSET_PREFIX}/Interior and garden and pool/Villa-134_converted.webp`
        ]}
        imagePosition="left"
      />

      {/* Modals */}
      <GalleryModal
        images={detailsGallery}
        activeIndex={detailsIndex}
        onClose={() => setDetailsIndex(null)}
        onNext={() => {
          setDetailsDir(1);
          setDetailsIndex((detailsIndex! + 1) % detailsGallery.length);
        }}
        onPrev={() => {
          setDetailsDir(-1);
          setDetailsIndex((detailsIndex! - 1 + detailsGallery.length) % detailsGallery.length);
        }}
        direction={detailsDir}
      />

      <GalleryModal
        images={viewsGallery}
        activeIndex={viewsIndex}
        onClose={() => setViewsIndex(null)}
        onNext={() => {
          setViewsDir(1);
          setViewsIndex((viewsIndex! + 1) % viewsGallery.length);
        }}
        onPrev={() => {
          setViewsDir(-1);
          setViewsIndex((viewsIndex! - 1 + viewsGallery.length) % viewsGallery.length);
        }}
        direction={viewsDir}
      />
    </div>
  );
}
