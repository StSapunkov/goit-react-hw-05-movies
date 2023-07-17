import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCreditsMovie } from 'components/services/api';

import defaultImage from '../../images/noFoto.jpg';
import { ItemCast, ListCast, Text } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const resp = await getCreditsMovie(movieId);
      setMovies([...resp]);
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <ListCast>
      {movies.map(({ id, name, character, profile_path }) => (
        <ItemCast key={id}>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w92${profile_path}`
                : defaultImage
            }
            alt={name}
            width={92}
          />
          <Text>{name}</Text>
          <Text>
            <b>Character:</b> {character}
          </Text>
        </ItemCast>
      ))}
    </ListCast>
  );
};

export default Cast;