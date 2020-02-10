const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const apiKey = process.env.API_KEY;

router.get('/popular', (req, res) => {
    const uri = new URL(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const uri = new URL(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
});

router.get('/:id/credits', (req, res) => {
    const { id } = req.params;
    const uri = new URL(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`);
    fetch(uri)
        .then(response => response.json())
        .then(data => res.json(data));
})


module.exports = router;