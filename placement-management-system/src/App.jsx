import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import StudentDashboard from './pages/student/StudentDashboard'
import StudentLogin from './pages/student/StudentLogin'
import StudentRegister from './pages/student/StudentRegister'
import CompanyDashboard from './pages/company/CompanyDashboard'
import CompanyLogin from './pages/company/CompanyLogin'
import CompanyRegister from './pages/company/CompanyRegister'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/AdminLogin'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/student/register" element={<StudentRegister />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/company/login" element={<CompanyLogin />} />
        <Route path="/company/register" element={<CompanyRegister />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App