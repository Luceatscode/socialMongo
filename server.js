const express = require('express');
const app = express();
const db = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;


app.get('/api/thoughts', (req, res) => {
    res.send('get/api/thoughts')
});

app.get('/api/thoughts/:id', (req, res) => {
    res.send('get/api/thoughts/:id')
});

app.post('/api/thoughts', (req, res) => {
    res.send('post/api/thoughts')
});

app.put('/api/thoughts', (req, res) => {
    res.send('put/api/thoughts')
});

app.delete('/api/thoughts', (req, res) => {
    res.send('delete/api/thoughts')
});

app.post('/api/thoughts/:thoughtId/reactions', (req, res) => {
    res.send('post/api/thoughts/:thoughtId/reactions')
});

app.delete('/api/thoughts/:thoughtId/:reactionId', (req, res) => {
    res.send('delete/api/thoughts/:thoughtId/:reactionId')
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});