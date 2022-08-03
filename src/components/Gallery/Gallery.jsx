import PropTypes from 'prop-types';
import { Wrapper } from './Gallery.styled';
import GallaryItem from 'components/GallaryItem';

export default function Gallery({ movies }) {
  return (
    <Wrapper>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <GallaryItem
              poster_path={movie.poster_path ?? movie.poster_path}
              title={movie.title}
              id={movie.id}
              release_date={movie.release_date ?? movie.release_date}
            />
          </li>
        ))}
    </Wrapper>
  );
}

Gallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
    })
  ),
};
