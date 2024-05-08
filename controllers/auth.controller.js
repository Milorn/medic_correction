const User = require('../models/User');

exports.loginPage = (req, res) => {
    res.render('auth/login');
}

exports.login = async(req, res) => {
    const user = await User.findOne({email: req.body.email, password: req.body.password});

    if(user) {
        req.session.userId = user._id;
        res.redirect('/products');
    } else {
        res.redirect('/login');
    }
};