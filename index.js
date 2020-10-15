const express = require('express')
require('dotenv').config()

// Create express Server
const app = express()

// Public directory
app.use(express.static('public'))

// Routes
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Events

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
