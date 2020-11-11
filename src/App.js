import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import store from './store';
import home from './paginas/home';
import pag1 from './paginas/pag1';
import about from './paginas/about';
import cards from './paginas/components/post/cards'
import Header from './paginas/components/header';
import './App.css';

const Container = styled.main`
  min-height: 100vh;
  
`;

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Container>
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={home}>
              </Route>
              <Route exact path="/paginas/pag1" component={pag1} />
              <Route exact path="/paginas/about" component={about} />
              <Route exact path="/cards/:cardId" component={cards} />
            </Switch>
          </Router>
        </Container>
      </Provider>
    </div>
  );
}

export default App;