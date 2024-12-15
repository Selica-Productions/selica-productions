import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/movie/popular";
const token = import.meta.env.VITE_MOVIE_TOKEN;

function FilmsList(/*{ filter = {} }*/) {
  const [films, setFilms] = useState([]);
  // const [filteredFilms, setFilteredFilms] = useState([]);

  const getAllFilms = () => {
    axios
      .get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setFilms(response.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllFilms();
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
