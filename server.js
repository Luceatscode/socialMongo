const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    res.send('Hello World!')
  });

  app.get('/api/users/:id', (req, res) => {
    res.send('Hello World!')
  });

app.post('/api/users', (req, res) => {
    res.send('Hello World!')
});

app.put('/api/users/:id', (req, res) => {
    res.send('Hello World!')
});

app.delete('/api/users/:id', (req, res) => {
    res.send('Hello World!')
});

app.post('/api/users/:userId/friends/:friendId', (req, res) => {
    res.send('Hello World!')
});

app.delete('/api/users/:userId/friends/:friendId', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/thoughts', (req, res) => {
    res.send('Hello World!')
});

app.get('/api/thoughts/:id', (req, res) => {
    res.send('Hello World!')
});

app.post('/api/thoughts', (req, res) => {
    res.send('Hello World!')
});

app.put('/api/thoughts', (req, res) => {
    res.send('Hello World!')
});

app.delete('/api/thoughts', (req, res) => {
    res.send('Hello World!')
});

app.post('/api/thoughts/:thoughtId/reactions', (req, res) => {
    res.send('Hello World!')
});

app.delete('/api/thoughts/:thoughtId/:reactionId', (req, res) => {
    res.send('Hello World!')
});













app.listen(3000, () => {
    console.log('server started');
});

