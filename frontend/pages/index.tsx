import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Shield, Cpu } from 'lucide-react';
import ConsultationBanner from '../components/ConsultationBanner';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-primary-50 to-primary-100">
        <ConsultationBanner />
        <div className="container mx-auto px-4 text-center mt-16">
          <h1 className="text-6xl font-extrabold mb-6 text-gray-900">Build Your AI-Powered App</h1>
          <p className="text-2xl mb-12 text-gray-700">Create, deploy, and scale AI solutions with ease</p>
          <Link href="/signup" className="bg-primary-600 text-white px-8 py-4 rounded-md text-xl font-bold hover:bg-primary-700 transition duration-300 shadow-lg hover:shadow-xl">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Powerful Features for Your AI App</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <Zap className="w-12 h-12 text-primary-500" />, title: "Lightning Fast", description: "Process data and get results in milliseconds" },
              { icon: <Shield className="w-12 h-12 text-primary-500" />, title: "Secure by Design", description: "Enterprise-grade security for your data and models" },
              { icon: <Cpu className="w-12 h-12 text-primary-500" />, title: "Scalable Architecture", description: "Grow from prototype to production effortlessly" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
            {[
              { step: "1", title: "Choose Your Model", description: "Select from our pre-trained models or bring your own" },
              { step: "2", title: "Integrate API", description: "Easy-to-use API for seamless integration" },
              { step: "3", title: "Launch Your App", description: "Go live with your AI-powered application" },
            ].map((step, index) => (
              <div key={index} className="text-center max-w-sm">
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}