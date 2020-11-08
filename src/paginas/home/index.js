import React, { useState, useEffect } from 'react';
import Loading from '../components/loading/loading.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import fundo from './img2.jpg';
import Header from '../components/header';





  const Button = styled.button`
        padding: 1rem;
        background-color: transparent;
        font-size: calc(10px + 2vmin);
        border-style: groove;
        
        & : active {
          color: black; 
        }
        & : visited {
          color: black;
        }
        & : hover {
          color: white; 
        }
    
  `

  
const Section = styled.section`
        padding-top: 10rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(20px + 2vmin);
`


const Container = styled.section`
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(20px + 2vmin);
        min-height: 100vh;
        background-image: url(${fundo});
      
`


export default () => {

    const [isLoading, setIsLoading] = useState(false)

    const loadValor = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2500)
      }
  
      useEffect(loadValor, [])

    return(
    <>
    {!isLoading ? (
      <>
      <Header />
      <Container>
        <Section>
        <p>
          EVERY TEAR SHED IS A FROP OF IMMORTALITYS
        </p>
        <Button>
        <Link style={{ textDecoration: 'none' }} to="/paginas/pag1">
          view cards
          </Link>
        </ Button>
        </Section> 
        </Container>
        </>
    )
      :  <Loading />}
    </>

    )
}
