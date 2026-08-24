const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    default: '',
  },
  college: {
    type: String,
    default: '',
  },
  cgpa: {
    type: Number,
    default: 0,
  },
  resumeLink: {
    type: String,
    default: '',
  },
}, { timestamps: true })


// Hash password before saving
studentSchema.pre('save', async function () {
  if (!this.isModified('password')) return
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

// Method to compare entered password with hashed password
studentSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('Student', studentSchema)