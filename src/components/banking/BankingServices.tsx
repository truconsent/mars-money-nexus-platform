import { useState } from "react";
import { SavingsAccountForm } from "./SavingsAccountForm";
import { CreditCardForm } from "./CreditCardForm";
import { SalaryAccountForm } from "./SalaryAccountForm";
import { FinancialOverviewForm } from "./FinancialOverviewForm";
import { DematAccountForm } from "./DematAccountForm";
import { FixedDepositForm } from "./FixedDepositForm";
import { PersonalLoanForm } from "./PersonalLoanForm";
import { LoanAgainstMFForm } from "./LoanAgainstMFForm";
import { ServiceCard } from "./ServiceCard";
import { ServiceQuickNav } from "./ServiceQuickNav";
import { services } from "./servicesData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const BankingServices = () => {
  const [activeForm, setActiveForm] = useState<string | null>(null);

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleApplyClick = (serviceId: string) => {
    setActiveForm(serviceId);
    // Scroll to the active form section when form opens
    setTimeout(() => {
      const formSection = document.getElementById('active-form-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleBackToServices = () => {
    setActiveForm(null);
    // Scroll to services section when going back
    setTimeout(() => {
      const servicesSection = document.querySelector('.services-section');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const renderActiveForm = () => {
    switch (activeForm) {
      case 'savings':
        return <SavingsAccountForm onBack={handleBackToServices} />;
      case 'salary':
        return <SalaryAccountForm onBack={handleBackToServices} />;
      case 'credit':
        return <CreditCardForm onBack={handleBackToServices} />;
      case 'financial-overview':
        return <FinancialOverviewForm onBack={handleBackToServices} />;
      case 'demat':
        return <DematAccountForm onBack={handleBackToServices} />;
      case 'fixed-deposit':
        return <FixedDepositForm onBack={handleBackToServices} />;
      case 'personal-loan':
        return <PersonalLoanForm onBack={handleBackToServices} />;
      case 'loan-against-mf':
        return <LoanAgainstMFForm onBack={handleBackToServices} />;
      default:
        return null;
    }
  };

  const getServiceTitle = () => {
    const service = services.find(s => s.id === activeForm);
    return service ? service.title : '';
  };

  if (activeForm) {
    return (
      <section id="active-form-section" className="py-20 bg-white min-h-screen scroll-mt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button 
              variant="ghost" 
              onClick={handleBackToServices}
              className="mb-4 text-purple-600 hover:text-purple-700"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
            <div className="text-sm text-gray-500 mb-2">Banking Services</div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{getServiceTitle()}</h1>
          </div>
          {renderActiveForm()}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Banking Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            From basic savings to advanced financial management, we've got all your banking needs covered
          </p>
        </div>

        <ServiceQuickNav services={services} onScrollToService={scrollToService} />
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className="scroll-mt-32">
              <ServiceCard 
                service={service} 
                index={index} 
                onApplyClick={handleApplyClick} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
