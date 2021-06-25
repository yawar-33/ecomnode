const Customer = require('../models').Customers

let message = ''
module.exports = {
  async createCustomer(req, res) {
    try {
      const customerCollection = await Customer.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
        userId: req.payload,
      })
      if (customerCollection) {
        res.status(200).send({ customerCollection })
      } else {
        message = 'Something Went Wrong'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async findAllCustomers(req, res) {
    try {
      const customerCollection = await Customer.findAll({
        where: {
          userId: req.payload,
        },
      })
      if (customerCollection) {
        res.status(200).send({ customerCollection })
      } else {
        message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },
}
