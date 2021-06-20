const jwt = require('jsonwebtoken')

module.exports = {
  async tokenValidation(req, res, next) {
    let token = req.get('authorization')
    if (token) {
      token = token.split(' ')

      jwt.verify(token[1], 'qwe1234', (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: 'Invalid Token',
            err: err,
          })
        } else {
          req.decoded = decoded
          var payload = req.decoded.userCollection.id // requested Payload, for example userID
          req.payload = payload
          next()
        }
      })
    } else {
      return res.status(401).send({
        message: 'Access Denied! Unauthorized User',
      })
    }
  },
}
