import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const roles = [
  {
    id: 'student',
    label: 'Student',
    color: 'blue',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M22 10 12 5 2 10l10 5 10-5Z" />
        <path d="M6 12v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
      </svg>
    ),
  },
  {
    id: 'company',
    label: 'Company',
    color: 'green',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: 'admin',
    label: 'Admin',
    color: 'purple',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
]

const colorClasses = {
  blue: {
    selected: 'border-blue-600 bg-blue-50 text-blue-700',
    unselected: 'border-gray-200 text-gray-500 hover:border-blue-300',
  },
  green: {
    selected: 'border-green-600 bg-green-50 text-green-700',
    unselected: 'border-gray-200 text-gray-500 hover:border-green-300',
  },
  purple: {
    selected: 'border-purple-600 bg-purple-50 text-purple-700',
    unselected: 'border-gray-200 text-gray-500 hover:border-purple-300',
  },
}

function Home() {
  const [role, setRole] = useState('student')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${role}`)
  }

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-4 py-10 bg-gray-50">
      {/* Header / Branding */}
      <div className="mb-8 text-center">
        <h2 className="text-lg font-bold text-red-700">PMS</h2>
        <p className="text-xs text-gray-500 tracking-wide">PLACEMENT MANAGEMENT SYSTEM</p>
      </div>

      {/* Login Card */}
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm border border-gray-100">
        <h1 className="text-xl font-bold text-blue-700 text-center mb-6 leading-snug">
          Login Portal
        </h1>

        {/* Role selector — card style */}
        <p className="text-sm text-gray-600 mb-3">I am a</p>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {roles.map((r) => {
            const isSelected = role === r.id
            const classes = isSelected ? colorClasses[r.color].selected : colorClasses[r.color].unselected
            return (
              <button
                type="button"
                key={r.id}
                onClick={() => setRole(r.id)}
                className={`flex flex-col items-center justify-center gap-2 border-2 rounded-lg py-3 transition-colors ${classes}`}
              >
                {r.icon}
                <span className="text-xs font-medium">{r.label}</span>
              </button>
            )
          })}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="User Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg py-3 mt-2 tracking-wide"
          >
            LOGIN
          </button>
        </form>

        <a href="#" className="block text-center text-blue-700 text-sm underline mt-4">
          Reset Password?
        </a>
      </div>
    </div>
  )
}

export default Home