import React from "react";
import styled from "styled-components";
import "./style.css";
function Header(props) {
  const Apps = [
    "Users",
    "Inventory",
    "Check in",
    "Check out",
    "Circulation log",
    "Courses",
    "Request",
  ];
  return (
    <List>
    {
      Apps.map(app=>(
        <Item>
        <a>{app}</a>
      </Item>
      ))
    }
      
     
    </List>
  );
}

export default Header;

const List = styled.ul`
  display: flex;
width: 100%;
flex-direction: row;
  gap: 10px;
  position: absolute;
`;

const Item = styled.li`
  position: relative;
  padding: 0 10px;
  height: 100%;
  display: flex;

  &::before {
    content: "";
    position: absolute;
    height: 33.33%;
    width: 0;
    background-color: tomato;
    right: 0;
    z-index: 0;
    top: 33.33%;
    transition: all 0.5s;
    color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    height: 33.33%;
    width: 0;
    background-color: tomato;
    color: #fff;
    left: 0;
    z-index: 0;
    bottom: 0;
    transition: all 0.5s;
  }

  a {
    z-index: 1;
    color: tomato;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 18px;
    padding: 10px 5px;
    cursor: pointer;
    &:hover {
      color: #fff;
    }
    &::before {
      position: absolute;
      content: "";
      height: 33.33%;
      width: 0;
      background-color: tomato;
      bottom: 66.66%;
      left: 0;
      transition: all 0.5s;
      color: #fff;
    }
  }

  &:hover:before,
  &:hover::after,
  &:hover a::before {
    width: 100%;
    color: #fff !important;
  }
`;
