const functions = require('firebase-functions')
      app = require('express')()
      mongoose = require('mongoose')
      bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//ROUTE
const index = require('./routes')

mongoose.Promise = global.Promise;
mongoose.connection.openUri('mongodb://vbagustinus:anakjalanan@cluster0-shard-00-00-hibsb.mongodb.net:27017,cluster0-shard-00-01-hibsb.mongodb.net:27017,cluster0-shard-00-02-hibsb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin', (err) => {
  if (err) console.log('database not connected ', err)
  else console.log('database connected')
})
app.use('/', index)
// exports.serverless = functions.https.onRequest(app)
exports.api = functions.https.onRequest((req, res) => {
      if(!req.path) {
            req.url = `/${req.url}`
      }
      return app(req, res)
})

// module.exports = {
//       appFall
//   }
