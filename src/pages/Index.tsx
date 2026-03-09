import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <ServicesSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
