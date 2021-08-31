import React , {useState}from 'react'
import { FormattedMessage, useIntl } from "react-intl";

function Desktop(props) {
    let {page}=props;

    const intl = useIntl();
    const [direction,setDirection]=useState(intl.locale)
    const rtl =()=>{
        if(direction === 'en') return true;
        else return false
    }
    console.log(rtl())
    return (
        <div>
        {
            rtl() === true && (
                <div
                  className={
                    (page > 3280  && page < 4270 ) || (page > 5230  && page < 6205 )
                      ? " float-right step_stepsAssetsWrapper"
                      : "float-left step_stepsAssetsWrapper"
                  }

                >
                  <div className="step_stepsBackground_Img">
                    <div
                      className="step_stepsImage_ratio"
                      style={{ paddingBottom: "77.40112994350282%" }}
                    >
                      <img
                        className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                        src="./images/hero/hp-primary-desktop_e0dab1f509.svg"
                        alt="Illustration of desktop "
                        style={{ opacity: 1, visibility: "inherit" }}
                      />
                    </div>
                  </div>
                  <div
                    className="step_steps_secondaryAssetsWrapper"
                    style={{ transform: "translate(0%, 0px)" }}
                  >
                    <div
                   
                     className={(page > 2259 && page < 3280) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step1-2D_aeea862f0b.svg"
                            alt="Illustration of the Strapi Content-type fields"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                  
                    className={(page > 3280 && page < 4272) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 0,
                      //   transform: "translate(0px, 30%)",
                      // }}
                      style={{transform:"translate(-220px, 0%)"}}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className="step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step2-2D_6729998af1.svg"
                            alt="Illustration of the Strapi Content Manager"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                    


                    className={(page > 4264 && page < 5230) ? 'step_steps_secondary secondaryImgDisplayType2' : 'step_steps_secondary  secondaryImg-notDisplayType2'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 0,
                      //   transform: "translate(0px, 0%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{ paddingBottom: "92.96%" }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step3-2D_7bc731eae8.svg"
                            alt="Illustration of Partner technologies of Strapi like AWS, Next.js, React, Netlify or Node.JS"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                    

                      className={(page > 5210 && page < 6215) ? 'step_steps_secondary secondaryImgDisplayType1 ' : 'step_steps_secondary  secondaryImg-notDisplayType1'}

                   
                      // className="step_steps_secondary"
                      
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                      style={{transform:"translate(-220px, 0%)"}}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "73.88268156424581%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step4-2D_9ab379c7f5.svg"
                            alt="Illustration of a GraphQL request"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                  
                    className={(page > 6215 ) ? 'step_steps_secondary secondaryImgDisplayType1' : 'step_steps_secondary  secondaryImg-notDisplayType1'}
                      // className="step_steps_secondary"
                      // style={{
                      //   opacity: 1,
                      //   transform: "translate(0px, 30%)",
                      // }}
                    >
                      <div>
                        <div
                          className="step_stepsImage_ratio"
                          style={{
                            paddingBottom: "76.98744769874477%",
                          }}
                        >
                          <img
                            className=" step_stepsImage step_stepsImage_cover step_stepsimage_center"
                            src="./images/hero/hp-step5-2D_9d3fc362cc.svg"
                            alt="Illustration of the deployment options in Strapi"
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



            )
        }
            
        </div>
    )
}

export default Desktop
