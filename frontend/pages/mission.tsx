import React from 'react';
import Link from 'next/link';
import { Globe, Users, Zap, Shield } from 'lucide-react';

const MissionPoint: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start mb-8">
    <div className="bg-primary-100 p-3 rounded-full mr-4">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function Mission() {
  const missionPoints = [
    {
      icon: Globe,
      title: "Democratize AI",
      description: "We're committed to making AI accessible to businesses of all sizes, empowering innovation across industries."
    },
    {
      icon: Users,
      title: "Foster Collaboration",
      description: "Our platform encourages knowledge sharing and collaboration, accelerating the pace of AI development."
    },
    {
      icon: Zap,
      title: "Drive Efficiency",
      description: "We strive to create tools that significantly boost productivity and streamline AI workflows."
    },
    {
      icon: Shield,
      title: "Promote Ethical AI",
      description: "We're dedicated to developing and promoting responsible AI practices that benefit society as a whole."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl mb-8">Empowering the world through accessible and responsible AI</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Revolutionizing the Future with AI</h2>
            <p className="text-xl text-gray-600 mb-12">
              At AI Template, we're on a mission to democratize artificial intelligence and make it accessible to everyone. 
              We believe that AI has the power to solve some of the world's most pressing challenges and drive innovation across all industries.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {missionPoints.map((point, index) => (
              <MissionPoint key={index} {...point} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision for the Future */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision for the Future</h2>
            <p className="text-xl text-gray-600 mb-8">
              We envision a world where AI enhances human capabilities, drives sustainable growth, and improves quality of life for people everywhere.
            </p>
            <Link href="/contact" className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition duration-300">
              Join Us in Shaping the Future
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}