import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'components/services/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { Container, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const results = await getTrendingMovies();

        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <Container>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default Home;