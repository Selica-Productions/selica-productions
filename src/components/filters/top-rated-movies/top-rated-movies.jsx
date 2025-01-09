import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../../service/moviesService";
import { Link } from "react-router-dom";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const topRatedMovies = await getTopRatedMovies();
        setMovies(topRatedMovies);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchMovies();
  }, []);

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  const midIndex = Math.ceil(movies.length / 2);
  const column1 = movies.slice(0, midIndex);
  const column2 = movies.slice(midIndex);

  return (
    <div className="top-rated-movies mt-5">
      <hr className="my-4" />
      <h2 className="mb-4">Top Rated Movies</h2>
      <div className="row">
        <div className="col-md-6">
          <table className="table table-hover">
            <tbody>
              {column1.map((movie, index) => (
                <tr key={movie.id}>
                  <td>
                    <Link
                      to={`/film/${movie.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {movie.title}
                    </Link>
                    <span className="ms-3"></span>
                    {index < 3 && (
                      <span className="badge bg-danger text-white">
                        Editor's Pick 🍿
                      </span>
                    )}
                  </td>
                  <td className="text-end">
                    ⭐ {movie.vote_average_percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <table className="table table-hover">
            <tbody>
              {column2.map((movie) => (
                <tr key={movie.id}>
                  <td>
                    <Link
                      to={`/film/${movie.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {movie.title}
                    </Link>
                  </td>
                  <td className="text-end">
                    ⭐ {movie.vote_average_percentage}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
