import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getDetailsMovie } from 'components/services/api';
import {
  BackLink,
  ThumbDetails,
  ItemGenres,
  ListGenres,
  Main,
  ThumbInfo,
  ThumbAdditional,
  AdditionalList,
  AdditionalItem,
} from './MovieDetails.styled';
import { Title } from 'pages/Home/Home.styled';
import { MdOutlineArrowBack } from 'react-icons/md';
import defaultPosterImage from '../../images/noPosterImage.jpg';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [detailsMovie, setDetailsMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMoviesDetails = async () => {
      const results = await getDetailsMovie(movieId);
      setDetailsMovie(results);
    };

    getMoviesDetails();
  }, [movieId]);

  const {
    original_title,
    release_date,
    vote_average,
    poster_path,
    overview,
    genres,
  } = detailsMovie;

  const userScore = vote_average?.toFixed(1) * 10;
  const releaseDate = new Date(release_date);

  return (
    <Main>
      <BackLink to={backLinkLocationRef.current}>
        <MdOutlineArrowBack />
        Go back
      </BackLink>

      <ThumbDetails>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300/${poster_path}`
              : defaultPosterImage
          }
          alt={original_title}
          width={320}
        />
        <ThumbInfo>
          <h2>
            <b>{original_title}</b> ({releaseDate.getFullYear()})
          </h2>
          <b>User score: {userScore}%</b>
          <b>Overview</b>
          <p>{overview} </p>
          <b>Genres</b>
          <ListGenres>
            {genres &&
              genres.map(({ id, name }) => (
                <ItemGenres key={id}>{name}</ItemGenres>
              ))}
          </ListGenres>
        </ThumbInfo>
      </ThumbDetails>
      <ThumbAdditional>
        <Title>Additional information</Title>
        <AdditionalList>
          <AdditionalItem>
            <BackLink to="cast">Cast</BackLink>
          </AdditionalItem>
          <AdditionalItem>
            <BackLink to="reviews">Reviews</BackLink>
          </AdditionalItem>
        </AdditionalList>
      </ThumbAdditional>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Main>
  );
};

export default MovieDetails;