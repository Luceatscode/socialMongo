const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // get one user by id
    async getUserById(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v')

            if (!user) {
                return res.status(404).json({ message: 'No User found with this id!' });
            }

            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // create user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }
    },

    // update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true });
            res.json(user);
        } catch (err) {
            console.log(err);
            res.status(400).json(err);
        }

    },

    // delete user and associated thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                return res.status(404).json({ message: 'No User found with this id!' });
            }
            res.json({ message: 'User and associated applications deleted!' });
        } catch (err) {
            res.status(400).json(err);
        }
    },


    // add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No User found with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    // remove friend
    async deleteFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No User found with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    }
};
