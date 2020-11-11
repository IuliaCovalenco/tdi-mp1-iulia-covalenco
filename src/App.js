import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import home from './paginas/home';
import './App.css';
import pag1 from './paginas/pag1';
import about from './paginas/about';
import cart1 from './paginas/cart1';
/*import cards from './paginas/components/post/cards'
<Route exact path="/cards/:cardId" component={cards} />*/


const Container = styled.main`
  min-height: 100vh;
  
`;

function App() {
  return (
    <div className='App'>
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={home}>
          </Route>
          <Route exact path="/paginas/pag1" component={pag1} />
          <Route exact path="/paginas/about" component={about} />
          <Route exact path="/paginas/cart1" component={cart1} />
        
        </Switch>
      </Router>
    </Container>
    </div>
  );
}

export default App;