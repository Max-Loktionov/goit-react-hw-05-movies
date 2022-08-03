import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/movieAPI';
import { Wrapper, Photo, CastItem } from './Cast.styled';
import noImage from '../no-image-icon-23485.png';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const path = 'https://image.tmdb.org/t/p/w154';

  useEffect(() => {
    if (movieId === null) {
      return;
    }
    fetchCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <section>
      {cast && (
        <Wrapper>
          {cast.map(item => (
            <CastItem key={item.id}>
              {item.profile_path ? (
                <Photo src={`${path}${item.profile_path}`} alt={item.name} />
              ) : (
                <Photo src={noImage} alt={item.name} />
              )}
              <p>Character: {item.character}</p>
              <p>Name: {item.name}</p>
            </CastItem>
          ))}
        </Wrapper>
      )}
    </section>
  );
}
