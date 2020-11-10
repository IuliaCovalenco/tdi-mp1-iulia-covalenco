import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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
          <Link to="/">
            <img src={logo} width="40%" alt="logo" />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto, justify-content-end, flex-row"> 
          <Nav.Link className="pr-5" href="/">Home</Nav.Link>
          <Nav.Link className="pr-5" href="/paginas/pag1">Cards</Nav.Link>
          <Nav.Link className="pr-5" href="/paginas/about">About</Nav.Link>
          <Nav.Link className="pr-5" href="/paginas/cart1">Contacts</Nav.Link>          
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
      : renderHomeHeader()
      }
      </Header>
  )
}
  
 