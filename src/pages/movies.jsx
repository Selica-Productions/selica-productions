
import { PageLayout } from "../components/layouts";
import FilterDropdown from "../components/filters/filter-dropdown/filter-dropdown";
import FilmsList from '../components/films/films-list/films-list';
import { YEARS, GENRES, sortOptions } from "../utils/constants"
import { useEffect, useState } from "react";
import { getMoviesByGenre, getMoviesByYear, getPopularMovies, getSortedMovies } from "../service/moviesService";
import { ClearButton } from "../components/ui";

function MoviesPage({ search }) {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(null);
  const [filteredFilms, setFilteredFilms] = useState([])
  
  //--Films by Genre--
  const onSelectedGenre = async ( genre ) => {
    try {
      const movies = await getMoviesByGenre( genre.id );
      setFilteredFilms( movies );

    } catch (err) {
      setError(err.message);
      console.log( error );
      setFilms([]);
    }
  };

  //--Films by Genre--
  const onSelectedYear = async ( year ) => {
    try {
      const movies = await getMoviesByYear( year );
      setFilteredFilms( movies );

    } catch (err) {
      setError(err.message);
      console.log( error );
      setFilms([]);
    }
  };

  //-- Sort movies --
  const onSelectedSort = async ( sortOption ) => {
    try {
      const movies = await getSortedMovies( sortOption );
      setFilteredFilms( movies );

    } catch (err) {
      setError(err.message);
      console.log( error );
      setFilms([]);
    }
  };

  //--Get Popular Movies--
  const getPopulars = async () => {
    try {
      const movies = await getPopularMovies();
      setFilms( movies );
      setFilteredFilms( movies );

    } catch (err) {
      setError(err.message);
      console.log(error);
    }
  };

  //--Clear Filters--
  const onClearFilters = () => {
    getPopulars();
  };

  useEffect(() => {
    getPopulars(); 
  }, []); 

  return (
    <PageLayout>
      <div className="d-flex gap-3">
        <FilterDropdown type="Year" options={ YEARS } onSelected={( year ) => onSelectedYear( year )} />
        <FilterDropdown type="Genre" options={ GENRES } onSelected={( genre ) => onSelectedGenre( genre )}/>
        <FilterDropdown type="Sort" options={ sortOptions } onSelected={( sortOption ) =>  onSelectedSort( sortOption )}/>
        <ClearButton onClear={ onClearFilters } />
      </div>
      <FilmsList movies = { filteredFilms } search={ search }/>
    </PageLayout>
  )
}

export default MoviesPage;

