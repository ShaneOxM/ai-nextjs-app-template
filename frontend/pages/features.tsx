import React from 'react';
import Link from 'next/link';
import { Zap, Shield, Cpu, Code, Cloud, BarChart, Users, Globe, Headphones } from 'lucide-react';

const FeatureSection: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="p-3 bg-indigo-100 rounded-full mb-4">
      <Icon className="w-8 h-8 text-indigo-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default function Features() {
  const allFeatures = [
    { icon: Zap, title: "Lightning Fast", description: "Process data and get results in milliseconds" },
    { icon: Shield, title: "Secure by Design", description: "Enterprise-grade security for your data and models" },
    { icon: Cpu, title: "Scalable Architecture", description: "Grow from prototype to production effortlessly" },
    { icon: Code, title: "Easy Integration", description: "Simple API for seamless integration with your existing stack" },
    { icon: Cloud, title: "Cloud-Native", description: "Built for the cloud, ensuring high availability and reliability" },
    { icon: BarChart, title: "Advanced Analytics", description: "Gain insights with built-in analytics and reporting" },
    { icon: Users, title: "Collaboration Tools", description: "Work together efficiently with team collaboration features" },
    { icon: Globe, title: "Multi-language Support", description: "Support for over 50 languages out of the box" },
    { icon: Headphones, title: "24/7 Support", description: "Round-the-clock support to help you succeed" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Powerful Features for Your AI App</h1>
          <p className="text-xl mb-8">Discover how our platform can transform your AI development process</p>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allFeatures.map((feature, index) => (
              <FeatureSection key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Experience the power of our AI platform today</p>
          <Link href="/signup" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-indigo-100 transition duration-300">
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Link to AI Use Cases */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Explore AI Use Cases</h2>
          <p className="text-lg mb-8">Discover how our AI can be applied to various industries and scenarios</p>
          <Link href="/ai-use-cases" className="text-indigo-600 font-semibold hover:text-indigo-800 transition duration-300">
            View AI Use Cases →
          </Link>
        </div>
      </section>
    </div>
  );
}