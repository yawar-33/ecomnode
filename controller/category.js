const Category = require('../models').Categories

let message = ''
module.exports = {
  // create New Category
  async createCategory(req, res) {
    try {
      const categCollection = await Category.create({
        name: req.body.name,
        description: req.body.description,
        userId: req.payload,
      })
      if (categCollection) {
        res.status(200).send({ categCollection: categCollection })
      } else {
        message = 'Something Went Wrong'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // find All Categories
  async findAllCategories(req, res) {
    try {
      const categCollection = await Category.findAll({
        where: {
          userId: req.payload,
        },
      })
      if (categCollection) {
        res.status(200).send({ categCollection })
      } else {
        message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // find Category By id
  async findCategoryById(req, res) {
    try {
      const categCollection = await Category.findOne({
        where: {
          userId: req.payload,
          id: req.params.id,
        },
      })
      if (categCollection) {
        res.status(200).send({ categCollection: categCollection })
      } else {
        message = 'No Record Found'
        res.status(400).send({ message: message })
      }
    } catch (error) {
      res.status(500).send(error)
    }
  },

  // update Category
  // async updateCategory(req, res) {
  //   try {
  //     const categCollection = await Category.findOne({
  //       where: {
  //         userId: userId,
  //         id: req.body.id,
  //       },
  //     })

  //     if (categCollection) {
  //       const updatedCollection = await categCollection.update({
  //         name: req.body.name,
  //         description: req.body.description,
  //         userId: userId,
  //       })
  //       if (updatedCollection) {
  //         res.status(200).send({ updatedCollection: updatedCollection })
  //       } else {
  //         message = "Can't Update Record"
  //         res.status(400).send({ message: message })
  //       }
  //     } else {
  //       message = 'Record Not Found'
  //       res.status(400).send({ message: message })
  //     }
  //   } catch (error) {
  //     res.status(404).send(error)
  //   }
  // },
}
