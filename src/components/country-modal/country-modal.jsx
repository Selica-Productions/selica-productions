import { useEffect, useState } from "react";
import { getCountryMovies } from "../../service/moviesService";
import "./country-modal.css"

function CountryModal( { country }) {
    //-- State Movies --
    const [ movies, setMovies ] = useState( [] );
    const [ isClosing, setIsClosing ] = useState( false );
    const [ error, setError ] = useState( null );

    // Handle close button
    const handleClose = () => {
        setIsClosing( true );
    }

    useEffect( () => {
        const getMovies = async () => {
            try {
                const moviesList = await getCountryMovies( country.ISO_A2_EH );
                console.log( country.ISO_A2_EH )
                console.log( moviesList )
                setMovies( moviesList );
                setIsClosing( false );
            } catch ( e ) {
                setError( e.message );
            }
        }

        getMovies();
    }, [ country ]); 

  return (
    <div className={`behind-modal ${ isClosing ? "close" : ""}`}>
        <div className="modal-country-container">
            <div className="content-movies row d-flex mt-3 gap-4">
            <div>
                    <button className="close-style" onClick={ handleClose }>
                        <i className="fa fa-window-close" aria-hidden="true"></i>
                    </button>
                </div>
                <h2> { `Movies from ${ country.NAME }:`} </h2>
                <div className="row">
                    { movies.length > 0 ? ( 
                    movies.map(( movie ) => (
                    <div className="col-md-2 mb-4" key={ movie.id }>
                        <div className="card h-100">
                        <img
                            src={ `https://image.tmdb.org/t/p/w500${ movie.poster_path }` }
                            className="card-img-top"
                            alt={ movie.title }
                        />
                        <div className="card-body">
                            <h5 className="movie-title">
                                { movie.title.length > 20 
                                    ? `${ movie.title.substring(0, 20) }...`
                                    : movie.title
                                }
                            </h5>
                            <p className="movie-text">
                            { movie.overview
                                ? `${ movie.overview.substring(0, 50)}...`
                                : "No description available." }
                            </p>
                        </div>
                        </div>
                    </div>
                    ))
                    ) : (<p> No movies find </p>)
                    }
                </div>
            </div>
        </div> 
    </div>
  )
}

export default CountryModal;