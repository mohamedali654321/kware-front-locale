import React from 'react'
import { FormattedMessage, useIntl } from "react-intl";
import styled from 'styled-components';
function Product() {

    const intl = useIntl();
    return (
        <div className="step_StepsContainer step_StepsContentRight">
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
             
    )
}

export default Product
