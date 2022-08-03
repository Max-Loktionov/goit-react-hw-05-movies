import axios from 'axios';
import PropTypes from 'prop-types';

const BASE_URL = `https://api.themoviedb.org/3`;
const KEY = '476dab1d501621899284a1a134c160d7';

export const fetchTrends = async () => {
  const url = `${BASE_URL}/trending/movie/week?api_key=${KEY}`;
  const response = await axios(url);

  return response.data.results;
};

export const fetchSearchMovies = async query => {
  const searchQuery = query;
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}`;
  const response = await axios(url);

  return response.data.results;
};

export const fetchMovieDetails = async id => {
  const movieId = id;
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;
  const response = await axios(url);

  return response.data;
};

export const fetchCast = async id => {
  const movieId = id;
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&page=1&per_page=18`;
  const response = await axios(url);

  return response.data.cast;
};

export const fetchReviews = async id => {
  const movieId = id;
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`;
  const response = await axios(url);

  return response.data.results;
};

fetchSearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};
fetchMovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};
fetchCast.propTypes = {
  id: PropTypes.number.isRequired,
};
fetchReviews.propTypes = {
  id: PropTypes.number.isRequired,
};
