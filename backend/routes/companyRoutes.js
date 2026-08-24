const express = require('express')
const router = express.Router()
const Company = require('../models/Company')

// GET all companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().select('-password')
    res.json(companies)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

// POST create a new company (register)
router.post('/', async (req, res) => {
  try {
    const newCompany = new Company(req.body)
    const savedCompany = await newCompany.save()
    const { password, ...companyData } = savedCompany.toObject()
    res.status(201).json(companyData)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

// POST login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body
    const company = await Company.findOne({ email })

    if (!company) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const isMatch = await company.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const { password: pw, ...companyData } = company.toObject()
    res.json(companyData)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

module.exports = router