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

const getData = option => {
  fetchData(option)
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(error => {
      console.log(error.message);
    });
};

export const getTrending = () => {
  const getTrendingURL = '/trending/movie/day?';
  getData(getTrendingURL);
};

export const searchMovie = movie => {
  //change Harry to movie option
  let movieS = 'Harry';
  const searchMovieURL = `/search/movie?query=${movieS}&`;
  getData(searchMovieURL);
};

export const getMovieDetails = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieDetailsURL = `/movie/${movieId}?`;
  getData(getMovieDetailsURL);
};

export const getMovieCredits = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieCreditsURL = `/movie/${movieId}/credits?`;
  getData(getMovieCreditsURL);
};

export const getMovieReviews = movie => {
  //change movieId to movie option
  let movieId = '872585';
  const getMovieReviewsURL = `/movie/${movieId}/reviews?`;
  getData(getMovieReviewsURL);
};
