import { useEffect, useState } from "react";
import { getTrailerMovies } from "../../service/moviesService";
import "./video-modal.css";

function VideoModal({ type, id } ) {
    const [ trailer, setTrailer ] = useState([]); 
    const [ isClosing, setIsClosing ] = useState( false );

    // --Handle close button--
    const handleClose = () => {
        setIsClosing( true );
    }

    useEffect(() => {
        const fetchTrailer = async () => {
          try {
            const trailerMovies = await getTrailerMovies( type, id );
            setTrailer( trailerMovies );
            if (trailerMovies && trailerMovies.length > 0) {
                setTrailer( trailerMovies[0].key );  
              }
          } catch (error) {
            console.error(error.message);
          }
        };
    
        fetchTrailer();
      }, [ id ]);

  return (
    <div className={`behind-modal ${ isClosing ? "close" : ""}`}>
            <div className="modal-video-container d-flex justify-content-center text-center">
                <div className="content-video row d-flex mt-3 gap-4">
                    <div>
                        <button className="close-style" onClick={ handleClose }>
                            <i className="fa fa-window-close" aria-hidden="true"></i>
                        </button>
                    </div>
                    <h2> Trailer </h2>
                    <div className="video-container">
                    <div>
                        { trailer && !isClosing ? (
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${ trailer }`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Movie Trailer"
                        ></iframe>
                        ) : (
                        <p> Trailer not found...</p>
                        )}
                    </div>
                    </div>
                </div>
            </div> 
        </div>
  );
}

export default VideoModal;