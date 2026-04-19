"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";

export default function GardenPoolSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Internal Image Scroll effect setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to a translateY value for the image
  // The image will move from -10% to 10% of its height as the user scrolls past the section
  const yReveal = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="py-32 md:py-48 bg-brand-charcoal text-brand-ivory">
      <div className="max-w-[100rem] mx-auto px-8">
        
        {/* Intro */}
        <div className="mb-20 max-w-2xl">
          <TextPairing
            label="The Grounds"
            heading={<SectionHeading className="text-brand-ivory">Botanical Gardens & Poolside</SectionHeading>}
            body={
              <span className="text-brand-stone/80">
                Secluded from the world, the estate’s gardens offer winding paths, mature olive trees, and shaded terraces. 
                The poolside serves as a serene focal point for daytime relaxation or elegant evening receptions under the stars.
              </span>
            }
            className="text-brand-ivory text-opacity-100" // Override default text colors
          />
        </div>

        {/* Content with Internal Image Scroll */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-12">
            <div>
              <h3 className="font-serif text-2xl mb-4 text-brand-ivory">Botanical Gardens</h3>
              <p className="text-brand-stone/60 leading-relaxed text-sm">
                Carefully preserved and continuously tended, the gardens surround the property with Mediterranean fragrance and color. Perfect for ceremonial vows or peaceful morning strolls.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl mb-4 text-brand-ivory">Poolside & Terraces</h3>
              <p className="text-brand-stone/60 leading-relaxed text-sm">
                Generous lounging areas and shaded alfresco dining spots create an effortless flow between the interior elegance and the sunlit exterior.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 order-1 lg:order-2">
            {/* 
              This is the framed window for the scroll effect.
              It must have overflow-hidden, and the image inside must be taller than 100%.
            */}
            <div 
              ref={containerRef}
              className="w-full aspect-[4/5] md:aspect-[16/9] lg:aspect-[4/5] overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-brand-charcoal/20 z-10" />
              <motion.img
                src="/Interior and garden and pool/Villa -20.jpg"
                alt="Villa Norah Gardens and Pool"
                style={{ 
                  y: yReveal,
                  height: "120%", // Give it room to scroll
                  top: "-10%",    // Offset initial position
                }}
                className="absolute left-0 w-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
