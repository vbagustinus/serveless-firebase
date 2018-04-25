const mongoose = require('mongoose')
      Schema = mongoose.Schema

const usersSchema = new Schema({
  uuid: String,
  name: String,
  age: Number
})

module.exports = mongoose.model('users', usersSchema)