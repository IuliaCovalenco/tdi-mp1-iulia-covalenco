import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import todosReducer from './posts/reducers';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cards: todosReducer
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
