import { useNavigate } from 'react-router-dom'
import { companyJobs } from '../../services/dummyData'

function CompanyDashboard() {
  const navigate = useNavigate()
  const companyData = JSON.parse(localStorage.getItem('company') || 'null')

  const handleLogout = () => {
    localStorage.removeItem('company')
    navigate('/company/login')
  }

  if (!companyData) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <p className="text-gray-600">You're not logged in. Please log in to view your dashboard.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-2">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>
        <div className="flex gap-3">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            + Post New Job
          </button>
          <button
            onClick={handleLogout}
            className="text-sm bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow p-6 my-6">
        <h2 className="text-lg font-semibold mb-3">Company Profile</h2>
        <p><span className="font-medium">Name:</span> {companyData.companyName}</p>
        <p><span className="font-medium">Email:</span> {companyData.email}</p>
        <p><span className="font-medium">Industry:</span> {companyData.industry || '—'}</p>
        <p><span className="font-medium">Website:</span> {companyData.website || '—'}</p>
        <p><span className="font-medium">Contact Person:</span> {companyData.contactPerson || '—'}</p>
      </div>

      <h2 className="text-lg font-semibold mb-4">Your Job Postings</h2>
      <div className="grid gap-4">
        {companyJobs.map((job) => (
          <div key={job.id} className="bg-white rounded-lg shadow p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div>
              <p className="font-semibold">{job.role}</p>
              <p className="text-sm text-gray-600">Posted on {job.postedOn}</p>
              <p className="text-sm text-gray-500">{job.applicants} applicants</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs px-3 py-1 rounded-full ${
                job.status === "Open" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {job.status}
              </span>
              <button className="text-blue-600 hover:underline text-sm">
                View Applicants
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyDashboard