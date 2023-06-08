const {
    getAllUsers,
    findUser,
    create,
    update,
    deletedUser,
    updateUserFile,
} = require('../services/UserService');

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getUsers = async (req, res) => {
    try {
        const allUser = await getAllUsers()
        res.status(200).json(allUser);
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const getOneUser = async (req, res) => {
    try {
        const findOneUser = await findUser(req.params.id)
        if(findOneUser === null){
            res.status(404).json({  error: 'user not found'  });
        }else{
            res.status(200).json(findOneUser);
        }
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const createUser = async (req, res) => {
    try {
        await create({name: req.body.name, age: req.body.age});
        res.status(201).json({ user: 'create' });
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateUser = async (req, res) => {
    try {
        await update({name: req.body.name, age: req.body.age, id: req.params.id});
        res.status(200).json({ user: 'user ' + req.params.id + ' updated' });
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const deleteUser = async (req, res) => {
    try {
        await deletedUser(req.params.id);
        res.status(200).json({ user: 'user ' + req.params.id + ' deleted' });
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};

/**
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
const updateFile = async (req, res) => {
    try {
        await updateUserFile({imageName: req.file.path.split('\\').pop(), id: req.params.id});
        res.status(200).json({ user: 'user ' + req.params.id + ' updated image' });
    } catch (ex) {
        res.status(400).json({ error: ex.toString() });
    }
};


module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    updateFile,
};