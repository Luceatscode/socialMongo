const { application } = require('express');
const {User, Thought} = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.json(User);
        }   catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // get one user by id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({_id: req.params.Userid})
            .select('-__v')

            if (!user) {
                return res.status(404).json({message: 'No User found with this id!'});
            }

            res.json(User);
        }   catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // create user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(User);
        }   catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // delete user and associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({_id: req.params.userId});

            if (!user) {
                return res.status(404).json({message: 'No User found with this id!'});
            }

            await Application.deleteMany({ _id: { $in: user.applications } });
            res.json({message: 'User and associated applications deleted!'});
        }   catch (err) {
            res.status(400).json(err);
        }
    },






};