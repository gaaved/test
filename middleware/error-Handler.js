
const errorHandler = async (error, req, res, next) => {
        console.log(error.message);
        return next();
}

module.exports = errorHandler;