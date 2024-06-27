const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const User = require('../model/user');


exports.SignUp = async (req, res) => {

    try {
        let { firstName, lastName, gender, email, password } = req.body

        let find = await User.findOne({ email });

        if (find) {
            throw new Error('Already SignUp! Change Your Email-Id')
        }

        password = await bcrypt.hash(password, 10)

        let userCreate = await User.create({ firstName, lastName, gender, email, password })

        res.status(201).json({
            status: 'Success',
            message: 'User SignUp Successfully',
            data: userCreate
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}

exports.Login = async (req, res) => {

    try {

        let { email, password } = req.body

        let userFind = await User.findOne({ email })

        if (!userFind) {
            throw new Error('Email-Id Not Found')
        }

        let passwordCompare = await bcrypt.compare(password, userFind.password)

        if (!passwordCompare) {
            throw new Error('Invalid Password')
        }

        let token = jwt.sign({ id: userFind._id }, 'UserLogin')

        res.status(200).json({
            status: 'Success',
            message: 'User Login Successfully',
            data: userFind,
            token
        })

    } catch (error) {

        res.status(404).json({
            status: 'Fail',
            message: error.message
        })
    }
}