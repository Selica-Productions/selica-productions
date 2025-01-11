import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTVShowDetails } from "../../../service/moviesService";

function TVItem({ addToWatchlist, removeFromWatchlist, watchlist }) {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const showDetails = await getTVShowDetails(id);
        setShow(showDetails);
        setIsInWatchlist(watchlist.some((item) => item.id === showDetails.id));
      } catch (e) {
        setError(e.message);
      }
    };

    fetchShow();
  }, [id, watchlist]);

  const handleToggleWatchlist = () => {
    if (isInWatchlist) {
      removeFromWatchlist(show.id);
      setSuccessMessage("The show was removed from your watchlist 🍿.");
    } else {
      addToWatchlist(show);
      setSuccessMessage("The show was added to your watchlist 🍿.");
    }
    setIsInWatchlist(!isInWatchlist);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  if (!show) {
    return <p>{error || "Loading..."}</p>;
  }

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
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
            fontSize: "20px",
          }}
        >
          <h1 className="mb-4">{show.name}</h1>
          <p>
            <i className="bi bi-calendar-event me-2 m-2"></i>
            <strong>Release Date:</strong>{" "}
            {new Date(show.first_air_date).getFullYear()}
          </p>
          <p>
            <i className="bi bi-translate me-2 m-2"></i>
            <strong>Language:</strong> {show.original_language.toUpperCase()}
          </p>
          <p>
            <i className="bi bi-film me-2 m-2"></i>
            <strong>Overview:</strong>
            <p className="m-3">{show.overview}</p>
          </p>
          <p>
            <i className="bi bi-tags me-2 m-2"></i>
            <strong>Genres:</strong>{" "}
            {show.genres.map((genre) => genre.name).join(", ")}
          </p>
          <button
            onClick={handleToggleWatchlist}
            className={`btn m-4 ${
              isInWatchlist ? "btn-danger" : "btn-primary"
            }`}
          >
            {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
          </button>
          {successMessage && (
            <p className="mt-3 text-success">{successMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default TVItem;
