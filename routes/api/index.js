const router = require('express').Router();
const userRoutes = require('./users');
// const thoughtRoutes = require('./thoughts');
// const reactionRoutes = require('./reactionRoutes');


router.use('/users', userRoutes);
// router.use('/thoughts', thoughtRoutes);

module.exports = router;
