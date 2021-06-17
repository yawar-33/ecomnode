module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({
      data: 'Ecomm APIS for Test',
    })
  })
}
