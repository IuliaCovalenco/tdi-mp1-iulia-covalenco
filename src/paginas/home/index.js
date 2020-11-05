import React, { useState, useEffect } from 'react';
import Loading from './loading.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Index = styled.ul`
    font-size: 2rem;
    color: black;
    margin-left: 2rem;
`
const Li = styled.li`
    weight: 35%;
    color: black; 
    text-decoration: none;
    border-top: 1px solid black; 

    & : active {
      color: black;
    }

    & : visited {
      color: black;
    }

    
    &:last-child {
    border-bottom: 1px solid black;
  }
    `

const valor = ['home', 'about', 'contacts'];

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
        <Index>
          <Li>
          <Link to="/paginas/ex1">Let´s Go</Link>
          </Li>
        </Index>
        <button className='botao'>
        <Link to="/paginas/ex1">Let´s Go</Link>
        </button>
  </>
    )

      :  <Loading />}
    </>

    )
}
