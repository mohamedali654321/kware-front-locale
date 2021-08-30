import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import "./BlogMeta.css";

function BlogMeta({ author, translator, publishDate }) {
  return (
    <div className='article_Author'>
      <div className='styles_image_Author'>
        <div className='styles_ratio_img styles_fluid_img'>
          <img
            className='styles_img_articlebstyles_img_center'
            src='https://d2zv2ciw0ln4h1.cloudfront.net/uploads/22731000_59503fccb4.jpeg'
            alt=''
            style={{ opacity: 1, visibility: "inherit" }}
          />
        </div>
      </div>
      <div>
        <p
          className='
          typography_Text__21fWd
          article_textSmall
          themes_color
          '
          //   data-aos="zoom-in"
          //   data-aos-delay="100"
          //  data-aos-offset="200"
          //  data-aos-once="true"
        >
          <FormattedMessage
            id='blog.details.meta.author'
            values={{ author: author }}
          />
          {/* Author: {details.author} */}
        </p>
        <p
          className='
              typography_Text__21fWd
              article_textSmall
              themes_color
            '
          //   data-aos="zoom-in"
          //   data-aos-delay="100"
          //  data-aos-offset="200"
          //  data-aos-once="true"
        >
          <FormattedMessage
            id='blog.details.meta.translatedBy'
            values={{ translator: translator }}
          />
        </p>
        <p
          className='
              typography_Text__21fWd
              article_publishTextSmall
              article_content_color
            '
          //   data-aos="zoom-in"
          //   data-aos-delay="100"
          //  data-aos-offset="200"
          //  data-aos-once="true"
        >
          {publishDate}
        </p>
      </div>
    </div>
  );
}

BlogMeta.propTypes = {};

export default BlogMeta;
