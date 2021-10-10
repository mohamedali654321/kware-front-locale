import React, { useRef ,useEffect } from "react";
import styled, { css } from "styled-components";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const isOdd = (number) => {
  let reminder = number % 2;
  if (reminder == 0) return false;
  else return true;
};

function Product(props) {
  const { index } = props;
  const revealRefs=useRef([]);
  revealRefs.current=[];
  const addToRef=(el)=>{
    if(el && !revealRefs.current.includes(el)){
            revealRefs.current.push(el)
  
    }
  console.log(revealRefs.current)
  
  };
  
useEffect(()=>{
revealRefs.current.forEach((el,index)=>{
gsap.fromTo(el,{autoAlpha:0},{autoAlpha:1,duration:1,ease:'none',scrollTrigger:{
  id:index,
  trigger:el,
  start:"top center",
  toggleActions:"play none none reverse",
  markers:true
}});


})

},[])
  return (
    <Container >
      <Wrapper  index={index}>
        <Content ref={addToRef}  >
          <Label>{props.title}</Label>
          <Title>{props.slogan}</Title>

          <Description  >
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
          </Description>
        </Content>

        <AssetContainer>
          <Asset
            src="./images/hero/hp-step1-2D_aeea862f0b.svg"
            alt="Illustration of the Strapi Content-type fields"
          />
        </AssetContainer>
      </Wrapper>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  -webkit-perspective: 800px;
  perspective: 800px;
  padding-bottom: 80px;
  overflow: hidden;
  margin-top: 20px;
  @media (min-width: 992px) {
    margin-top: 0;
    padding-bottom: 0;
  }
`;

const Wrapper = styled.div`
margin: 0 auto 100px;
  @media (min-width: 992px) {
   margin-top: 20px;
    ${(props) =>
      isOdd(props.index) === false
        ? css`
            -moz-box-orient: horizontal;
            -moz-box-direction: reverse;
            flex-direction: row-reverse;
            min-height: 100vh;
          `
        : css`
            -moz-box-orient: horizontal;
            -moz-box-direction: normal;
            flex-direction: row;
            
            min-height: 100vh;
          `}
  }

  display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;

  width: 83.3333333333%;
  max-width: 1200px;
  z-index: 1;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  /* margin: 0 auto 100px; */
`;
const Content = styled.div`
  opacity: 1;
  -webkit-perspective: 1000px;
  perspective: 1000px;
  margin-top: 30px;
  z-index: 1;
  position: relative;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 45px;
  @media (min-width: 992px) {
    width: 40%;
    padding: 200px 45px;
  }
`;
const Label = styled.p`
  font-family: Effra-ar;
  font-size: 17px;

  

  @media (min-width: 992px) {
    font-size: 17px;
  }

  font-family: Effra-ar;
  color: #f6b73e;
  font-size: 17px;
  font-weight: 600;
  line-height: 30px;
  opacity: 1;
  transform: translate(0px, 0px);
`;

const Title = styled.h1`
  font-family: Effra-ar;

  @media (min-width: 992px) {
    font-size: 33px;
    font-size: 21px;
  }

  margin-top: 48px;
  font-size: 17px;
  font-weight: 600;
  line-height: 30px;
  color: #8d1cb8;

  display: block;
  text-align: start;
  position: relative;
  opacity: 1;
  transform: translate(0px, 0px);
`;

const Description = styled.p`
  font-family: Effra-ar;
  font-size: 17px;
  font-weight: 400;
  line-height: 28px;
  @media (min-width: 992px) {
    font-size: 17px;
  }
  margin-top: 40px;
  color: #9c45da;

  display: block;
  text-align: start;
  position: relative;
  opacity: 1;
  transform: translate(0px, 0px);
`;

const AssetContainer = styled.div`
  z-index: 10;
  position: relative;
  width: 100%;
  margin: 40px auto 0;
  width: 100%;
  @media (min-width: 992px) {
    display: none;
    width: 60%;
  }

  padding-bottom: 76.98744769874477%;
`;

const Asset = styled.img`
  opacity: 1;
  visibility: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
