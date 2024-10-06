import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getPrediction = async (input: string, model: string) => {
  try {
    const response = await api.post('/api/predict', { input, model })
    return response.data
  } catch (error) {
    console.error('Error getting prediction:', error)
    throw error
  }
}

export const getFeatures = async () => {
  try {
    const response = await api.get('/api/features')
    return response.data
  } catch (error) {
    console.error('Error getting features:', error)
    throw error
  }
}

export default api