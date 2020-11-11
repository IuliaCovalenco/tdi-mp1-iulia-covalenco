import { fetchPosts } from '../../../api/posts.js';
import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE,
  POSTS_SEARCH

} from './constants';

export const getPosts = () => {
  return dispatch => {
    dispatch({ type: POSTS_FETCH_START });

    fetchPosts()
      .then(cards => {
        dispatch({ type: POSTS_FETCH_SUCCESS, payload: cards.cards })
        
      })
      .catch(() => dispatch({ type: POSTS_FETCH_FAILURE }))
  }
}
export const postsSearch = text => dispatch => {
  dispatch({
    type: POSTS_SEARCH,
    payload: text
  });
};
