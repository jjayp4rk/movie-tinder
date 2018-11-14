import { fetchMovie } from "../../helpers";

export const GET_MOVIE = "GET_MOVIE";
export const GET_MOVIE_IMAGES = "GET_MOVIE_IMAGES";

export const getMoviePage = id => {
  const movie = fetchMovie(id);
  return {
    type: GET_MOVIE,
    payload: movie
  };
};
