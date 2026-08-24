require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('./models/Admin')

const ADMIN_EMAIL = 'admin@pms.com'
const ADMIN_PASSWORD = 'admin1234'

const run = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)

    const existing = await Admin.findOne({ email: ADMIN_EMAIL })
    if (existing) {
      console.log('Admin already exists:', ADMIN_EMAIL)
      process.exit()
    }

    await Admin.create({
      name: 'Super Admin',
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD, // hashed automatically by the pre('save') hook
    })

    console.log('Admin created successfully:', ADMIN_EMAIL, '/', ADMIN_PASSWORD)
    process.exit()
  } catch (err) {
    console.error('Seed failed:', err.message)
    process.exit(1)
  }
}

run()