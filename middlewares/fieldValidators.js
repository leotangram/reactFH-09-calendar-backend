const { validationResult } = require('express-validator')

const fieldValidators = (require, response, next) => {
  const errors = validationResult(require)

  if (!errors.isEmpty()) {
    return response.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  next()
}

module.exports = {
  fieldValidators
}
