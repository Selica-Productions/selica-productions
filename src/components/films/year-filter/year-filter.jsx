import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { DropdownFilter } from "../../ui";

const API_URL = "https://api.themoviedb.org/3/discover/movie?primary_release_year=";
const token = import.meta.env.VITE_MOVIE_TOKEN;

function YearFilter({ year }) {
  const [films, setFilms] = useState([]);

  const getAllFilms = () => {
    axios
      .get(`${API_URL}${year}&sort_by=popularity.desc`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setFilms(response.data.results))
      .catch((error) => console.log(error));
  };

  //release_date --> fecha de tipo string YYYY-MM-DD

  useEffect(() => {
    getAllFilms();
  }, []);

  return (
    <div className="container mt-5">
      <DropdownFilter years={[2020, 2021, 2022, 2023]}/>
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

export default YearFilter;
