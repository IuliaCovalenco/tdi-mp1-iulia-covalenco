import {
  SEARCH_CARD,
  FETCH_CARDS,
  FETCH_CARD,
  LOADING
} from '../actions/types';

const initialState = {
  text: '',
  cards: [],
  loading: false,
  card: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_CARD:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case FETCH_CARDS:
      return {
        ...state,
        cards: action.payload,
        loading: false
      };
    case FETCH_CARD:
      return {
        ...state,
        card: action.payload,
        loading: false
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}