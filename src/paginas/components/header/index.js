import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter, useLocation } from 'react-router-dom';
import logo from './logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = styled.header`
margim-buttom: 2rem;
`


const renderHomeHeader = () => (
  <>
  <Header>
     <Navbar bg="dark" expand="md, lg" fixed="top" variant="dark" >
        <Navbar.Brand>
        <BrowserRouter>
            <Link to="/">
            <img src={logo} width="40%" alt="logo" />
            </Link>
        </BrowserRouter>
        </Navbar.Brand>
        <Nav className="mr-auto, justify-content-end, flex-row"> 
        <BrowserRouter>
            <Nav.Link className="pr-5" to="/">Home</Nav.Link>
            <Nav.Link className="pr-5" to="/">Cards</Nav.Link>
            <Nav.Link className="pr-5" to="/">Contactos</Nav.Link>
        </BrowserRouter>
        </Nav>
        </Navbar>
  </Header>
  </>
);

const renderHeader = () => (
  <>
  <Header>
     <Navbar bg="dark" expand="md, lg" fixed="top" variant="dark" >
        <Navbar.Brand>
        <BrowserRouter>
            <Link to="/">
            <img src={logo} width="40%" alt="logo" />
            </Link>
        </BrowserRouter>
        </Navbar.Brand>
        <Nav className="mr-auto, justify-content-end, flex-row"> 
        <BrowserRouter>
            <Nav.Link className="pr-5" to="/">Home</Nav.Link>
            <Nav.Link className="pr-5" to="/">Cards</Nav.Link>
            <Nav.Link className="pr-5" to="/">Contactos</Nav.Link>
        </BrowserRouter>
        </Nav>
        </Navbar>
  </Header>
  </>
);


export default () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
      <Header>
          {isHome
          ? renderHomeHeader()
      : renderHeader()
      }
      </Header>
  )
}
  
 