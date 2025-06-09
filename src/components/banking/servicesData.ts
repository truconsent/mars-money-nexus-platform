
import { 
  PiggyBank, 
  CreditCard, 
  Briefcase, 
  BarChart3, 
  TrendingUp, 
  Wallet, 
  HandCoins, 
  Building2 
} from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  partner: string;
  description: string;
  benefits: string[];
  features: string[];
}

export const services: Service[] = [
  {
    id: "savings",
    icon: PiggyBank,
    title: "Savings Account",
    partner: "Federal Bank",
    description: "Start your savings journey with zero balance accounts and attractive interest rates",
    benefits: [
      "Zero minimum balance",
      "Up to 6% interest rate",
      "Free debit card",
      "24/7 digital banking"
    ],
    features: [
      "Instant account opening",
      "Mobile banking app",
      "ATM access nationwide",
      "Online fund transfers"
    ]
  },
  {
    id: "salary",
    icon: Briefcase,
    title: "Salary Account",
    partner: "Federal Bank",
    description: "Dedicated salary accounts for corporate employees with exclusive benefits",
    benefits: [
      "Zero charges on all transactions",
      "Higher interest rates",
      "Overdraft facility",
      "Corporate tie-up benefits"
    ],
    features: [
      "Salary credit alerts",
      "Expense tracking",
      "Investment options",
      "Insurance coverage"
    ]
  },
  {
    id: "credit",
    icon: CreditCard,
    title: "Credit Card",
    partner: "Federal Bank",
    description: "Premium credit cards with rewards, cashback, and exclusive privileges",
    benefits: [
      "Up to 5% cashback",
      "Reward points on every spend",
      "Airport lounge access",
      "Zero joining fee"
    ],
    features: [
      "Contactless payments",
      "EMI conversion",
      "Travel insurance",
      "Purchase protection"
    ]
  },
  {
    id: "financial-overview",
    icon: BarChart3,
    title: "Unified Financial Overview",
    partner: "mars.money",
    description: "Get a complete view of all your accounts and expenses in one place",
    benefits: [
      "Account aggregation",
      "Expense categorization",
      "Budget planning",
      "Financial insights"
    ],
    features: [
      "Multi-bank integration",
      "Spending analytics",
      "Goal tracking",
      "Report generation"
    ]
  },
  {
    id: "demat",
    icon: TrendingUp,
    title: "Demat Account",
    partner: "Zerodha",
    description: "Start your investment journey with a free demat account and low brokerage",
    benefits: [
      "Zero account opening charges",
      "Low brokerage rates",
      "Research reports",
      "24/7 support"
    ],
    features: [
      "Stock trading",
      "Mutual fund investments",
      "IPO applications",
      "Portfolio tracking"
    ]
  },
  {
    id: "fixed-deposit",
    icon: Wallet,
    title: "Fixed Deposit",
    partner: "Federal Bank",
    description: "Secure your money with guaranteed returns through fixed deposits",
    benefits: [
      "Attractive interest rates",
      "Flexible tenure options",
      "Auto-renewal facility",
      "Loan against FD"
    ],
    features: [
      "Online FD booking",
      "Premature withdrawal",
      "Interest payout options",
      "Tax saving FDs"
    ]
  },
  {
    id: "personal-loan",
    icon: HandCoins,
    title: "Personal Loan",
    partner: "Federal Bank",
    description: "Quick personal loans for your immediate financial needs",
    benefits: [
      "Quick approval process",
      "Competitive interest rates",
      "Flexible repayment",
      "Minimal documentation"
    ],
    features: [
      "Instant eligibility check",
      "Online application",
      "Same day disbursal",
      "No collateral required"
    ]
  },
  {
    id: "loan-against-mf",
    icon: Building2,
    title: "Loan Against Mutual Funds",
    partner: "Federal Bank",
    description: "Get instant liquidity against your mutual fund investments",
    benefits: [
      "Lower interest rates",
      "No need to redeem MFs",
      "Quick processing",
      "Flexible repayment"
    ],
    features: [
      "Online application",
      "Instant approval",
      "Continue earning returns",
      "Easy repayment options"
    ]
  }
];
