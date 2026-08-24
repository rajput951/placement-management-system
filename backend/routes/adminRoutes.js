const express = require('express')
const router = express.Router()
const Admin = require('../models/Admin')

// POST login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const admin = await Admin.findOne({ email })

    if (!admin) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const isMatch = await admin.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const { password: pw, ...adminData } = admin.toObject()
    res.json(adminData)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router