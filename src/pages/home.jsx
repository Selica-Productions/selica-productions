import { PageLayout } from "../components/layouts";
import { FilmsList } from "../components/films/index";
import TopRatedMovies from "../components/filters/top-rated-movies/top-rated-movies";
import Carousel from "../components/carousel/carousel";
import DiscoverMore from "../components/discover-more/discover-more";
import TrendingTV from "../components/trending-tv/trending-tv";

function HomePage({ search }) {
  return (
    <PageLayout>
      <div>
        <h2 className="mb-4">🔥🎬 Upcoming Movies</h2>
      </div>
      <div className="d-flex justify-content-center">
        <Carousel page="1" />
        <Carousel page="2" />
      </div>
      <TrendingTV />
      <TopRatedMovies />
      <FilmsList search={search} />
      <DiscoverMore />
    </PageLayout>
  );
}

export default HomePage;
