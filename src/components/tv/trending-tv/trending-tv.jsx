import { useEffect, useState } from "react";
import { getTrendingTVShows } from "../../../service/moviesService";
import { Link } from "react-router-dom";

const TrendingTV = () => {
  const [trendingShows, setTrendingShows] = useState([]);

  useEffect(() => {
    const fetchTrendingTV = async () => {
      try {
        const shows = await getTrendingTVShows();
        setTrendingShows(shows);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchTrendingTV();
  }, []);

  return (
    <div className="container mt-5">
      <hr className="my-4" />
      <h2 className="mb-4">🎥📺 Trending TV & Streaming Shows</h2>
      <div className="row">
        {trendingShows.map((show) => (
          <div className="col-md-2 mb-3" key={show.id}>
            <div className="card border-0 shadow-sm h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                className="card-img-top"
                alt={show.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title text-truncate">{show.name}</h5>
                <Link to={`/tv/${show.id}`} className="btn btn-primary mt-1">
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTV;
