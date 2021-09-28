import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./SmallCard.css";
import {FormattedMessage} from 'react-intl'
import { Link } from "react-router-dom";
import styled from "styled-components";
function SmallCard(props) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <CardContainer
      data-aos-once="true"
      data-aos="zoom-in"
      data-aos-delay="200"
      data-aos-offset="200"
    >
      <Link to="/">
        <CardBackground></CardBackground>
        <CardWrapper>
          <CardContent>
            <Inner>
              <ImgWrapper>
                <ImgRatio>
                  <CardImg src={props.image} alt="" />
                </ImgRatio>
              </ImgWrapper>

              <Title>{props.title} </Title>
              <Description>{props.text}</Description>
            </Inner>
          </CardContent>

          <FooterWrapper>
            <FooterBackground />

            <FooterInner>
              <Label><FormattedMessage id="button.details"/></Label>
           
            </FooterInner>
          </FooterWrapper>
        </CardWrapper>
      </Link>
    </CardContainer>
  );
}

export default SmallCard;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  transform: translateZ(1000px);
  width: 100%;
  transition: 0.4s cubic-bezier(0.2, 0.82, 0.2, 1);
  &:hover {
    transform: scale(1.04) !important;
  }

  a {
    display: block;
    position: relative;
    width: 100%;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    list-style: none;
    cursor: pointer;
    outline: none;
    opacity: 1;
    transform: perspective(1000px);
  }
`;

const CardBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1 1;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px 24px 32px;
  width: 100%;

  position: relative;
  display: flex;
  transform: translateZ(1000px);
  width: 100%;
  transition: 0.4s cubic-bezier(0.2, 0.82, 0.2, 1) !important;
  &:hover {
    transform: scale(1.04) !important;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 144px;
  max-height: 53px;
  margin-bottom: 24px;
  align-self: center;
  /* padding-bottom: 40%; */
`;

const ImgRatio = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 40%;
`;

const CardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  opacity: 1;
  visibility: inherit;
`;

const Title = styled.h1`
  font-family: "Effra-ar";

  @media (min-width: 992px) {
    font-size: 23px;
    line-height: 1.5;
  }
  font-weight: 600;

  font-size: 23px;
  line-height: 1.5;

  color: #8d1cb8;
`;

const Description = styled.p`
  font-family: "Effra-ar";
  font-size: 17px;
  line-height: 22px;
  font-weight: 400;

  @media (min-width: 992px) {
    font-size: 17px;
  }
  color: #9c45da;
  margin-top: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FooterWrapper = styled.div`
  transform-style: preserve-3d;
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  padding: 24px 22px 24px 35px;
  margin-top: auto;
  box-sizing: border-box;
`;

const FooterBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #e7edf1;
  top: 0;
  left: 0;
  display: block;
`;

const FooterInner = styled.div`
  text-decoration: none;
  display: flex;
  align-items: center;
  svg {
    width: 11px;
    height: 12px;
    transform-origin: center;

    margin-left: 14px;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    will-change: transform;
    fill: #13bb70;

    &:hover {
      transform:  translateX(5px) translateZ(0);
    }
  }
`;

const Label = styled.span`
  font-family: "Effra-ar";
  font-size: 11px;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 700;
  color: #13bb70;
  @media (min-width: 992px) {
    font-size: 13px;
  }
`;
