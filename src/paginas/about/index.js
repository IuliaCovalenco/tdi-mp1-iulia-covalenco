import React from "react";
import styled from "styled-components";
import Header from '../components/header';
import img from '../imagem/img4.jpg';
/*import Container from 'react-bootstrap/esm/Container'*/
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";



const Section = styled.section`
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(20px + 2vmin);
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
        <Container className="container-fluid w-100 "> 
            <Header/>
            <Row className="row">
            <Section>About</Section>
            </Row>
            <Row className="row w-50 pt-5">
<Col> Magic: The Gathering (colloquially known as Magic or just MTG) is a collectible and digital collectible card game created by Richard Garfield.
                Released in 1993 by Wizards of the Coast (now a subsidiary of Hasbro), Magic was the first trading card game and has approximately thirty-five million players 
                as of December 2018, and over twenty billion Magic cards produced in the period from 2008 to 2016, during which time it grew in popularity.
Each game of Magic represents a battle between wizards known as planeswalkers who cast spells, use artifacts, and summon creatures as depicted on individual cards in order 
to defeat their opponents, typically, but not always, by draining them of their 20 starting life points in the standard format. Although the original concept of the game 
drew heavily from the motifs of traditional fantasy role-playing games such as Dungeons & Dragons, the gameplay bears little similarity to pencil-and-paper adventure games, 
while simultaneously having substantially more cards and more complex rules than many other card games.
</Col>
               <Col>Magic can be played by two or more players, either in person with printed cards or on a computer, smartphone or tablet with virtual cards through the Internet-based 
software Magic: The Gathering Online or other video games such as Magic: The Gathering Arena. It can be played in various rule formats, which fall into two categories: 
constructed and limited. Limited formats involve players building a deck spontaneously out of a pool of random cards with a minimum deck size of 40 cards; in constructed formats,
 players create decks from cards they own, usually with a minimum of 60 cards per deck.</Col>
            </Row>
        </Container>
    )
}