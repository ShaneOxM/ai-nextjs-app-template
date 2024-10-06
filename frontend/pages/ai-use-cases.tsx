import React from 'react';
import Link from 'next/link';
import { Brain, Briefcase, BarChart, MessageSquare, ShieldCheck, Zap } from 'lucide-react';

interface UseCaseSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const UseCaseSection: React.FC<UseCaseSectionProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <Icon className="w-8 h-8 text-indigo-600 mr-3" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AIUseCases() {
  const useCases: UseCaseSectionProps[] = [
    {
      icon: Brain,
      title: "Natural Language Processing",
      description: "Enhance customer interactions, automate content generation, and extract insights from text data."
    },
    {
      icon: Briefcase,
      title: "Predictive Analytics",
      description: "Forecast trends, optimize operations, and make data-driven decisions across various industries."
    },
    {
      icon: BarChart,
      title: "Anomaly Detection",
      description: "Identify unusual patterns in data for fraud detection, system health monitoring, and quality control."
    },
    {
      icon: MessageSquare,
      title: "Chatbots & Virtual Assistants",
      description: "Provide 24/7 customer support, automate tasks, and enhance user experiences with AI-powered conversations."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity",
      description: "Detect and prevent cyber threats in real-time, enhancing your organization's security posture."
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Streamline workflows, reduce errors, and increase efficiency across various business processes."
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">AI Use Cases</h1>
          <p className="text-xl mb-8">Explore how our AI solutions can transform your business</p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <UseCaseSection key={index} {...useCase} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Implement AI in Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our AI solutions can address your specific needs</p>
          <Link href="/consultation" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-100 transition duration-300">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}