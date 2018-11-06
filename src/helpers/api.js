import API_KEY from "../constants/api";

const BASE_URL = "https://api.themoviedb.org/3";

const fetchData = params =>
  fetch(`${BASE_URL}/${params}?api_key=${API_KEY.API_KEY}&language=en-US`).then(
    res => res.json()
  );

const fetchDataPage = (params, page) =>
  fetch(
    `${BASE_URL}/${params}?api_key=${
      API_KEY.API_KEY
    }&language=en-US&page=${page}`
  ).then(res => res.json());

export const fetchMovie = async movieId => {
  try {
    return await fetchData(`movie/${movieId}`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviePopular = async page => {
  try {
    return await fetchDataPage("movie/popular", String(page));
  } catch (err) {
    console.log(err);
  }
};

export const fetchMoviesSimilar = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/similar`);
  } catch (err) {
    console.log(err);
  }
};

export const fetchMovieTrailers = async movieId => {
  try {
    return await fetchData(`movie/${movieId}/videos`);
  } catch (err) {
    console.log(err);
  }
};
