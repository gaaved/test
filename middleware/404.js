const error404 = (req, res, next) => {
    const error = new Error('404: Not Found');
    error.statusCode = 404;
    next(error);
};

module.exports = error404;