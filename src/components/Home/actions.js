import { fetchMoviePopular } from "../../helpers";

export const GET_MOVIES_POPULAR = "GET_MOVIES_POPULAR";
export const INCREMENT_PAGE = "INCREMENT_PAGE";
export const SET_CARD_INDEX = "SET_CARD_INDEX";

export const getMoviesPopular = page => {
  const data = fetchMoviePopular(page);

  return {
    type: GET_MOVIES_POPULAR,
    payload: data
  };
};

export const incrementPage = () => {
  return {
    type: INCREMENT_PAGE
  };
};

export const setCardIndex = index => {
  return {
    type: SET_CARD_INDEX,
    payload: index
  };
};
