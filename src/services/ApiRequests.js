import axios from 'axios';

const API_KEY = '7968ad8b74212fdec970c8532d70f000';
const API_URL = 'https://api.themoviedb.org/3';

const fetchData = async option => {
  try {
    const response = await axios.get(`${API_URL}${option}api_key=${API_KEY}`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getData = async option => {
  try {
    const data = await fetchData(option);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const getTrending = () => {
  const getTrendingURL = '/trending/movie/day?';
  //console.log(getData(getTrendingURL));
  return getData(getTrendingURL);
};

export const searchMovie = movie => {
  //change Harry to movie option
  let movieS = 'Harry';
  const searchMovieURL = `/search/movie?query=${movieS}&`;
  return getData(searchMovieURL);
};

export const getMovieDetails = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieDetailsURL = `/movie/${movieId}?`;
  return getData(getMovieDetailsURL);
};

export const getMovieCredits = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieCreditsURL = `/movie/${movieId}/credits?`;
  return getData(getMovieCreditsURL);
};

export const getMovieReviews = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieReviewsURL = `/movie/${movieId}/reviews?`;
  return getData(getMovieReviewsURL);
};
