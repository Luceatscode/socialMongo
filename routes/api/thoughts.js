const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts');

// get/api/thoughts
router.get('/', getAllThoughts);

// get/api/thoughts/:id
router.get('/:id', getThoughtById);

// post/api/thoughts
router.post('/', createThought);

// put/api/thoughts
router.put('/:id', updateThought);

// delete/api/thoughts
router.delete('/:id', deleteThought);

// post/api/thoughts/:thoughtId/reactions
router.post('/:thoughtId/reactions', addReaction);

// delete/api/thoughts/:thoughtId/:reactionId
router.delete('/:thoughtId/reactions/:reactionId', deleteReaction);

module.exports = router;
