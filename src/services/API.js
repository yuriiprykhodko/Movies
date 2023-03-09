
import axios from 'axios';

const KEY = '81f5f7e530a6c273c6de069a3be4f121';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const getTrending = async () => {
    const response = await axios.get(`/trending/movie/week?api_key=${KEY}`);
    return response.data.results;
};
const getMovie = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?api_key=${KEY}&append_to_response=videos,images`);
    return response.data;
};
const getCredits = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?api_key=${KEY}&language=en-US`);
    return response.data;
};
const getReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
    return response.data;
};

export const API = {
    getTrending,
    getMovie,
    getCredits,
    getReviews
}