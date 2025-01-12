import { useEffect, useState } from "react";
import { getCountryMovies } from "../../service/moviesService";
import "./country-modal.css"
import FilmCard from "../films/film-card/film-card";

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
                        movies.map(( movie ) => (
                            <FilmCard 
                                key={ movie.id }
                                film={ movie }
                                className="col-md-3"
                            />
                    ))
                    ) : (<p> No movies find </p>)
                    }
                    { page < totalPages  && (
                        <div className="d-flex justify-content-center mb-4 ">
                            <button type="button" className="btn btn-secondary" onClick = { handleLoadMore }> Load More </button>
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
