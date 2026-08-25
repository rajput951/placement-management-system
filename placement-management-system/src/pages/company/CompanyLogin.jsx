import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

function CompanyLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/companies/login`, {
        email,
        password,
      })
      localStorage.setItem('company', JSON.stringify(res.data))
      navigate('/company')
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-10 bg-gray-50">
      <div className="mb-8 text-center">
        <h2 className="text-lg font-bold text-red-700">PMS</h2>
        <p className="text-xs text-gray-500 tracking-wide">PLACEMENT MANAGEMENT SYSTEM</p>
      </div>

      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-xl font-bold text-green-700 text-center mb-6 leading-snug">
          Company Login
        </h1>

        {error && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2 mb-4">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg py-3 mt-2 tracking-wide disabled:opacity-60"
          >
            {loading ? 'Logging in...' : 'LOGIN'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-3">
          Don't have an account?{' '}
          <Link to="/company/register" className="text-green-700 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default CompanyLogin