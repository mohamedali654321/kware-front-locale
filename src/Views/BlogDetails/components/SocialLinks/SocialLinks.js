import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./SocialLinks.css";

function SocialLinks({ blogTitle, blogAbstract }) {
  return (
    <div className='ShareContainer'>
      <ul className='share'>
        <li className='socialMedia'>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target='_blank'
            rel='noreferrer'
            alt=''
            className='Button'
            style={{ color: "#4e6294" }}
          >
            <div className='Icon'>
              <i className='fab fa-facebook-f'></i>
            </div>
          </a>
        </li>

        <li className='socialMedia'>
          <a
            href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
            target='_blank'
            rel='noreferrer'
            className='Button'
            style={{ color: "#4e6294" }}
          >
            <div className='Icon'>
              <i className='fab fa-twitter'></i>
            </div>
          </a>
        </li>

        <li className='socialMedia'>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`}
            target='_blank'
            rel='noreferrer'
            className='Button'
            style={{ color: "#4e6294" }}
          >
            <div className='Icon'>
              <i className='fab fa-linkedin'></i>
            </div>
          </a>
        </li>

        <li className='socialMedia'>
          <a
            href={`https://api.whatsapp.com/send?text=${[blogTitle]} ${[
              window.location.href,
            ]}`}
            target='_blank'
            rel='noreferrer'
            className='Button'
            style={{ color: "#4e6294" }}
          >
            <div className='Icon'>
              <i className='fab fa-whatsapp'></i>
            </div>
          </a>
        </li>

        <li className='socialMedia'>
          <a
            href={`mailto:?subject=${blogTitle}&body=${blogAbstract}`}
            target='_blank'
            rel='noreferrer'
            className='Button'
            style={{ color: "#4e6294" }}
          >
            <div className='Icon'>
              <i className='far fa-envelope'></i>
            </div>
          </a>
        </li>

        <li className='socialMedia'>
          <Link to='/' className='Button' style={{ color: "#4e6294" }}>
            <div className='Icon'>
              <i className='fab fa-tiktok'></i>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

SocialLinks.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogAbstract: PropTypes.string.isRequired,
};

export default SocialLinks;
