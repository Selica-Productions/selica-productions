import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index"

function HomePage({ search }) {
  return (
    <PageLayout>
        <FilmsList search= { search } />
    </PageLayout>
  )
}

export default HomePage;