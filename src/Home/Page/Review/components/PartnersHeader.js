import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
function PartnersHeader(props) {
  return (
    
    <Container>
      <Wrapper>
        <TextWrapper>
          <Title>
            {" "}
            {props.title}
          </Title>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
}

export default PartnersHeader;

const Container = styled.div`
  max-width: none;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  max-width: none;
  width: 100%;
  padding: 135px 0 105px;
  padding: 70px 0 60px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background: #ebf4fd;

  @media (min-width: 992px) {
    padding: 135px 0 105px;
  }

  /* border-top: 1px solid #e1edf6; */
  background: -webkit-linear-gradient(268.4deg, #f7fbfe 0.74%, #fff 76.68%);
  background: -moz-linear-gradient(268.4deg, #f7fbfe 0.74%, #fff 76.68%);
  background: linear-gradient(181.6deg, #f7fbfe 0.74%, #fff 76.68%);

  z-index: 1;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  position: static;
  max-width: 1200px;
  z-index: 1;
  width: 81.6666666667%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  @media (min-width: 992px) {
    width: 81.6666666667%;
  }
`;
const TextWrapper = styled.div`
  opacity: 1;
  width: 100%;
  max-width: 690px;
  margin: 0 auto 60px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Effra-ar";

  font-weight: 700;
  line-height: 140%;
  @media (min-width: 992px) {
    line-height: 56px;
    font-size: 43px;
  }

  text-align: center;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  -webkit-transform: translateZ(1000px);
  -moz-transform: translateZ(1000px);
  transform: translateZ(1000px);
  position: relative;
  margin-bottom: 35px;
  &:last-child {
    margin-bottom: 0;
  }

  font-size: 33px;
  line-height: 1.19;
  color: #8d1cb8;

  position: relative;
  display: inline-block;
  opacity: 1;
  transform: perspective(1000px) translate3d(0px, 0px, 0px);
`;
