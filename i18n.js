import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    transaltion: English,
  },
  ar: {
    transaltion: Arabic,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // setting the initial value
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

