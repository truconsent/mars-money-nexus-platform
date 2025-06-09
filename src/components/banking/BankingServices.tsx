
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

export const BankingServices = () => {
  const [showSavingsForm, setShowSavingsForm] = useState(false);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [showSalaryForm, setShowSalaryForm] = useState(false);
  const [showFinancialOverviewForm, setShowFinancialOverviewForm] = useState(false);
  const [showDematForm, setShowDematForm] = useState(false);
  const [showFixedDepositForm, setShowFixedDepositForm] = useState(false);
  const [showPersonalLoanForm, setShowPersonalLoanForm] = useState(false);
  const [showLoanAgainstMFForm, setShowLoanAgainstMFForm] = useState(false);

  const scrollToService = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleApplyClick = (serviceId: string) => {
    switch (serviceId) {
      case 'savings':
        setShowSavingsForm(true);
        break;
      case 'salary':
        setShowSalaryForm(true);
        break;
      case 'credit':
        setShowCreditCardForm(true);
        break;
      case 'financial-overview':
        setShowFinancialOverviewForm(true);
        break;
      case 'demat':
        setShowDematForm(true);
        break;
      case 'fixed-deposit':
        setShowFixedDepositForm(true);
        break;
      case 'personal-loan':
        setShowPersonalLoanForm(true);
        break;
      case 'loan-against-mf':
        setShowLoanAgainstMFForm(true);
        break;
      default:
        alert('Application form coming soon for this service!');
    }
  };

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Banking Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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

      {/* Form Modals */}
      {showSavingsForm && (
        <SavingsAccountForm onClose={() => setShowSavingsForm(false)} />
      )}
      {showCreditCardForm && (
        <CreditCardForm onClose={() => setShowCreditCardForm(false)} />
      )}
      {showSalaryForm && (
        <SalaryAccountForm onClose={() => setShowSalaryForm(false)} />
      )}
      {showFinancialOverviewForm && (
        <FinancialOverviewForm onClose={() => setShowFinancialOverviewForm(false)} />
      )}
      {showDematForm && (
        <DematAccountForm onClose={() => setShowDematForm(false)} />
      )}
      {showFixedDepositForm && (
        <FixedDepositForm onClose={() => setShowFixedDepositForm(false)} />
      )}
      {showPersonalLoanForm && (
        <PersonalLoanForm onClose={() => setShowPersonalLoanForm(false)} />
      )}
      {showLoanAgainstMFForm && (
        <LoanAgainstMFForm onClose={() => setShowLoanAgainstMFForm(false)} />
      )}
    </>
  );
};
