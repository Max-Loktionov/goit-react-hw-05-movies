import { useEffect, useState } from 'react';
import * as movieAPI from '../services/movieAPI';
import Gallery from 'components/Gallery';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieAPI.fetchTrends().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Trends of the week</h1>
      <Gallery movies={movies} />
    </div>
  );
}
