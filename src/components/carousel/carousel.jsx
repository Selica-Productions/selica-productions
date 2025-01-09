import { useEffect, useState } from 'react';
import { getUpcomingMovies } from '../../service/moviesService';
import "./carousel.css";

function Carousel( { page }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); //Start 0 index

  //--Get upcoming films--
  const getUpcomingFilms = async () => {
    try {
      const upcomingFilms = await getUpcomingMovies( page );
      setFilms(upcomingFilms);
    } catch (e) {
      setError(e.message);
    }
  };


  useEffect(() => {
    getUpcomingFilms();
  }, []);

  /* --Auto Slide:-- */
  useEffect(() => {
    // Set interval ( auto image slide each 3 seconds )
    const interval = setInterval(() => {
      setActiveIndex(( index ) => index === films.length -1 ? 0 : index +1 )
    }, 6000);

    // Clear the interval when the component unmount:
    return () => clearInterval( interval );
  }, [ activeIndex, films.length ])

  //--Handle Next and Previous Buttons--
  const handlePrevious = () => {
    setActiveIndex((index) => (index > 0 ? index - 1 : films.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((index) => (index === films.length - 1 ? 0 : index + 1));
  };


  //--Show error:--
  if (error) {
    return <p> Could not show upcoming movies. Please try again later. 😔🎬</p>;
  }

  return (
    <div className="carousel-container m-0 p-0">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          { films.map((_, index) => (
            <button
              key={ index }
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={ index }
              className={ index === activeIndex ? "active" : "" }
              aria-current={ index === activeIndex ? "true" : "false" }
              aria-label={`Slide ${index + 1}`}
              onClick={() => setActiveIndex( index )}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {films.map((film, index) => (
            <div key={ film.id } className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <img src={`https://image.tmdb.org/t/p/w500${film.poster_path}`} className="d-block w-100" alt={ film.title } />
              <div className="carousel-caption d-none d-md-block">
                <h5>{ film.title }</h5>
                <p>{ film.overview.length > 80 ? film.overview.substring(0, 80) + "..." : film.overview }</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={ handlePrevious }>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={ handleNext }>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;