import React from "react";
import "./Icons.css";
function Icons(props) {
  const BACKEND_URL = "http://54.220.211.123:1335";

  return (
                      
    <div className="icon-list sticky-icon">
    {props.icons.length !== 0 && (
      <>
      {
        props.icons.map(icon=>(
          <div className="cardIcon sticky-icon  ">
          <img
            className="imgIcon styles_Img  "
            src={BACKEND_URL+icon.url}
            style={{ opacity: 1 }}
          />
        </div>
        

        ))
      }
       

        
        
      </>
    )}
  </div>
  );
}

export default Icons;
