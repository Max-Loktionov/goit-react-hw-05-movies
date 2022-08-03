import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
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

    movieAPI.fetchSearchMovies(searchQuery).then(setMovies);
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSubmitSearchForm={handleSubmit} searchQuery={searchQuery} />
      {movies && (
        <div>
          <Gallery movies={movies} />
        </div>
      )}
      {movies?.length === 0 && searchQuery !== '' && (
        <p>We cannot find this movie: {searchQuery}</p>
      )}
    </>
  );
}
