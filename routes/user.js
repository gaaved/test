const express = require('express');
const router = express.Router();
const userController = require("../handlers/userController");
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: true })
const methodOverride = require('method-override')
const { upload } = require('../services/fileService');


router.use(methodOverride('_method'));


router.put('/:id', urlencodedParser, userController.updateUser)

router.post('/', urlencodedParser, userController.createUser)

router.get('/', userController.getUsers)

router.get('/:id', userController.getOneUser)

router.delete('/:id', userController.deleteUser)

router.post('/uploadFile/:id', upload.single('avatar'), userController.updateFile)


module.exports = router;