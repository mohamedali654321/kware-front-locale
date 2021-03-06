import React from 'react'
import styled from 'styled-components'
import TimeLine from './TimeLine';
export default function Slice(props) {
    return (
        <Container>
       
            <Text>{props.title}</Text>
           
         
            
        </Container>
    )
}

const Container=styled.div`



font-family: 'Effra-ar';
position: relative;
max-width: 980px;
width: 120px;

display: flex;
flex-direction: row;
background-color: tomato;

font-size: 30px;
height: 50px;
justify-content: center;
text-align: center;
align-items: center;
padding: 5px;
border-radius: 10px;
color: #fff;
transition: .5s cubic-bezier(0.2, 0.82, 0.2, 1);
cursor: pointer;
&:hover{
    transform: scale(1.1) translateY(-20px);
    background-color: #5c2d91;
    border: 1px solid tomato;
}

`;

const Text =styled.p`
font-family: 'Effra-ar';
font-size: 17px;
font-weight: 600;

justify-content: center;
text-align: center;
color: #fff;
position: relative;
margin: 20px 10px 10px 20px;



`

const Wrapper=styled.div`
position: absolute;
display: flex;
flex-direction: column;
`;