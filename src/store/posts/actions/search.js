import { SEARCH_CARD, FETCH_CARDS, FETCH_CARD, LOADING } from './types';
import axios from 'axios';



export const searchCard = text => dispatch => {
  dispatch({
    type: SEARCH_CARD,
    payload: text
  });
};

export const fetchCards = text => dispatch => {
  axios
    .get(`https://api.magicthegathering.io/v1/cards=${text}`)
    .then(response =>
      dispatch({
        type: FETCH_CARDS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchCard = id => dispatch => {
  axios
    .get(`https://api.magicthegathering.io/v1/cards=${id}`)
    .then(response =>
      dispatch({
        type: FETCH_CARD,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: LOADING
  };
};