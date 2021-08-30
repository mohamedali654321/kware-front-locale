import { useState, useEffect, createContext } from "react";

const defaultLocale = localStorage.getItem("defaultLocale");

export const LocaleContext = createContext({
  value: defaultLocale ? defaultLocale.defaultLocale : "ar",
  setValue: () => {},
});

function useLocale(currentLocale) {
  const context = LocaleContext;
  const [locale, setLocale] = useState(currentLocale);
  const links = document.querySelectorAll('link[rel="stylesheet"]');

  useEffect(() => {
    if (locale === "ar") {
      document.documentElement.setAttribute("lang", "ar");
      document.documentElement.setAttribute("dir", "rtl");
      if (links.length) {
        links.forEach((styleSheet) => {
          if (styleSheet.href.endsWith(".chunk.css")) {
            const link = document.createElement("link");
            link.href = styleSheet.href.replace(/\.css$/, ".rtl.css");
            link.rel = "stylesheet";
            document.body.appendChild(link);
            setLocale("ar");
            context.value = "ar";
          }
        });
      }
    } else {
      document.documentElement.setAttribute("lang", "en");
      document.documentElement.setAttribute("dir", "ltr");
      links.forEach((style) => {
        if (style.href.endsWith(".chunk.rtl.css")) {
          document.body.removeChild(style);
          context.value = locale;
        }
      });
    }
  }, [context, context.value, locale, links]);

  const handler = (setValue) => {
    setLocale(setValue);
  };
  return [locale, handler];
}

export default useLocale;
