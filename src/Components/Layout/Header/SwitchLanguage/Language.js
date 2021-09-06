import React, { useState } from "react";
import Switch from "react-switch";
import { LocaleContext } from "../../../Hooks/useLocale";
const switchText = {
  display: "flex",
  justifyContent: " center",
  alignItems: "center",
  height: "100%",
  color: "#fff",
  fontSize: 14,
  paddingRight: 2,
  paddingTop: -4,
  backgroundColor: "#fff;",
};
const buttonStyle={
  background: "#fff",
  borderRadius:"10px",
  cursor:"pointer",
  boxSizing: "border-box",
  color:"#8D1CB8",
  padding:"5px 7px",
  alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize:"15px",
    fontWeight:"600",
    boxShadow: "0 1px 4px rgb(26 26 67 / 40%)",
    zIndex: "1000",
    border:"none",
    fontFamily: "Effra-ar !important"

  
  
}
function Language() {
  const [checked, setChecked] = useState(false);

  return (
    <LocaleContext.Consumer>
      {({ value, setValue }) => {
        return (
          <div style={{ fontFamily: "Effra-ar" }}>
            {/* <Switch
              checked={checked}
              onChange={() => {
                setValue(value === "ar" ? "en" : "ar");
                localStorage.setItem(
                  "defaultLocale",
                  value === "ar" ? "en" : "ar"
                );
                setChecked(!checked);
              }}
              onColor={"#6514a0"}
              uncheckedIcon={<div style={switchText}>AR</div>}
              checkedIcon={<div style={switchText}>EN</div>}
              boxShadow='0px 1px 5px rgba(0,0,0,0.6)'
              activeBoxShadow='0px 0px 1px 10px rgba(0,0,0,0.2)'
              handleDiameter={30}
              offHandleColor={"#6514a0"}
              offColor={"#8c4bff"}
            /> */}
            <button
                buttonStyle="zoom"
                style={buttonStyle}
                // id="tooltip112445449"
                onClick={() => {
                  value === "ar" ? setValue("en") : setValue("ar");
                }}
                // onMouseDown={(e) => e.preventDefault()}
              >
              
                {value === "ar" ? "English" : "العربية"}
                <i style={{margin:"5px"}} class="fas fa-globe"></i>
              </button>
          </div>
        );
      }}
    </LocaleContext.Consumer>
  );
}

export default Language;
