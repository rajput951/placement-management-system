const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const studentRoutes = require('./routes/studentRoutes')
const companyRoutes = require('./routes/companyRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/students', studentRoutes)
app.use('/api/companies', companyRoutes)
app.use('/api/admins', adminRoutes)

// Test route
app.get('/', (req, res) => {
  res.send('Placement Management System API is running')
})

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Start server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})