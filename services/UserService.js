const {
    getUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    updateFile,
} = require('../models/userModel.js');
const fs = require("fs");

/**
 * Get users
 * @returns {Promise<unknown>}
 */
const getAllUsers = async () => getUsers()

/**
 * Find user
 * @param id
 * @returns {Promise<unknown>}
 */
const findUser = async (id) => findOneUser(id)

/**
 * Create user
 * @param data
 * @returns {Promise<unknown>}
 */
const create = async (data) => createUser(data)

/**
 * Update user
 * @param data
 * @returns {Promise<unknown>}
 */
const update = async (data) => updateUser(data)

/**
 * Delete user
 * @param id
 * @returns {Promise<unknown>}
 */
const deletedUser = async (id) => deleteUser(id)

/**
 * Update image and delete old image
 * @param data
 * @returns {Promise<void>}
 */
const updateUserFile = async (data) => {
    const user = await findOneUser(data.id)
    if(user.imageName !== ''){
        fs.unlink('public/images/' + user.imageName, (err) => {
            if (err) console.log(err); // если возникла ошибка
            else console.log("deleted");
        });
    }
   await updateFile(data)
}

module.exports = {
    getAllUsers,
    findUser,
    create,
    update,
    deletedUser,
    updateUserFile,
};