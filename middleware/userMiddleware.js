const {
    userParamsValidate,
} = require('../validators/userValidator');

const UserParamsValidate = (req, res, next) => {
    try {
        const { error } = userParamsValidate(req.body);

        if (error) throw new Error(error.toString());
        return next();
    } catch (e) {
        e.statusCode = 400;
        return next(e);
    }
};

module.exports = {
    UserParamsValidate
};
