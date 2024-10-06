import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function Consultation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    industry: '',
    employeeCount: '',
    currentAIUsage: '',
    consultationGoals: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    router.push('/consultation-thank-you');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center">
      <div className="relative mx-auto p-8 w-full max-w-md bg-white shadow-2xl rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-gray-900">Book Enterprise Consultation</h3>
          <Link href="/">
            <X className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" name="fullName" id="fullName" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out"
              value={formData.fullName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" id="email" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" name="companyName" id="companyName" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.companyName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
            <input type="text" name="industry" id="industry" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.industry} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="employeeCount" className="block text-sm font-medium text-gray-700">Number of Employees</label>
            <select name="employeeCount" id="employeeCount" required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.employeeCount} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-200">51-200</option>
              <option value="201-500">201-500</option>
              <option value="501+">501+</option>
            </select>
          </div>
          <div>
            <label htmlFor="currentAIUsage" className="block text-sm font-medium text-gray-700">Current AI Usage</label>
            <textarea name="currentAIUsage" id="currentAIUsage" rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.currentAIUsage} onChange={handleChange}
              placeholder="Briefly describe how you're currently using AI, if at all."></textarea>
          </div>
          <div>
            <label htmlFor="consultationGoals" className="block text-sm font-medium text-gray-700">Consultation Goals</label>
            <textarea name="consultationGoals" id="consultationGoals" rows={3}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.consultationGoals} onChange={handleChange}
              placeholder="What do you hope to achieve with this consultation?"></textarea>
          </div>
          <div>
            <button type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out">
              Book Enterprise Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}