"use client";

import { motion } from "framer-motion";
import { SectionHeading, TextPairing } from "../Typography";
import { Button } from "../Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function LocationSection() {
  const { lang } = useLanguage();

  return (
    <section className="py-32 md:py-48 px-8 max-w-[100rem] mx-auto border-t border-brand-charcoal/10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pl-0 lg:pl-12">
        
        {/* Text Col */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <TextPairing
            label="Location"
            heading={<SectionHeading>{lang === 'fr' ? 'Préservée, mais bien reliée' : 'Secluded, Yet Connected'}</SectionHeading>}
            body={
              <div className="space-y-6 text-brand-charcoal/70">
                <p>
                  {lang === 'fr' 
                    ? "Situé à Grasse, berceau historique de la parfumerie, le Domaine Saint-Georges offre le calme de l’arrière-pays azuréen tout en restant facilement accessible depuis le littoral et les principaux points d’arrivée internationaux."
                    : "Situated in the historic perfume capital of Grasse, Domain Saint Georges offers the tranquility of the French Riviera hinterland, while remaining within easy reach of the coast and international transport hubs."}
                </p>
                <ul className="space-y-3 pt-4 border-t border-brand-charcoal/10 text-sm font-medium">
                  <li className="flex justify-between"><span>Nice Airport</span> <span className="opacity-60">35 min</span></li>
                  <li className="flex justify-between"><span>Grasse Station</span> <span className="opacity-60">5 min</span></li>
                  <li className="flex justify-between"><span>Le Cannet Motorway</span> <span className="opacity-60">25 min</span></li>
                  <li className="flex justify-between"><span>Grasse City Center</span> <span className="opacity-60">5 min</span></li>
                </ul>
              </div>
            }
          />
          <div className="pt-10">
            <Button variant="outline">
              {lang === 'fr' ? 'Ouvrir dans Maps' : 'Open in Maps'}
            </Button>
          </div>
        </motion.div>

        {/* Live Map Embed */}
        <motion.div 
          className="aspect-[4/3] md:aspect-[3/2] bg-brand-stone flex items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <iframe 
            src="https://www.google.com/maps?q=43.6588,6.9205&z=14&output=embed"
            className="w-[120%] h-[120%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-50 opacity-90 border-0 contrast-125"
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none border border-brand-charcoal/20 z-10" />
        </motion.div>

      </div>
    </section>
  );
}
