const { Router } = require('express')
const { check } = require('express-validator')
const { jwtValidator } = require('../middlewares/jwtValidator')
const { fieldValidators } = require('../middlewares/fieldValidators')
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.use(jwtValidator)

router.get('/', getEvents)

router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha final es obligatoria').custom(isDate),
    fieldValidators
  ],
  createEvent
)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router
