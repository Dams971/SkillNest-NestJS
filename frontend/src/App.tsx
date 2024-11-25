import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'
import { Welcome } from './components/Welcome'

export default function App() {
  const [message, setMessage] = useState('Loading...')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000')
        setMessage(response.data)
      } catch (err) {
        const error = err as AxiosError
        setMessage(`Error connecting to backend: ${error.message}`)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Welcome message={message} />
    </div>
  )
}