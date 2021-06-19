// const { User } = require('../models/')
const User = require('../models').Users

const { sign } = require('jsonwebtoken')

let message = ''
module.exports = {
  async createUser(req, res) {
    try {
      if (req.body.email === '' || req.body.password === '') {
        message = 'Please Enter Email or Password'
        res.status(400).send({ message: message })
        return
      }
      const userCollection = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      })

      if (userCollection) {
        res.status(200).send({ userCollection: userCollection })
      } else {
        res.status(404).send('Something Went Wrong')
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },


  async loginUser(req, res) {
    try {
        if (req.body.email === "" || req.body.password === "") {
            message = "Please Enter Email or Password"
            res.status(400).send({ message: message });
            return;
        }
        const userCollection = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (userCollection) {
            if (userCollection.password === req.body.password) {
                const jsontoken = sign({ userCollection: userCollection }, "qwe1234", {
                    expiresIn: "1h"
                });
                res.status(200).send({
                    token: jsontoken
                })
            } else {
                message = "Please Enter Valid Password"
                res.status(400).send({ message: message })
            }
        } else {
            message = "User Not Found"
            res.status(400).send({ message: message })
        }
    } catch (error) {
        res.status(404).send(error)
    }
},
}
