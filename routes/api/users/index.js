const router = require('express').Router();


router.get('/', (req, res) => {
    res.json('get/api/users')
});

router.get('/:id', (req, res) => {
    res.json('get/api/users/:id')
});

router.post('/', (req, res) => {
    res.json('post/api/users')
});

router.put('/:id', (req, res) => {
    res.json('put/api/users/:id')
});

router.delete('/:id', (req, res) => {
    res.json('delete/api/users/:id')
});

router.post('/:userId/friends/:friendId', (req, res) => {
    res.json('post/api/users/:userId/friends/:friendId')
});

router.delete('/:userId/friends/:friendId', (req, res) => {
    res.json('delete/api/users/:userId/friends/:friendId')
});

module.exports = router;

