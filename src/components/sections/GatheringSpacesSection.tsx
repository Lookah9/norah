"use client";

import { motion } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";
import { Button } from "../Button";

export default function GatheringSpacesSection() {
  return (
    <section className="py-32 md:py-48 px-8 max-w-[100rem] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
        
        {/* Text Col */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto md:mx-0"
        >
          <TextPairing
            label="Interiors"
            heading={<SectionHeading>Spaces for Gathering</SectionHeading>}
            body={
              <div className="space-y-6 text-brand-charcoal/70">
                <p>
                  The interior architecture balances the intimacy of a private home with the grandeur required for exceptional events. High ceilings, bay windows, and marble detailing frame spaces that transition effortlessly from day to night.
                </p>
                <p>
                  Natural light floods the reception rooms, illuminating the curated art and antique finishes. Every corner is designed to foster connection, conversation, and quiet moments of retreat.
                </p>
              </div>
            }
          />
          <div className="pt-8">
            <Button variant="outline" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
              View Gallery
            </Button>
          </div>
        </motion.div>

        {/* Image Composition */}
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          <motion.div 
            className="h-[50vh] md:h-[65vh] min-h-[400px] md:min-h-[600px] overflow-hidden translate-y-8"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="/Interior and garden and pool/Villa -30.jpg" 
              alt="Reception Space" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div 
            className="h-[50vh] md:h-[65vh] min-h-[400px] md:min-h-[600px] overflow-hidden"
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0 0)" }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <img 
              src="/Interior and garden and pool/Villa -31.jpg" 
              alt="Dining Details" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
