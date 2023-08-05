const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('get/api/thoughts')
});

router.get('/:id', (req, res) => {
    res.json('get/api/thoughts/:id')
});

router.post('/', (req, res) => {
    res.json('post/api/thoughts')
});

router.put('/', (req, res) => {
    res.json('put/api/thoughts')
});

router.delete('/', (req, res) => {
    res.json('delete/api/thoughts')
});

router.post('/:thoughtId/reactions', (req, res) => {
    res.json('post/api/thoughts/:thoughtId/reactions')
});

router.delete('/:thoughtId/:reactionId', (req, res) => {
    res.json('delete/api/thoughts/:thoughtId/:reactionId')
});

module.exports = router;
