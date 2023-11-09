import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App';
import {
  getTrending,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
  searchMovie,
} from './services/ApiRequests';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

getTrending();
getMovieDetails();
getMovieCredits();
getMovieReviews();
searchMovie();
