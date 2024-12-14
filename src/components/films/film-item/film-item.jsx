import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://api.themoviedb.org/3/movie";
const token = import.meta.env.VITE_MOVIE_TOKEN;

function FilmItem() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);

  const getFilmDetails = () => {
    axios
      .get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setFilm(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getFilmDetails();
  }, [id]);

  if (!film) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt={film.title}
            className="img-fluid rounded"
          />
        </div>
        <div
          className="col-md-8"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2 className="mb-3">{film.title}</h2>
          <p>
            <strong>Year:</strong> {new Date(film.release_date).getFullYear()}
          </p>
          <p>
            <strong>Language:</strong> {film.original_language.toUpperCase()}
          </p>
          <p>
            <strong>Overview:</strong> {film.overview}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {film.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Runtime:</strong> {film.runtime} minutes
          </p>
          <button className="btn btn-primary mt-3">Add to Watchlist</button>
        </div>
      </div>
    </div>
  );
}

export default FilmItem;
