import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index";
import TopRatedMovies from "../components/filters/top-rated-movies/top-rated-movies";
import Carousel from "../components/carousel/carousel";
import DiscoverMore from "../components/discover-more/discover-more";
import TrendingTV from "../components/trending-tv/trending-tv";

function HomePage({ search }) {
  return (
    <PageLayout>
      <Carousel />
      <TrendingTV />
      <TopRatedMovies />
      <FilmsList search={search} />
      <DiscoverMore />
    </PageLayout>
  );
}

export default HomePage;
