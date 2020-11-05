import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './paginas/home';
import './App.css';



const Container = styled.main`
  margin: 3rem;
  width: 45%;
`;

function App() {
  return (
    <div className='App'>
    <Container>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Container>
    </div>
  );
}

export default App;