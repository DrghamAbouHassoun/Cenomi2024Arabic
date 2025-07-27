import type { ReactNode } from "react";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import styles from "./KingdomSaudi.module.css";

import aboutImage1 from "./images/about-1.svg";
import aboutImage2 from "./images/about-2.svg";
// import backgroundImage from "./images/background.jpg";
import backgroundImageMobile from "./images/background-mobile.jpg";
import useWindowSize from "../../../hooks/useWindowSize";
import Count from "../../../components/Count/Count";

import brand1 from "./images/brands/1.svg";
import brand2 from "./images/brands/2.svg";
import brand3 from "./images/brands/3.svg";
import brand4 from "./images/brands/4.svg";
import brand5 from "./images/brands/5.svg";
import brand6 from "./images/brands/6.svg";
import brand7 from "./images/brands/7.svg";
import brand8 from "./images/brands/8.svg";
import brand9 from "./images/brands/9.svg";
import brand10 from "./images/brands/10.svg";
import brand11 from "./images/brands/11.svg";
import brand12 from "./images/brands/12.svg";
import brand13 from "./images/brands/13.svg";
import brand14 from "./images/brands/14.svg";
import brand15 from "./images/brands/15.svg";
import brand16 from "./images/brands/16.svg";
import brand17 from "./images/brands/17.svg";
import brand18 from "./images/brands/18.svg";
import brand19 from "./images/brands/19.svg";
import brand20 from "./images/brands/20.svg";
import brand21 from "./images/brands/21.svg";
import brand22 from "./images/brands/22.svg";

import zaraImage from "./images/zara.svg";
import { useInView } from "react-intersection-observer";
import { Frame } from "../../../components/Frame/Frame";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

const brandImages = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
  brand11,
  brand12,
  brand13,
  brand14,
  brand15,
  brand16,
  brand17,
  brand18,
  brand19,
  brand20,
  brand21,
  brand22,
];

const aboutImages = [aboutImage1, aboutImage2];

