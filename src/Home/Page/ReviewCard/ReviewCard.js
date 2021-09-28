import React, { useEffect } from "react";
import "./ReviewCard.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function ReviewCard(props) {
  useEffect(() => {
    AOS.init();
  });

  return (
    <Container
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos="zoom-in-right"
    >
      <Link to="/">
        <Background />
        <Wrapper>
          <InnerWrapper>
            <TextWrapper>
              <ImgWrapper>
                <Img src={props.image} alt="Societe Generale Logo " />
              </ImgWrapper>
              <Text>{props.text}</Text>
              <AuthorWrapper>
                <AvatarWrapper>
                  <div style={{ paddingBottom: "100%" }}>
                    <Img src={props.authorImg} alt="" />
                  </div>
                </AvatarWrapper>

                <AuthorContent>
                  <span>
                    <AuthorLabel>{props.authorName}</AuthorLabel>
                    <AuthorLabel
                      style={{ color: "#9c45da", fontWeight: "500" }}
                    >
                      , {props.authorJob}
                    </AuthorLabel>
                  </span>
                </AuthorContent>
              </AuthorWrapper>
            </TextWrapper>
            </InnerWrapper>
          </Wrapper>
      </Link>
    </Container>
  );
}

export default ReviewCard;

const Container = styled.div`
  flex-shrink: 0;
  -moz-box-flex: 0;
  flex-grow: 0;
  max-width: 100vw;
  @media (min-width: 992px) {
    width: 100%;
    max-width: inherit;
    margin: 0 0 24px;
  }
  a {
    display: block;
    position: relative;
    width: 100%;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    list-style: none;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    cursor: pointer;
    outline: none;
    &:hover {
      transform: scale(1.04) translateY(-30px);
    }

    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    @media (min-width: 992px) {
      width: 100%;
      max-width: none;
    }
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #fff;
  -webkit-box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
`;

const Wrapper = styled.div`
 display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
 

`;

const InnerWrapper=styled.div`
display: -moz-box;
  display: flex;
  -moz-box-flex: 1;
  flex: 1 1;


  

`;
const TextWrapper=styled.div`
 width: 100%;
  position: relative;
  display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
  -moz-box-align: start;
  align-items: flex-start;
  padding: 38px 35px;

`
const ImgWrapper = styled.div`
  width: 50%;
  height: 40px;
  position: relative;
`;

const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: left;
  opacity: 1;
  visibility: inherit;
`;


const Text = styled.p`
  font-family: Poppins, serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 28px;
  margin-top: 30px;
  text-align: left;

  @media (min-width: 992px) {
    font-size: 15px;
  }
  font-size: 15px;
  line-height: 22px;
  color: #9c45da;
`;

const AuthorWrapper = styled.div`
  display: -moz-box;
  display: flex;
  -moz-box-orient: horizontal;
  -moz-box-direction: normal;
  flex-direction: row;
  -moz-box-align: center;
  align-items: center;
  margin-top: 20px;
`;

const AvatarWrapper = styled.div`
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #5e709d;

  width: 65px;
  flex-shrink: 0;
  margin-right: 20px;

  position: relative;
`;

const AuthorContent = styled.div`
  display: -moz-box;
  display: flex;
  -moz-box-orient: vertical;
  -moz-box-direction: normal;
  flex-direction: column;
`;

const AuthorLabel = styled.span`
  font-family: "Effra-ar";
  font-size: 13px;
  font-weight: 700;
  line-height: 28px;
  color: #8c4bff;
  @media (min-width: 992px) {
    font-size: 13px;
  }
`;
