const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('get/api/users')
});

router.get('/:id', (req, res) => {
    res.send('get/api/users/:id')
});

router.post('/', (req, res) => {
    res.send('post/api/users')
});

router.put('/:id', (req, res) => {
    res.send('put/api/users/:id')
});

router.delete('/:id', (req, res) => {
    res.send('delete/api/users/:id')
});

router.post('/:userId/friends/:friendId', (req, res) => {
    res.send('post/api/users/:userId/friends/:friendId')
});

router.delete('/:userId/friends/:friendId', (req, res) => {
    res.send('delete/api/users/:userId/friends/:friendId')
});

module.exports = router;

