import { useEffect, useState } from "react";
import { getTrendingTVShows, getTrailerMovies } from "../../../service/moviesService";
import { Link } from "react-router-dom";
import ReadMoreButton from './../../ui/read-more-button/read-more-button';
import FilmCard from "../../films/film-card/film-card";

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
          <FilmCard 
            key={show.id}
            film={show}
            className="col-md-2"
            type="tv"
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingTV;
