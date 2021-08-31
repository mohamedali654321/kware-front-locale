import React from "react";

import "./Header.css";

import Language from "../SwitchLanguage/Language";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { FormattedMessage } from "react-intl";

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

  handleOpen = (event) => {
    const hamburger = document.querySelector(".hamburger");
    const links = document.querySelector(".links");
    const link = document.querySelector(".links ul ");
    hamburger.addEventListener("click", () => {
      links.classList.toggle("open");
    });
  };

  render() {
    return (
      <div
        className={this.state.hasScroll ? "Header HeaderScrolled" : "Header"}
      >
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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
                document.location.pathname.length === 1 ||
                document.location.pathname === "/services"
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

          <a href="/login">login</a>
          <div className='display'>
            <HamburgerMenu />
          </div>

          {/* <div className="hambuger" >
              

          

              </div>
     */}
        </div>
      </div>
    );
  }
}

export default Header;
