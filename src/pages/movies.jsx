import { PageLayout } from "../components/layouts";
import FilterDropdown from "../components/filters/filter-dropdown/filter-dropdown";
import FilmsList from '../components/films/films-list/films-list';
import { YEARS, GENRES } from "../utils/constants"
import { useState } from "react";
import { getMoviesByGenre } from "../service/moviesService";

function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);

  //--Films by Genre--
  const onSelectedGenre = async ( genre ) => {
    try {
      const films = await getMoviesByGenre( genre.id );
      setFilms( films );
      
    } catch (err) {
      setError(err.message);
      console.log( error );
      setFilms([]);
    }
  };


  return (
    <PageLayout>
      <div className="d-flex gap-3">
        {/* <FilterDropdown type="Year" options={ YEARS } onChange={( value ) => onSelectedFilter( "Year", value )} /> */}
        <FilterDropdown type="Genre" options={ GENRES } onSelected={( genre ) => onSelectedGenre( genre )}/>
      </div>
      <FilmsList movies = { films } />
    </PageLayout>
  )
}

export default MoviesPage;