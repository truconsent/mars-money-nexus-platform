
import { 
  PiggyBank, 
  Building2, 
  Smartphone, 
  BarChart3, 
  CreditCard,
  TrendingUp,
  Banknote,
  Target
} from "lucide-react";

export const services = [
  {
    id: "savings",
    icon: PiggyBank,
    title: "Savings Account",
    partner: "Federal Bank",
    description: "High-yield savings account with competitive interest rates",
    benefits: [
      "Up to 7% interest rate",
      "Zero balance requirement",
      "Free debit card",
      "Unlimited transactions",
      "24/7 customer support"
    ],
    features: [
      "Instant account opening",
      "Mobile & internet banking",
      "UPI integration",
      "ATM access nationwide"
    ]
  },
  {
    id: "salary",
    icon: Building2,
    title: "Salary Account",
    partner: "Federal Bank",
    description: "Corporate salary accounts with exclusive benefits",
    benefits: [
      "Zero maintenance charges",
      "Higher interest rates",
      "Priority customer service",
      "Exclusive offers & discounts",
      "Easy loan approvals"
    ],
    features: [
      "Instant salary credit",
      "Corporate banking portal",
      "Bulk transaction facility",
      "Dedicated relationship manager"
    ]
  },
  {
    id: "credit",
    icon: CreditCard,
    title: "Credit Cards",
    partner: "Catholic Syrian Bank",
    description: "Premium credit cards with rewards and benefits",
    benefits: [
      "Cashback on all purchases",
      "Reward points system",
      "Airport lounge access",
      "Zero annual fees",
      "Travel insurance"
    ],
    features: [
      "Contactless payments",
      "EMI conversion facility",
      "Credit limit enhancement",
      "International acceptance"
    ]
  },
  {
    id: "financial-overview",
    icon: BarChart3,
    title: "Unified Financial Overview",
    partner: "mars.money",
    description: "Track all your bank accounts and manage expenses in one place",
    benefits: [
      "Multi-bank account view",
      "Expense categorization",
      "Financial insights",
      "Budget planning tools",
      "Investment tracking"
    ],
    features: [
      "Real-time data sync",
      "AI-powered analytics",
      "Secure data encryption",
      "Customizable dashboard"
    ]
  },
  {
    id: "demat",
    icon: TrendingUp,
    title: "Demat & Mutual Funds",
    partner: "mars.money",
    description: "Start your investment journey with demat account and mutual funds",
    benefits: [
      "Zero account opening charges",
      "Wide range of mutual funds",
      "SIP facility available",
      "Expert advisory support",
      "Real-time portfolio tracking"
    ],
    features: [
      "Paperless account opening",
      "Mobile trading app",
      "Research reports",
      "Tax saving funds"
    ]
  },
  {
    id: "fixed-deposit",
    icon: Target,
    title: "Fixed Deposit",
    partner: "Federal Bank",
    description: "Secure your money with attractive fixed deposit rates",
    benefits: [
      "High interest rates up to 8%",
      "Flexible tenure options",
      "Loan against FD facility",
      "Auto-renewal option",
      "Premature withdrawal"
    ],
    features: [
      "Online FD booking",
      "Digital FD certificates",
      "Interest payout options",
      "Senior citizen benefits"
    ]
  },
  {
    id: "personal-loan",
    icon: Banknote,
    title: "Personal Loan",
    partner: "Federal Bank",
    description: "Quick personal loans for your immediate financial needs",
    benefits: [
      "Instant approval up to ₹50 Lakhs",
      "Competitive interest rates",
      "Flexible repayment tenure",
      "Minimal documentation",
      "Quick disbursal"
    ],
    features: [
      "Online application",
      "Pre-approved offers",
      "EMI calculator",
      "Part payment facility"
    ]
  },
  {
    id: "loan-against-mf",
    icon: TrendingUp,
    title: "Loan Against Mutual Funds",
    partner: "mars.money",
    description: "Get instant loans against your mutual fund investments",
    benefits: [
      "Up to 70% of portfolio value",
      "Lower interest rates",
      "No processing fees",
      "Continue earning returns",
      "Instant approval"
    ],
    features: [
      "Online pledging process",
      "Flexible repayment",
      "Portfolio-based limit",
      "Quick fund access"
    ]
  },
  {
    id: "upi",
    icon: Smartphone,
    title: "UPI Payments",
    partner: "mars.money",
    description: "Fast, secure digital payments and money transfers",
    benefits: [
      "Instant money transfers",
      "Bill payment facility",
      "Merchant payments",
      "QR code scanning",
      "Transaction history"
    ],
    features: [
      "24/7 availability",
      "Bank-grade security",
      "Multiple UPI IDs",
      "Offline transaction capability"
    ]
  }
];
