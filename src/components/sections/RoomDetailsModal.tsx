import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function RoomDetailsModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { lang } = useLanguage();

  const tableDataEn = [
    { room: "Ground Floor Suite", surface: "43 m²", bathroom: "En-suite", bed: "100×200", floor: "Ground Floor", amenities: "Direct access to terrace" },
    { room: "2 Bedroom Suite", surface: "48 m²", bathroom: "En-suite", bed: "2 – 160×200", floor: "1st Floor", amenities: "Small Balcony" },
    { room: "Master Bedroom", surface: "33 m²", bathroom: "Individual – Across Hallway", bed: "200×200", floor: "1st Floor", amenities: "Small Balcony" },
    { room: "Bedroom", surface: "28 m²", bathroom: "En-suite", bed: "160×200", floor: "1st Floor", amenities: "Small Balcony" },
    { room: "Master Suite", surface: "46 m²", bathroom: "En-suite", bed: "200×200", floor: "1st Floor", amenities: "Terrace with sea view" },
    { room: "Suite", surface: "30 m²", bathroom: "En-suite", bed: "180×200", floor: "1st Floor", amenities: "Garden View" },
    { room: "Bedroom", surface: "24 m²", bathroom: "En-suite", bed: "160×200", floor: "2nd Floor", amenities: "Garden View" },
    { room: "Suite", surface: "33 m²", bathroom: "En-suite", bed: "160×200", floor: "2nd Floor", amenities: "Small Balcony" },
    { room: "Twin Bedroom", surface: "21 m²", bathroom: "Individual – Across Hallway", bed: "160×200", floor: "2nd Floor", amenities: "Sea View" },
    { room: "Twin Bedroom", surface: "22.4 m²", bathroom: "Individual – Across Hallway", bed: "2 – 100×200", floor: "2nd Floor", amenities: "Sea View" },
    { room: "Bedroom", surface: "25 m²", bathroom: "Shared – Across Hallway", bed: "160×200", floor: "2nd Floor", amenities: "Garden View" },
    { room: "Bedroom", surface: "25 m²", bathroom: "Shared – Down the Hallway", bed: "160×200", floor: "2nd 1/2 Floor", amenities: "Panoramic View" },
  ];

  const tableDataFr = [
    { room: "Suite au rez-de-chaussée", surface: "43 m²", bathroom: "En-suite", bed: "100×200", floor: "Rez-de-chaussée", amenities: "Accès direct à la terrasse" },
    { room: "Suite 2 chambres", surface: "48 m²", bathroom: "En-suite", bed: "2 × 160×200", floor: "1er étage", amenities: "Petit balcon" },
    { room: "Chambre principale", surface: "33 m²", bathroom: "Salle de bains privative – de l’autre côté du couloir", bed: "200×200", floor: "1er étage", amenities: "Petit balcon" },
    { room: "Chambre", surface: "28 m²", bathroom: "En-suite", bed: "160×200", floor: "1er étage", amenities: "Petit balcon" },
    { room: "Master Suite", surface: "46 m²", bathroom: "En-suite", bed: "200×200", floor: "1er étage", amenities: "Terrasse avec vue sur la mer" },
    { room: "Suite", surface: "30 m²", bathroom: "En-suite", bed: "180×200", floor: "1er étage", amenities: "Vue sur le jardin" },
    { room: "Chambre", surface: "24 m²", bathroom: "En-suite", bed: "160×200", floor: "2e étage", amenities: "Vue sur le jardin" },
    { room: "Suite", surface: "33 m²", bathroom: "En-suite", bed: "160×200", floor: "2e étage", amenities: "Petit balcon" },
    { room: "Chambre twin", surface: "21 m²", bathroom: "Salle de bains privative – de l’autre côté du couloir", bed: "160×200", floor: "2e étage", amenities: "Vue sur la mer" },
    { room: "Chambre twin", surface: "22,4 m²", bathroom: "Salle de bains privative – de l’autre côté du couloir", bed: "2 × 100×200", floor: "2e étage", amenities: "Vue sur la mer" },
    { room: "Chambre", surface: "25 m²", bathroom: "Salle de bains partagée – de l’autre côté du couloir", bed: "160×200", floor: "2e étage", amenities: "Vue sur le jardin" },
    { room: "Chambre", surface: "25 m²", bathroom: "Salle de bains partagée – plus loin dans le couloir", bed: "160×200", floor: "Entresol", amenities: "Vue panoramique" },
  ];

  const tableData = lang === 'fr' ? tableDataFr : tableDataEn;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-brand-ivory/95 backdrop-blur-sm p-4 md:p-12 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-brand-charcoal hover:opacity-50 transition-opacity z-50"
          >
            <X size={32} strokeWidth={1} />
          </button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="w-full max-w-6xl max-h-full overflow-y-auto pr-4 thin-scrollbar pb-16"
          >
            <div className="text-center mb-12 mt-12">
              <h2 className="font-serif text-3xl md:text-5xl mb-4">{lang === 'fr' ? 'Détail des chambres' : 'Room Details'}</h2>
              <p className="text-brand-charcoal/60 uppercase tracking-widest text-xs">{lang === 'fr' ? 'Hébergements Villa Norah' : 'Villa Norah Accommodations'}</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-brand-charcoal/20 text-xs tracking-widest uppercase opacity-60">
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Chambres' : 'Rooms'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Surface' : 'Surface'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Salle de bains' : 'Bathroom'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Lit' : 'Bed'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Étage' : 'Floor'}</th>
                    <th className="py-4 px-4 font-normal">{lang === 'fr' ? 'Atouts' : 'Amenities'}</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {tableData.map((row, i) => (
                    <tr key={i} className="border-b border-brand-charcoal/10 hover:bg-white/40 transition-colors">
                      <td className="py-4 px-4 font-serif text-lg">{row.room}</td>
                      <td className="py-4 px-4 opacity-80">{row.surface}</td>
                      <td className="py-4 px-4 opacity-80">{row.bathroom}</td>
                      <td className="py-4 px-4 opacity-80">{row.bed}</td>
                      <td className="py-4 px-4 opacity-80">{row.floor}</td>
                      <td className="py-4 px-4 opacity-80">{row.amenities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
