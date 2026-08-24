import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 relative">
      <Link to="/" className="text-xl font-bold">
        PMS
      </Link>
      <div className="flex items-center gap-4 sm:gap-6 text-sm">
        <Link to="/company" className="hover:text-green-400">Company</Link>

        {/* Three-dot menu */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hover:text-gray-300 px-2 text-lg leading-none"
          >
            ⋮
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden z-10">
              <Link
                to="/student/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Student Login
              </Link>
              <Link
                to="/admin/login"
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Admin Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar