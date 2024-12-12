import { useState, useEffect } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/movie/popular";

const token = import.meta.env.VITE_MOVIE_TOKEN;

function FilmList({ filter = {} }) {
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

  

  return (
    <div>
      {films.map((film) => {
        return (
          <div key={film.id}>
            <h3>{film.id}</h3>
            <h3>{film.title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
