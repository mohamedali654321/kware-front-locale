import React, { useState, useEffect, useRef } from "react";
import { isEqual } from "lodash";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import styled from "styled-components";

import "./Blog.css";

import { FormattedMessage, useIntl } from "react-intl";
import Card from "../../Components/Card/Card";
import DropdownMenu from "../../Components/DropdownMenu/DropdownMenu";

export default function Blog() {
  const intl = useIntl();

  const [card, setCard] = useState([]);
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [visible, setVisible] = useState(12);
  const inputElement = useRef("");
  console.log(selectedCategory, inputText);

  useEffect(() => {
    if (selectedCategory !== "" && inputText === "") {
      if (selectedCategory === intl.formatMessage({ id: "all.categories" })) {
        setCategoryFilter(card);
        setSearchResults(card);
      } else {
        const handleFilter = card.filter((card) => {
          if (card.categories.length) {
            return (
              card.categories[0].name.toLowerCase() ===
              selectedCategory.toLowerCase()
            );
          }
        });
        setCategoryFilter(handleFilter);
        setSearchResults(handleFilter);
      }
    } else if (inputText !== "") {
      const newCarddata = (
        categoryFilter.length && selectedCategory !== "" ? categoryFilter : card
      ).filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(inputText.toLowerCase());
      });

      setSearchResults(newCarddata);
    } else {
      setSearchResults(card);
    }
  }, [selectedCategory, inputText]);

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
    <BlogContainer>
      <BlogBackground>
        <BlogTextWrapper>
         
            <BlogLabel
              
              data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="300"
            >
              
                  <BlogLabelAnimation>
                    <h2>
                      <FormattedMessage id="blog.title.libraryThings" />
                    </h2>
                    <h2>
                      <FormattedMessage id="blog.title.libraryThings" />
                    </h2>
                  </BlogLabelAnimation>
               
              </BlogLabel>
         
        </BlogTextWrapper>
      </BlogBackground>

      <div className="articles">
        <div className="styles_background_blog">
          <div className="styles_wrapper">
            <div className="styles_innerWrapper">
              <div className="styles_filterBar">
                <DropdownMenu
                  header={<FormattedMessage id="blog.categoryBox.label" />}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  options={[
                    intl.formatMessage({
                      id: "all.categories",
                    }),
                    ...categories.map((cat) => cat.name),
                  ]}
                />
                <div className="InputText_search searchText">
                  <input
                    ref={inputElement}
                    type="text"
                    value={inputText}
                    name="search"
                    placeholder={intl.formatMessage({
                      id: "blog.searchBox.placeholder",
                    })}
                    onChange={(e) => setInputText(e.target.value)}
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
                  {inputText === "" &&
                    selectedCategory === "" &&
                    !searchResults.length && (
                      <span>
                        <FormattedMessage id="blog.resault.showing" />{" "}
                        {visible <= card.length && visible > 0 && card.length
                          ? visible
                          : card.length}
                        <FormattedMessage id="blog.resault.ofBlog" />{" "}
                        {card.length ? card.length : null}{" "}
                        <FormattedMessage id="blog.resault.blogPosts" />
                      </span>
                    )}

                  {(inputText !== "" || selectedCategory !== "") &&
                    searchResults.length && (
                      <span>
                        <FormattedMessage id="blog.resault.showing" />{" "}
                        {visible <= searchResults.length &&
                        visible > 0 &&
                        searchResults.length
                          ? visible
                          : searchResults.length}
                        <FormattedMessage id="blog.resault.ofBlog" />{" "}
                        {searchResults.length ? searchResults.length : null}{" "}
                        <FormattedMessage id="blog.resault.blogPosts" />
                      </span>
                    )}
                </p>
              </div>
              <div className="CardsGrid " style={{ opacity: 1 }}>
                {(searchResults.length ||
                inputText !== "" ||
                selectedCategory !== ""
                  ? searchResults
                  : card
                )
                  .slice(0, visible)
                  .map((item, index) => (
                    <Card
                      key={item.id}
                      cardData={item}
                      image={item.image ? item.image : null}
                      tag={item.categories.length >= 0 ? item.categories : null}
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
              {!searchResults.length &&
                (inputText !== "" || selectedCategory !== "") && (
                  <>
                    <div className="noResultsContent">
                      <div className="noResultsBlog">
                        <svg width="35" height="35" fill="none">
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
                          <FormattedMessage id="blog.noResults" />
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
                  (inputText !== "" || selectedCategory !== "") &&
                  !searchResults.length
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
                          fill="#8d1cb8"
                        ></path>
                        <path
                          d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                          fill="#8d1cb8"
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
    </BlogContainer>
  );
}

const BlogContainer = styled.div`
  padding: 140px 0 0;

  @media (min-width: 992px) {
    padding: 170px 0 0;
  }
`;

const BlogBackground = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 83.3333333333%;
  max-width: 1200px;
  z-index: 1;
`;
const BlogTextWrapper = styled.div`
  width: 100%;
  opacity: 1;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  margin: 0 auto 56px;
  transform: translateZ(0);
  @media (min-width: 992px) {
    margin: 0 auto 80px;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

const BlogLabel = styled.h1`
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: Poppins, serif;
  font-size: 23px;
  font-weight: 700;
  line-height: 56px;
  @media (min-width: 992px) {
    font-size: 33px;
    font-size: 43px;
  }

  font-size: 33px;
  line-height: 1.19;
  color: #8d1cb8;
  position: relative;
  cursor: pointer;
  display: inline-block;
  opacity: 1;
  transform: perspective(1000px) translate3d(0px, 0px, 0px);

 
`;


const BlogLabelAnimation=styled.div`
 h2:nth-child(1) {
  color: #fff;
  -webkit-text-stroke: 2px #8d1cb8;
  filter: brightness(130%);
  position: absolute;
}
h2:nth-child(1):hover {
  -webkit-text-stroke: 2px #b73ee7;
  filter: brightness(130%);
}
h2:nth-child(2) {
  color: #8d1cb8;
  animation: liquid 2s ease-in-out infinite;
}
h2:nth-child(2):hover {
  color: #b73ee7;
  filter: brightness(130%);
}
@keyframes liquid {
  0%,
  100% {
    clip-path: polygon(
      0% 45%,
      15% 44%,
      32% 50%,
      54% 60%,
      71% 61%,
      84% 59%,
      100% 52%,
      100% 100%,
      0% 100%
    );
  }
  50% {
    clip-path: polygon(
      0% 60%,
      61% 65%,
      34% 66%,
      51% 62%,
      67% 50%,
      84% 45%,
      100% 46%,
      100% 100%,
      0% 100%
    );
  }
}


`;