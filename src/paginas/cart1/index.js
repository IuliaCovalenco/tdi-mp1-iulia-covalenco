import React from 'react';
import styled from 'styled-components';
import Row from "react-bootstrap/esm/Row";
import Header from '../components/header'


const Section = styled.section`
text-align: center;
display: flex;
top: 0;
position: absolute;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
`

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`
const Cool = styled.article`
    
    height: 30rem;
    position: absolute; 
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: 10;
    border: solid white;
    background-color: white;
    opacity: 0.6;
    color: black;
    
`
const Coool = styled.article`
    
    height: 30rem;
    position: absolute; 
    transform: translate(-49%, -48%);
    top: 50%;
    left: 50%;
    z-index: 10;
    border: solid white;
    opacity: 0.6;
    color: black;
    
`


export default () => {

    return(
        <Container className="container-fluid w-100 "> 
            <Header/>
            <Row>
            <Section className="col-lg-6 col-md-6" style={{ backgroundColor: '#7f5e67' }}></Section>
            </Row>
            <Row>
            <Cool className="col-lg-6 col-md-6">
                <h1></h1>
                <p>
                </p>
                </Cool>
            </Row> 
            <Row>
            <Coool className="col-lg-6 col-md-6"></Coool>
            </Row>   
        </Container>


    )
}