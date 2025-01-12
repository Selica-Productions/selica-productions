import { Link } from "react-router-dom";
import ReadMoreButton from "../../ui/read-more-button/read-more-button";
import { getPosterSrc } from "../../../utils/constants";
import VideoModal from "../../video-modal/video-modal";
import { useState } from "react";

function FilmCard({ film, className="" }) {
  const [ isClicked, setIsClicked ] = useState( false );

  // Handle poster clicked
  const handlePosterClicked = ()  => {
      setIsClicked( true );
  };

  return (
    <div className={`${className} mb-4`} key={film.id}>
        <div className="card h-100">
            <div className="img-container" onClick={ () => handlePosterClicked() }>
                <img
                    src= { getPosterSrc( film.poster_path ) }
                    className="card-img-top poster-img"
                    alt={film.title}
                  />
                <div className="play-icon">
                  <i className="fa-regular fa-circle-play"></i>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{film.title}</h5>
                <p className="card-text">
                { film.overview.length > 100
                    ? film.overview.substring(0, 100) + "..."
                    : film.overview}
                </p>
                <Link to={`/film/${film.id}`} >
                    <ReadMoreButton text= {"Read More"} />
                </Link>
            </div>
            { isClicked  && <VideoModal movieId={ film.id } />}
        </div>
    </div>
  )
}

export default FilmCard;