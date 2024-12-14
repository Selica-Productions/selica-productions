import { useState } from "react";
import { PageLayout } from "../layouts";
import SearchBar from "../searchbar/searchbar";

function HomePage() {
    const [ searchFilter, setSearchFilter ] = useState({})

    const onSearchFilter = (searchFilter) => setSearchFilter(searchFilter);
  return (
    <PageLayout>
        <SearchBar filter = {searchFilter} onSearchFilter = {onSearchFilter} />
    </PageLayout>
  )
}

export default HomePage;