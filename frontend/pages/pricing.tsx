import React from 'react';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ name, price, features, isPopular = false }) => (
  <div className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${isPopular ? 'border-2 border-primary-500' : ''}`}>
    {isPopular && <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold self-start mb-4">Most Popular</span>}
    <h3 className="text-2xl font-semibold mb-2 text-primary-900">{name}</h3>
    <p className="text-4xl font-bold mb-4 text-primary-700">{price}</p>
    <ul className="mb-6 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="mb-2 flex items-center">
          <Check className="h-5 w-5 text-secondary-500 mr-2" />
          <span className="text-primary-700">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
      Choose Plan
    </button>
  </div>
);

export default function Pricing() {
  const pricingTiers: PricingTierProps[] = [
    {
      name: "Starter",
      price: "$29/month",
      features: [
        "1,000 API calls/month",
        "2 AI models",
        "Basic analytics",
        "Email support",
        "1 user"
      ]
    },
    {
      name: "Pro",
      price: "$99/month",
      features: [
        "10,000 API calls/month",
        "5 AI models",
        "Advanced analytics",
        "Priority support",
        "5 users",
        "Custom model training"
      ],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited API calls",
        "Unlimited AI models",
        "Real-time analytics",
        "24/7 dedicated support",
        "Unlimited users",
        "Custom model development",
        "On-premises deployment option"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary-50 to-primary-100 min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-primary-900">Flexible Pricing for Every Need</h1>
        <p className="text-xl text-primary-700 mb-12 text-center">Choose the plan that's right for you and your team</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-primary-900">Need a custom enterprise solution?</h2>
          <p className="text-primary-700 mb-8">Contact us for a tailored plan that fits your specific requirements</p>
          <Link href="/consultation" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 shadow-md hover:shadow-lg">
            Book Enterprise Consultation
          </Link>
        </div>
      </div>
    </div>
  )
}