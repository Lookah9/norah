export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-ivory pt-24 pb-12 px-8 flex flex-col items-center text-center">
      <h2 className="font-serif text-3xl mb-8 tracking-wide">Villa Norah</h2>
      <div className="text-sm tracking-widest uppercase opacity-70 mb-16 font-medium space-y-2">
        <p>Domain Saint Georges</p>
        <p>Grasse, French Riviera</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 opacity-60 text-sm mb-16">
        <a href="mailto:contact@chateausaintgeorges-grasse.com" className="hover:opacity-100 transition-opacity">contact@chateausaintgeorges-grasse.com</a>
        <a href="tel:+33651410071" className="hover:opacity-100 transition-opacity">+33 6 51 41 00 71</a>
      </div>

      <div className="w-full max-w-4xl border-t border-brand-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-50">
        <p>&copy; {new Date().getFullYear()} Villa Norah. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="hover:opacity-100 transition-opacity">Terms</a>
        </div>
      </div>
    </footer>
  );
}
