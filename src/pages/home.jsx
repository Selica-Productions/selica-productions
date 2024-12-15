import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index"

function HomePage() {
    // const [ searchFilter, setSearchFilter ] = useState({})

    // const onSearchFilter = (searchFilter) => setSearchFilter(searchFilter);
  return (
    <PageLayout>
        
        <FilmsList/>
        {/*<SearchBar filter = {searchFilter} onSearchFilter = {onSearchFilter} />*/}
    </PageLayout>
  )
}

export default HomePage;