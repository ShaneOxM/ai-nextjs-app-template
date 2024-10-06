import { useState } from 'react'
import { Search, Users } from 'lucide-react'

export default function Dashboard() {
  const [query, setQuery] = useState('')

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Where AI innovation begins</h1>
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <textarea
          className="w-full bg-gray-50 resize-none outline-none text-lg rounded-md p-3 mb-3"
          rows={3}
          placeholder="Ask anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button className="text-gray-500 mr-2 hover:text-primary-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-primary-600 transition-colors">
              <Users className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center">
            <span className="text-gray-600 mr-2">Pro</span>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors">
              Ask AI
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Welcome to your dashboard</h2>
        <p className="text-gray-600">
          This is where you can start interacting with our AI models and manage your projects.
        </p>
      </div>
    </div>
  )
}