import { fetchMoviePopular } from "../../helpers";

export const GET_MOVIES_POPULAR = "GET_MOVIES_POPULAR";

export const getMoviesPopular = page => {
  const data = fetchMoviePopular(page);

  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
};
