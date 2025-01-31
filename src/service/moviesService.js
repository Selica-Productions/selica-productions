import api from "./api";

//--API CALLS--
//--Get Popular Movies--
const getPopularMovies = async () => {
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
const getFilmDetails = async (id) => {
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

//--Load more pages (Popular Films)--
const loadPopularFilmPages = async (page) => {
  try {
    const response = await api.get(`/movie/popular?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(
      "No more films available at the moment. Please try again later. 😔🎬"
    );
  }
};

//--Load more pages--
const loadCountryFilmPages = async (page) => {
  try {
    const response = await api.get(`/movie/popular?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw new Error(
      "No more films available at the moment. Please try again later. 😔🎬"
    );
  }
};

//--Get Movies by Genre--
const getMoviesByGenre = async (genreId) => {
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

//--Get Movies by Year--
const getMoviesByYear = async (year) => {
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
      "Could not fetch movies for this year. Please try again later. 😔🎬"
    );
  }
};

//--Get Top Rated Movies--
const getTopRatedMovies = async () => {
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
};

//--Get Upcoming Movies--
const getUpcomingMovies = async (page) => {
  try {
    const response = await api.get(`/movie/upcoming?page=${page}`);
    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw new Error(
      "Could not fetch upcoming movies. Please try again later. 😔🎬"
    );
  }
};

//--Get Movies from Countries--
const getCountryMovies = async (country, page) => {
  try {
    const response = await api.get(
      `/discover/movie?page=${page}&sort_by=popularity.desc&with_origin_country=${country}`
    );
    return {
      moviesList: response.data.results,
      total_pages: response.data.total_pages 
    };
  } catch (error) {
    console.log(error);
    throw new Error(
      `Could not fetch Movies from ${country}. Please try again later. 😔🎬`
    );
  }
};

//--Get Trending TV Shows--
const getTrendingTVShows = async () => {
  try {
    const response = await api.get("/discover/tv", {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: 1,
        sort_by: "popularity.desc",
      },
    });
    return response.data.results.slice(0, 12);
  } catch (error) {
    console.log(error);
    throw new Error(
      "Could not fetch trending TV shows. Please try again later. 😔📺"
    );
  }
};

//--Get TV Show Details--
const getTVShowDetails = async (id) => {
  try {
    const response = await api.get(`/tv/${id}`, {
      params: {
        language: "en-US",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(
      "Could not fetch TV show details. Please try again later. 😔📺"
    );
  }
};

//--Get Sorted Movies--
const getSortedMovies = async (sortOption, genre=null, year=null) => {
  try {
    let url = `/discover/movie?sort_by=${sortOption.value}`;

    if(genre) {
      url += `&with_genres=${genre.id}`;
    }

    if (year) {
      url += `&primary_release_year=${year}`;
    }

    const response = await api.get(url);
    return response.data.results;
    
  } catch (error) {
    console.error(error);
    throw new Error(
      "The movies could not be sorted. Please try again later. 😔🎬"
    );
  }
};


//--Get Trailer Movies--
const getTrailerMovies = async ( type, id ) => {
  try {
    const response = await api.get(`/${ type }/${ id }/videos`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching upcoming movies:", error);
    throw new Error(
      "Could not fetch Trailer movies. Please try again later. 😔🎬"
    );
  }
};

export {
  getPopularMovies,
  getFilmDetails,
  loadPopularFilmPages,
  loadCountryFilmPages,
  getMoviesByGenre,
  getMoviesByYear,
  getTopRatedMovies,
  getUpcomingMovies,
  getCountryMovies,
  getTrendingTVShows,
  getTVShowDetails,
  getSortedMovies,
  getTrailerMovies
};