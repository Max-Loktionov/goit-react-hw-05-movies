import { Wrapper } from './Gallery.styled';
import GallaryItem from 'components/GallaryItem';

export default function Gallery({ movies }) {
  return (
    <Wrapper>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <GallaryItem
              poster_path={movie.poster_path}
              title={movie.title}
              id={movie.id}
              release_date={movie.release_date}
            />
          </li>
        ))}
    </Wrapper>
  );
}
