import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { LocaleContext } from "../Hooks/useLocale";
import { useIntl } from "react-intl";
import { FormattedMessage } from "react-intl";
import Icons from "./Icons/Icons";
import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  transform: translateZ(1000px);
  width: 100%;

  a {
    display: block;
    position: relative;
    width: 100%;
    text-decoration: none;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    list-style: none;
    transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) !important ;
    cursor: pointer;
  }
  a:hover {
    transform: scale(1.04, 1.04) !important;
  }
`;

const CardBackground = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: perspective(100px) scale(1.0305, 1.0305);
  &:hover {
    transform: scale(1.03);
  }
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
`;

const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #d8d8d8;
  will-change: transform;
  transform-origin: bottom;
  transform: scale(1.0305, 1.0305);
`;

const CoverRatio = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  background-color: #e7edf1;
  padding-bottom: 56.25%;
`;

const CoverWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const CoverInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: block;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%),
    linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(
      209.21deg,
      rgb(87, 15, 141) 13.57%,
      rgb(243, 91, 160) 98.38%
    );
`;

const TitleContainer = styled.div`
  max-width: 980px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 81.6666666667%;

  @media (min-width: 992px) {
    width: 81.6666666667%;
  }
`;

const TextWrapper = styled.div`
  opacity: 1;
  width: 100%;
  text-align: center;
  max-width: 690px;
  margin: 0 auto 60px;
  margin: auto;
`;

const CategoryLists = styled.ul`
  display: inline-block;
  display: none;
  margin-bottom: 14px;
`;

const CategoryItem = styled.li`
  display: inline-block;
  font-family: Effra-ar;
  font-weight: 500;
  font-size: 9px;
  line-height: 10px;
  position: relative;
  display: inline-block;
  opacity: 0.7;
  transform: perspective(1000px) translate3d(0px, 0px, 0px);
  color: #fff;
  z-index: 1000;
`;

function Card(props) {
  const locale = useContext(LocaleContext);
  const intl = useIntl();

  useEffect(() => {
    AOS.init();
  });

  return (
    <CardContainer>
      <Link
        to={{
          pathname: `/${intl.locale}/blog/${props.slug}`,
          state: {
            blogLocale: props.cardData.locale,
            blogSlug: props.cardData.slug,
            blogId: props.cardData.id,
          },
        }}
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-once="true"
      >
        <CardBackground></CardBackground>

        <CardWrapper>
          <CoverContainer href={`/${locale.value}/blog/${props.slug}`}>
            <CoverRatio>
              <CoverWrapper>
                {
                  <>
                    <CoverInnerWrapper>
                      <TitleContainer>
                        {/* <TextWrapper> */}
                        <div
                          class="SixthSectionLabelTitleText  SixthSectionLabelTitleText_withGradient SixthSectionLabelTitleText_center"
                          style={{ opacity: 1 }}
                        >
                          <ul className="category_tags  SixthSectionLabel_style SixthSectionLabel_color">
                          {/* <CategoryLists> */}
                            {props.tag &&
                              props.tag.map((tag) => (
                                <li className="category_tags_styles category_tags_items">
                                  <span
                                    className="category_label category_label_style default_Category "
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
                          {/* </CategoryLists> */}

                          <h2 class="card_text card_text_abstract abstract_small_text card_text_color_abstractPublish ">
                            <div class="">
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
                                  class="default_Title"
                                >
                                  {props.title}
                                </div>
                              </span>
                            </div>
                          </h2>

                          <Icons icons={props.icons} />
                          {/* </TextWrapper> */}
                        </div>
                      </TitleContainer>
                    </CoverInnerWrapper>
                  </>
                }
              </CoverWrapper>
            </CoverRatio>
          </CoverContainer>


          <div className="cardContent">
            <div className="cardContainer ListCardContent  styles_List">
              <ul className="category_tags">
                {props.tag &&
                  props.tag.map((tag) => (
                    <li className="category_tags_styles category_tags_items">
                      <span className="category_label category_label_style ">
                        {tag.name}
                      </span>
                    </li>
                  ))}
              </ul>
              <h2 className="card_titleContainer card_title card_small_text card_text_color">
                {props.title}
              </h2>
              <p className="card_text card_text_abstract abstract_small_text card_text_color_abstractPublish">
                {props.abstract}
              </p>
              <div className="AuthorContainer author author_small_label">
                <div>
                  <p className="card_text card_small_text author_color_label">
                    <FormattedMessage
                      id="blog.details.meta.author"
                      values={{ author: props.name }}
                    />
                  </p>

                  {props.translator ? (
                    <p className="card_text card_small_text author_color_label">
                      <FormattedMessage
                        id="blog.details.meta.translatedBy"
                        values={{ translator: props.translator }}
                      />
                    </p>
                  ) : null}

                  <p className="card_text publish_label card_text_color_abstractPublish">
                    {props.publishDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardWrapper>
      </Link>
    </CardContainer>
  );
}

export default Card;
