var express = require('express');
var router = express.Router();
const movies = require("../data/movies.json");

/* GET home page. */
router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Courseit' }); ==> esto es si quiero devolver la info en formato HTML
  const person = {
    name: 'magui',
    surname: 'cerisola',
    age: 24
  };

  return res.json(person)
});

router.get('/movies', (req,res) => {
  const getMovies = movies.filter( (movie) => {
    return movie.type == 'movie'
  })
  return res.json(getMovies); //filtrar por type
})

router.get("/series", (req, res) => {
  const getSeries = movies.filter((movie) => {
    return movie.type == "serie";
  })
  return res.json(getSeries);
});

router.get('/movies/:id', (req, res) => {  
  const id = req.params.id;
  const getMovie = movies.filter((movie) =>{ // si pogo =id me devuelve en pantalla lo que escriba en la url
    return movie.id == id
  })

  if (getMovie.length > 0) {
    return res.json(getMovie[0]); //[0] para que no devuelva un array 
  } else {
    return res.sendStatus(404);
  }

});

router.post('/contact', (req, res) => {
  const body = req.body;
  const {name, email, consulta} = body;

  if (name && email && consulta) {
    return res.sendStatus(201);
  } else{
    return res.sendStatus(400)
  }
})


module.exports = router;
