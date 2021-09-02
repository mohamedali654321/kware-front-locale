import React, { useState, useEffect } from "react";
import { get, isEqual } from "lodash";
import axios from "axios";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath, Link } from "react-router-dom";
import { DiscussionEmbed } from "disqus-react";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import "./Details.css";
import BlogMeta from "./components/BlogMeta/BlogMeta";

function BlogDetails({ match, history }) {
  const intl = useIntl();
  const [details, setDetails] = useState([]);
  const BACKEND_URL ='54.220.211.123:1335'

  useEffect(() => {
    const updatePath = (locale, slug) => {
      const path = generatePath(match.path, { locale, slug });
      history.replace(path);
    };
   
    axios
      .get(
        `http://54.220.211.123:1335/articles?slug=${match.params.slug}&_locale=${match.params.locale}`
      )
      .then((res) => {
        if (intl.locale === match.params.locale) {
          if (!isEqual(res.data[0], details)) {
            setDetails(res.data[0]);
          }
        } else {
          if (res.data[0].localizations.length) {
            const id = get(
              res.data[0].localizations.find(
                (loc) => loc.locale === intl.locale
              ),
              ["id"],
              ""
            );
            axios
              .get(
                `http://54.220.211.123:1335/articles?id=${id}&_locale=${intl.locale}`
              )
              .then((resWithId) => {
                if (!isEqual(resWithId.data[0], details)) {
                  setDetails(resWithId.data[0]);
                  updatePath(intl.locale, resWithId.data[0].slug);
                }
              })
              .catch((err) => console.log(err));
          } else {
            if (!isEqual(res.data[0], details)) {
              setDetails(res.data[0]);
            }
          }
        }
      })
      .catch((err) => console.log(err));
  }, [
    details,
    history,
    intl.locale,
    match.params.locale,
    match.params.slug,
    match.path,
  ]);
   
  return (
    <div>
      <div className='details_container'>
        <div className='details_wrapper'>
          {/**Back to articles button */}
          <a className='backTo_link' target='' alt='' to='/blog' href='/blog'>
            <span
              className='
                ArrowLink
                backTo_link
                ArrowLink_rotate
              '
            >
              <span className='ArrowLink_container'>
                <span className='ArrowLink_label themes_colorBack'>
                  <FormattedMessage id='blog.buttons.backToBlogs' />
                </span>
                <svg

                className={intl.locale === 'ar' ? 'SmallArrow fill_color styles_icon_right':'SmallArrow styles_icon fill_color'}
                  // className='SmallArrow styles_icon fill_color'
                  viewBox='0 0 11 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z'
                    fill='#74E4A2'
                  ></path>
                  <path
                    d='M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z'
                    fill='#74E4A2'
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>

        <section className='article_container article_maxWidth'>
          <div className='articleWrapper details_wrapper'>
            <div className='details_wrapper'>
              <div className='articleInnerWrapper'>
                {/**blog title */}
                <div className='articleIHeader'>
                  <h1
                    className='details_title details_titleLabel themes_color'
                    // data-aos='zoom-in'
                    // data-aos-once='true'
                  >
                    {details.title}
                  </h1>
                </div>
              </div>

              <div
                className='articleRatio articleCover'
                style={{ paddingBottom: "62.5%" }}
              >
                <div
                  className='styles_children_image'
                  // data-aos='zoom-in'
                  // data-aos-once='true'
                >
                {/* {details.image !== null  &&
                          
                           (
                            <div className="styles_ratio_img styles_fluid_img">
                              <img
                                src={BACKEND_URL + details.image.url}
                                className="
                              
                              styles_img_article
                              
                              styles_img_center
                            "
                                style={{
                                  opacity: 1,
                                  visibility: "inherit",
                                  position: "absolute",
                                }}
                              />
                            </div>
                           )
                          } */}


                
                  

                    {
                      
                    (
                      <div className='styles_CoverImage'>
                        <div className='ratio fluid'>
                          <img
                            src='/images/bg-hero.png'
                            alt=''
                            className='styles_Img styles_img '
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          />

                          <div class='SixthSection_mobileInnerWrapper SixthSection_innerWrapper'>
                            <div
                              class='SixthSectionLabelTitleText SixthSectionLabelTitleText_width SixthSectionLabelTitleText_withGradient SixthSectionLabelTitleText_center'
                              style={{ opacity: 1 }}
                            >
                              {details.categories&&
                                details.categories.map((tag) => (
                                  <div class='SixthSectionLabel SixthSectionLabel_style SixthSectionLabel_color'>
                                    <div>
                                      <div
                                        style={{
                                          position: "relative",
                                          display: "inline-block",
                                          opacity: 0.7,
                                          transform:
                                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                                          color: "#fff",
                                          fontWeight: "500",
                                          
                                        }}
                                        class='default_Category  default_fontSize'
                                        
                                      >
                                        {tag.name}
                                      </div>
                                    </div>
                                  </div>
                                ))}

                              <h2 class=' '>
                                <div class=''>
                                  <span>
                                    <div
                                      style={{
                                        position: "relative",
                                        opacity: 1,
                                        transform:
                                          "perspective(1000px) translate3d(0px, 0px, 0px)",
                                        
                                        color: "#fff",
                                        fontWeight: "500",
                                        zIndex: "100",
                                       
                                        
                                        
                                      }}
                                      class='default_Title_article'
                                    >
                                      {details.title}
                                    </div>
                                  </span>
                                </div>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  
                </div>
              </div>
            </div>
            <div className='article_contentWrapper details_wrapper'>
              <div className='article_contentContainer'>

                <SocialLinks blogTitle={details.title} blogAbstract={details.abstract} />

                <div className='articleInnerWrapper'>
                  <div className='article_content'>
                  <BlogMeta author={details.author} translator={details.translator} publishDate={details.publishDate}  />

                    <div className='styles_separator '></div>

                    <div
                      className='
                            typography_Text__21fWd
                            styles_RichText
                            article_content_color
                          '
                    >
                      <div
                        className='details'
                        // data-aos="zoom-in"
                        // data-aos-delay="200"
                        // data-aos-offset="300"
                        // data-aos-once="true"
                      >
                        <blockquote
                          dangerouslySetInnerHTML={{
                            __html: details.abstract,
                          }}
                        ></blockquote>

                        <div
                          className='ContentDetails'
                          style={{ lineHeight: "20px" }}
                          dangerouslySetInnerHTML={{ __html: details.body }}
                        />
                      </div>
                      <div className='separator3'></div>
                      {/* {details.sources && details.sources.length > 0 ? (
                            <div className="">
                              <div className="">
                                <div className="sourceLabel">Sources: </div>
                                <div className="separator2"></div>
                                {details.sources.map((source) => (
                                  <div className="">
                                    <a
                                      href={source.url}
                                      className="sourceLinks"
                                    >
                                      {source.name}
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : null} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='comments'>
              <DiscussionEmbed
                shortname='KwareTech-Comments'
                config={{
                  url: "http://54.220.211.123:9000",
                  identifier: details.id,
                  title: details.title,
                  language: intl.locale,
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BlogDetails;
