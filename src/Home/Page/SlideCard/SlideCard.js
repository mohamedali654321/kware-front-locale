import React, { useEffect } from "react";
import "./SlideCard.css";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function SlideCard(props) {
  useEffect(() => {
    AOS.init();
  });
  return (
    <CardContainer
      data-aos-delay="200"
      data-aos-duration="1000"
      data-aos-once="true"
      data-aos="zoom-in-right"
    >
      <Link to="/">
      
       
          <Wrapper>
           
              <div class="reviewCard_picture" >
                <div
                  class=" reviewCardImg_ratio reviewCardImg_fluid"
                  style={{ touchAction: "pan-y" }}
                >
                  <img
                    class=" styles_Img__2JZ2e reviewCardImage reviewCardImage_contain reviewCardImage_left"
                    src={props.image}
                    style={{
                      opacity: 1,
                      visibility: "inherit",
                      touchAction: "pan-y",
                    }}
                  />
                </div>
              </div>
              <div class="reviewCardText" style={{ touchAction: "pan-y" }}>
                <p
                  class=" reviewCardTextWrapper reviewCardText_description reviewCardText_fontSize reviewCardText_color"
                  style={{ touchAction: "pan-y" }}
                >
                  {props.text}
                </p>
                <div
                  class=" reviewCard_author styles_author__3Xq5h"
                  style={{ touchAction: "pan-y" }}
                >
                  <div
                    class=" reviewCard_authorCirclePicture reviewCard_authorPicture"
                    style={{ touchAction: "pan-y" }}
                  >
                    <div
                      class="reviewCard_authorPictureStyle"
                      style={{ touchAction: "pan-y" }}
                    >
                      <div
                        class="reviewCardImg_ratio"
                        style={{
                          paddingBottom: "100%",
                          touchAction: "pan-y",
                        }}
                      >
                        <img
                          class=" styles_Img__2JZ2e reviewCardImage reviewCard_authorPictureCover reviewCard_authorPictureCenter"
                          src={props.authorImg}
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            touchAction: "pan-y",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="reviewCardAuthor_content"
                    style={{ touchAction: "pan-y" }}
                  >
                    <span
                      class="reviewCardAuthor_info"
                      style={{ touchAction: "pan-y" }}
                    >
                      <span
                        class=" reviewCardTextWrapper reviewCardAuthor_name reviewCardAuthor_fontSize reviewLabel_color"
                        style={{ touchAction: "pan-y" }}
                      >
                        {props.authorName}
                      </span>
                      <span
                        class=" reviewCardTextWrapper reviewAuthorCompany reviewCardAuthor_fontSize reviewCardText_color"
                        style={{ touchAction: "pan-y" }}
                      >
                        , {props.authorJob}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            
            </Wrapper>
         
      </Link>
      <br />
      <br />
    </CardContainer>
  );
}

export default SlideCard;

const CardContainer = styled.div`
  flex-shrink: 0;
  -moz-box-flex: 0;
  flex-grow: 0;
  max-width: 100vw;
  opacity: 1;
  transform: translate(0px, 0px);
  @media (min-width: 992px) {
    width: 100%;
    max-width: inherit;
    margin: 0 0 24px;
  }

  a {
    display: block;
    position: relative;
    /* width: 100%; */
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    list-style: none;
    cursor: pointer;
    outline: none;

    width: 90%;
    max-width: 600px;
    margin: 0 auto;

    @media (min-width: 992px) {
      width: 100%;
      max-width: none;
    }
  }
`;

const Wrapper=styled.div`
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
    -moz-box-flex: 1;
    flex: 1 1;
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
`;

