
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BankingHero } from "@/components/banking/BankingHero";
import { BankingServices } from "@/components/banking/BankingServices";

const Banking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      <BankingHero />
      <BankingServices />
      <Footer />
    </div>
  );
};

export default Banking;
