import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index";
import TopRatedMovies from "../components/filters/top-rated-movies/top-rated-movies";
import UpcomingMovies from "../components/filters/upcoming-movies/upcoming-movies";

function HomePage({ search }) {
  return (
    <PageLayout>
      <UpcomingMovies />
      <TopRatedMovies />
      <FilmsList search={search} />
    </PageLayout>
  );
}

export default HomePage;
