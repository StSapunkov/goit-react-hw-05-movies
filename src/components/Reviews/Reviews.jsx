import { getReviewsMovie } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Item, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      const resp = await getReviewsMovie(movieId);
      setMovies([...resp]);
    };

    getMovieCredits();
  }, [movieId]);

  return movies.length !== 0 ? (
    <List>
      {movies.map(({ id, author, content }) => (
        <Item key={id}>
          <b>{author}</b>
          <p>{content}</p>
        </Item>
      ))}
    </List>
  ) : (
    <b>We don't have any reviews for this movie</b>
  );
};

export default Reviews;