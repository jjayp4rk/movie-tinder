import { fetchMoviesSimilar } from "../../helpers";

export const GET_MOVIES_SIMILAR = "GET_MOVIES_SIMILAR";
export const GET_MOVIES_SIMILAR_FIRST = "GET_MOVIES_SIMILAR_FIRST";
export const REMOVE_DUPLICATES = "REMOVE_DUPLICATES";

export const getMoviesSimilarFirst = id => {
  const data = fetchMoviesSimilar(id);

  return {
    type: GET_MOVIES_SIMILAR_FIRST,
    payload: data
  };
};

export const getMoviesSimilar = id => {
  const data = fetchMoviesSimilar(id);

  return {
    type: GET_MOVIES_SIMILAR,
    payload: data
  };
};

// export const removeDuplicates = () => {
//   return {
//     type: REMOVE_DUPLICATES
//   };
// };
