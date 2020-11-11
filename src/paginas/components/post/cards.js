import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Row from "react-bootstrap/esm/Row";
import { getPosts } from '../../../store/posts/actions';
import Header from '../header';
import { useSelector } from 'react-redux';
import { useParams} from 'react-router-dom';
import Footer from '../footer'

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
const P = styled.footer`
  text-align: right;

`



export const Cards = () => {
  const dispatch = useDispatch();
  const { cardId } = useParams();

  const card = useSelector(state => {
    return state.cards.cards.find(card => card.id === cardId)
  })

  console.warn(card);
  useEffect((card) => {
    if (card) {
      return;
    }

    console.warn("here")
    dispatch(getPosts());
  }, [dispatch]);

  if (!card) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
console.warn(card);
  return(

        <Container className="container-fluid w-100 "> 
        
            <Header/>
            <Row>
            <Section className="col-lg-6 col-md-6" style={{ backgroundColor: '#7f5e67' }}></Section>
            </Row>
            <Row>
            <Cool className="col-lg-6 col-md-6 col-sm-12">
                <h1><i>{card.name}</i></h1>
                <h2>{card.setName}</h2>
                <h3>{card.rarity}</h3>
                <p style={{ fontSize: '1.5rem'}}>{card.text}</p>
                <P>Artist: <i>{card.artist}</i></P>
                </Cool>
            </Row> 
            <Row>
            <Coool className="col-lg-6 col-md-6"></Coool>
            </Row>   
            <Footer />
        </Container>
        

    )
}

export default Cards