const bcrypt = require('bcryptjs')
const User = require('../models/User')

const createUser = async (req, res) => {
  const { email, password } = req.body

  try {
    let user = await User.findOne({ email })
    console.log(user)

    if (user)
      return res.status(400).json({
        ok: false,
        message: 'Un usuario ya existe con ese correo'
      })

    user = new User(req.body)
    const salt = bcrypt.genSaltSync()
    user.password = bcrypt.hashSync(password, salt)

    await user.save()

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Por favor hable con el administrador'
    })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ email })
    console.log(user)

    if (!user)
      return res.status(400).json({
        ok: false,
        message: 'El usuario no existe'
      })

    const validPassword = bcrypt.compareSync(password, user.password)

    if (!validPassword)
      return res.status(400).json({
        ok: false,
        message: 'Contraseña incorrecta'
      })

    res.json({
      ok: true,
      uid: user.id,
      name: user.name
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      ok: false,
      message: 'Por favor hable con el administrador'
    })
  }
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