const pageContent = content.pages.KingdomSaudi;
export const KingdomSaudi = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  const { ref: refBrands, inView: inViewBrands } = useInView();
  return (
    <div>
      <div className="container horizontal-padding">
        <Paragraph classNames="color-aubergine-900" fontClassName="subheading">
          {getRightContent(rtlLanguage, pageContent.intro1)}
        </Paragraph>
        <div className="spacer-32"></div>
        <Paragraph classNames="color-aubergine-900" fontClassName="subheading">
          {getRightContent(rtlLanguage, pageContent.intro2)}
        </Paragraph>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <div className={`${styles.secondarySection} ${styles.dark}`}>
          <Paragraph
            fontClassName="subheading bold"
            classNames="white"
          >{getRightContent(rtlLanguage, pageContent.section1.title)}</Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="white"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph1)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="white"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph2)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="white"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph3)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="white"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph4)}
          </Paragraph>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className={styles.background}>
        <div className="spacer-32"></div>
        <div className="container horizontal-padding">
          <Paragraph
            classNames="color-aubergine-900 bold"
            fontClassName="subheading"
          >
            {getRightContent(rtlLanguage, pageContent.about)}
          </Paragraph>

          <div className="spacer-8"></div>
          <div className="paragraph-container">
            {getRightContent(rtlLanguage, pageContent.aboutText).map(
              (item: ReactNode, index: number) => (
                <Paragraph
                  fontClassName="subheading"
                  classNames="color-dark-gray "
                  key={index}
                  delay={
                    getDelayedIndexBasedAnimationTime(windowWidth, index) + "s"
                  }
                >
                  {item}
                </Paragraph>
              )
            )}
          </div>

          <div className="spacer-64"></div>

          <div className={styles.iconsCenter}>
            {pageContent.aboutIcons.map((item, index) => {
              return (
                <div key={index} className={styles.iconText}>
                  <img
                    src={aboutImages[index]}
                    className={styles.aboutImage}
                    alt=""
                  />
                  <Count
                    countValue={item.countValue}
                    countSpanLeft={getRightContent(rtlLanguage, item.preffix)}
                    countSpan={getRightContent(rtlLanguage, item.suffix)}
                    classCountSpan={`${
                      windowWidth < 320 ? "body-m" : windowWidth < 768 ? "body-l" : "subheading"
                    } color-aubergine-900`}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="spacer-32"></div>
      </div>

      <div className={styles.backgroundImage}>
        {windowWidth < 1024 && (
          <img
            alt=""
            src={backgroundImageMobile}
            className={styles.backgroundSticky}
          />
        )}
        <div
          className={[
            "container horizontal-padding",
            windowWidth < 1024 ? styles.stickyContent : "",
          ].join(" ")}
        >
          <div className="spacer-64"></div>
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          <div className={styles.contentWrapper}>
            <div className={[styles.brandsContainer].join(" ")}>
              <Paragraph classNames="color-aubergine-900 bold">
                {getRightContent(rtlLanguage, pageContent.brandsTitle)}
              </Paragraph>

              <div className="spacer-32"></div>

              <div className={styles.tier1Images} ref={refBrands}>
                {brandImages.map((item, index) => (
                  <div
                    key={index}
                    style={getVisibleSensorAnimation(
                      inViewBrands,
                      `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                        1025,
                        index,
                        0.1
                      )}s backwards`
                    )}
                  >
                    <img src={item} className={styles.tier1Img} alt="" />
                  </div>
                ))}
              </div>

              <div className="spacer-32"></div>
              <Paragraph
                classNames="color-aubergine-1000"
                fontClassName="body-s"
              >
                {getRightContent(rtlLanguage, pageContent.legend)}
              </Paragraph>
            </div>
            <div className="spacer-64"></div>
            <div className={styles.boxesWrapper}>
          <div className={styles.box}>
            <Paragraph classNames="white">
              {getRightContent(rtlLanguage, pageContent.box1)}
            </Paragraph>
          </div>
          <div className={styles.box}>
            <Paragraph classNames="white">
              {getRightContent(rtlLanguage, pageContent.box2)}
            </Paragraph>
          </div>
        </div>
          </div>
          <div className="spacer-64"></div>
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
        </div>
      </div>

      {/* <div className="spacer-64"></div> */}

      <div className={styles.blueBackground}>
        <div className="spacer-64"></div>
        <div className="container horizontal-padding">
          <div className={styles.brandHeader}>
            <div>
              <Paragraph fontClassName="h3" classNames="white bold">
                {getRightContent(rtlLanguage, pageContent.caseStudy)}
              </Paragraph>

            </div>
            <img src={zaraImage} className={styles.subway} alt="" />

          </div>
          <div className="spacer-16"></div>
          <Paragraph fontClassName="h4" classNames="white bold">
            {getRightContent(rtlLanguage, pageContent.zaraText[0].title)}
          </Paragraph>
          <div className="spacer-32"></div>
          <div className={styles.zaraTextWrapper}>
            {pageContent.zaraText.map((item, index) => (
              <div key={index}>
                {index > 0 && (<Paragraph classNames="white bold">
                  {getRightContent(rtlLanguage, item.title)}
                </Paragraph>)}
                <div className="spacer-8"></div>
                <div className="paragraph-container">
                  {getRightContent(rtlLanguage, item.text).map(
                    (item: ReactNode, index: number) => (
                      <Paragraph
                        classNames="white"
                        key={index}
                        delay={
                          getDelayedIndexBasedAnimationTime(
                            windowWidth,
                            index
                          ) + "s"
                        }
                      >
                        {item}
                      </Paragraph>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="spacer-64"></div>
          <div className={styles.frameWrapper}>
            <Frame
              badge
              
              customBadgeBackground="hsla(269, 21%, 42%, 1)"
            >
              <div className={styles.frameContent}>
                <Paragraph fontClassName="subheading" classNames="white">
                  {getRightContent(rtlLanguage, pageContent.frameText)}
                </Paragraph>
              </div>
            </Frame>
          </div>
        </div>

        <div className="spacer-64"></div>
      </div>
      <div className="spacer-32"></div>
      <div className="container horizontal-padding">
        <Paragraph classNames="bold subheading color-aubergine-900">
          {getRightContent(rtlLanguage, ["To view the full Saudi Retail chapter, please click here to download the PDF.", ""])}
        </Paragraph>
        <div className="spacer-16"></div>
        <DownloadButton
          text={["Read More", "أعرف المزيد"]}
          link="./pdf/Saudi_retail.pdf"
        />
      </div>
      <div className="spacer-32"></div>
    </div>
  );
};
