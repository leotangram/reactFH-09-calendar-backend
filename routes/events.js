const { Router } = require('express')
const { jwtValidator } = require('../middlewares/jwtValidator')
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
} = require('../controllers/events')

const router = Router()

router.use(jwtValidator)

router.get('/', getEvents)

router.post('/', createEvent)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router
