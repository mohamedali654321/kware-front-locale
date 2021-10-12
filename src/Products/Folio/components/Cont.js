import React from 'react'
import styled from 'styled-components'
function Cont(props) {
    return (
        <Container>
       
            <Text>{props.title}</Text>
           
         
            
        </Container>
    )
}

export default Cont



const Container=styled.div`



font-family: 'Effra-ar';
position: relative;
/* max-width: 980px;
width: 100%; */
background-color: inherit;
top: 24px;
font-size: 30px;
padding: 20px;
justify-content: center;
text-align: center;
align-items: center;
padding: 3px;
color: #fff;
transition: .5s cubic-bezier(0.2, 0.82, 0.2, 1);
cursor: pointer;


`;

const Text =styled.p`
font-family: 'Effra-ar';
font-size: 21px;
font-weight: 600;
transform: rotate(90deg);
justify-content: center;
text-align: center;
color: #000;
position: relative;
letter-spacing: 2px;




`