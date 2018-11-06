import { GET_MOVIES_SIMILAR, GET_MOVIES_SIMILAR_FIRST } from "./actions";

const INITIAL_STATE = {
  movies: [],
  isFetched: false,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case `${GET_MOVIES_SIMILAR_FIRST}_PENDING`:
      return INITIAL_STATE;
    case `${GET_MOVIES_SIMILAR_FIRST}_FULFILLED`:
      return {
        ...state,
        isFetched: true,
        movies: [...state.movies, ...action.payload.results]
      };
    case `${GET_MOVIES_SIMILAR_FIRST}_REJECTED`:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };
    case `${GET_MOVIES_SIMILAR}_PENDING`:
      return {
        ...state,
        isFetched: false
      };
    case `${GET_MOVIES_SIMILAR}_FULFILLED`:
      let unfilteredMovies = [...state.movies, ...action.payload.results];

      let filteredMovies = [
        ...new Set(unfilteredMovies.map(v => JSON.stringify(v)))
      ].map(v => JSON.parse(v));

      return {
        ...state,
        isFetched: true,
        movies: filteredMovies
      };
    case `${GET_MOVIES_SIMILAR}_REJECTED`:
      return {
        ...state,
        isFetched: true,
        error: action.payload
      };

    default:
      return state;
  }
};
