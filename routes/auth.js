const { Router } = require('express')
const { check } = require('express-validator')
const router = Router()
const {
  createUser,
  loginUser,
  revalidateToken
} = require('../controllers/auth')

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener 6 caracteres').isLength({
      min: 6
    })
  ],
  createUser
)

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener 6 caracteres').isLength({
      min: 6
    })
  ],
  loginUser
)

router.get('/renew', revalidateToken)

module.exports = router
