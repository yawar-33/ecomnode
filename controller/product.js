const Product = require('../models').Products

let message = ''
module.exports = {
  async createProduct(req, res) {
    try {
      const productCollection = await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        units: req.body.units,
        categoryId: req.body.categoryId,
        userId: req.payload,
      })
      if (productCollection) {
        res.status(200).send({ productCollection })
      } else {
        message = 'Something Went Wrong'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async findAllProducts(req, res) {
    try {
      const productCollection = await Product.findAll({
        where: {
          userId: req.payload,
        },
      })
      if (productCollection) {
        res.status(200).send({ productCollection })
      } else {
        message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async findProductById(req, res) {
    try {
      const proCollection = await Product.findOne({
        where: {
          userId: req.payload,
          id: req.params.id,
        },
      })
      if (proCollection) {
        res.status(200).send({ proCollection: proCollection })
      } else {
        message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },

  async updateProduct(req, res) {
    try {
      const proCollection = await Product.findOne({
        where: {
          userId: req.payload,
          id: req.body.id,
        },
      })

      if (proCollection) {
        const updatedCollection = await proCollection.update({
          name: req.body.name,
          description: req.body.description,
          price: req.body.price,
          image: req.body.image,
          units: req.body.units,
          categoryId: req.body.categoryId,
          userId: req.payload,
        })
        if (updatedCollection) {
          res.status(200).send({ updatedCollection: updatedCollection })
        } else {
          message = "Can't Update Record"
          res.status(400).send({ message: message })
        }
      } else {
        message = 'Record Not Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(404).send(error)
    }
  },
}
