const Category = require('../models').Categories

let message = ''
module.exports = {
  // create New Category
  async createCategory(req, res) {
    let userId = ''

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
}
