const createUser = (req, res) => {
  const { name, email, password } = req.body

  if (name.length < 5) {
    return res.status(400).json({
      ok: false,
      message: 'El nombre debe ser de 5 letras'
    })
  }

  res.json({
    ok: true,
    message: 'signup',
    name,
    email,
    password
  })
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
