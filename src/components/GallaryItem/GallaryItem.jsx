import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Text, Poster } from './GallaryItem.styled';
import noImage from 'views/no-image-icon-23485.png';

export default function GallaryItem({ poster_path, title, id, release_date }) {
  const path = 'https://image.tmdb.org/t/p/w154';
  const location = useLocation();
  return (
    <>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Box>
          <div>
            {poster_path ? (
              <Poster src={`${path}${poster_path}`} alt={title} />
            ) : (
              <Poster src={noImage} alt={title} />
            )}
          </div>
          <Text>{title}</Text>
          <Text>{release_date && new Date(release_date).getFullYear()}</Text>
        </Box>
      </Link>
    </>
  );
}

GallaryItem.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  id: PropTypes.number.isRequired,
};
