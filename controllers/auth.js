const { validationResult } = require('express-validator')
const User = require('../models/User')

const createUser = async (req, res) => {
  // const { name, email, password } = req.body

  const user = new User(req.body)
  try {
    await user.save()
    res.json({
      ok: true,
      message: 'signup'
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Por favor hable con el administrador'
    })
  }
}

const loginUser = (req, res) => {
  const { email, password } = req.body

  res.json({
    ok: true,
    message: 'login',
    email,
    password
  })
}

const revalidateToken = (req, res) => {
  res.json({
    ok: true,
    message: 'renew'
  })
}

module.exports = {
  createUser,
  loginUser,
  revalidateToken
}
