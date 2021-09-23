import React, { useEffect, useState } from "react";
import "./Steps.css";
import { FormattedMessage, useIntl } from "react-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimateBackground from "./AnimateBackground/AnimateBackground";
import MainProductHeader from "./AnimateBackground/MainProductHeader";
import Product from "./AnimateBackground/Product";

function Steps() {
  const [page, setPage] = useState();
  const intl = useIntl();
  window.addEventListener("scroll", () => {
    setPage(window.pageYOffset);
  });
  console.log(page);
  useEffect(() => {
    AOS.init();
  });

  return (
    <div>
      <div className=" stepSlice stepGradientHeader stepContainer">
        <MainProductHeader />

        <div className="step_stepsWrapper stepContainer">
          <div className="step_steps">
            <div className="step_stepsAnimatedBackground">
              <div className="step_stepsInnerWrapper">
                {/* animation-bg */}
                <AnimateBackground />
              </div>
            </div>



            {/* <div className="step_StepsContainer step_StepsContentRight">
              <div className="step_StepsWrapper stepWrapper_style">
                <div
                  className="step_StepsInner"
                  style={{ opacity: 1 }}
                  style={{ marginTop: "30px" }}
                >
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <FormattedMessage id="home.steps.step1" />
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step1.title" />
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription stepText_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                          data-aos-delay="200"
                          data-aos="zoom-in"
                        >
                          <FormattedMessage id="home.steps.step1.description" />
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step1-2D_aeea862f0b.svg"
                        alt="Illustration of the Strapi Content-type fields"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  intl.locale === "ar"
                    ? "steps_SeparateBackground steps_SeparateType2"
                    : "steps_SeparateBackground steps_SeparateType1"
                }
              >
                <div className="steps_ShapesGroup">
                  <img
                    className="steps_ShapesTriangle"
                    src="./images/logo.svg"
                    alt="triangle"
                  />
                  <img
                    className="steps_ShapesDots"
                    src="./images/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>
            </div>
             */}

             <Product/>



            <div
              className="step_StepsContainer "
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div
                  className="step_StepsInner"
                  style={{ opacity: 1 }}
                  style={{ marginTop: "30px" }}
                >
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <FormattedMessage id="home.steps.step2" />
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step2.title" />
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step2.description" />
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step2-2D_6729998af1.svg"
                        alt="Illustration of the Strapi Content Manager"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="steps_SeparateBackground steps_SeparateType2"
                className={
                  intl.locale === "ar"
                    ? "steps_SeparateBackground steps_SeparateType4"
                    : "steps_SeparateBackground steps_SeparateType2"
                }
              >
                <div
                  className="steps_ShapesGroup"
                  style={{
                    transform: "translate3d(0px, 18.329%, 0px)",
                    opacity: 1,
                  }}
                >
                  <img
                    className="steps_ShapesTriangle"
                    src="./images/logo.svg"
                    alt="triangle"
                    style={{ width: "35%" }}
                  />
                  <img
                    className="steps_ShapesDots"
                    src="./images/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>
            </div>
            



            <div
              className="step_StepsContainer step_StepsContentRight"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <FormattedMessage id="home.steps.step3" />
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step3.title" />
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step3.description" />
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "92.96%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step3-2D_7bc731eae8.svg"
                        alt="Illustration of Partner technologies of Strapi like AWS, Next.js, React, Netlify or Node.JS"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="steps_SeparateBackground steps_SeparateType3">
                <div
                  className="steps_ShapesGroup"
                  style={{
                    transform: "translate3d(0px, 19.97%, 0px)",
                    opacity: 1,
                  }}
                >
                  <img
                    className="steps_ShapesTriangle"
                    src="./images/logo.svg"
                    alt="triangle"
                  />
                  <img
                    className="steps_ShapesDots"
                    src="./images/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>
            </div>
            






            <div
              className="step_StepsContainer "
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <FormattedMessage id="home.steps.step4" />
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step4.title" />
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step4.description" />
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "73.88268156424581%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step4-2D_9ab379c7f5.svg"
                        alt="Illustration of a GraphQL request"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="steps_SeparateBackground steps_SeparateType4">
                <div
                  className="steps_ShapesGroup"
                  style={{ transform: "translate(0px, 20%)", opacity: 1 }}
                >
                  <img
                    className="steps_ShapesTriangle"
                    src="./images/logo.svg"
                    alt="triangle"
                  />
                  <img
                    className="steps_ShapesDots"
                    src="./images/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>
            </div>
            










            
            <div
              className="step_StepsContainer step_StepsContentRight"
              data-aos-delay="200"
              data-aos-duration="200"
              data-aos-offset="200"
              data-aos="zoom-in"
            >
              <div className="step_StepsWrapper stepWrapper_style">
                <div className="step_StepsInner" style={{ opacity: 1 }}>
                  <div className="step_StepsContent" style={{ opacity: 1 }}>
                    <p className=" stepText step_StepsNumber step_stepsnumber_fontsize stepText_color">
                      <span
                        style={{
                          opacity: 1,
                          transform: "translate(0px, 0px)",
                        }}
                      >
                        <FormattedMessage id="home.steps.step5" />
                      </span>
                    </p>
                    <h1 className=" stepTitle step_StepsTitleWrapper step_stepsnumber_fontsize stepTitle_color">
                      <span>
                        <div
                          className=""
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step5.title" />
                        </div>
                      </span>
                    </h1>
                    <p className=" stepText step_StepsDescription normal stepText_color">
                      <span>
                        <div
                          className="step_StepsLine"
                          style={{
                            display: "block",
                            textAlign: "start",
                            position: "relative",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                          }}
                        >
                          <FormattedMessage id="home.steps.step5.description" />
                        </div>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="step_StepsAssets">
                  <div className="step_stepsassets_img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "76.98744769874477%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-step5-2D_9d3fc362cc.svg"
                        alt="Illustration of the deployment options in Strapi"
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  intl.locale === "ar"
                    ? "steps_SeparateBackground steps_SeparateType2"
                    : "steps_SeparateBackground steps_SeparateType1"
                }
              >
                <div
                  className="steps_ShapesGroup"
                  style={{ transform: "translate(0px, 20%)", opacity: 1 }}
                >
                  <img
                    className="steps_ShapesTriangle"
                    src="./images/logo.svg"
                    alt="triangle"
                  />
                  <img
                    className="steps_ShapesDots"
                    src="./images/dots.svg"
                    alt="dots"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
