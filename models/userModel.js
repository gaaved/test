const dataBase = require('../database/database')

/**
 * Get User from DB
 * @returns {Promise<unknown>}
 */
function getUsers() {
    return new Promise((resolve, reject) => {
        return   dataBase.all("SELECT * FROM users", (err, row) => {
            const i = row ?? null;
            resolve(i)
        });
    })
}

/**
 * Get one user from DB
 * @param id
 * @returns {Promise<unknown>}
 */
function findOneUser(id) {
    return new Promise((resolve, reject) => {
        return   dataBase.get("SELECT * FROM users WHERE id = ?", id, (err, row) => {
            const i = row ?? null;
            resolve(i)
        });
    })
}

/**
 * Create users in DB
 * @param data
 * @returns {Promise<unknown>}
 */
function createUser(data) {
    return new Promise((resolve, reject) => {
        return   dataBase.run("INSERT INTO users(name, age, imageName) VALUES (?, ?, '')",
            data.name, data.age, (err, row) => {
            const i = row ?? null;
            resolve(i)
        });
    })
}

/**
 * Update user in DB
 * @param data
 * @returns {Promise<unknown>}
 */
function updateUser(data) {
    return new Promise((resolve, reject) => {
        return   dataBase.run("UPDATE users SET name = ?, age = ? WHERE id = ?",
            data.name, data.age, data.id, (err, row) => {
                const i = row ?? null;
                resolve(i)
            });
    })
}

/**
 * Delete user from DB
 * @param id
 * @returns {Promise<unknown>}
 */
function deleteUser(id) {
    return new Promise((resolve, reject) => {
        return   dataBase.run("DELETE FROM users WHERE id = ?", id, (err, row) => {
                const i = row ?? null;
                resolve(i)
            });
    })
}

/**
 * Update image and delete old image in DB
 * @param data
 * @returns {Promise<unknown>}
 */
function updateFile(data) {
    return new Promise((resolve, reject) => {
        return   dataBase.run("UPDATE users SET imageName = ? WHERE id = ?",
            data.imageName, data.id, (err, row) => {
                const i = row ?? null;
                resolve(i)
            });
    })
}

module.exports = {
    getUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    updateFile,
};