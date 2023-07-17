import { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchForm from 'components/SearchForm/SearchForm';
import { getSearchMovie } from 'components/services/api';
import { Toaster, toast } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (movieName === '') return;

    const getSearch = async () => {
      const resp = await getSearchMovie(movieName);
      if (resp.length === 0) toast.error(`Is not found`);
      setMovies([...resp]);
    };

    getSearch();
  }, [movieName]);

  const handleSubmit = e => {
    e.preventDefault();

    const value = e.target.search.value;

    value.trim() !== ''
      ? setSearchParams({ query: value })
      : toast.error(`You haven't entered anything`);

    e.currentTarget.reset();
  };

  return (
    <main>
      <SearchForm onSubmit={handleSubmit} />
      <MoviesList movies={movies} />
      <Toaster position="top-right" reverseOrder={true} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default Movies;