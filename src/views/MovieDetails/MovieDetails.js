import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';
import { List } from './MovieDetails.styled';
import * as movieAPI from '../../services/movieAPI';
import CardDetailsInfo from 'components/CardDetailsInfo';

export default function MovieDetails() {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    movieAPI.fetchMovieDetails(movieId).then(setDetails);
  }, [movieId]);
  const {
    poster_path,
    title,
    overview,
    vote_average,
    vote_count,
    release_date,
    genres,
  } = details;
  return (
    <>
      <Link to={location?.state?.from ?? '/'}>Go Back</Link>
      {details && (
        <>
          <CardDetailsInfo
            poster_path={poster_path}
            title={title}
            overview={overview}
            vote_average={vote_average}
            vote_count={vote_count}
            release_date={release_date}
            genres={genres}
          />

          <List>
            <li>
              <Link to="cast">Read about cast</Link>
            </li>

            <li>
              <Link to="reviews">Go through the reviews</Link>
            </li>
          </List>
          <Suspense fallback={<PropagateLoader color="#41d61f" />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </>
  );
}
