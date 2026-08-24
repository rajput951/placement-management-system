require('dotenv').config()
const mongoose = require('mongoose')
const Admin = require('./models/Admin')

const run = async () => {
  await mongoose.connect(process.env.MONGO_URI)
  const result = await Admin.deleteOne({ email: 'admin@123.com' })
  console.log('Deleted:', result.deletedCount)
  process.exit()
}

run()