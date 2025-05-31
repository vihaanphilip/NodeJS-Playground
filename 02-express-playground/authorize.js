const authorize = (req, res, next) => {
    console.log('authorize')
    next(); // call next middleware or route handler
}

module.exports = authorize;