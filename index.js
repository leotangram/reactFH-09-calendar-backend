const express = require('express')

// Crear el servidor de express
const app = express()

// Routes
app.get('/', (request, response) => {
  response.json({
    ok: true
  })
})

// Escuchar
app.listen(4000, () => {
  console.log(`Servidor corriendo en puerto ${4000}`)
})
