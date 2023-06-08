const Joi = require('joi');

const userParamsValidate = (data) => {
    const schema = Joi.object().keys({
        id: Joi.number().integer(),
        name: Joi.string().regex(/^[A-Z]+$/).uppercase().required(),
        age: Joi.number().integer().required(),
    });

    return schema.validate(data);
};

module.exports = {
    userParamsValidate
};