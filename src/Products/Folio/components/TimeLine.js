import React from 'react'
import styled from 'styled-components'
function TimeLine(props) {
    return (
        
          <Container style={props.style}>
              <Wrapper>
                  <Inner></Inner>
              </Wrapper>
          </Container>
        
    )
}

export default TimeLine
const Container=styled.div`
 display: flex;
    justify-content: center;
    align-items: center;
    min-width: 90px;
    
`;


const Wrapper=styled.div`
width: 2px;
    /* height: calc(100% + 2px); */
    margin-top: -1px;
    background-color: tomato;
    position: relative;
    &::after{
        content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    background-color: tomato;
    /* border: 4px solid #fff; */
    transition: all 0.2s ease-in-out;
    }

`;

const Inner=styled.div`

    margin-top: auto;
    margin-bottom: -1px;
    &::after{
        top: 0;
    }
   
`;