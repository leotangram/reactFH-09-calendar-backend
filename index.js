const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express()

// Public directory
app.use(express.static('public'))

// Routes
// app.get('/', (request, response) => {
//   response.json({
//     ok: true
//   })
// })

// Escuchar
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
