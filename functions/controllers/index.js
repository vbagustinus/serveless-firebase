const User = require('../models')

const getUsers = (req, res ) => {
  User.find()
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    res.send(err)
  })
}
const createUser = (req, res) => {
  const { name , age } = req.body
  const inputUser = {
    name: name,
    age: age
  }
  User.create(inputUser)
      .then(() => {
        console.log('saved');
        res.send('Success')
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
}

const deleteUser = (req, res) => {
  const { id } = req.params
  User.findByIdAndRemove(id)
      .then(() => {
        res.send(`data ${id} telah di hapuskan`)
      })
      .catch( err => {
        res.send(err)
      })
}

module.exports = {
  createUser,
  getUsers,
  deleteUser
}