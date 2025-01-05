import { useEffect, useState } from "react";
import { getCountryMovies } from "../../service/moviesService";
import "./country-modal.css"

function CountryModal( { country }) {
    //-- State Movies --
    const [ movies, setMovies ] = useState( [] );
    const [ error, setError ] = useState( null );

    useEffect( () => {
        const getMovies = async () => {
            try {
                const moviesList = await getCountryMovies( country.ISO_A2 );
                console.log( country.ISO_A2 )
                console.log( moviesList )
                setMovies( moviesList );
            } catch ( e ) {
                setError( e.message );
            }
        }

        getMovies();
    }, [ country ]); 

  return (
    <div className="modal-country-container">
        <div className="content-movies row d-flex mt-3 gap-4">
            <h2> { `Movies from ${ country.NAME }:`} </h2>
            <div className="row">
                { movies.length > 0 ? ( 
                movies.map((film) => (
                <div className="col-md-2 mb-4" key={ film.id }>
                    <div className="card h-100">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${ film.poster_path }`}
                        className="card-img-top"
                        alt={film.title}
                    />
                    <div className="card-body">
                        <h5 className="movie-title">{film.title}</h5>
                        <p className="movie-text">
                        {film.overview.length > 100
                            ? film.overview.substring(0, 100) + "..."
                            : film.overview}
                        </p>
                    </div>
                    </div>
                </div>
                ))
                ) : (<p> No films find </p>)
                }
            </div>
        </div>

    </div>
  )
}

export default CountryModal;