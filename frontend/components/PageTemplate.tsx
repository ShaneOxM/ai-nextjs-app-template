import React from 'react'

interface PageTemplateProps {
  title: string
  children: React.ReactNode
}

const PageTemplate: React.FC<PageTemplateProps> = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">{title}</h1>
        {children}
      </div>
    </div>
  )
}

export default PageTemplate