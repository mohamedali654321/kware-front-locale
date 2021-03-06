
import React, { useState } from "react";
import gsap from "gsap"
import { useIntl } from "react-intl";
import styled from "styled-components";

const AnimatedWrapper = styled.div`
  position: relative;
  will-change: transform;
  width: 50%;
  -webkit-transform-origin: center top;
  -moz-transform-origin: center top;
  transform-origin: center top;
  -webkit-transform: rotateY(15deg) rotateX(10deg);
  -moz-transform: rotateY(15deg) rotateX(10deg);
  transform: rotateY(15deg) rotateX(10deg);
  transition: .5s cubic-bezier(0.2, 0.82, 0.2, 1);
  transform: ${(props) =>
    (props.page > 2050 && props.page < 3315) ||  (props.page > 4218 && props.page < 5464) || (props.page > 6554)
      ? "translate(90%, 0px) rotate(-4e-5deg) rotateY(-15deg) rotateX(9.99994deg) "
      : "rotateY(15deg) rotateX(10deg) "};
`;

const AnimatedBackground = styled.div`
  z-index: 1;
  position: relative;
  width: 115%;
  
`;

const ImageRatio = styled.div`
  position: relative;
  width: 100%;
`;
const AnimatedImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 80%;
  object-fit: cover;
  object-position: center;
  opacity: 1;
  visibility: inherit;
  border-radius: 20px;
 
  
`;
const SecondaryAssetsWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -15%;
  left: 20%;
  width: 95%;
  height: 95%;
  will-change: transform;
  -webkit-perspective: 800px;
  perspective: 800px;

  transform: translate(0%, 0px);
`;
const SecondaryBackground = styled.div`
  position: absolute;
  width: 80%;
  height: auto;
  opacity: 0;
  will-change: transform;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
function AnimateBackground() {
  const intl = useIntl();
  const [page, setPage] = useState();


  

  window.addEventListener("scroll", () => {
    setPage(window.pageYOffset);
  });

const renderSwitch=()=>{
  switch(true){
    case (page < 2050 && intl.locale === 'en') : return './images/hero/corners/Folioicons.png'; 
    case (page < 2050 && intl.locale === 'ar') : return './images/hero/corners/Folioicons_Arabic.png'; 
    case (page > 2050 && page < 3315 && intl.locale === 'en') : return './images/hero/corners/Dspace green.png'; 
    case (page > 2050 && page < 3315 && intl.locale === 'ar') : return './images/hero/corners/???? ???????? ????????.png'; 
    case (page > 3315 && page < 4218 && intl.locale === 'en') : return './images/hero/corners/ds.png'; 
    case (page > 3315 && page < 4218 && intl.locale === 'ar') : return './images/hero/corners/str_AR.png';
    case (page > 4218 && page < 5464 && intl.locale === 'en') : return './images/hero/corners/Koha green.png'; 
    case (page > 4218 && page < 5464 && intl.locale === 'ar' ) : return './images/hero/corners/Koha_green_AR.png'; 
    case (page > 5464  && page < 6554 && intl.locale === 'en') : return './images/hero/corners/Vufind.png'; 
    case (page > 5464  && page < 6554 && intl.locale === 'ar' ) : return './images/hero/corners/Vufind_Arabic.png'; 
    case (page > 6554 && intl.locale === 'en') : return './images/hero/corners/Aspen.png'; 
    case (page > 6554 && intl.locale === 'ar') : return './images/hero/corners/Aspen_Arabic.png'; 
  }

}



  return (
    <>
      <AnimatedWrapper page={page} locale={intl.locale}>
        <AnimatedBackground>
          <ImageRatio style={{ paddingBottom: "77.40112994350282%" }}>
          
            <AnimatedImg
              src={renderSwitch()}
              alt="Illustration of desktop "
              style={{ boxShadow:"5px 5px 5px 5px rgba(0,0,0,0.1)" }}
             
            />
          </ImageRatio>
        </AnimatedBackground>

        <SecondaryAssetsWrapper>
          <SecondaryBackground
            style={ page < 2050 ? { opacity: 1 } : { opacity: 0 }}
          >
            <ImageRatio
              style={{
                paddingBottom: "76.98744769874477%",
              }}
            >
              <AnimatedImg
                src="./images/hero/hp-step1-2D_aeea862f0b.svg"
                alt="Illustration of the Strapi Content-type fields"
              />
            </ImageRatio>
          </SecondaryBackground>

          <SecondaryBackground
            style={page > 2050 && page < 3315 ? { opacity: 1 } : { opacity: 0 }}
          >
            <ImageRatio style={{ paddingBottom: "76.98744769874477%" }}>
              <AnimatedImg
                style={
                  intl.locale === "en"
                    ? { transform: "translate(-170px, 0%)" }
                    : { transform: "translate(170px, 0%)" }
                }
                src="./images/hero/hp-step2-2D_6729998af1.svg"
                alt="Illustration of the Strapi Content Manager"
              />
            </ImageRatio>
          </SecondaryBackground>

          <SecondaryBackground
            style={page > 3315 && page < 4218 ? { opacity: 1 } : { opacity: 0 }}
          >
            <ImageRatio style={{ paddingBottom: "92.96%" }}>
              <AnimatedImg
              
                src="./images/hero/hp-step3-2D_7bc731eae8.svg"
                alt="Illustration of Partner technologies of Strapi like AWS, Next.js, React, Netlify or Node.JS"
              />
            </ImageRatio>
          </SecondaryBackground>

          <SecondaryBackground
            style={page > 4218 ? { opacity: 1 } : { opacity: 0 }}
          >
            <ImageRatio style={{ paddingBottom: "73.88268156424581%" }}>
              <AnimatedImg
                style={
                  intl.locale === "en"
                    ? { transform: "translate(-170px, 0%)" }
                    : { transform: "translate(170px, 0%)" }
                }
                src="./images/hero/hp-step4-2D_9ab379c7f5.svg"
                alt="Illustration of a GraphQL request"
              />
            </ImageRatio>
          </SecondaryBackground>

         
        </SecondaryAssetsWrapper>
      </AnimatedWrapper>
    </>
  );
}

export default AnimateBackground;
