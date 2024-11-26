const express = require('express');
const path = require('path');
const game = require('./app.js');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

game()

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})