
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/movie', (req, res) => {
    const apiKey = process.env.API_KEY;
    const query = req.query.query;
    const uri = new URL(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

module.exports = router;
