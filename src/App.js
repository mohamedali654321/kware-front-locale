import React, { Fragment, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Layout/Header/NavBar/Header";
import Footer from "./Components/Layout/Footer/Footer";
import OurPartners from "./Components/OurPartners/OurPartners";
import OurClints from "./Components/OurClints/OurClints";
import SysSolutions from "./Components/SysSolutions/SysSolutions";
import Services from "./Components/Services/Services";
import Products from "./Components/Product/Products";
import HomePage from "./Home/HomePage";
import Scroll from "./Components/Layout/Scroll/Scroll";
import useLocale, { LocaleContext } from "./Components/Hooks/useLocale";
import { IntlProvider } from "react-intl";
import Arabic from "./translations/ar.json";
import English from "./translations/en.json";
import MainPage from "./Views/Blog/MainPage";
import BlogDetails from "./Views/BlogDetails/BlogDetails";
import { StyleSheetManager } from "styled-components";
import stylisRTLCSS from "stylis-rtlcss";

function App() {
  const [locale, setLocale] = useLocale(
    localStorage.getItem("defaultLocale")
      ? localStorage.getItem("defaultLocale")
      : "ar"
  );
  const [translations, setTranslations] = useState();

  useEffect(() => {
    if (locale === "ar") {
      setTranslations(Arabic);
    } else {
      setTranslations(English);
    }
    localStorage.setItem("defaultLocale", locale);
  }, [locale]);

  return (
    <StyleSheetManager
      {...(locale === "ar" ? { stylisPlugins: [stylisRTLCSS] } : {})}
    >
      <LocaleContext.Provider value={{ value: locale, setValue: setLocale }}>
        <IntlProvider
          locale={locale}
          messages={translations}
          textComponent={Fragment}
        >
          <Router>
            <Header />
            <Scroll />
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/blog' exact component={MainPage} />
              <Route path='/:locale/blog/:slug' exact component={BlogDetails} />
              <Route path='/our-partners' exact component={OurPartners} />
              <Route path='/our-clients' exact component={OurClints} />
              <Route path='/sys-solutions' exact component={SysSolutions} />
              <Route path='/services' exact component={Services} />
              <Route path='/products' exact component={Products} />
            </Switch>
            <Footer />
          </Router>
        </IntlProvider>
      </LocaleContext.Provider>
    </StyleSheetManager>
  );
}

export default App;
