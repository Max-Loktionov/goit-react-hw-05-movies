import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as movieAPI from '../services/movieAPI';
import SearchBar from 'components/Searchbar';
import Gallery from 'components/Gallery';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery') ?? '';

  const handleSubmit = searchQuery => {
    setSearchParams({ searchQuery: searchQuery });
  };
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    movieAPI
      .fetchSearchMovies(searchQuery)
      .then(setMovies)
      .then(() => {
        if (movies?.length === 0) {
          return toast.warn(`We cannot find this movie: ${searchQuery}`, {
            autoClose: 3000,
            theme: 'dark',
          });
        }
      });
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmitSearchForm={handleSubmit} searchQuery={searchQuery} />
      <div>{movies && <Gallery movies={movies} />}</div>
    </>
  );
}
