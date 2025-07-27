import styles from "./FoodAndBeverage.module.css";

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

import aboutImage1 from "./images/about-1.svg";

import backgroundImageMobile from "./images/background-mobile.jpg";

import subwayImage from "./images/subway.svg";
import Paragraph from "../../../components/Paragraph/Paragraph";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import { useInView } from "react-intersection-observer";
import Count from "../../../components/Count/Count";
import type { ReactNode } from "react";

import awardImage from "./images/award.svg";
import { Frame } from "../../../components/Frame/Frame";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

const aboutImages = [aboutImage1];

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
];

const pageContent = content.pages.FoodeAndBeverage;

export const FoodAndBeverage = () => {
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
        <div className={`${styles.secondarySection} ${styles.dark} `}>
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
                    classCountSpan={`${windowWidth < 320 ? "body-m" : windowWidth < 768 ? "body-l" : "subheading"
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

            <div className="spacer-32"></div>
            <div className={styles.box}>
              <Paragraph
                fontClassName="subheading"
                classNames="color-aubergine-200 bold"
              >
                {getRightContent(rtlLanguage, pageContent.awards.title)}
              </Paragraph>
              <div className="spacer-8"></div>
              <Paragraph fontClassName="body-m" classNames="white normal">
                {getRightContent(rtlLanguage, pageContent.awards.text)}
              </Paragraph>
              <div className="spacer-32"></div>
              <div className={styles.awardsWrapper}>
                {getRightContent(rtlLanguage, pageContent.awards.items).map(
                  (item: ReactNode, index: number) => {
                    return (
                      <div key={index} className={styles.award}>
                        <img src={awardImage} className={styles.awardImage} alt="" />
                        <div className={styles.awardText}><Paragraph classNames="white normal" fontClassName="body-m">
                          {item}
                        </Paragraph></div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="spacer-64"></div>
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
        </div>
      </div>

      <div className={styles.blueBackground}>
        <div className="spacer-64"></div>
        <div className="container horizontal-padding">
          <div className={styles.brandHeader}>
            <div>
              <Paragraph fontClassName="h3" classNames="white bold">
                {getRightContent(rtlLanguage, pageContent.caseStudy)}
              </Paragraph>

            </div>
            <img src={subwayImage} className={styles.subway} alt="" />

          </div>
          <div className="spacer-16"></div>
          <Paragraph fontClassName="h4" classNames="white bold">
            {getRightContent(rtlLanguage, pageContent.subwayText[0].title)}
          </Paragraph>
          <div className="spacer-32"></div>
          <div className={styles.subwayTextWrapper}>
            {pageContent.subwayText.map((item, index) => (
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
          {getRightContent(rtlLanguage, ["To view the full F&B chapter, please click here to download the PDF.", "لعرض كل محتوى قطاع الأغذية والمشروبات، يرجى النقر هنا لتحميل الملف الإلكتروني." ])}
        </Paragraph>
        <div className="spacer-16"></div>
        <DownloadButton
          text={["Read More", "أعرف المزيد"]}
          link="./pdf/Food_and_Beverage.pdf"
        />
      </div>
      <div className="spacer-32"></div>
    </div>
  );
};
