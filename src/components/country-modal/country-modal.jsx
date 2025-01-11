import { useEffect, useState } from "react";
import { getCountryMovies } from "../../service/moviesService";
import "./country-modal.css"
import { maxPages } from "/src/utils/constants.js"

function CountryModal( { country }) {
    //-- State Movies --
    const [ movies, setMovies ] = useState( [] );
    const [ isClosing, setIsClosing ] = useState( false );
    const [page, setPage] = useState(1);
    const [ totalPages, setTotalPages ] = useState(1);
    const [ error, setError ] = useState( null );
    const [loading, setLoading] = useState(false);

    // --Handle close button--
    const handleClose = () => {
        setIsClosing( true );
    }

    const getMovies = async () => {
        if ( loading || page > totalPages ) return;

        try {
            setLoading(true);
            const { moviesList, total_pages } = await getCountryMovies( country.ISO_A2_EH , page );
            setMovies( (prevMovies) => [ ...prevMovies, ...moviesList ]);
            setTotalPages( total_pages )
            setIsClosing( false );
            setPage(page + 1);
        } catch ( e ) {
            setError( e.message );
        } finally {
            setLoading(false);
        }
    }


    // --Handle Load More Movies --
    const handleLoadMore = () => {
      if ( page <= maxPages && !loading ) {
        getMovies( country, page );
      }
    }

    useEffect( () => {
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
                    { page < totalPages  && (
                        <div className="d-flex justify-content-center ">
                            <button type="button" className="btn btn-secondary" onClick = { handleLoadMore }>Load More </button>
                        </div>
                    )
                    }
                </div>
            </div>
        </div> 
    </div>
  )
}

export default CountryModal;
