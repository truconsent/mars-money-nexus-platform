
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { InvestmentHero } from "@/components/investments/InvestmentHero";
import { InvestmentServices } from "@/components/investments/InvestmentServices";

const Investments = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      <InvestmentHero />
      <InvestmentServices />
      <Footer />
    </div>
  );
};

export default Investments;
