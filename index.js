const express = require('express')
require('dotenv').config()
const { dbConnection } = require('./database/config')

// Create express Server
const app = express()

dbConnection()

// Public directory
app.use(express.static('public'))

// Reading and Parse of body
app.use(express.json())

// Routes
app.use('/api/auth', require('./routes/auth'))
// TODO: CRUD: Events

// Listen
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
