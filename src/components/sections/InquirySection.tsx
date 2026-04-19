"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../Typography";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import { useLanguage } from "@/contexts/LanguageContext";

export default function InquirySection() {
  const { lang } = useLanguage();
  return (
    <section id="inquiry" className="py-20 md:py-48 px-4 sm:px-8 bg-brand-stone/50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-brand-sage uppercase tracking-widest text-xs font-semibold block mb-4">
            {lang === 'fr' ? 'Demande' : 'Inquiry'}
          </span>
          <SectionHeading className="mb-6">
            {lang === 'fr' ? 'Organisez votre événement ou séjour' : 'Plan Your Event or Stay'}
          </SectionHeading>
          <p className="text-brand-charcoal/70 text-sm leading-relaxed max-w-xl mx-auto">
            {lang === 'fr' 
              ? 'Partagez quelques détails et notre équipe reviendra vers vous avec des disponibilités et des options sur mesure.' 
              : 'Share a few details and our team will return with availability and tailored options.'}
          </p>
        </motion.div>

        <motion.form 
          className="space-y-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="name" className="block text-xs uppercase tracking-widest opacity-60 mb-2">
                {lang === 'fr' ? 'Nom Complet' : 'Full Name'}
              </label>
              <Input id="name" placeholder={lang === 'fr' ? 'Entrez votre nom complet' : 'Enter your name'} />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs uppercase tracking-widest opacity-60 mb-2">
                {lang === 'fr' ? 'Adresse Email' : 'Email Address'}
              </label>
              <Input id="email" type="email" placeholder={lang === 'fr' ? 'Entrez votre email' : 'Enter your email'} />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-widest opacity-60 mb-2">
                {lang === 'fr' ? 'Numéro de téléphone' : 'Phone Number'}
              </label>
              <Input id="phone" type="tel" placeholder={lang === 'fr' ? 'Optionnel' : 'Optional'} />
            </div>
            <div>
              <label htmlFor="event-type" className="block text-xs uppercase tracking-widest opacity-60 mb-2 flex items-center justify-between">
                <span>{lang === 'fr' ? "Type d'événement" : 'Event Type'}</span>
                <span className="opacity-0 group-focus-within:opacity-100 transition-opacity">{lang === 'fr' ? 'Sélectionner' : 'Select'}</span>
              </label>
              <div className="relative group">
                <select 
                  id="event-type" 
                  className="flex h-12 w-full appearance-none border-b border-brand-charcoal/30 bg-transparent px-3 py-2 text-sm transition-colors text-brand-charcoal focus-visible:outline-none focus-visible:border-brand-charcoal cursor-pointer"
                  defaultValue=""
                >
                  <option value="" disabled className="text-brand-charcoal/40">{lang === 'fr' ? 'Sélectionnez une option' : 'Select an option'}</option>
                  <option value="wedding">{lang === 'fr' ? 'Mariage' : 'Wedding'}</option>
                  <option value="corporate">{lang === 'fr' ? "Séminaire d'entreprise" : 'Corporate Retreat'}</option>
                  <option value="board">{lang === 'fr' ? 'Réunion du conseil' : 'Board Meeting'}</option>
                  <option value="celebration">{lang === 'fr' ? 'Célébration privée' : 'Private Celebration'}</option>
                  <option value="stay">{lang === 'fr' ? 'Séjour exclusif' : 'Exclusive Stay'}</option>
                  <option value="other">{lang === 'fr' ? 'Autre' : 'Other'}</option>
                </select>
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border-l-[4px] border-r-[4px] border-t-[5px] border-l-transparent border-r-transparent border-t-brand-charcoal opacity-50" />
              </div>
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 gap-12">
            <div>
              <label htmlFor="details" className="block text-xs uppercase tracking-widest opacity-60 mb-2 grid grid-cols-3">
                <span>{lang === 'fr' ? 'Dates souhaitées' : 'Preferred Dates'}</span>
                <span>{lang === 'fr' ? "Nombre d'invités" : 'Guest Count'}</span>
                <span>{lang === 'fr' ? "Besoins d'hébergement" : 'Accommodation Needs'}</span>
              </label>
              <div className="grid grid-cols-3 gap-8">
                 <Input id="date" type="text" placeholder={lang === 'fr' ? 'ex. Sept 2026' : 'e.g. Sept 2026'} className="w-full" />
                 <Input id="guests" type="number" placeholder={lang === 'fr' ? 'Environ' : 'Approx'} className="w-full" />
                 <div className="flex space-x-6 items-center border-b border-brand-charcoal/30 pb-3 pt-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="accommodation" value="yes" className="accent-brand-charcoal cursor-pointer" />
                      <span className="text-sm">{lang === 'fr' ? 'Oui' : 'Yes'}</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="accommodation" value="no" className="accent-brand-charcoal cursor-pointer" />
                      <span className="text-sm">{lang === 'fr' ? 'Non' : 'No'}</span>
                    </label>
                 </div>
              </div>
            </div>
          </div>

          {/* Row 4 */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase tracking-widest opacity-60 mb-2">
              {lang === 'fr' ? 'Informations complémentaires' : 'Additional Information'}
            </label>
            <Textarea id="message" placeholder={lang === 'fr' ? 'Veuillez préciser vos besoins...' : 'Please share any specific requirements...'} />
          </div>

          <div className="pt-8 flex justify-center">
            <Button variant="solid" type="button" onClick={(e) => e.preventDefault()}>
              {lang === 'fr' ? 'Soumettre la demande' : 'Submit Inquiry'}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
