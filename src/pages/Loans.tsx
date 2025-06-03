
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { LoansHero } from "@/components/loans/LoansHero";
import { LoansServices } from "@/components/loans/LoansServices";

const Loans = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      <LoansHero />
      <LoansServices />
      <Footer />
    </div>
  );
};

export default Loans;
