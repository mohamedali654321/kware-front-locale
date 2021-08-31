import React from "react";
import MockupAnimation from "../animations/MockupAnimation";
import "./LeftProduct.css";
import { FormattedMessage } from "react-intl";

import PurchaseButton from "./buttons/PurchaseButton";
function LeftProduct(props) {

const isOdd = (number)=>{
let reminder =(number % 2);
if(reminder == 0)
return false
else return true

}



  return (
    <div

    
      className=" Left_slice LeftTextNextToImage Left_maxWidth"
      
    >
      <div
      

      className={isOdd(props.index) ?  'Leftwrapper_maxWidth Leftwrapper_right Leftwrapper' : 'Leftwrapper_maxWidth LeftSide  Leftwrapper'}
        // className=" Leftwrapper_maxWidth Leftwrapper_right Leftwrapper"
      >
        <div className="LeftContent" style={{ opacity: 1 }}>
          
          <div className="LeftLabelTitleText" style={{ opacity: 1 }}>
            <h1
              className=" LeftTitle LeftTitleWrapper LeftTitleWrapper_fontSize"
            >
              <div className="LeftTitleContainer">
                <span>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform:
                        "perspective(1000px) translate3d(0px, 0px, 0px)",
                        
                    }}
                  >
                    {props.title} 
                  </div>
                </span>
              </div>
            </h1>


            <div
              className=" LeftText LeftTextWrapper LeftTextWrapper_fontsize"
              style={{marginBottom:"20px",fontWeight:"600"}}
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  opacity: 1,
                  transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                  fontSize:"21px",
                 
                  
                }}
              >
                
                {props.slogan}
              </div>
            </div>

          

            <div
              className=" LeftText LeftTextWrapper LeftTextWrapper_fontsize"
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  opacity: 1,
                  transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                  fontSize:"18px"
                }}
              >
                
                <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
              </div>
            </div>

            <ul className="LeftLinks">
              <li className="LeftLink">

              {/* <PurchaseButton/> */}
                <div
                  className=" LefButton LefButton_small LefButton_fontSize LefButtonContainer"
                  style={{ opacity: 1, transform: "perspective(1000px)" }}
                >
                  <div className="LefButtonWrapper LefButtonWrapper_color">
                    <div
                      className="LefButtonBackground LefButtonWrapper_color"
                      style={{ transform: "perspective(800px)" }}
                    ></div>
                    <a
                      id="201"
                      className=" LefButtonLink LefButton_fontSize"
                      target="_blank"
                      rel="noopener"
                      alt=""
                      href={props.url}
                    >
                      <FormattedMessage id="homeHero.button.learnMore"/>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="Left_imageWrapper" >
          <div style={{ opacity: 1, transform: "perspective(1000px)" }}>
            <div className="Left_imageInnerWrapper">
              <div
                className="Left_imageRatio"
                style={{ paddingBottom: "90.1321%" }}
              >
              <MockupAnimation/>
                {/* <img
                  className=" Left_image"
                  src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Terminal_1_6e8d5110ac_19a5a335d7.svg"
                  alt="content types builder strapi"
                  style={{ opacity: 1, visibility: "inherit" }}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftProduct;
