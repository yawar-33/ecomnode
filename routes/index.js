const userController = require('../controller/user')
const { tokenValidation } = require('../auth/validateToken')
const categoryController = require('../controller/category')
module.exports = (app) => {
  app.get('/api', (req, res) => {
    res.status(200).send({
      data: 'Ecomm APIS for Test',
    })
  })

  app.post('/api/user/register', userController.createUser) // register User
  app.post('/api/user/login', userController.loginUser) // register User
  // create Categ
  app.post(
    '/api/catagory/create',
    tokenValidation,
    categoryController.createCategory,
  )

  app.get(
    '/api/catagory/findAll',
    tokenValidation,
    categoryController.findAllCategories,
  ) // find all Categ
  app.get(
    '/api/catagory/findCatagoryById/:id',
    tokenValidation,
    categoryController.findCategoryById,
  ) //find Categ by ID

  // app.put(
  //   '/api/catagory/updateCatagory',
  //   tokenValidation,
  //   categoryController.updateCategory,
  // ) // update Categ
}
