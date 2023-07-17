import { useLocation } from 'react-router-dom';
import { Item, List, StyledLink, Title } from './MoviesList.styled';
import defaultPosterImage from '../../images/noPosterImage.jpg';
import PropTypes from 'prop-types';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title, poster_path }) => (
          <Item key={id}>
            <StyledLink to={`/movies/${id}`} state={{ from: location }}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w300/${poster_path}`
                    : defaultPosterImage
                }
                alt={title}
                width={240}
              />
              <Title>
                <b>{title}</b>
              </Title>
            </StyledLink>
          </Item>
        ))}
      </List>
    </div>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;