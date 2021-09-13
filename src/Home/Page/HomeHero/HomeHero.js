import React, { useEffect } from "react";
import "./HomeHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import Assets from "./Assets";
const HomeHeroContainer = styled.div`
  position: relative;
  margin-bottom: 83px;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  transform: translateZ(0);
`;
const HomeHeroBackground = styled.div`
  z-index: 0;
  position: absolute;
  width: 100%;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
  height: 95%;
  background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(
      209.21deg,
      rgb(87, 15, 141) 13.57%,
      rgb(243, 91, 160) 98.38%
    );
  @media (min-width: 992px) {
    height: 100%;
  }
`;

const Herowave1 = styled.div`
  position: absolute;
  width: 100%;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100%;
  z-index: -1;
  top: 500px;
  background-image: url(https://designcode.io/images/waves/course-wave1.svg);
  height: 600px;
  mix-blend-mode: overlay;
  @media (max-width: 1440px) {
    background-size: 1440px;
  }
  @media screen and (-webkit-min-device-pixel-ratio: 0) and (min-resolution: 0.001dpcm) {
    mix-blend-mode: normal;
    opacity: 0.2;
  }
`;

const HomeHeroWrapper = styled.div`
  z-index: 1;
  position: relative;
  padding: 130px 0;
  width: 83.3333333333%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    max-width: 740px;
  }
  @media (min-width: 992px) {
    padding: 170px 0;
  }
`;
const HeroInnerWrapper = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;

  @media (min-width: 992px) {
    width: 81.6666666667%;
  }
`;

const HeroTitle = styled.h1`
  font-family: Effra-ar;
  font-size: 33px;
  font-weight: 700;
  line-height: 140%;
  text-align: left;
  -webkit-transform: translateZ(1000px);
  -moz-transform: translateZ(1000px);
  transform: translateZ(1000px);
  position: relative;
  margin-bottom: 35px;
  max-width: 400px;
  background: linear-gradient(180deg, #ca8de2 20%, #5d4ce6 90%) !important;
  background-clip: text !important;
  -webkit-background-clip: text !important;
  color: transparent;

  @media (min-width: 992px) {
    font-size: 53px;
    line-height: 56px;
  }
`;
const HeroText=styled.h2`
    font-family: Effra-ar;
    font-size: 17px;
    font-weight: 400;
    line-height: 28px;
    word-break: break-word;
    white-space: pre-line;
    text-align: left;
    max-width: 400px;
    padding: 0 6px;
    margin-bottom: 57px;
    -webkit-transform: translateZ(1000px);
    -moz-transform: translateZ(1000px);
    transform: translateZ(1000px);
    color: #fff;
    position: relative;
     display: inline-block;
    opacity: 1;
     transform: perspective(1000px) translate3d(0px, 0px, 0px);
    &:last-child{
      margin-bottom: 0;
    }
    @media (min-width: 992px) {
      padding: 0;
      font-size: 17px;
    
  }

`;

const KwareTitle=styled.strong`
  font-size: 25px;
  line-height: 1.5;
  margin-left: 10px;
  background: linear-gradient(180deg, #ca8de2 20%, #5d4ce6 90%) !important;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    color: transparent;

`;

const HeroAssetWrapper =styled.div`

    z-index: 0;
    position: relative;
    margin-bottom: -70px;
    -webkit-perspective: 1000px;
    perspective: 1000px;
    transform: translate(0px, 0px);
     opacity: 1;
  @media (min-width: 768px) {
    
      margin-bottom: 0;
    
  }
`;

function HomeHero() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <HomeHeroContainer>
        <HomeHeroBackground>
          <Herowave1 />
          <Herowave1
            style={{
              backgroundImage: " url(https://designcode.io/images/waves/course-wave2.svg)",
                top: "900px",
            }}
          />
        </HomeHeroBackground>
        <HomeHeroWrapper >
          <HeroInnerWrapper>
            <HeroTitle
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-offset="200"
              data-aos-delay="200"
            >
              <FormattedMessage id="homeHero.kware.slogan" />
            </HeroTitle>
            <HeroText
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              
                <KwareTitle>

                 
                
                  <FormattedMessage id="homeHero.kware.name" />
                </KwareTitle>
                <span style={{ fontSize: "20" }}>
                  <FormattedMessage id="homeHero.kware.description" />
                </span>
              
            </HeroText>

           <HeroAssetWrapper>
             <Assets/>
              </HeroAssetWrapper>
          </HeroInnerWrapper>
        </HomeHeroWrapper>
      </HomeHeroContainer>
    </div>
  );
}

export default HomeHero;
