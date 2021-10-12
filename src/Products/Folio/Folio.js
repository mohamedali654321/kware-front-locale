import React from "react";

import Slice from "./components/Slice";
import styled from "styled-components";
import TimeLine from "./components/TimeLine";
import Cont from "./components/Cont";
import FlipBook from "./components/FlipBook";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import MainProductHeader from "../../Home/Page/Steps/AnimateBackground/MainProductHeader";

import Slider from "./components/ImgSlider/Slider";

import { FormattedMessage, useIntl } from "react-intl";
import FlipCard from "./components/FlipCard";
function Folio() {
  const intl = useIntl();
  const Apps = [
    "Users",
    "Inventory",
    "Check in",
    "Check out",
    "Circulation log",
    "Courses",
    "Request",
  ];
  return (
    <Container>
      <h1>ILS Apps</h1>

      <Wrapper>
        <FlipCard />
        <Inner>
          <SliceWrapper>
          {
            Apps.map(app=>(
              <Header title={app} />
            ))
          }
            
          </SliceWrapper>

          <Second>
            <Slider />
          </Second>
          <Footer>
            {Apps.map((app) => (
              <Link>{app}</Link>
            ))}
          </Footer>
        </Inner>
      </Wrapper>
    </Container>
  );
}

export default Folio;

const Container = styled.div`
  position: relative;
  margin-top: 170px;
  width: 100%;
  padding-bottom: 90px;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    align-items: center;
    justify-content: center;
    font-family: "Effra-ar";
    font-size: 43px;
    font-weight: 700px;
    color: #5c2d91;
    text-transform: uppercase;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-left: auto;
  margin-right: auto;
  height: 100%;
  padding: 10px;
  overflow: hidden;
  gap: 30px;
  @media (min-width: 992px) {
    margin-top: 96px;
    flex-direction: row-reverse;
  }
`;

const SliceWrapper = styled.div`
  display: flex;
  justify-content: center;
width: 100%;
margin-left: auto;
margin-right: auto;
  
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  gap: 60px;
  flex-direction: column;
  width: 100%;

  margin-left: auto;
  margin-right: auto;
  /* overflow: hidden; */
`;
const Second = styled.div`
  position: relative;
  margin-top: 50px;
 
  width: 100%;

  text-align: center;
  align-items: center;

  color: #fff;
`;

const Footer = styled.div`
  font-family: "Effra-ar";
  position: relative;
  margin-top: 50px;
  max-width: 780px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* display: flex;  */
  gap: 10px;
  flex-direction: row;
  /* background-color: tomato;  */

  margin-top: 50px;
  font-size: 17px;
  font-weight: 500;
  height: auto;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  padding: 10px;
  color: #fff;
  border-radius: 20px;
  a {
    background-color: tomato;
    padding: 7px;
    border-radius: 10px;
    color: #fff;

    &:hover {
      color: #5c2d91;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;

  gap: 10px;
  width: 100%;
  padding: 20px;
  position: relative;
`;

const Text = styled.p`
  width: 100%;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  color: #000;

  justify-content: flex-start;
`;
