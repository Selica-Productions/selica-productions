import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index";
import TopRatedMovies from "../components/filters/top-rated-movies/top-rated-movies";

function HomePage({ search }) {
  return (
    <PageLayout>
      <FilmsList search={search} />
      <TopRatedMovies />
    </PageLayout>
  );
}

export default HomePage;
