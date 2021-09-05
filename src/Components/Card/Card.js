import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocaleContext } from "../Hooks/useLocale";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";

function Card(props) {
  const locale = useContext(LocaleContext);
  const intl = useIntl();
const BACKEND_URL="http://54.220.211.123:1335";
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className='cardContainer '>
      <Link
        to={{
          pathname: `/${intl.locale}/blog/${props.slug}`,
              state: {
                blogLocale: props.cardData.locale,
                blogSlug: props.cardData.slug,
                blogId: props.cardData.id
              },
        }}
        className='CardWithArrowLink '
        data-aos='zoom-in'
        data-aos-duration='500'
        data-aos-offset='200'
        data-aos-delay='200'
        data-aos-once='true'
      >
        <div className='styles_backgroundContainer'>
          <div
            className='styles_background '
            style={{
              transform: "perspective(100px) scale(1.0305, 1.0305)",
            }}
          ></div>
        </div>
        <div className='styles_cardContainer'>
          <div
            href={`/${locale.value}/blog/${props.slug}`}
            className='coverImageContainer styles_large '
            style={{ transform: "scale(1.0305, 1.0305)" }}
          >
            <div
              className='coverImage'
              style={{ transform: "scale(1.0095, 1.0095)" }}
            >
              <div
                className='styles_Ratio CardCover'
                style={{ paddingBottom: "56.25%" }}
              >
                <div className='styles_children'>
                  {
                    <>
                      <div className='styles_CoverImage' style={{backgroundColor:"#000"}}>
                        <div className='ratio fluid'>
                          {/* <img
                            src='/images/bg-hero.png'
                            alt=''
                            className='styles_Img styles_img '
                            style={{
                              opacity: 1,
                              visibility: "inherit",
                            }}
                          /> */}

                          <div class='SixthSection_mobileInnerWrapper SixthSection_innerWrapper'>
                            <div
                              class='SixthSectionLabelTitleText SixthSectionLabelTitleText_width SixthSectionLabelTitleText_withGradient SixthSectionLabelTitleText_center'
                              style={{ opacity: 1 }}
                            >
                           

              <ul className='category_tags SixthSectionLabel SixthSectionLabel_style SixthSectionLabel_color'>
                {props.tag &&
                  props.tag.map((tag) => (
                    <li className='category_tags_styles category_tags_items'>
                      <span className='category_label category_label_style default_Category ' 
                       style={{
                                          position: "relative",
                                          display: "inline-block",
                                          opacity: 0.7,
                                          transform:
                                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                                          color: "#fff",
                                          fontWeight: "500",
                                        }}
                      >
                        {tag.name}
                      </span>
                    </li>
                  ))}
              </ul>

                              <h2 class='card_text card_text_abstract abstract_small_text card_text_color_abstractPublish '>
                                <div class=''>
                                  <span>
                                    <div
                                      style={{
                                        position: "relative",
                                        opacity: 1,
                                        transform:
                                          "perspective(1000px) translate3d(0px, 0px, 0px)",
                                        fontSize: "15px",
                                        color: "#fff",
                                        fontWeight: "500",
                                        zIndex: "100",
                                      }}
                                      class='default_Title'
                                    >
                                      {props.title}
                                    </div>
                                  </span>
                                </div>
                                
                              </h2>
{/* 
           <div class="social-list align-items-center sign-in">
						<div class="align-items-center facebook-bg">
							<i class='bx bxl-facebook'></i>
						</div>
						<div class="align-items-center google-bg">
							<i class='bx bxl-google'></i>
						</div>
						<div class="align-items-center twitter-bg">
							<i class='bx bxl-twitter'></i>
						</div>
						<div class="align-items-center insta-bg">
							<i class='bx bxl-instagram-alt'></i>
						</div>
					</div> */}

         
                                     
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

                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  }
                </div>
              </div>
            </div>
          </div>
          <div className='cardContent'>
            <div className='cardContainer ListCardContent  styles_List'>
              <ul className='category_tags'>
                {props.tag &&
                  props.tag.map((tag) => (
                    <li className='category_tags_styles category_tags_items'>
                      <span className='category_label category_label_style '>
                        {tag.name}
                      </span>
                    </li>
                  ))}
              </ul>
              <h2 className='card_titleContainer card_title card_small_text card_text_color'>
                {props.title}
              </h2>
              <p className='card_text card_text_abstract abstract_small_text card_text_color_abstractPublish'>
                {props.abstract}
              </p>
              <div className='AuthorContainer author author_small_label'>
                <div>
                  <p className='card_text card_small_text author_color_label'>
                  <FormattedMessage
            id='blog.details.meta.author'
            values={{ author: props.name }}
          /> 
                  </p>

                  {props.translator ? (
                    <p className='card_text card_small_text author_color_label'>
                    <FormattedMessage
            id='blog.details.meta.translatedBy'
            values={{ translator: props.translator }}
          />
                      
                    </p>
                  ) : null}

                  <p className='card_text publish_label card_text_color_abstractPublish'>
                    {props.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
