import React from "react";
import styled from "styled-components";
import Header from '../components/header';
import img from '../imagem/img4.jpg';
/*import Container from 'react-bootstrap/esm/Container'*/
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Footer from '../components/footer'



const Section = styled.section`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(30px + 2vmin);
min-height: 40vh;
min-width: 100vw;
background-image: url(${img});
`

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
`

export default () => {

    return (
        <>
        <Container className="container-fluid w-100 "> 
            <Header/>
            <Row className="row">
            <Section>About</Section>
            </Row>
            <Row className="row w-50 pt-5">
<Col> <p>With ethe passage of time, the use of the internet around the world, is increasingly inclined towards a famous perspective of the consumption of information, during the promotion of its products. Therefore, it is extremely important to be able to create accessible webpages to target audience, and to allow quick absorption of Information, capture the user’s attention over certain period. 
This small project, was carried out in the 1st semester of the 12st cycle degree in Communication Multimedia from the University of Aveiro, inserted in the TDI discipline, and supervised by professors Carlos Santos and João Abreu.
</p>
</Col>
               <Col><p>The main purpose of this project, consists on the elaboration of simple web page, through the use of :</p>
    <ul>
        <li>React, for interface construction</li>
        <li>Create React App, to initialize the project</li>
        <li>Styled Components, to stylize the project</li>
        <li>React Router, implementation of the navigation though pages</li>
        <li>Redux, to control application’s state</li>
    </ul>
</Col>
            </Row>
            
        </Container>
        <Footer  />
        </>
        
    )
}