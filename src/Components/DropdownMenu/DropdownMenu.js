import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const DropDownContainer = styled("div")`
  width: 10.5em;
`;

const DropDownHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  width: 100%;

  /* @media only screen and (min-width: 900px) {
    flex-flow: column;
  } */
`;

const DropDownHeader = styled.button`
  margin-bottom: 0.8em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 13px;
  border: none;
  width: 140px;
  height: 45px;
  color: #8d1cb8;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    filter: brightness(1.2);
    box-shadow: 0 1px 8px rgba(36, 35, 35, 0.3);
    transform: scale(1.02);
  }

  &:focus-within {
    border: 1px solid #4267b2;
    outline-style: none;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: scale(1.02);
  }
`;

const SelectedOption = styled.div`
  /* position: absolute; */
  margin-bottom: 0.8em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 15px;
  border: none;
  width: 140px;
  color: white;
  transition: transform 0.2s;

  /* @media only screen and (min-width: 900px) {
    position: absolute;
  } */
`;

const DropDownListContainer = styled("div")`
  position: absolute;
  z-index: 100;
  width: 10.5em;
`;

const DropDownList = styled("ul")`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  border-radius: 8px;
  min-width: 250px;
  max-height: 300px;
  box-sizing: content-box;
  color: #8d1cb8;
  font-size: 1.1rem;
  font-weight: 500;
  overflow: scroll;
  cursor: pointer;
  font-family: 'Effra-ar';
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  /* Hide scrollbar for IE and Edge */
  -ms-overflow-style: none;
  /* Hide scrollbar for Firefox */
  scrollbar-width: none;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }

  &:first-child {
    padding-top: 0.8em;
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
  &:hover {
    color: #fd9e46;
    
  }
`;

export default function DropdownMenu(props) {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onBlur();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const toggling = () => setIsOpen(!isOpen);

  const onBlur = () => {
    setIsOpen(false);
  };

  const onOptionClicked = (value) => () => {
    props.onChange(value);
    setIsOpen(false);
  };

  return (
    <DropDownContainer ref={wrapperRef}>
      <DropDownHeaderContainer>
        <DropDownHeader onClick={toggling}>
          {props.value && props.value !== "" ? props.value : props.header}
          {props.icon ? (
            <div>{props.icon}</div>
          ) : (
            <svg
              width='20px'
              height='20px'
              fill='green'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <path d='M16 21.2l9.6-9.6H6.4l9.6 9.6z' />
            </svg>
          )}
        </DropDownHeader>
      </DropDownHeaderContainer>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {props.options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
