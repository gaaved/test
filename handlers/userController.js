const {
    getAllUsers,
    findUser,
    create,
    update,
    deletedUser,
    updateUserFile,
} = require('../services/UserService');
const express = require('express');
/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUsers = async (req, res) => {
    res.render('users.ejs', {users: await getAllUsers()})
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getOneUser = async (req, res) => {
    if(await findUser(req.params.id) === null){
        res.status(404).json({ error: 'user not found' });
    }

    res.render('users.ejs', {users: [await findUser(req.params.id)]})
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createUser = async (req, res) => {
    await create({name: req.body.name, age: req.body.age});
    res.redirect('/users');
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateUser = async (req, res) => {
    await update({name: req.body.name, age: req.body.age, id: req.params.id});
    res.redirect('/users');
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteUser = async (req, res) => {
    await deletedUser(req.params.id);
    res.redirect('/users');
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateFile = async (req, res) => {
    await updateUserFile({imageName: req.file.path.split('\\').pop(), id: req.params.id});
    res.redirect('/users');
};


module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    updateFile,
};