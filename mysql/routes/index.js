const {
  findAllcompanies,
  saveCompanyType,
  getCompanyById,
  updateCompany,
} = require('../services/index')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json({ message: 'ok' })
  })

  app.get('/api/company/findAll', findAllcompanies)

  app.post('/api/company/addType', saveCompanyType)

  app.get('/api/company/edit/:id', getCompanyById)

  app.post('/api/company/update', updateCompany)
}
