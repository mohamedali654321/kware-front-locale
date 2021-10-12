import React from 'react'
import styled from 'styled-components'


function FlipBook() {
    return (
        <Container>
        <ImgBox>
            <img src="data:image/jpeg;base64,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" alt=""/>
        </ImgBox>
        <Details>
            <h2>Juan Velasquez</h2>
            <h4>Cheat day</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi vero animi perferendis dignissimos veniam praesentium corrupti tenetur, amet nam expedita.  Consequuntur?</p>
            
        </Details>
    </Container>
    )
}

export default FlipBook

const Container =styled.div`
 position: relative;
    /* margin:20px 0; */
    width: 400px;
    height: 450px;
    border-radius: 20px;
    background: #fff;
    transform-style: preserve-3d;
    transform: perspective(2000px);
    transition: 1s;
    box-shadow: inset 300px 0 50px rgba(0,0,0,.5);
    &:hover{
        
    z-index: 1000;
    transform: perspective(2000px) rotate(0deg);
    box-shadow: inset 20px 0 50px rgba(0,0,0,.5);
}
    

`;

const ImgBox=styled.div`
 position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    /* border: 1px solid #000; */
    box-sizing: border-box;
    transform-origin: left;
    z-index: 1;
    transition: 1s;

    &:hover {
    transform: rotateY(-135deg);
}

img {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
   
}

`;


const Details=styled.div`
 position: absolute;
    top: 10%;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
    /* border: 1px solid lightslategrey; */
    h2{
    text-align: center;
    font-weight: 500;
}

h4{
    text-align: center;
    font-weight: bold;
}
.card .details p{
    text-align: center;
}

`;