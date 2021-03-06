import React from "react";
import "./Icons.css";
function Icons(props) {
  const BACKEND_URL = "http://54.220.211.123:1335";


  return (

   
    <div className="icon-list sticky-icon">
      {props.icons.length !== 0 && (
        <>
          {props.icons.map((icon) => (

            <div key={icon.id} className=" iconCircle iconCircle_img">
              <div className="iconCircle_imgStyle">
                <div
                  className="iconRatio"
                  style={{
                    paddingBottom: "100%",
                  }}
                >
                  <img
                    className=" iconPicture "
                    src={BACKEND_URL + icon.url}
                    style={{
                      opacity: 1,
                      visibility: "inherit",
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Icons;
