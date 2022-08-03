import PropTypes from 'prop-types';
import { Box, TextBox, Statistic } from './CardDetailsInfo.styled';
import noImage from 'views/no-image-icon-23485.png';

export default function CardDetailsInfo({
  poster_path,
  title,
  overview,
  vote_average,
  vote_count,
  release_date,
  genres,
}) {
  const path = 'https://image.tmdb.org/t/p/w500/';

  return (
    <Box>
      {poster_path ? (
        <img src={`${path}${poster_path}`} alt={title} />
      ) : (
        <img src={noImage} alt={title} />
      )}
      <TextBox>
        <h2>{title}</h2>
        <p>{overview}</p>
        <Statistic>
          <p> Vote: {vote_average}</p>
          <p>Total vote: {vote_count}</p>
          <p>Release date: {release_date}</p>
          {genres && <p>Genres: {genres.map(({ name }) => name).join(', ')}</p>}
        </Statistic>
      </TextBox>
    </Box>
  );
}

CardDetailsInfo.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  overview: PropTypes.string,
  release_date: PropTypes.string,
  genres: PropTypes.array,
};
