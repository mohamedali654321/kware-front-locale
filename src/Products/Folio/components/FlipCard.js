import React from 'react'
import styled from 'styled-components'
function FlipCard() {
    return (
        <Container>
       <Card>
           <Front>FRONT</Front>
           <Back>BACK</Back>
       </Card>
   </Container>

    )
}

export default FlipCard



const Container=styled.div`
margin: 0  ;
    display: flex;
    justify-content: center;
    align-items: center;
 
    perspective: 1000px;
`;


const Card=styled.div`
 height: 450px;
    width: 350px;
    position: relative;
    justify-content: center;
    transition: all .5s linear;
    transform-style: preserve-3d;
    &:hover{
    transform: rotateY(180deg);
    cursor: pointer;
}
`;

const Front=styled.div`
height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-family: 'Lobster', cursive;
    border-radius: 10px;
    position: absolute;
    background: #5c2d91;
    z-index: 2;
    backface-visibility: hidden;
`;


const Back=styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3em;
    font-family: 'Lobster', cursive;
    border-radius: 10px;
    position: absolute;
    background: #552a86;
    z-index: 1;
    transform: rotateY(180deg);
`;