import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from '../actions/constants';

const initialState = {
  isLoading: false,
  isError: false,
  cards: []
}

export default (state = initialState, { type, payload }) => {
  console.log(type, payload);
  switch(type) {
    case POSTS_FETCH_START:
      return {
        isLoading: true,
        isError: false,
        cards: []
      };
    case POSTS_FETCH_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        cards: payload
      };
      
    case POSTS_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      
    default:
      return state;
  }
  
}
