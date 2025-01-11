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
    const [isLoading, setIsLoading] = useState(false);

    // --Handle close button--
    const handleClose = () => {
        setIsClosing( true );
        setPage(1);
    }

    const getMovies = async () => {
        if ( isLoading || page > totalPages ) return;

        try {
            setIsLoading(true);
            const { moviesList, total_pages } = await getCountryMovies( country.ISO_A2_EH , page );
            setMovies( (prevMovies) => [ ...prevMovies, ...moviesList ]);
            setTotalPages( total_pages )
            setIsClosing( false );
            setPage( page + 1 );
            console.log( country.NAME )
            console.log( page )
        } catch ( e ) {
            setError( e.message );
        } finally {
            setIsLoading(false);
        }
    }


    // --Handle Load More Movies --
    const handleLoadMore = () => {
      if ( page <= totalPages && !isLoading ) {
        getMovies( country, page );
      }
    }

    useEffect( () => {
        setMovies([]); 
        setIsClosing(false)
        setPage(1);
        setIsLoading(false);
        setTotalPages(1);
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
                        movies.map(( movie, index ) => (
                            <div className="col-md-2 mb-4" key={`${movie.id}-${ index }`}>
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
