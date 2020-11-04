const getEvents = (request, response) => {
  response.json({
    ok: true,
    message: 'getEvents'
  })
}

const createEvent = (request, response) => {
  response.json({
    ok: true,
    message: 'createEvent'
  })
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
