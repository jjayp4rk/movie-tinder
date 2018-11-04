import { GET_MOVIES_POPULAR, INCREMENT_PAGE } from "./actions";

const INITIAL_STATE = {
  isFetched: false,
  error: null,
  movies: null,
  page: 1
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIES_POPULAR}_PENDING`:
      return {
        ...state,
        error: null,
        isFetched: false,
        movies: null
      };
    case `${GET_MOVIES_POPULAR}_FULFILLED`:
      return {
        ...state,
        isFetched: true,
        movies: action.payload.results
      };
    case `${GET_MOVIES_POPULAR}_REJECTED`:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };
    case `${INCREMENT_PAGE}`:
      return {
        ...state,
        page: state.page + 1
      };
    default:
      return state;
  }
};
