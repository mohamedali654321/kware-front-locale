import React, { useEffect, useState } from "react";
import SmallCard from "../SmallCard/SmallCard";
import "./SixthSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FormattedMessage } from "react-intl";
import ShowMoreButton from "./components/ShowMoreButton";
import styled from "styled-components";
import MainProductHeader from "../Steps/AnimateBackground/MainProductHeader";
export default function SixthSection() {
  const [visible, setVisible] = useState(6);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 6);
  };
  useEffect(() => {
    AOS.init();
  });
  const card = [
    {
      title: "Gatsby",
      text: "Gatsby is a blazing fast modern site generator for React.",
      imgSrc: "./images/singleProduct/Gatsby-Monogram_dae6f92141.svg",
    },
    {
      title: "Vue.js",
      text: " Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.",
      imgSrc: "./images/singleProduct/vuejs-logo_1c5c570e34.svg",
    },

    {
      title: "Nuxt.js",
      text: "Nuxt.js is a free and open-source web application framework based on Vue.js, Node.js, Webpack, and Babel.js.",
      imgSrc: "./images/singleProduct/nuxt_2021_e30c8bb5e6.svg",
    },

    {
      title: "Next.js",
      text: "Next.js is a minimalistic framework for server-rendered React applications as well as statically exported React apps.",
      imgSrc: "./images/singleProduct/Nextjs-logo_4e05f3a597.svg",
    },

    {
      title: "React",
      text: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
      imgSrc: "./images/singleProduct/React-logo_663c3a4121.svg",
    },

    {
      title: "Angular",
      text: "Angular is a platform for building mobile and desktop web applications.",
      imgSrc: "./images/singleProduct/angular_d2355b8666.png",
    },
  ];
  return (
    <Container>
      <MainProductHeader />

     
        <Wrapper>
          <CardGrid>
            {card.slice(0, visible).map((card, index) => (
              <SmallCard
                title={card.title}
                text={card.text}
                image={card.imgSrc}
                index={index}
              />
            ))}
          </CardGrid>
          </Wrapper>
       
      <ShowMoreButton onClick={showMoreItems} />
      </Container>
  );
}

const Container = styled.div`
  padding-bottom: 90px;
  margin-top: 84px;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;
const Wrapper=styled.div`
z-index: 1;
margin-top: 84px;
position: relative;
    margin-left: auto;
    margin-right: auto;
    width: 83.3333333333%;
    max-width: 1200px;
    z-index: 1;

    max-width: 980px;


    @media (min-width: 992px) {
    
      width: 81.6666666667%;
    
  }

`;
const CardGrid = styled.div`
  width: 100%;
  margin: 50px 0 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 35px;
  justify-content: center;
  padding-bottom: 120px;
  position: relative;
  opacity: 1;
  transform: translateZ(0);
  /* grid-gap: 24px; */
  @media (min-width: 768px) {
    margin: 85px 0 0;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, minmax(25%, 1fr));
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, minmax(25%, 1fr));
  }
`;
