const createUser = (req, res) => {
  res.json({
    ok: true,
    message: 'signup'
  })
}

const loginUser = (req, res) => {
  res.json({
    ok: true,
    message: 'login'
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
