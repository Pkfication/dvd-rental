var express = require('express');
var router = express.Router();
var film = require('../controllers/film.controller');

/* GET users listing. */
router.get('/', film.getFilms);

// Get a particular user
router.get('/:id', film.getFilmById);

module.exports = router;
