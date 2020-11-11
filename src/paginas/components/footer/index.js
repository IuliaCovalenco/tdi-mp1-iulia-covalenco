import React from 'react';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components';

const Footer = styled.footer`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
bottom: 0;
position: absolute;
background-color: #343a40;
min-width: 100vw;
`

export default () => {

    return (
        <Footer className="font-small  pt-4 mt-4" bg="dark">
      <Container fluid className="text-center text-md-left">
        <Row>
          <Col md="6">
            <h5 className="title">Universidade de Aveiro</h5>
            <p>
             Individual Project : Iulia Covalenco <i>TDI</i>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="footer-copyright text-center py-3">
        <Container fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/IuliaCovalenco/tdi-mp1-iulia-covalenco"> Iulia Covalenco </a>
        </Container>
      </div>
    </Footer>
  );
}
