import { GET_MOVIE } from "./actions";

const INITIAL_STATE = {
  movie: null,
  isFetched: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIE}_PENDING`:
      return INITIAL_STATE;
    case `${GET_MOVIE}_FULFILLED`:
      return {
        ...state,
        isFetched: true,
        movie: action.payload
      };
    case `${GET_MOVIE}_REJECTED`:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };
    default:
      return state;
  }
};
