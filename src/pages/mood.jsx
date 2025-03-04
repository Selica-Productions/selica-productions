import { useState } from "react";
import { getMoviesByGenre } from "../service/moviesService";
import PageLayout from './../components/layouts/page-layout/page-layout';
import FilmCard from "../components/films/film-card/film-card";
import "/src/styles/animations.css"

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
  
  const handleMoodClick = async (emoji) => {
    const { genreId, name } = emojiGenres[emoji];
    setSelectedMood(name);
    try {
      const movies = await getMoviesByGenre(genreId);
      const limitMovies = movies.slice(0, 18);
      setMovies(limitMovies);
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

  

  return (
    <PageLayout className="py-5">
      <h1 className="appear py-5">How are you feeling today?</h1>
      <div className="appear my-4 text-center" style={{ fontSize: "4rem"}}>
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
          <FilmCard
            key={ movie.id }
            film={ movie }
            className="col-md-2"
            type="movie"
          />
        ))}
      </div>
    </PageLayout>
  );
};

export default MoodPage;
