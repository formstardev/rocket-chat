const guestRoutes = {
    'POST /register': 'AuthController.register',
    'POST /login': 'AuthController.login',
    'POST /validate:' : 'AuthController.validate'
}

module.exports = guestRoutes