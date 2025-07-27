import type { ReactNode } from "react";
import Count from "../../../components/Count/Count";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import styles from "./InternationalRetail.module.css";

import backgroundImageMobile from "./images/background-mobile.jpg";

import aboutImage1 from "./images/about-1.svg";
import aboutImage2 from "./images/about-2.svg";
import aboutImage3 from "./images/about-3.svg";

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
import brand23 from "./images/brands/23.svg";
import brand24 from "./images/brands/24.svg";
import brand25 from "./images/brands/25.svg";
import brand26 from "./images/brands/26.svg";
import brand27 from "./images/brands/27.svg";
import brand28 from "./images/brands/28.svg";
import brand29 from "./images/brands/29.svg";
import brand30 from "./images/brands/30.svg";
import brand31 from "./images/brands/31.svg";

import modelImage from "./images/model.png";
import { useInView } from "react-intersection-observer";
import { Frame } from "../../../components/Frame/Frame";

import Armenia from "./images/countries/Armenia.jpg";
import Batumi from "./images/countries/Batumi.jpg"
import AzerbaijanImage from "./images/countries/Azerbaijan.jpg";
import Egypt from "./images/countries/Egypt.jpg";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

import IncreaseIcon from "./icons/increase.svg";
import BuildingIcon from "./icons/building.svg";
import MarketIcon from "./icons/market.svg";
import PeopleIcon from "./icons/people.svg";

const iconsArray = [
  { name: "increase", icon: IncreaseIcon },
  { name: "building", icon: BuildingIcon },
  { name: "market", icon: MarketIcon },
  { name: "people", icon: PeopleIcon },
]


const pageContent = content.pages.InternationalRetail;

const aboutImages = [aboutImage1, aboutImage2, aboutImage3];

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
  brand23,
  brand24,
  brand25,
  brand26,
  brand27,
  brand28,
  brand29,
  brand30,
  brand31,
];

const countriesImages = [
  AzerbaijanImage,
  Batumi,
  Armenia,
  Egypt,
  null,
]

