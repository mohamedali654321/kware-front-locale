import React from "react";
import { FormattedMessage } from "react-intl";
import "./ProductHero.css";
function ProductHero() {
  return (
    <div class="productContainer">
      <div class="productWrapper ">
        
        <div class="productInnerWrapper productInnerWrapper_style">
          <div
            class="productLabelTitleText productContentWrapper"
            style={{opacity: 1}}
          >
            <div
              class="
                productLabel
                productLabelWrapper
                
              "
            >
              <div>
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    opacity: 1,
                    transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                    fontSize:"17px"


                  }}
                    
                  
                  
                >
                 <FormattedMessage id="products.label"/>
                </div>
              </div>
            </div>
            <h1
              class="
                productTitle
                productTitleWrapper
                productTitle_fontSize
                
              "
            >
              <div class="productTitleContainer">
                <span>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform: "perspective(1000px) translate3d(0px, 0px, 0px)"
                    }}
                    
                  >
                    <FormattedMessage id="products.title"/>
                  </div>
                 
                </span>
              </div>
            </h1>
            <h2
              class="
                productText
                
                productTextWrapper
                
                
              "
            >
              <div
                style={{
                  position:" relative",
                  display: "inline-block",
                  opacity: 1,
                  transform: "perspective(1000px) translate3d(0px, 0px, 0px)"
                }}
                
              >
                <FormattedMessage id="products.description"/>
              </div>
              
            </h2>
           
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ProductHero;
