import React from 'react'

function Tetris() {
    return (
        <div className=" stepTetrisContainer stepTetris_decoration ">
       
          <svg
            fill="none"
            viewBox="0 0 300 300"
            style={{ transform: "rotate(0deg)" }}
          >
            <g clip-path="url(#variant-1_svg__clip0)">
              <path
                
                fill="#7A4FF3"
                d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"
              ></path>
              <g>
                <path
                 
                  fill="#956FFF"
                  d="M200 0H100v100h100V0z"
                ></path>
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
                <feflood flood-opacity="0" result="BackgroundImageFix"></feflood>
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
       
    )
}

export default Tetris
