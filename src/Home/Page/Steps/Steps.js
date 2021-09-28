import React, { useEffect, useState } from "react";
import "./Steps.css";
import { FormattedMessage, useIntl } from "react-intl";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimateBackground from "./AnimateBackground/AnimateBackground";
import MainProductHeader from "./AnimateBackground/MainProductHeader";
import Product from "./AnimateBackground/Product";
import { isEqual } from "lodash";
import axios from "axios";
import styled from "styled-components";

function Steps() {
  const [page, setPage] = useState();
  const [products, setProducts] = useState([]);
  const intl = useIntl();
  window.addEventListener("scroll", () => {
    setPage(window.pageYOffset);
  });
  console.log(page);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    axios
      .get(`http://54.220.211.123:1335/products?_locale=${intl.locale}`)
      .then((res) => {
        if (!isEqual(res.data, products)) {
          setProducts(res.data);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [products, intl.locale]);
  console.log(products)

  return (
    <Container>
      <MainProductHeader 
      label={intl.formatMessage({id:"products.main.label"})}
      title={intl.formatMessage({id:"products.main.title"})}
      text={intl.formatMessage({id:"products.main.text"})}

      />

      <Wrapper>
        <div className="step_stepsAnimatedBackground">
          <div className="step_stepsInnerWrapper">
            <AnimateBackground />
          </div>
        </div>

        {products.slice(0,4).map((product, index) => (
          <Product
            title={product.name}
            slogan={product.slogan}
            description={product.body}
            index={index}
          />
        ))}
      </Wrapper>
    </Container>
  );
}

export default Steps;

const Container = styled.div`
  margin-top: 250px;
  scroll-behavior: smooth;
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 992px) {
    margin: -20vh 0 0;
  }
`;

const AnimatedBackground = styled.div`
  z-index: 10;
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;

  @media (min-width: 992px) {
    display: block;
  }
`;

const Inner = styled.div`
  -webkit-perspective: 1800px;
  perspective: 1800px;
  display: -moz-box;
  display: flex;
  -moz-box-align: center;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  overflow: hidden;
  top: 0;
  margin: 0;
  height: 100vh;
  @media (min-width: 992px) {
    width: 40%;
    padding: 200px 45px;
  }

  @media (min-width: 1441px) {
    overflow: visible;
  }
`;
