import axios from 'axios';

const key =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzJjNjgwZTU1OGJkMmM2YjkwMmM4MGIyZDVlMDc3ZCIsInN1YiI6IjY0ODFjYzljZTI3MjYwMDBlOGJmNGViNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JtFaymxRhIox3C-tQMTvFRWDPJCwAg6fzVmEnnO60cA';
const url = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${key}`,
  },
};

export const fetchTrendingsMovies = async () => {
  const response = await axios.get(`${url}trending/movie/day`, options);
  const data = await response.data;
  return data;
};

export const fetchSearchMovie = async q => {
  const response = await axios.get(`${url}search/movie?query=${q}`, options);
  const data = await response.data;

  return data;
};

export const fetchMovieDetails = async id => {
  const response = await axios.get(`${url}/movie/${id}`, options);
  const data = await response.data;

  return data;
};

export const fetchCast = async id => {
  const response = await axios.get(`${url}/movie/${id}/credits`, options);
  const data = await response.data;

  return data;
};

export const fetchReviews = async id => {
  const response = await axios.get(`${url}/movie/${id}/reviews`, options);
  const data = await response.data;

  return data;
};
