import React from "react";
// import "./NotFound.css";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
function NotFound() {
  return (
    <NotFoundContainer>
    <Shape>
    <i class="fas fa-sad-cry">

    </i>
    </Shape>
    <Container>
        <h1>
            <span >4 </span>
            <i class="fas fa-cog"></i>
            <span > 4</span>
        </h1>
        <p>Oops , Page not found</p>
        </Container>
</NotFoundContainer>
  );
}

export default NotFound;

const NotFoundContainer=styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5c2d91;
  font-family: "Effra-ar";
  background: #fff;
`;
const Shape=styled.div`
 font-size: 3rem;
  animation: animate3 2s linear infinite alternate;
  position: absolute;
  top: 0;
  transform: rotate(180deg);
  &::before {
  content: "404";
  position: fixed;
  top: -50px;
  left: -18px;
  opacity: 0.5;
  transform: rotate(180deg);

}

i{
  font-weight: 900;
  transform: rotate(
180deg);
}

&::after {
  content: "";
  position: fixed;
  top: 20px;
  left: 50%;
  width: 0.5px;
  height: 30vh;
  opacity: 0.5;
  background: #5c2d91;
}

@keyframes animate3 {
  0% {opacity: 0.1}
  100% {
      opacity: 1;
      top:20%
  }
}

`;

const Container=styled.div`
text-align: center;
  user-select: none;
  h1 {
  font-size: 6rem;
}
p {
  margin-top: 20px;
  word-spacing: 5px;
}


span{
  animation: animate2 2s linear infinite alternate;
}

i{

}

@keyframes animate1 {
  0% {opacity: 0;}
  100% {
      opacity: 1;
      transform: rotate(360deg);
  }
}
@keyframes animate2 {
  0% {opacity: 0}
  50% {opacity: 0.5}
  100% {opacity: 1 }
}




`;