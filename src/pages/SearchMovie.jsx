import { useState, useEffect } from 'react';

import { searchMovie } from '../services/ApiRequests';
import { SearchForm } from 'components/SearchForm';
import { MoviesList } from '../components/MovieList';

import { Link, useParams } from 'react-router-dom';

export const SearchMovieByWord = () => {
  const [data, setData] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [requestedWord, setRequestedWord] = useState('');

  const getWordFromInput = event => {
    event.preventDefault();
    setData([]);
    const form = event.currentTarget;
    const searchWord = form.elements.input.value;
    setRequestedWord(searchWord);
    form.reset();
  };

  useEffect(() => {
    if (requestedWord !== '') {
      searchMovie(requestedWord)
        .then(data => {
          setShowMovies(true);
          setData(data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [requestedWord]);

  return (
    <>
      <SearchForm fnOnFormSubmit={getWordFromInput} />
      {setShowMovies && <MoviesList data={data} />}
    </>
  );
};
