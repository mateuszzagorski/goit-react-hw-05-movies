import { useState, useEffect } from 'react';

import { searchMovie } from '../services/ApiRequests';
import { SearchForm } from 'components/SearchForm';
import { MoviesList } from '../components/MovieList';

import { useSearchParams } from 'react-router-dom';

export const SearchMovieByWord = () => {
  const [data, setData] = useState([]);
  const [showMovies, setShowMovies] = useState(false);
  const [requestedWord, setRequestedWord] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);
    setRequestedWord(newParams);
    setShowMovies(true);
  };

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
      console.log(movieName);
      searchMovie(movieName || requestedWord)
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
      <SearchForm
        value={movieName}
        fnOnFormSubmit={getWordFromInput}
        fnOnChange={updateQueryString}
      />
      {setShowMovies && <MoviesList data={data} />}
    </>
  );
};
