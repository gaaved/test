
const errorHandler = async (error, req, res, next) => {
        const { message, status = 500, statusCode } = error;
        if (statusCode === 404) {
                console.log(message);
        } else if (statusCode === 401) {
                console.log(message);
        } else {
                console.log(error);
        }

        return next();
}

module.exports = errorHandler;