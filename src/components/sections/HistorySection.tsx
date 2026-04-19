"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ASSET_PREFIX } from "@/lib/utils";

export default function HistorySection() {
  const { lang } = useLanguage();

  return (
    <section className="py-16 md:py-20 px-8 flex flex-col items-center text-center z-10 relative">
      <motion.img 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        src={`${ASSET_PREFIX}/villanorah sketch.png`}
        alt="Villa Norah Sketch" 
        className="w-32 md:w-48 mb-12 opacity-80"
        loading="lazy"
        width={192}
        height={132}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl text-brand-charcoal/80 font-light leading-[1.8] text-[0.95rem] md:text-[1.05rem]"
      >
        <p>
          {lang === 'fr' 
            ? "La Villa Norah remonte à 1897. Construite par Alfred et Maria Gibbons, cette magnifique demeure de la Belle Époque porte le nom de leur fille. En 1923, la villa est acquise par Louis Emile Schlienger, parfumeur de renom et président de la société Bernard Frères. Schlienger fait appel à l’architecte Léon Lebel pour transformer la villa, en conciliant tradition patrimoniale et modernité. Elle abrite notamment un escalier d’honneur en fer forgé signé Richard Desvallières. Aujourd’hui, Villa Norah demeure le témoignage vivant d’une histoire riche, où patrimoine et élégance se rencontrent avec naturel."
            : "Villa Norah traces its origins back to 1897, built by Alfred and Maria Gibbons as a magnificent “belle époque” mansion named after their daughter. In 1923, the villa was acquired by Louis Emile Schlienger, a renowned perfumer and president of Bernard Frères Company. Schlienger enlisted architect Leon Lebel to transform the villa, merging nostalgic tradition with modern design. Notably, the villa features an honorary forged iron staircase by Richard Desvallieres. Today, Villa Norah stands as a testament to its rich history, offering an exquisite blend of heritage and luxury."}
        </p>
      </motion.div>
    </section>
  );
}
