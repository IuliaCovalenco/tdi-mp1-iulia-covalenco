import React from 'react';
import Header from '../components/header';
import { Provider } from 'react-redux';
import store from './store';
import Posts from "./componentes/Posts";
/*import Cards from "../components/post/cards.js*/




export default () => {
    return (
    <>
    <Header />
    <Provider store={store}>
    <Posts />
    </Provider>
  </>
    )
  
}


