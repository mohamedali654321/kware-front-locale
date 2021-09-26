import React from "react";
import styled from "styled-components";
import { FormattedMessage } from "react-intl";
import Tetris from "./Tetris";
export default function MainProductHeader() {
  return (
    <Container>
      <Wrapper>
        <TextWrapper>
          <Label
            data-aos-delay="200"
            data-aos-duration="200"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos="zoom-in"
          >
            <FormattedMessage id="home.steps" />
          </Label>

          <Title
            data-aos-delay="200"
            data-aos-duration="200"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos="zoom-in"
          >
            <FormattedMessage id="home.steps.title" />
          </Title>

          <Text
            data-aos-delay="200"
            data-aos-duration="200"
            data-aos-offset="200"
            data-aos-once="true"
            data-aos="zoom-in"
          >
            <FormattedMessage id="home.steps.description" />
          </Text>
        </TextWrapper>
      </Wrapper>
     <Tetris/>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  background: -webkit-linear-gradient(
    285deg,
    #ebf4fd,
    hsla(0, 0%, 100%, 0) 45%
  );
  background: -moz-linear-gradient(285deg, #ebf4fd 0, hsla(0, 0%, 100%, 0) 45%);
  background: linear-gradient(165deg, #ebf4fd, hsla(0, 0%, 100%, 0) 45%);

  svg {
    -webkit-transform: translate(-33.3333333333%, -33.3333333333%);
    -moz-transform: translate(-33.3333333333%, -33.3333333333%);
    transform: translate(-33.3333333333%, -33.3333333333%);
    left: 0;
  }

  padding: 70px 0 60px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #ebf4fd;
  background: -webkit-linear-gradient(
    260deg,
    #ebf4fd,
    hsla(0, 0%, 100%, 0) 45%
  );
  background: -moz-linear-gradient(260deg, #ebf4fd 0, hsla(0, 0%, 100%, 0) 45%);
  background: linear-gradient(190deg, #ebf4fd, hsla(0, 0%, 100%, 0) 45%);

  @media (min-width: 992px) {
    padding: 135px 0 105px;
  }

  padding: 135px 0 105px;

  position: relative;
  margin-left: auto;
  margin-right: auto;

  width: 83.3333333333%;
  max-width: 1200px;
  z-index: 1;
`;

const Wrapper = styled.div`
  width: 81.6666666667%;
  max-width: 980px;
  @media (min-width: 992px) {
    width: 81.6666666667%;
  }

  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const TextWrapper = styled.div`
  opacity: 1;
  width: 100%;
  max-width: 690px;
  margin: 0 auto 60px;
  margin: auto;

  text-align: center;
`;

const Label = styled.div`
  font-family: Effra-ar;
  font-size: 13px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;

  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  color: #8c4bff;
  text-align: left;
  -webkit-transform: translateZ(1000px);
  -moz-transform: translateZ(1000px);
  transform: translateZ(1000px);
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 992px) {
    font-size: 15px;
  }

  position: relative;
  display: inline-block;
  opacity: 1;
  transform: perspective(1000px) translate3d(0px, 0px, 0px);
`;

const Title = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;

  -webkit-transform: translateZ(1000px);
  -moz-transform: translateZ(1000px);
  transform: translateZ(1000px);
  :last-child {
    margin-bottom: 0;
  }
  position: relative;
  margin-bottom: 35px;

  font-family: Effra-ar;
  font-size: 33px;
  font-weight: 700;
  line-height: 140%;

  @media (min-width: 992px) {
    
    line-height: 56px;
    font-size: 45px;
  }

  
  line-height: 1.19;

  color: #8d1cb8;
`;

const Text = styled.div`
  position: relative;
  display: inline-block;
  opacity: 1;
  transform: perspective(1000px) translate3d(0px, 0px, 0px);
  text-align: center;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;

  font-size: 17px;
  -webkit-transform: translateZ(1000px);
  -moz-transform: translateZ(1000px);
  transform: translateZ(1000px);
  padding: 0 6px;
  margin-bottom: 57px;
  @media (min-width: 992px) {
    padding: 0;
    font-size: 23px;
  }

  &:last-child {
    margin-bottom: 0;
  }
  font-family: Effra-ar;
  font-size: 19px;
  font-weight: 400;
  line-height: 28px;
  color: #9c45da;
  word-break: break-word;
  white-space: pre-line;
`;


const TetrisContainer=styled.div`
display: block;
  width: 60px;
  height: 60px;
  fill: #8c4bff;
  @media (min-width: 992px) {
  
    width: 90px;
    height: 90px;
  
}


-webkit-transform: translate(-33.3333333333%, -33.3333333333%);
  -moz-transform: translate(-33.3333333333%, -33.3333333333%);
  transform: translate(-33.3333333333%, -33.3333333333%);
  left: 0;
  position: absolute;
  top: 0;
  top: inherit;
  bottom: 0;

  right: 0;
  -webkit-transform: translate(33.3333333333%, -33.3333333333%);
  -moz-transform: translate(33.3333333333%, -33.3333333333%);
  transform: translate(33.3333333333%, -33.3333333333%);

`;