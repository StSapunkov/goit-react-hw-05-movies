import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '1b04226f42cb54121398b61afa96e957',
};

export const getTrendingMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(`/trending/movie/day`);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchMovie = async query => {
  try {
    const {
      data: { results },
    } = await axios.get(`/search/movie`, {
      params: {
        query: query,
      },
    });

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getDetailsMovie = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getCreditsMovie = async movieId => {
  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits`);

    return cast;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsMovie = async movieId => {
  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews`);

    return results;
  } catch (error) {
    console.log(error);
  }
};