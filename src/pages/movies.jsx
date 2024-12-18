import { PageLayout } from "../components/layouts";
import FilterDropdown from "../components/filters/filter-dropdown/filter-dropdown";
import FilmsList from '../components/films/films-list/films-list';
import { YEARS, GENRES } from "../utils/constants"
import { useState } from "react";

function MoviesPage() {
  const [year, setYear] = useState(null);
  const [genre, setGenre] = useState(null);

  const onSelectedFilter = (type, value) => {
    switch( type ) {
      case "Year":
        setYear(value);
        break;
      case "Genre":
        setGenre(value);
        break;
      default:
        break;
    }
  }

  return (
    <PageLayout>
      <div className="d-flex gap-3">
        <FilterDropdown type="Year" options={ YEARS } onChange={(value) => onSelectedFilter("Year", value)} />
        <FilterDropdown type="Genre" options={GENRES} onChange={(value) => onSelectedFilter("Genre", value)}/>
      </div>
      <FilmsList year={year} genre={genre}/>
    </PageLayout>
  )
}

export default MoviesPage;