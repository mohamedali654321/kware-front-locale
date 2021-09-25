import React, { useState } from "react";

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
  transition: 1s cubic-bezier(0.2, 0.82, 0.2, 1);
  transform: ${(props) =>
    (props.page > 2050 && props.page < 3315) ||  (props.page > 4218)
      ? "translate(90%, 0px) rotate(-4e-5deg) rotateY(-15deg) rotateX(9.99994deg) "
      : "rotateY(15deg) rotateX(10deg) "};
`;

const AnimatedBackground = styled.div`
  z-index: 0;
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
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 1;
  visibility: inherit;
`;
const SecondaryAssetsWrapper = styled.div`
  z-index: 1;
  position: absolute;
  bottom: -30%;
  left: 30%;
  width: 80%;
  height: 100%;
  will-change: transform;
  -webkit-perspective: 800px;
  perspective: 800px;
  transform: translate(0%, 0px);
`;
const SecondaryBackground = styled.div`
  position: absolute;
  width: 100%;
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
  return (
    <>
      <AnimatedWrapper page={page} locale={intl.locale}>
        <AnimatedBackground>
          <ImageRatio style={{ paddingBottom: "77.40112994350282%" }}>
            <AnimatedImg
              src="./images/hero/hp-primary-desktop_e0dab1f509.svg"
              alt="Illustration of desktop "
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
                    ? { transform: "translate(-220px, 0%)" }
                    : { transform: "translate(220px, 0%)" }
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
                    ? { transform: "translate(-220px, 0%)" }
                    : { transform: "translate(220px, 0%)" }
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