export const InternationalRetail = () => {
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
                    classCountSpan={`${windowWidth < 320
                      ? "body-m"
                      : windowWidth < 768
                        ? "body-l"
                        : "subheading"
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
            <div className={styles.flex}>
              <div className={styles.leftBox}>
                <Paragraph
                  fontClassName="body-m"
                  classNames="color-aubergine-900 bold"
                >
                  {getRightContent(rtlLanguage, pageContent.middleBoxes.box1.title)}
                </Paragraph>
                <Paragraph
                  fontClassName="body-m"
                  classNames="black"
                >
                  {getRightContent(rtlLanguage, pageContent.middleBoxes.box1.description)}
                </Paragraph>
              </div>
              <div className={styles.rightBox}>
                <Frame
                  primaryColor
                  isFilp={true}
                  hiddenContent={(
                    <div className={styles.bottomBox}>
                      <div className={styles.contentBox}>
                        {pageContent.middleBoxes.box2.hiddenContent.array.map((element, inx) => (
                          <div className={[styles.hiddenContentItem, "flex-50"].join(" ")} key={inx}>
                            {iconsArray.find(item => item.name === element.icon)?.icon && (
                              <img
                                src={iconsArray.find(item => item.name === element.icon)?.icon}
                                alt=""
                                // src={IncreaseIcon}
                                className={styles.hiddenContentIcon}
                              />
                            )}
                            <div>
                              <Paragraph
                                fontClassName="body-m"
                                classNames="color-aubergine-900 "
                              >
                                {getRightContent(rtlLanguage, element.text)}
                              </Paragraph>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Paragraph
                        fontClassName="body-xs mt-2"
                        classNames="color-dark-gray normal"
                      >
                        {getRightContent(rtlLanguage, pageContent.middleBoxes.box2.hiddenContent.source)}
                      </Paragraph>
                    </div>
                  )}
                >
                  <div>
                    <div className={styles.bottomBox} style={{ maxHeight: "fit-content" }} >
                      <Paragraph classNames="bold color-aubergine-900">
                        {getRightContent(rtlLanguage, pageContent.middleBoxes.box2.title)}
                      </Paragraph>
                      <div className="spacer-16"></div>
                      <div className="paragraph-container">
                        {getRightContent(rtlLanguage, pageContent.middleBoxes.box2.text).map(
                          (item: ReactNode, index: number) => (
                            <Paragraph
                              fontClassName="body-s"
                              classNames="color-dark-gray normal"
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
                  </div>
                </Frame>
              </div>
            </div>
            <div className="spacer-64"></div>
          </div>
          <div className="spacer-64"></div>
          {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>}
        </div>
      </div>

      <div className={styles.blueBackground}>
        <div className="spacer-64"></div>
        <div className="container horizontal-padding">
          <div className={styles.blueBackgroundContent}>
            <div className={styles.textContent}>
              {/* <Paragraph
                fontClassName="headline"
                classNames="bold color-aubergine-200"
              >
                {getRightContent(rtlLanguage, pageContent.azerbaijan)}
              </Paragraph> */}
              {/* <div className="spacer-32"></div> */}
              <div className={styles.azerbaijanTextWrapper}>
                              <Paragraph fontClassName="h3" classNames="white bold">
                {getRightContent(rtlLanguage, pageContent.caseStudy)}
              </Paragraph>
                {pageContent.azerbaijanText.map((item, index) => (
                  <div key={index}>
                    <Paragraph fontClassName={index === 0 ? "h4" : "body-m"} classNames="white bold">
                      {getRightContent(rtlLanguage, item.title)}
                    </Paragraph>
                    <div className="spacer-8"></div>
                    <div className="paragraph-container">
                      {getRightContent(rtlLanguage, item.text).map(
                        (item: ReactNode, index: number) => (
                          <Paragraph
                            fontClassName="body-s"
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

                {/* <div className="spacer-32"></div> */}
                <div className={styles.whiteBox}>
                  <Paragraph classNames="color-aubergine-900">
                    {getRightContent(rtlLanguage, pageContent.whiteBox)}
                  </Paragraph>
                </div>
                <div className="spacer-16"></div>

              </div>
            </div>
            <img src={modelImage} className={styles.modelImage} alt="" />
          </div>
        </div>
      </div>

      <div className="container horizontal-padding">
        <div className="spacer-64"></div>
        <div className={styles.bottomBoxes}>
          {pageContent.bottomBoxes.map((item, index) => {
            const { ref, inView } = useInView();
            return (
              <div >
                <div
                  key={index}
                  ref={ref}
                  className={countriesImages[index] ? styles.bottomBoxWrapper : undefined}
                  style={getVisibleSensorAnimation(
                    inView,
                    `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                      windowWidth,
                      index, 0.25
                    )}s  backwards`
                  )}
                >
                  <Frame
                    primaryColor
                    isFilp={true}
                    hiddenContent={(
                      <div className={styles.bottomBox}>
                        {item.hiddenContent.array.map((element, inx) => (
                          <div className={styles.hiddenContentItem} key={inx}>
                            {iconsArray.find(item => item.name === element.icon)?.icon && (
                              <img
                                src={iconsArray.find(item => item.name === element.icon)?.icon}
                                alt=""
                                // src={IncreaseIcon}
                                className={styles.hiddenContentIcon}
                              />
                            )}
                            <div>
                              <Paragraph
                                fontClassName="body-m"
                                classNames="color-aubergine-900 "
                              >
                                {getRightContent(rtlLanguage, element.text)}
                              </Paragraph>
                            </div>
                          </div>
                        ))}
                        <Paragraph
                          fontClassName="body-xs"
                          classNames="color-dark-gray normal mt-2"
                        >
                          {getRightContent(rtlLanguage, item.hiddenContent.source)}
                        </Paragraph>
                      </div>
                    )}
                  >
                    <div>
                      <div className={styles.bottomBox} style={{ maxHeight: "fit-content" }} key={index}>
                        <Paragraph classNames="bold color-aubergine-900">
                          {getRightContent(rtlLanguage, item.title)}
                        </Paragraph>
                        <div className="spacer-16"></div>
                        <Paragraph
                          fontClassName="body-m"
                          classNames="bold color-aubergine-1000"
                        >
                          {getRightContent(rtlLanguage, item.subtitle)}
                        </Paragraph>
                        <div className="spacer-4"></div>
                        <div className="paragraph-container">
                          {getRightContent(rtlLanguage, item.text).map(
                            (item: ReactNode, index: number) => (
                              <Paragraph
                                fontClassName="body-s"
                                classNames="color-dark-gray normal"
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
                    </div>
                  </Frame>
                </div>
              </div>

            );
          })}
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <Paragraph classNames="bold subheading color-aubergine-900">
          {getRightContent(rtlLanguage, ["To view the full International Retail chapter, please click here to download the PDF.", "لعرض كل محتوى قطاع التجزئة الدولي، يرجى النقر هنا لتحميل الملف الإلكتروني." ])}
        </Paragraph>
        <div className="spacer-16"></div>
        <DownloadButton
          text={["Read More", "أعرف المزيد"]}
          link="./pdf/International_retail.pdf"
        />
      </div>
      <div className="spacer-64"></div>

      {/* </div> */}
    </div>
  );
};
