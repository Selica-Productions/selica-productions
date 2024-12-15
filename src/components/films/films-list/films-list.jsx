import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPopularMovies } from "../../../service/moviesService";

function FilmsList(/*{ filter = {} }*/) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState();
  // const [filteredFilms, setFilteredFilms] = useState([]);

  const getFilms = async() => {
    try{
      const popularMovies = await getPopularMovies();
      setFilms(popularMovies);
    } catch(e){
      console.error(error);
      setError(e.message)
    }
  }

  useEffect(() => {
    getFilms();
  }, []);

  // useEffect(() => {
  //   if (films.length > 0) {
  //     const filmsTitleFilter = films.filter((film) =>
  //       filter.title === undefined ||
  //       film.title.toLocaleLowerCase().includes(filter.title.toLocaleLowerCase())
  //     );
  //     setFilteredFilms(filmsTitleFilter);
  //   }
  // }, [films, filter]);

  return (
    <div className="container mt-5">
      <div className="row">
        {films.map((film) => (
          <div className="col-md-3 mb-4" key={film.id}>
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                className="card-img-top"
                alt={film.title}
              />
              <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">
                  {film.overview.length > 100
                    ? film.overview.substring(0, 100) + "..."
                    : film.overview}
                </p>
                <Link to={`/film/${film.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmsList;
