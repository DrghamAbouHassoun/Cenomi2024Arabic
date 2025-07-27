import { useContext, useEffect, useState } from "react";
import SvgComponent from "../../components/animationBorder/SvgComponent";
import styles from "./Home.module.css";
import { Intro } from "./Intro/Intro";
import useWindowSize from "../../hooks/useWindowSize";
import SvgMobile from "../../components/animationBorder/SvgMobile";
import YearNumber from "./YearNumber/YearNumber";
import Paragraph from "../../components/Paragraph/Paragraph";
import { getRightContent } from "../../ts/util";
import useAppStore from "../../store";
import content from "../../content/content";
import useScrollDirection from "../../hooks/useScrollDirection";
import { ThemeModalContext } from "../../components/ThemeModal/ThemeModalContext";
import ThemeModal from "../../components/ThemeModal/ThemeModal";

const pageContent = content.pages.Home;
export const Home = () => {
  const { isOpen, handleToggle } = useContext(ThemeModalContext)

  const [showSvg, setShowSvg] = useState(false);
  const [lockScroll, setLockScroll] = useState(true)
  const windowWidth = useWindowSize();
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const changePage = useAppStore((s) => s.changePage);

  useScrollDirection(() => !lockScroll && changePage({ mainPage: 1, subMenuPageLevel1: 0 }));

  useEffect(() => {
    const tiemOut = setTimeout(() => {
      setShowSvg(true);
      setLockScroll(false)
    }, 5500);

    return function () {
      clearTimeout(tiemOut);
    };
  }, []);

  useEffect(() => {

  }, [lockScroll])
  return (
    <>
      <ThemeModal />
      <div className={styles.container}>


        <Intro />
        <div
          className={[styles.svgContainer, showSvg ? styles.show : ""].join(" ")}
        >
          {windowWidth < 1024 ? <SvgMobile /> : <SvgComponent />}
          <div className={styles.centerText}>
            <Paragraph delay="0.3s" fontClassName="subheading" classNames="white">
              {getRightContent(rtlLanguage, pageContent.centerText)}
            </Paragraph>

            <Paragraph
              delay="0.6s"
              fontClassName="subheading"
              classNames="white bold"
            >
              <div className={styles.annualReportContainer} onClick={() => changePage({ mainPage: 1, subMenuPageLevel1: 0 })}>
                {getRightContent(rtlLanguage, content.general.annualReport)}
                <div className={styles.line}></div>

              </div>
            </Paragraph>
          </div>
          <div className={styles.yearNumber}>

            <YearNumber />
            <Paragraph
              delay="0.8s"
              fontClassName={windowWidth > 1023 ? "headline" : "body-l"}
              classNames="white bold text-center"
            >
              {getRightContent(rtlLanguage, pageContent.bottomText)}
            </Paragraph>

          </div>
          <button onClick={() => { handleToggle(!isOpen) }} className={`${styles.themeModalButton} ${rtlLanguage ? styles.rtl : ""}`}>
            <div className={styles.annualReportContainer} >
              {getRightContent(rtlLanguage, ["Theme of the Year", "شعار العام"])}
              <div className={styles.themeLine}></div>

            </div>
          </button>
        </div>

      </div>
    </>
  );
};
