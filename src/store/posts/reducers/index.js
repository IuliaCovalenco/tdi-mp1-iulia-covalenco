import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POSTS_SEARCH
} from '../actions/constants';

const initialState = {
  text:'',
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

    case POSTS_SEARCH:
      return {
        ...state,
        text: state.payload,
        loading:false
      };

    default:
      return state;
  }
  
}
