var dbConfig = require('../config/db');
let pool = dbConfig.pool;

const getFilms = (request, response) => {
  pool.query('SELECT * FROM film', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

const getFilmById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('SELECT * FROM film WHERE film_id = $1',[id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  })
}

module.exports = {
  getFilms,
  getFilmById
}