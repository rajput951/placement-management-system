import { useNavigate } from 'react-router-dom'
import { jobListings } from '../../services/dummyData'

function StudentDashboard() {
  const navigate = useNavigate()
  const studentData = JSON.parse(localStorage.getItem('student') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('student')
    navigate('/student/login')
  }

  if (!studentData) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-gray-600">You're not logged in. Please log in to view your dashboard.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-lg font-semibold mb-3">My Profile</h2>
        <p><span className="font-medium">Name:</span> {studentData.name}</p>
        <p><span className="font-medium">Email:</span> {studentData.email}</p>
        <p><span className="font-medium">Degree:</span> {studentData.degree || '—'}</p>
        <p><span className="font-medium">College:</span> {studentData.college || '—'}</p>
        <p><span className="font-medium">CGPA:</span> {studentData.cgpa || '—'}</p>
      </div>

      {/* Job Listings — still dummy for now */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Available Job Openings</h2>
        <div className="grid gap-4">
          {jobListings.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <p className="font-semibold">{job.role} — {job.company}</p>
                <p className="text-sm text-gray-600">{job.location} · {job.package}</p>
                <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 self-start sm:self-auto">
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard