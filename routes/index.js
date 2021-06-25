const userController = require('../controller/user')
const { tokenValidation } = require('../auth/validateToken')
const categoryController = require('../controller/category')
const productController = require('../controller/product')
const customerController = require('../controller/customer')
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

  app.put(
    '/api/catagory/updateCatagory',
    tokenValidation,
    categoryController.updateCategory,
  ) // update Categ


  // create Prod
  app.post(
    '/api/product/create',
    tokenValidation,
    productController.createProduct,
  )
  app.get(
    '/api/product/findAll',
    tokenValidation,
    productController.findAllProducts,
  ) // find all Products

  app.get(
    '/api/product/findProductById/:id',
    tokenValidation,
    productController.findProductById,
  ) //find Product by ID

  app.put(
    '/api/product/updateProduct',
    tokenValidation,
    productController.updateProduct,
  ) // update Product


  ////////////////////////////////// Customer Routes /api/customer /////////////////////////////////////////////////
// create Prod
app.post(
  '/api/customer/create',
  tokenValidation,
  customerController.createCustomer,
)

app.get(
  '/api/customer/findAll',
  tokenValidation,
  customerController.findAllCustomers,
) // find all Customers
}
