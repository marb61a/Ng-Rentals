const User = require('../models/user');
const { normalizeErrors } = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getUser = (req, res) => {
    const requestedUserId = req.params.id;
    const user = res.locals.user;

    if(requestedUserId === user.id) {

    } else {
        
    }
}