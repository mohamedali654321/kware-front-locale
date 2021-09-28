import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
function ShowMoreButton(props) {

  return (
    <Container
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-once="true"
    >
     
        <Wrapper>
          <ButtonBackground/>
          <ShowButton onClick={props.onClick}>
            <FormattedMessage id="homeHero.button.seeMore" />
            <svg
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                fill="#74E4A2"
              ></path>
              <path
                d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                fill="#74E4A2"
              ></path>
            </svg>
          </ShowButton>
          </Wrapper>
    </Container>
  );
}

export default ShowMoreButton;
const Container = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper=styled.div`
display: inline-flex;
    align-items: center;
    transform: translateZ(1000px);
    text-transform: uppercase;
    
    a, button {
    text-transform: uppercase;
  }


  background-color: transparent;
  display: inline-block;

  position: relative;
    display: inline-block;
    background-color: transparent;
    width: 90%;
    transform: translateZ(900px);
    transition: .4s cubic-bezier(0.2, 0.82, 0.2, 1);


    &:hover{
    transform: scale(1.04);
  }


    @media (min-width: 768px) {
    
      width: auto;
    
  }
  background-color: #fff;
    color: #8D1CB8;
`;

const ShowButton = styled.button`
  color: inherit;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  display: inline-block;
  padding: 18px 40px;
  border: none;
  text-decoration: none;
  text-align: center;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  transform: translateZ(1000px);
  font-family: "Effra-ar";
  font-size: 15px;
  font-weight: 500;
  line-height: 1;

  svg {
    width: 11px;
    height: 12px;
    transform-origin: center;
    width: 10px;
    transform: rotate(90deg) !important;
    margin-left: 10px;
    margin-right: -10px;
    path {
      fill: currentColor;
    }
  }
`;


const ButtonBackground=styled.div`
border-radius: 8px;
top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid transparent;
  transition: border 0.2s ease;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 4px rgba(26, 26, 67, 0.1);
  background-color: #fff;
    color: #8D1CB8;
    transform: perspective(800px);


`;