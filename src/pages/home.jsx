import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index";
import TopRatedMovies from "../components/filters/top-rated-movies/top-rated-movies";
import Carousel from "../components/carousel/carousel";

function HomePage({ search }) {
  return (
    <PageLayout>
      <Carousel />
      <TopRatedMovies />
      <FilmsList search={search} />
    </PageLayout>
  );
}

export default HomePage;
