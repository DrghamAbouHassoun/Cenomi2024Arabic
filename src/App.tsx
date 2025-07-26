import "normalize.css"
import './App.css'
import { useEffect } from "react";
import useAppStore from "./store";
import Layout from "./components/Layout/Layout";
import ThemeModalProvider from "./components/ThemeModal/ThemeModalContext";

function App() {

const toggleLanguage = useAppStore((s) => s.toggleLanguage);  
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");


  useEffect(() => {
    if (lang === "ar") {
      const rtl = document.body.getAttribute("dir");
      if (rtl !== "rtl") {
        document.body.setAttribute("dir", "rtl");
        toggleLanguage();
      }
    } else if (lang === "en") {
      const rtl = document.body.getAttribute("dir");
      if (rtl === "rtl") {
        document.body.setAttribute("dir", "ltr");
        toggleLanguage();
      }
    }
  }, []);

  return (
    <ThemeModalProvider>
      <Layout/>
    </ThemeModalProvider>
  )
}

export default App
