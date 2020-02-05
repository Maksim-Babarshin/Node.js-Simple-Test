var User = require('../models/users');
var shortid = require('shortid');
const jwt = require('jsonwebtoken');
var avatarUpload = require('../libs/avatarUpload');

class userController {

    constructor() {

    }

    async getUserList(req, res) {
        let users = await User.find({});
        if (!users) {
            users = [];
        } else {
            users = users.map(user => { return { userID: user.userID, username: user.username, amount: user.amount } })
        }

        res.render('index', {page:'GET USER LIST FROM MONGODB', menuId:'users'});
    }

    
}

module.exports = userController;