import React from 'react'
import styled from 'styled-components'
function FlipCard() {
    return (
        <Container>
        <Cover>
       
        <Front>
             <Details>
            <h2>Juan Velasquez</h2>
            <h4>Cheat day</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero animi perferendis dignissimos veniam praesentium corrupti tenetur, amet nam expedita.  Consequuntur?</p>
            
        </Details>
        </Front>
        <Back></Back>
        </Cover>
            
        </Container>
    )
}

export default FlipCard


const Container=styled.div`
width: 320px;
height: 400px;
background: tomato;
position: relative;
margin-top: 100px;
perspective: 1000px;
/* border-radius: 20px; */


`;

const Cover=styled.div`
width: 280px;
height: 100%;
position: absolute;
left: 20px;
background-color:#5c2d91 ;
transform: rotateY(-20deg);
transform-style: preserve-3d;
/* border-radius: 20px; */
transform-origin: left;
border: none;
outline: none;
transition: all .5s ease-in;
&:hover{
    transform: rotateY(-180deg);
}

`;


const Front=styled.figure`
margin: 0;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
display: block;
background-color: #000;
/* border-radius: 20px; */
border: none;

`;


const Back=styled.figure`

margin: 0;
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
display: block;
/* border-radius: 20px; */
background-color: green;
transform: rotateY(180deg);
border: none;


`;



const Details=styled.div`
font-family: 'Effra-ar';
font-size: 17px;
font-weight: 400;
 position: absolute;
 color: #fff;
    top: 10%;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    
    h2{
    text-align: center;
    font-weight: 500;
   
}

h4{
    text-align: center;
    font-weight: bold;
}
 p{
    text-align: center;
}

`;