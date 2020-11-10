const Event = require('../models/Event')

const getEvents = async (request, response) => {
  const events = await Event.find().populate('user', 'name')

  response.json({
    ok: true,
    events
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

const updateEvent = async (request, response) => {
  const eventId = request.params.id
  const uid = request.uid

  try {
    const event = await Event.findById(eventId)

    if (!event) {
      return response.status(404).json({
        ok: false,
        message: 'El evento no existe'
      })
    }

    if (event.user.toString() !== uid) {
      return response.status(401).json({
        ok: false,
        message: 'No tiene priviliegios para editar este evento'
      })
    }

    const newEvent = {
      ...request.body,
      user: uid
    }

    const updatedEvent = await Event.findByIdAndUpdate(eventId, newEvent, {
      new: true
    })

    response.json({
      ok: true,
      event: updatedEvent
    })
  } catch (error) {
    console.log(error)
    response.status(500).json({
      ok: false,
      message: 'Hable con el administrador'
    })
  }
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
