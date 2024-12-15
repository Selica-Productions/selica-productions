import api from "./api";

//--API CALLS--
//--Get Popular Movies--
export const getPopularMovies = async() => {
    try {
        const response = await api.get("/movie/popular");
        return response.data.results;
    } catch(error) {
        console.log(error)
        throw new Error("Could not show popular movies. Please try again later. 😔🎬");
    }
}

//--Get Film Details --
export const getFilmDetails = async(id) => {
    try{
        const response = await api.get(`/movie/${id}`);
        return response.data;
    } catch(error) {
        console.log(error)
        throw new Error("Could not show the film details. Please try again later. 😔🎬");
    }
}