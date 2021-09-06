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
          <div
                    class=" iconCircle iconCircle_img"
                    
                  >
                    <div
                      class="iconCircle_imgStyle"
                      
                    >
                      <div
                        class="iconRatio"
                        style={{
                          paddingBottom: "100%",
                          
                        }}
                      >
                        <img
                          class=" iconPicture "
                          src={BACKEND_URL+icon.url}
                          
                          style={{
                            opacity: 1,
                            visibility: "inherit",
                            objectFit:"contain",
                            objectPosition:"center"
                           
                          }}
                        />
                      </div>
                    </div>
                  </div>
        

        ))
      }
       

        
        
      </>
    )}
  </div>
  );
}

export default Icons;
