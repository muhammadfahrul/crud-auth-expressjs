const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');

router.get('/', userController.getAll)
router.get('/:userId', userController.getById);
router.post('/register', userController.create);
router.put('/:userId', userController.updateById);
router.delete('/:userId', userController.deleteById);
router.post('/authenticate', userController.authenticate);

module.exports = router;