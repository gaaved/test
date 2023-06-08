const express = require('express');
const router = express.Router();
const userController = require("../handlers/userController");
const { upload } = require('../constants');
const {
    UserParamsValidate,
} = require('../middleware/userMiddleware');

router.put('/:id', UserParamsValidate, userController.updateUser)

router.post('/', UserParamsValidate, userController.createUser)

router.get('/', userController.getUsers)

router.get('/:id', userController.getOneUser)

router.delete('/:id', userController.deleteUser)

router.post('/uploadFile/:id', upload.single('avatar'), userController.updateFile)


module.exports = router;