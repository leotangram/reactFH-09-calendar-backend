const { Router } = require('express')
const { check } = require('express-validator')
const { jwtValidator } = require('../middlewares/jwtValidator')

const router = Router()
const {
  createUser,
  loginUser,
  revalidateToken
} = require('../controllers/auth')
const { fieldValidators } = require('../middlewares/fieldValidators')

router.post(
  '/new',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener 6 caracteres').isLength({
      min: 6
    }),
    fieldValidators
  ],
  createUser
)

router.post(
  '/',
  [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener 6 caracteres').isLength({
      min: 6
    }),
    fieldValidators
  ],
  loginUser
)

router.get('/renew', jwtValidator, revalidateToken)

module.exports = router
