import React from 'react';
import styled from 'styled-components';




const Container = styled.section`
        padding-top: 8rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(20px + 2vmin);
        min-height: 100vh;
        background-color: #282c34;
`


export default () => {
    return (
        <>
        <Container>
        <div>
            Loading...
        </div>
        </Container>
        
        </>
    )
}