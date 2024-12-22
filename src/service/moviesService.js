import api from "./api";

//--API CALLS--
//--Get Popular Movies--
export const getPopularMovies = async () => {
  try {
    const response = await api.get("/movie/popular");
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(
      "Could not show popular movies. Please try again later. 😔🎬"
    );
  }
};

//--Get Film Details --
export const getFilmDetails = async (id) => {
  try {
    const response = await api.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(
      "Could not show the film details. Please try again later. 😔🎬"
    );
  }
};

//--Load more pages--
export const loadFilmPages = async (page) => {
  try {
    const response = await api.get(
      `/movie/popular?page=${page}&api_key=${import.meta.env.API_KEY}}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(
      "No more films available at the moment. Please try again later. 😔🎬"
    );
  }
};

//--Get Movies by Genre--
export const getMoviesByGenre = async ( genreId ) => {
  try {
    const response = await api.get("/discover/movie", {
      params: {
        with_genres: genreId,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Could not fetch movies for this genre. Please try again later. 😔🎬"
    );
  }
};

//--Get Movies by Genre--
export const getMoviesByYear = async ( year ) => {
  try {
    const response = await api.get("/discover/movie", {
      params: {
        primary_release_year: year,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Could not fetch movies for this genre. Please try again later. 😔🎬"
    );
  }
};

//--Get Top Rated Movies--
export const getTopRatedMovies = async () => {
  try {
    const response = await api.get("/movie/top_rated");
    return response.data.results.map((movie) => ({
      ...movie,
      vote_average_percentage: Math.round(movie.vote_average * 10),
    }));
  } catch (error) {
    console.error("Error fetching top-rated movies:", error);
    throw new Error(
      "Could not fetch top-rated movies. Please try again later. 😔🎬"
    );
  }
}