import { useState, useEffect } from "react";
import {
  getPopularMovies,
  loadPopularFilmPages,
} from "../../../service/moviesService";
import { maxPages } from "../../../utils/constants";
import FilmCard from './../film-card/film-card';

function FilmsList({ search, movies }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); //Current page. Each page has 20 films.
  const [loading, setLoading] = useState(false);
  const [ clickedMovieId, setClickedMovieId ] = useState( null);

  //--Popular films (20 films) -> execute only once--
  const getPopulars = async () => {
    try {
      const popularFilms = await getPopularMovies();
      setFilms(popularFilms);
      setPage(page + 1);
    } catch (e) {
      setError(e.message);
    }
  };

  //--Handle more page (20 films per page)--
  const getMoreFilms = async (page) => {
    if (loading) return;
    try {
      setLoading(true);
      const moreFilms = await loadPopularFilmPages(page);
      setFilms([...films, ...moreFilms]);
      setPage(page + 1);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (page <= maxPages && !loading) {
      getMoreFilms(page);
    }
  };

  // Handle is Clicked (Poster movie)
  const handlePosterClicked = ( id ) => {
    setClickedMovieId( id );
  };

  //--Searched Films--
  const searchedFilms = films.filter(
    (film) => !search || film.title.toLowerCase().includes(search.toLowerCase())
  );

  //Get all films and search by title:
  useEffect(() => {
    const getFilms = async () => {
      if (movies && movies.length > 0) {
        setFilms(movies);
      } else {
        await getPopulars();
      }
    };
    getFilms();
  }, [movies]);

  //Get movies with filter:
  useEffect(() => {
    if (!movies) {
      getPopulars();
    } else {
      setFilms(movies);
    }
  }, [movies]);

  if (films.length === 0) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {searchedFilms.length > 0 ? (
          searchedFilms.map((film) => (
            <FilmCard  
              className="col-md-3" 
              key={ film.id } 
              film = { film } 
              handlePosterClicked={ handlePosterClicked } 
              clickedMovieId = { clickedMovieId } />
          ))
        ) : (
          <p> No films found </p>
        )
        }
      </div>
      <div className="d-flex justify-content-center ">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
}

export default FilmsList;
