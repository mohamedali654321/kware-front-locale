import React from "react";

import "./Header.css";
import styled from "styled-components";
import Language from "../SwitchLanguage/Language";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { FormattedMessage } from "react-intl";
import {Link} from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasScroll: false,
      locales: localStorage.getItem("locale"),
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScroll: true });
    } else {
      this.setState({ hasScroll: false });
    }
  };

  // handleOpen = (event) => {
  //   const hamburger = document.querySelector(".hamburger");
  //   const links = document.querySelector(".links");
  //   const link = document.querySelector(".links ul ");
  //   hamburger.addEventListener("click", () => {
  //     links.classList.toggle("open");
  //   });
  // };

  render() {
    return (
      <div
        className={this.state.hasScroll ? "Header HeaderScrolled" : "Header"}
      >
      {/* <NavbarContainer> */}
        <div className='HeaderGroup'>
          <a className='logo' href='/'>
            <img
              style={{ width: "140px", height: "50px" }}
              src={
                this.state.hasScroll || document.location.pathname.length === 1
                  ? "/images/KwareLatest.png"
                  : "/images/KwareLatest.png"
              }
              alt=''
            />
          </a>

          <ul className='links'>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel"
                  : "NavigationLabel"
              }
            >
              <a href='/' className='cool'>
                <FormattedMessage id="navbar.links.home" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              <a href='/products' className='cool'>
              <FormattedMessage id="navbar.links.products" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              <a href='/services' className='cool'>
              <FormattedMessage id="navbar.links.services" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              <a href='/blog' className='cool'>
              <FormattedMessage id="navbar.links.blog" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              <a href='/sys-solutions' className='cool'>
              <FormattedMessage id="navbar.links.solutions" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              <a href='/our-partners' className='cool'>
              <FormattedMessage id="navbar.links.ourPartners" />
              </a>
            </li>
            <li
              className={
                document.location.pathname.length === 1 
                  ? "HomeHeader NavigationLabel "
                  : "NavigationLabel"
              }
            >
              {" "}
              <a href='/our-clients' className='cool'>
              <FormattedMessage id="navbar.links.ourClients" />
              </a>{" "}
            </li>
          </ul>

          <Language />

          <Link to='/login'>
          <i style={{color:"#9D4BFF" , marginLeft:"20px",fontSize:"20px"}} className="fas fa-sign-in-alt"></i>
          </Link>

         

          
          <div className='display'>
            <HamburgerMenu />
          </div>

         
        </div>
        {/* </NavbarContainer> */}
      </div>
    );
  }
}

export default Header;

const NavbarContainer=styled.div`
position: fixed;
  width: 100%;
  padding: 10px 0;
  z-index: 100;
  transition: 1s cubic-bezier(0.2, 0.82, 0.2, 1);
  top: 0;
  left: 0;
background-color:${window.pageYOffset > 50 ? "#fff" : "transparent"};
border: ${window.pageYOffset > 50 ? '1px solid #f2f4ff':''};
box-sizing:${window.pageYOffset > 50 ? 'border-box':''};
box-shadow:${window.pageYOffset > 50 ? '1px 1px 12px rgb(0 0 0 / 15%)':''};


`;

const NavbarItem=styled.li`
padding: 0 9px;
  display: flex;
  align-items: center;
  height: 55px;
  text-align: -webkit-match-parent;
  transition: color .4s ease;
  height: 100px;
  font-weight: 400;
  font-size: 18px;
  opacity: 1;

  a{
    color: ${document.location.pathname.length === 1 ? "#fff" : ""}
  }
  
  


`;