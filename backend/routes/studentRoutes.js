const express = require('express')
const router = express.Router()
const Student = require('../models/Student')

// GET all students
router.get('/', async (req, res) => {
  try {
    const students = await Student.find().select('-password')
    res.json(students)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST create a new student (register)
router.post('/', async (req, res) => {
  try {
    const newStudent = new Student(req.body)
    const savedStudent = await newStudent.save()
    const { password, ...studentData } = savedStudent.toObject()
    res.status(201).json(studentData)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// POST login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const student = await Student.findOne({ email })

    if (!student) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const isMatch = await student.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const { password: pw, ...studentData } = student.toObject()
    res.json(studentData)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router