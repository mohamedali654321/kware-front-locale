import React from "react";
import "./client.css";
import styled from "styled-components";
function Clients() {
  return (
    <Container>
      <Wrapper>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            height="100"
            width="250"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            height="100"
            width="250"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
            alt=""
          />
        </ImgSlide>
        <ImgSlide>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
            alt=""
          />
        </ImgSlide>
      </Wrapper>
    </Container>
  );
}

export default Clients;
const Container = styled.div`
  height: 50vh;
  margin: auto;
  overflow: hidden;
  /* position: relative; */
  width: auto;
  max-width: 1440px;

  &::before {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    left: 0;
    top: 0;
  }
  &::after {
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 2;
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
`;

const Wrapper = styled.div`
padding: 20px;
  margin-left: auto;
  margin-right: auto;
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);

  &:hover {
    animation-play-state: paused;
  }
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-250px * 7));
    }
  }
`;

const ImgSlide = styled.div`
  height: 100px;
  width: 250px;
  perspective: 100px;
  img {

    @media (min-width: 992px) {
        width: 250;
    height: 100;
  }
    width: 100%;
    width: 150;
    height: 50;
    transition: transform 1s;
    &:hover {
      transform: translateZ(20px);
    }
  }
`;
