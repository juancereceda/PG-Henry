const Movie = require("../models/Movie");

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;
    const movieFound = await Movie.findById(id);
    return res.json(movieFound);
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async (req, res) => {
  let movies;
  let {genre} =req.query
  console.log(genre)
  try {
    if(genre){
    movies = await Movie.find({genre:genre}) // tratar de encontrar la búsqueda tipo like de SQL en mongoDB.
    return res.status(200).json(movies); 
    }
    else {
      movies = await Movie.find();
      return res.json(movies);
    }
  } catch (error) {
    res.status(400).send(error)
  }
}

const postMovie = async (req, res) => {
  try {
    const { start, finish, functionDays, times, price, date, title, poster, description, genre, onBillboard, cast, trailer, rated, runtime, director, IMDb } = req.body;
    console.log('ruta back')
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const shows = [];
    const startArr = start.split('-')
    const finishArr = finish.split('-')
    const startDate = new Date (startArr[0], startArr[1] - 1, startArr[2]);
    const finishDate = new Date (finishArr[0], finishArr[1] - 1, finishArr[2]);
    for ( i = startDate; i <= finishDate; i.setDate(i.getDate() + 1)){
        let day = days[i.getDay()];
        if(functionDays.includes(day)){
          let date = new Date(i)
          let time = times.map(
            e => e = {[e] : [
            {"slot":"A1","ocuppied":false},
            {"slot":"A2","ocuppied":false},
            {"slot":"A3","ocuppied":false},
            {"slot":"A4","ocuppied":false},
            {"slot":"A5","ocuppied":false},
            {"slot":"A6","ocuppied":false},
            {"slot":"A7","ocuppied":false},
            {"slot":"A8","ocuppied":false},
            {"slot":"A9","ocuppied":false},
            {"slot":"A10","ocuppied":false},
            {"slot":"B1","ocuppied":false},
            {"slot":"B2","ocuppied":false},
            {"slot":"B3","ocuppied":false},
            {"slot":"B4","ocuppied":false},
            {"slot":"B5","ocuppied":false},
            {"slot":"B6","ocuppied":false},
            {"slot":"B7","ocuppied":false},
            {"slot":"B8","ocuppied":false},
            {"slot":"B9","ocuppied":false},
            {"slot":"B10","ocuppied":false},
            {"slot":"C1","ocuppied":false},
            {"slot":"C2","ocuppied":false},
            {"slot":"C3","ocuppied":false},
            {"slot":"C4","ocuppied":false},
            {"slot":"C5","ocuppied":false},
            {"slot":"C6","ocuppied":false},
            {"slot":"C7","ocuppied":false},
            {"slot":"C8","ocuppied":false},
            {"slot":"C9","ocuppied":false},
            {"slot":"C10","ocuppied":false}
          ]}
        )
          shows.push({date, day, price, time})
        }
    }

    const movie = await new Movie({
      title,
      date,
      poster,
      description,
      genre,
      onBillboard: false,
      shows,
      cast,
      trailer,
      rated,
      runtime,
      director,
      IMDb
  });
  const movieSaved = await movie.save();
  res.send(movieSaved)
  } catch (error) {
    res.status(400).send(error)
  }
}

const putMovie = async (req, res) => {
  try {
    const { title, date, poster, description, genre, onBillboard, shows, cast, trailer, rated, runtime, director, IMDb } = req.body;
    const newMovie = ({
      title,
      date,
      poster,
      description,
      genre,
      onBillboard,
      shows,
      cast,
      trailer,
      rated,
      runtime,
      director,
      IMDb
  });
  await Movie.findByIdAndUpdate(req.params.id, newMovie);
  console.log(newMovie);
  res.json({status: 'Movie Updated'})
  } catch (error) {
    res.status(400).send(error)
  }
}

const deleteMovie = async (req, res) => {
  try {
    const _id  = req.query
    await Movie.deleteOne( { _id } )
    res.json( {message: `Movie has been deleted`})
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  getMovieById,
  getMovies,
  postMovie,
  putMovie,
  deleteMovie
};
