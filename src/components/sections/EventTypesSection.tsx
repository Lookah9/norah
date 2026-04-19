"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../Typography";
import { Button } from "../Button";

const events = [
  {
    title: "Weddings",
    description: "Romantic, timeless celebrations set against historic architecture and serene botanical gardens. A canvas for your perfect day.",
    image: "/Interior and garden and pool/Villa -11.jpg"
  },
  {
    title: "Corporate Retreats & Board Meetings",
    description: "A composed environment for focused strategy and team connection. Generous spaces designed for both collaboration and reflection.",
    image: "/Interior and garden and pool/Villa -12.jpg"
  },
  {
    title: "Private Celebrations",
    description: "Exclusive access to the estate for milestone birthdays, anniversaries, and receptions, handled with absolute discretion.",
    image: "/Interior and garden and pool/Villa -13.jpg"
  }
];

export default function EventTypesSection() {
  return (
    <section id="events" className="py-32 md:py-48 bg-brand-stone/30">
      <div className="max-w-[100rem] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <span className="text-brand-sage uppercase tracking-[0.2em] text-xs font-semibold block mb-4 opacity-80">Gatherings</span>
          <SectionHeading>Tailored for Extraordinary Moments</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
              className="group flex flex-col"
            >
              <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                <div className="absolute inset-0 bg-brand-charcoal/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="font-serif text-3xl mb-4 font-light text-brand-charcoal">{event.title}</h3>
              <p className="text-brand-charcoal/70 mb-8 leading-relaxed text-sm flex-grow font-light">
                {event.description}
              </p>
              <div>
                <Button 
                  variant="ghost" 
                  className="px-0 h-auto hover:bg-transparent border-b border-brand-charcoal/30 pb-1 rounded-none opacity-70 group-hover:opacity-100"
                  onClick={() => document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
