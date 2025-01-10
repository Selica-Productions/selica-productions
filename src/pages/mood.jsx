import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMoviesByGenre } from "../service/moviesService";
import PageLayout from './../components/layouts/page-layout/page-layout';

const emojiGenres = {
  "😀": { genreId: 35, name: "Comedy" },
  "😭": { genreId: 18, name: "Drama" },
  "👻": { genreId: 27, name: "Horror" },
  "❤️": { genreId: 10749, name: "Romance" },
  "🚀": { genreId: 878, name: "Science Fiction" },
  "⚔️": { genreId: 28, name: "Action" },
};

const MoodPage = ({ search }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [selectedMood, setSelectedMood] = useState("");
  const navigate = useNavigate();

  const handleMoodClick = async (emoji) => {
    const { genreId, name } = emojiGenres[emoji];
    setSelectedMood(name);
    try {
      const movies = await getMoviesByGenre(genreId);
      setMovies(movies);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    }
  };

  //--Search Movies--
  const searchedMovies = movies.filter(
    (film) => !search || film.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleCardClick = (movieId) => {
    navigate(`/film/${movieId}`);
  };

  return (
    <PageLayout className="py-5">
      <h1 className="py-5">How are you feeling today?</h1>
      <div className="my-4 text-center" style={{ fontSize: "4rem"}}>
        {Object.keys(emojiGenres).map((emoji) => (
          <span
            key={emoji}
            className="mx-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleMoodClick(emoji)}
          >
            {emoji}
          </span>
        ))}
      </div>
      {selectedMood && (
        <h2 className="py-5">Movies for your mood: {selectedMood}</h2>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="row">
        {searchedMovies.map((movie) => (
          <div className="col-md-2 mb-4" key={movie.id}>
            <div
              className="card h-100"
              style={{ cursor: "pointer" }}
              onClick={() => handleCardClick(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview
                    ? `${movie.overview.substring(0, 50)}...`
                    : "No description available."}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default MoodPage;
