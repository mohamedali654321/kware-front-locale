import React,{useEffect} from 'react'
import './ProductDescription.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FormattedMessage } from "react-intl";


function ProductDescription() {

  useEffect(()=>{
    AOS.init()
  })
    return (
        <div class="productDesc_slice"
            data-aos="zoom-in"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-duration="500"
                
         >
        <div class="productDesc_wrapper">
          <div class="productDesc_innerWrapper">
            <div class="productDesc_LabelTitleText productDesc_alignCenter" style={{opacity: 1}}
            
            >
              <div class="productDescLabel productDescLabel_style productDescLabel_color"
              
                 
              >
                <div
                  
                >
                  <div
                  
                    style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
              
                    class=""><FormattedMessage id="service.product.whatIs" />  </div>
                 
                </div>
              </div>
              <div
                class="productDescText productDescTextWrapper productDescText_style  productDescText_smallFont productDescText_color">
                <div
                  style={{position: "relative", display: "inline-block", opacity: 1, transform: "perspective(1000px) translate3d(0px, 0px, 0px)"}}
                  
                  class=""><FormattedMessage id="service.product.abstract" /> </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductDescription
