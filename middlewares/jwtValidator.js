const { request } = require('express')

const jwt = require('jsonwebtoken')

const jwtValidator = (request, response, next) => {
  // x-token Headers
  const token = request.header('x-token')

  if (!token)
    return response.status(401).json({
      ok: false,
      message: 'No hay token en la petición'
    })

  try {
    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED)

    request.uid = uid
    request.name = name
  } catch (error) {
    console.log(error)
    return response.status(401).json({
      ok: false,
      message: 'Token no válido'
    })
  }

  next()
}

module.exports = {
  jwtValidator
}
