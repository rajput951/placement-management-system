import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()
  const adminData = JSON.parse(localStorage.getItem('admin') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('admin')
    navigate('/admin/login')
  }

  if (!adminData) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-gray-600">You're not logged in. Please log in to view the admin dashboard.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-3">Admin Profile</h2>
        <p><span className="font-medium">Name:</span> {adminData.name}</p>
        <p><span className="font-medium">Email:</span> {adminData.email}</p>
      </div>

      {/* Placeholder for future admin tools */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold mb-3">Overview</h2>
        <p className="text-gray-600 text-sm">
          Student and company management tools will go here (approve companies, remove listings, view all users, etc).
        </p>
      </div>
    </div>
  )
}

export default AdminDashboard