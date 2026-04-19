import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HistorySection from "@/components/sections/HistorySection";
import IntroSection from "@/components/sections/IntroSection";
import CapacitySection from "@/components/sections/CapacitySection";
import LocationSection from "@/components/sections/LocationSection";
import InquirySection from "@/components/sections/InquirySection";

export default function Home() {
  return (
    <main className="relative bg-brand-ivory min-h-screen">
      <Header />
      <HeroSection />
      <HistorySection />
      <IntroSection />
      <CapacitySection />
      <LocationSection />
      <InquirySection />
      <Footer />
    </main>
  );
}
