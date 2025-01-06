import { useEffect, useState } from "react";
import { getUpcomingMovies } from "../../../service/moviesService";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getUpcomingMovies();
        setMovies(moviesData);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovies();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!movies.length) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <hr className="my-4" />
      <h2 className="text-center mb-4">Upcoming Movies</h2>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-poster-container text-center">
            <img
              className="movie-poster img-fluid"
              style={{ maxWidth: "200px", height: "auto" }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-info">
              <h6 className="text-truncate h5" title={movie.title}>
                {movie.title}
              </h6>
              <p className="small p-2 bg-success text-white rounded">
                {new Date(movie.release_date).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMovies;
