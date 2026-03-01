import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <SocialProofSection />
      <ServicesSection />
      {/* <PortfolioSection /> */}
      <ProcessSection />
      <WhyUsSection />
      <CTASection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
