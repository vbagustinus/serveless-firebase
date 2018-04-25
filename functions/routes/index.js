const router = require('express').Router()
      User = require('../controllers')

router.get('/', User.getUsers)
router.post('/', User.createUser)
router.delete('/:id', User.deleteUser)

module.exports = router