
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      <Hero />
      <ServicesGrid />
      <Footer />
    </div>
  );
};

export default Index;
