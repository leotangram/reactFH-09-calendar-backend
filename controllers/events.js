const Event = require('../models/Event')

const getEvents = (request, response) => {
  response.json({
    ok: true,
    message: 'getEvents'
  })
}

const createEvent = async (request, response) => {
  const event = new Event(request.body)

  try {
    event.user = request.uid

    const savedEvent = await event.save()

    response.json({ ok: true, event: savedEvent })
  } catch (error) {
    console.log(error)

    response.status(500).json({
      ok: false,
      message: 'Hable con el administrador'
    })
  }
}

const updateEvent = (request, response) => {
  response.json({
    ok: true,
    message: 'updateEvent'
  })
}

const deleteEvent = (request, response) => {
  response.json({
    ok: true,
    message: 'deleteEvent'
  })
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}
