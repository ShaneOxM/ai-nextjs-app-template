import React, { useState, useEffect } from 'react'
import { getPrediction, getFeatures } from '../services/api'

const PredictionForm: React.FC = () => {
  const [input, setInput] = useState('')
  const [prediction, setPrediction] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [availableModels, setAvailableModels] = useState<string[]>([])
  const [selectedModel, setSelectedModel] = useState('')

  useEffect(() => {
    getFeatures().then(features => {
      setAvailableModels(features)
      setSelectedModel(features[0])
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const result = await getPrediction(input, selectedModel)
      setPrediction(result.prediction)
    } catch (error) {
      console.error('Error:', error)
      setPrediction('An error occurred while getting the prediction.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4">AI Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
            Select Model:
          </label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedModel(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {availableModels.map(model => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="input">
            Enter your input:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input"
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Enter text for prediction"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Loading...' : 'Get Prediction'}
          </button>
        </div>
      </form>
      {prediction && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Prediction:</h3>
          <p className="text-gray-700">{prediction}</p>
        </div>
      )}
    </div>
  )
}

export default PredictionForm