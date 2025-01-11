import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getPopularMovies,
  loadPopularFilmPages,
} from "../../../service/moviesService";
import { maxPages } from "../../../utils/constants";

function FilmsList({ search, movies }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1); //Current page. Each page has 20 films.
  const [loading, setLoading] = useState(false);

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
          ))
        ) : (
          <p> No films find </p>
        )}
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
