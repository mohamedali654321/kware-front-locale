import React, { useState, useEffect, useRef } from "react";
import { isEqual } from "lodash";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import "./Blog.css";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import Card from "../../Components/Card/Card";
import DropdownMenu from "../../Components/DropdownMenu/DropdownMenu";

export default function Blog() {
  const intl = useIntl();
  const [visible, setVisible] = useState(12);
  const [card, setCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
 
  const inputElement = useRef("");
  const filterElement = useRef("");
 
   const str ="New Release"

  const handleSearch = (searchTerm) => {
    setInputText(searchTerm);
    if (inputText !== "") {
      const newCarddata = card.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(inputText.toLowerCase());
      });
      setSearchResults(newCarddata);
    }
  };

  const searchTerm = () => {
    handleSearch(inputElement.current.value);
  };

 




  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 12);
  };

  useEffect(() => {
    AOS.init();
    
    
   
   
  });

  useEffect(() => {
    axios
      .get(
        `http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale=${intl.locale}`
      )
      .then((res) => {
        if (!isEqual(res.data, card)) {
          setCard(res.data);
        }
        
      })
      .catch((err) => console.log(err));
  }, [card, intl.locale]);

  useEffect(() => {
    axios
      .get("http://54.220.211.123:1335/categories?_locale=" + intl.locale)
      .then((res) => {
        if (!isEqual(res.data, categories)) {
          setCategories(res.data);
        }
      })
      .catch((err) => console.log(err));
  }, [categories, intl.locale]);

  return (
    <div>
      <div className="styles_container_blog">
        <div className="styles_background_blog">
          <div className="styles_wrapper">
            <div className="styles_innerWrapper">
              <div
                className="styles_LabelTitleText_blog hero_title_blog  styles_center_align"
                style={{ opacity: 1 }}
              >
                <h1 className="blog_Title styles_title title-size themes_color">
                  <div
                    className="titleContainer"
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="300"
                  >
                    <span>
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                          opacity: 1,
                          transform:
                            "perspective(1000px) translate3d(0px, 0px, 0px)",
                        }}
                        
                      >
                        <div class="liq-content">
                          <h2>
                            <FormattedMessage id="blog.title.libraryThings" />
                          </h2>
                          <h2>
                            <FormattedMessage id="blog.title.libraryThings" />
                          </h2>
                        </div>
                      </div>
                    </span>
                  </div>
                </h1>
              </div>
            </div>
          </div>
          <div className="triangle_container ">
            <div className="triangle  triangle_position">
              <div className="triangle_wrapper">
                <div className="dots_triangle">
                  <div
                    className="ratio_triangle"
                    style={{ paddingBottom: "30.927835051546392%" }}
                  ></div>
                </div>
                <div className="styles_image">
                  <div
                    className="ratio_triangle"
                    style={{ paddingBottom: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="articles">
          <div className="styles_background_blog">
            <div className="styles_wrapper">
              <div className="styles_innerWrapper">
                <div className="styles_filterBar">
                  <DropdownMenu
                    ref={filterElement}
                    header={<FormattedMessage id="blog.categoryBox.label" />}
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    options={[...categories.map((cat) => cat.name)]}
                    
                    
                  />
                  <div className="InputText_search searchText">
                    <input
                      ref={inputElement}
                      type="text"
                      value={inputElement.current.value}
                      name="search"
                      placeholder={intl.formatMessage({
                        id: "blog.searchBox.placeholder",
                      })}
                      onChange={searchTerm}
                    />
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      className="styles_icon_search"
                    >
                      <path
                        clip-rule="evenodd"
                        d="M9.489 10.699a5.99 5.99 0 01-3.547 1.183C2.676 11.882 0 9.22 0 5.95S2.691 0 5.958 0c3.266 0 5.926 2.663 5.926 5.949a5.97 5.97 0 01-1.182 3.55L14 12.785 12.787 14l-3.298-3.301zm.669-4.766a4.211 4.211 0 00-4.216-4.22 4.248 4.248 0 00-4.23 4.236 4.225 4.225 0 004.23 4.22c2.334 0 4.216-1.9 4.216-4.236z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="tagsResults">
                  <div className="tagsWrapper"></div>
                  <p className="styles_blog_text results small_tags_text styles_blog_textColor">
                    <span>
                      <FormattedMessage id="blog.resault.showing" />{" "}
                      {visible <= card.length ? visible : card.length}
                      <FormattedMessage id="blog.resault.ofBlog" />{" "}
                      {searchResults.length
                        ? searchResults.length
                        : card.length}{" "}
                      <FormattedMessage id="blog.resault.blogPosts" />
                    </span>
                  </p>
                </div>
                <div className="CardsGrid " style={{ opacity: 1 }}>
                  {(searchResults.length || inputText !== ""
                    ? searchResults
                    : card
                  )
                    .slice(0, visible)
                    .map((item, index) => (
                      <Card
                        cardData={item}
                        image={item.image ? item.image : null}
                        tag={
                          item.categories.length >= 0 ? item.categories : null
                        }
                        title={item.title}
                        abstract={item.abstract}
                        name={item.author}
                        publishDate={item.publishDate}
                        slug={item.slug}
                        translator={item.translator ? item.translator : null}
                        index={index}
                        delay={item.id}
                        icons={item.icons}
                      />
                    ))}
                </div>
                {!searchResults.length && inputText !== "" && (
                  <>
                    <div className="noResultsContent">
                      <div className="noResultsBlog">
                        <svg
                          width="35"
                          height="35"
                          fill="none"
                          
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M34.727 29.405l-7.73-7.827a14.28 14.28 0 001.915-7.099C28.912 6.497 22.422 0 14.456 0 6.49 0 0 6.497 0 14.48c0 7.982 6.49 14.479 14.456 14.479 2.543 0 5.058-.702 7.3-2.041l7.693 7.8c.173.173.42.282.666.282.246 0 .492-.1.665-.282l3.947-3.992a.935.935 0 000-1.32zM14.454 5.64c4.867 0 8.823 3.963 8.823 8.838 0 4.876-3.956 8.84-8.823 8.84-4.867 0-8.823-3.965-8.823-8.84S9.587 5.64 14.454 5.64z"
                            fill="#92A0C4"
                          ></path>
                        </svg>
                        <p
                          className="
                     noResultsTextBlog
                      noResultsText_fontBlog
            
                                  "
                        >
                          <FormattedMessage id="blog.noResults"/>
                          <span>
                            <span className="searchedTerm_Blog">{`  " ${inputText} " `}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                  </>
                )}
                <div
                  className="buttonContainer_showMore"
                  style={
                    !searchResults.length && inputText !== ""
                      ? { display: "none" }
                      : { display: "block" }
                  }
                  data-aos="zoom-in"
                  data-aos-offset="200"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  <div className="button_showMore buttonContainer">
                    <div className="styles_button__1CLx_ styles_buttons_bg">
                      <div
                        className="styles_background styles_buttons_bg"
                        style={{ transform: "perspective(800px)" }}
                      ></div>
                      <button className="buttonLink " onClick={showMoreItems}>
                        <FormattedMessage id="homeHero.button.seeMore" />
                        <svg
                          className="styles_SmallArrow SmallArrowstyles  "
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                            fill="#74E4A2"
                          ></path>
                          <path
                            d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                            fill="#74E4A2"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
