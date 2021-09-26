import React from "react";

function RelatedProductHeader() {
  return (
    <div class="SixthSection_gradient SixthSection_gradientRight SixthSectionContainer">
      <div class="SixthSectionWrapper SixthSectionContainer_position SixthSectionWrapper_style">
        <div class="SixthSection_mobileInnerWrapper SixthSection_innerWrapper">
          <div
            class="SixthSectionLabelTitleText SixthSectionLabelTitleText_width SixthSectionLabelTitleText_withGradient SixthSectionLabelTitleText_center"
            style={{ opacity: 1 }}
          >
            <div class="SixthSectionLabel SixthSectionLabel_style SixthSectionLabel_color">
              <div
                data-aos="zoom-in"
                data-aos-offset="200"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div
                  style={{
                    position: "relative",
                    display: "inline-block",
                    opacity: 1,
                    transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                  }}
                  class=""
                >
                  Integrations
                </div>
              </div>
            </div>
            <h1
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="300"
              data-aos-once="true"
              class="SixthSectionTitle SixthSectionTitle_style SixthSectionTitle_fontSize SixthSectionTitle_color"
            >
              <div class="styles_titleContainer__2TSrx">
                <span>
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      opacity: 1,
                      transform:
                        "perspective(1000px) translate3d(0px, 0px, 0px)",
                    }}
                    class=""
                  >
                    Choose any technology for your JAMstack app.
                  </div>
                </span>
              </div>
            </h1>
            <div
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="400"
              data-aos-once="true"
              class="SixthSectionText  SixthSectionText_style  SixthSectionText_fontSize SixthSectionText_color"
            >
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  opacity: 1,
                  transform: "perspective(1000px) translate3d(0px, 0px, 0px)",
                }}
                class=""
              >
                Strapi is front-end agnostic and can be used with your preferred
                static site generator or framework.
              </div>
            </div>
          </div>
        </div>

        <div class="SixthSectionTetris SixthSectionTetris_decoration SixthSectionTetris_color">
          <svg
            fill="none"
            viewBox="0 0 300 300"
            class="SixthSection_svg_style"
            style={{ transform: "rotate(0deg)" }}
          >
            <g clip-path="url(#variant-1_svg__clip0)">
              <path
                class=""
                fill="#0e8d54"
                d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"
              ></path>
              <g>
                <path class="" fill="#13bb70" d="M200 0H100v100h100V0z"></path>
              </g>
            </g>
            <defs>
              <clippath id="variant-1_svg__clip0">
                <path fill="#fff" d="M0 0h300v300H0z"></path>
              </clippath>
              <filter
                id="variant-1_svg__filter0_d"
                width="140"
                height="140"
                x="84"
                y="-12"
                color-interpolation-filters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feflood
                  flood-opacity="0"
                  result="BackgroundImageFix"
                ></feflood>
                <fecolormatrix
                  in="SourceAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></fecolormatrix>
                <feoffset dx="4" dy="8"></feoffset>
                <fegaussianblur stdDeviation="10"></fegaussianblur>
                <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"></fecolormatrix>
                <feblend
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                ></feblend>
                <feblend
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                ></feblend>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default RelatedProductHeader;
