import type { ReactNode } from "react";
import Count from "../../../components/Count/Count";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import { getDelayedIndexBasedAnimationTime, getRightContent } from "../../../ts/util";
import styles from "./ECommerce.module.css"

import aboutImage1 from "./images/about-1.svg";
import aboutImage2 from "./images/about-2.svg";

import backgroundImageMobile from "./images/background-mobile.jpg";

import trendyolImage from "./images/trendyol.svg";
import { Frame } from "../../../components/Frame/Frame";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";


const pageContent = content.pages.ECommerce;

const aboutImages = [aboutImage1, aboutImage2];

export const ECommerce = () => {

  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
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
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="white"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph5)}
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
          {/* {windowWidth > 1023 && <div className="spacer-64"></div>} */}
          {/* {windowWidth > 1023 && <div className="spacer-64"></div>}
          {windowWidth > 1023 && <div className="spacer-64"></div>} */}
          <div className={styles.contentWrapper}>

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

      <div className={styles.blueBackground}>
        <div className="spacer-64"></div>
        <div className="container horizontal-padding">
          <div className={styles.brandHeader}>
            <div>
              <Paragraph fontClassName="h3" classNames="white bold">
                {getRightContent(rtlLanguage, pageContent.caseStudy)}
              </Paragraph>

            </div>
            <img src={trendyolImage} className={styles.subway} alt="" />

          </div>
          <div className="spacer-16"></div>
          <Paragraph fontClassName="h4" classNames="white bold">
            {getRightContent(rtlLanguage, pageContent.trendyolText[0].title)}
          </Paragraph>
          {/* <img src={trendyolImage} className={styles.trendyol} alt="" /> */}
          <div className="spacer-32"></div>
          <div className={styles.trendyolTextWrapper}>
            {pageContent.trendyolText.map((item, index) => (
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

          <div className="spacer-32"></div>
          <Paragraph fontClassName="body-s" classNames="white normal">{getRightContent(rtlLanguage, pageContent.bottomText)}</Paragraph>
        </div>

        <div className="spacer-64"></div>
      </div>
      <div className="spacer-32"></div>
      <div className="container horizontal-padding">
        <Paragraph classNames="bold subheading color-aubergine-900">
          {getRightContent(rtlLanguage, ["To view the full E-commerce chapter, please click here to download the PDF.", ""])}
        </Paragraph>
        <div className="spacer-16"></div>
        <DownloadButton
          text={["Read More", ""]}
          link="./pdf/E-commerce.pdf"
        />
      </div>
      <div className="spacer-32"></div>
    </div>
  )
}
