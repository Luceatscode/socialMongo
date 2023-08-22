const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../../controllers/user');

// get/api/users
router.get('/', getAllUsers);

// get/api/users/:id
router.get('/:userId', getUserById);

// post/api/users
router.post('/', createUser);

// put/api/users/:id
router.put('/:userId', updateUser);

// delete/api/users/:id
router.delete('/:userId', deleteUser);

// post/api/users/:userId/friends/:friendId
router.post('/:userId/friends/:friendId', addFriend);

// delete/api/users/:userId/friends/:friendId
router.delete('/:userId/friends/:friendId', deleteFriend);

module.exports = router;

