import { useState, useEffect } from 'react';

import { searchMovie } from '../services/ApiRequests';
import { SearchForm } from 'components/search-form/SearchForm';
import { MoviesList } from '../components/movie-list/MovieList';

import { useSearchParams } from 'react-router-dom';

export const SearchMovieByWord = () => {
  const [data, setData] = useState([]);
  const [requestedWord, setRequestedWord] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('name') ?? '';

  const updateQueryString = name => {
    const newParams = name !== '' ? { name } : {};
    setSearchParams(newParams);
    setRequestedWord(newParams);
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
    if (requestedWord || movieName !== '') {
      searchMovie(movieName || requestedWord)
        .then(data => {
          setData(data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [requestedWord, movieName]);

  return (
    <>
      <SearchForm
        value={movieName}
        fnOnFormSubmit={getWordFromInput}
        fnOnChange={updateQueryString}
      />
      {data.length > 0 && <MoviesList data={data} />}
    </>
  );
};
