import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.themoviedb.org/3';

const fetchData = async option => {
  console.log('apiKey', apiKey);
  try {
    const response = await axios.get(`${API_URL}${option}api_key=${apiKey}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getData = async option => {
  try {
    const data = await fetchData(option);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getTrending = () => {
  const getTrendingURL = '/trending/movie/day?';
  return getData(getTrendingURL);
};

export const searchMovie = movie => {
  const searchMovieURL = `/search/movie?query=${movie}&`;
  return getData(searchMovieURL);
};

export const getMovieDetails = id => {
  const getMovieDetailsURL = `/movie/${id}?`;
  return getData(getMovieDetailsURL);
};

export const getMovieCredits = id => {
  const getMovieCreditsURL = `/movie/${id}/credits?`;
  return getData(getMovieCreditsURL);
};

export const getMovieReviews = id => {
  const getMovieReviewsURL = `/movie/${id}/reviews?`;
  return getData(getMovieReviewsURL);
};

export const getFullPosterURL = posterPath => {
  if (!posterPath) {
    return;
  }
  try {
    const response = `https://image.tmdb.org/t/p/w500${posterPath}`;
    return response;
  } catch (error) {
    return error(error.message);
  }
};
