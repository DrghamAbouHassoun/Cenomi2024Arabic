import { useInView } from "react-intersection-observer";
import { Frame } from "../../../components/Frame/Frame";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import styles from "./BrandPortfolio.module.css";
import medalImage from "./images/medal.svg";

import logoImage from "../../../components/Logo/images/logo.svg";

import shoppingImage from "./images/shopping.jpg";

import tierImage1 from "./images/tier1/1.svg";
import tierImage2 from "./images/tier1/2.svg";
import tierImage3 from "./images/tier1/3.svg";
import tierImage4 from "./images/tier1/4.svg";
import tierImage5 from "./images/tier1/5.svg";
import tierImage6 from "./images/tier1/6.svg";
import tierImage7 from "./images/tier1/7.svg";
import tierImage8 from "./images/tier1/8.svg";
import tierImage9 from "./images/tier1/9.svg";
import tierImage10 from "./images/tier1/10.svg";
import tierImage11 from "./images/tier1/11.svg";

import fashionImage1 from "./images/fashion/1.svg";
import fashionImage2 from "./images/fashion/2.svg";
import fashionImage3 from "./images/fashion/3.svg";
import fashionImage4 from "./images/fashion/4.svg";
import fashionImage5 from "./images/fashion/5.svg";
import fashionImage6 from "./images/fashion/6.svg";
import fashionImage7 from "./images/fashion/7.svg";
import fashionImage8 from "./images/fashion/8.svg";
import fashionImage9 from "./images/fashion/9.svg";
import fashionImage10 from "./images/fashion/10.svg";
import fashionImage11 from "./images/fashion/11.svg";
import fashionImage12 from "./images/fashion/12.svg";
import fashionImage13 from "./images/fashion/13.svg";
import fashionImage14 from "./images/fashion/14.svg";
import fashionImage15 from "./images/fashion/15.svg";
import fashionImage16 from "./images/fashion/16.svg";
import fashionImage17 from "./images/fashion/17.svg";
import fashionImage18 from "./images/fashion/18.svg";
import fashionImage19 from "./images/fashion/19.svg";
import fashionImage20 from "./images/fashion/20.svg";
import fashionImage21 from "./images/fashion/21.svg";
import fashionImage22 from "./images/fashion/22.svg";
import fashionImage23 from "./images/fashion/23.svg";
import fashionImage24 from "./images/fashion/24.svg";
import fashionImage25 from "./images/fashion/25.svg";
import fashionImage26 from "./images/fashion/26.svg";
import fashionImage27 from "./images/fashion/27.svg";
import fashionImage28 from "./images/fashion/28.svg";

import fandbImage1 from "./images/fandb/1.svg";
import fandbImage2 from "./images/fandb/2.svg";
import fandbImage3 from "./images/fandb/3.svg";
import fandbImage4 from "./images/fandb/4.svg";
import fandbImage5 from "./images/fandb/5.svg";
import fandbImage6 from "./images/fandb/6.svg";
import fandbImage7 from "./images/fandb/7.svg";
import fandbImage8 from "./images/fandb/8.svg";
import fandbImage9 from "./images/fandb/9.svg";
import fandbImage10 from "./images/fandb/10.svg";

import multimediaImage1 from "./images/multimedia/1.svg";
import multimediaImage2 from "./images/multimedia/2.svg";

import lifestyleImage1 from "./images/lifestyle/1.svg";
import lifestyleImage2 from "./images/lifestyle/2.svg";

import sportsImage1 from "./images/sports/1.svg";

import beautyImage1 from "./images/beauty/1.svg";

import brandsImage1 from "./images/brands/1.svg";
import brandsImage2 from "./images/brands/2.svg";
import brandsImage3 from "./images/brands/3.svg";
import brandsImage4 from "./images/brands/4.svg";
import brandsImage5 from "./images/brands/5.svg";
import brandsImage6 from "./images/brands/6.svg";
import brandsImage7 from "./images/brands/7.svg";
import brandsImage8 from "./images/brands/8.svg";
import brandsImage9 from "./images/brands/9.svg";
import brandsImage10 from "./images/brands/10.svg";
import brandsImage11 from "./images/brands/11.svg";
import brandsImage12 from "./images/brands/12.svg";
import brandsImage13 from "./images/brands/13.svg";
import brandsImage14 from "./images/brands/14.svg";
import brandsImage15 from "./images/brands/15.svg";
import brandsImage16 from "./images/brands/16.svg";
import brandsImage17 from "./images/brands/17.svg";
import brandsImage18 from "./images/brands/18.svg";
import brandsImage19 from "./images/brands/19.svg";
// import brandsImage20 from "./images/brands/20.svg";
import brandsImage21 from "./images/brands/21.svg";
import brandsImage22 from "./images/brands/22.svg";
import brandsImage23 from "./images/brands/23.svg";
import brandsImage24 from "./images/brands/24.svg";
import brandsImage25 from "./images/brands/25.svg";
import brandsImage26 from "./images/brands/26.svg";

import useWindowSize from "../../../hooks/useWindowSize";
import Marquee from "../../../components/Marquee/Marquee";

import backgroundImageMobile from "./images/background-mobile.jpg"

const tier1Images = [
  tierImage1,
  tierImage2,
  tierImage3,
  tierImage4,
  tierImage5,
  tierImage6,
];

const tier1Images2 = [
  tierImage7,
  tierImage8,
  tierImage9,
  tierImage10,
  tierImage11,
];

const inditexImages = [
  tierImage1,
  tierImage2,
  tierImage3,
  tierImage4,
  tierImage5,
  tierImage6,

  tierImage8,
  tierImage9,
];

const fashionImages = [
  fashionImage1,
  fashionImage2,
  fashionImage3,
  fashionImage4,
  fashionImage5,
  fashionImage6,
  fashionImage7,
  fashionImage8,
  fashionImage9,
  fashionImage10,
  fashionImage11,
  fashionImage12,
  fashionImage13,
  fashionImage14,
  fashionImage15,
  fashionImage16,
  fashionImage17,
  fashionImage18,
  fashionImage19,
  fashionImage20,
  fashionImage21,
  fashionImage22,
  fashionImage23,
  fashionImage24,
  fashionImage25,
  fashionImage26,
  fashionImage27,
  fashionImage28,
];

const fandbImages = [
  fandbImage1,
  fandbImage2,
  fandbImage3,
  fandbImage4,
  fandbImage5,
  fandbImage6,
  fandbImage7,
  fandbImage8,
  fandbImage9,
  fandbImage10,
];

const multimediaImages = [multimediaImage1, multimediaImage2];

const lifestyleImages = [lifestyleImage1, lifestyleImage2];
const sportsImages = [sportsImage1];
const beautyImages = [beautyImage1];

const brandsImages = [
  brandsImage1,
  brandsImage2,
  brandsImage3,
  brandsImage4,
  brandsImage5,
  brandsImage6,
  brandsImage7,
  brandsImage8,
  brandsImage9,
  brandsImage10,
  brandsImage11,
  brandsImage12,
  brandsImage13,
  brandsImage14,
  brandsImage15,
  brandsImage16,
  brandsImage17,
  brandsImage18,
  brandsImage19,
  // brandsImage20,
  brandsImage21,
  brandsImage22,
  brandsImage23,
  brandsImage24,
  brandsImage25,
  brandsImage26,
];

const pageContent = content.pages.BrandPortfolio;
export const BrandPortfolio = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const logoRef = useInView();
  const tier1Ref = useInView();
  const inditexRef = useInView();
  const fashionRef = useInView();
  const fandbRef = useInView();
  const multimediaRef = useInView();
  const lifestyleRef = useInView();
  const sportsRef = useInView();
  const beautyRef = useInView();
  const brandsRef = useInView();
  const shoppingImageRef = useInView();
  const windowWidth = useWindowSize();
  return (
    <div>
      <div className={`${styles.backgroundImage} ${rtlLanguage ? styles.rtl : ""}`}>
        {windowWidth < 1024 && <img alt="" src={backgroundImageMobile} className={styles.backgroundSticky} />}
        <div className={["container horizontal-padding", windowWidth < 1024 ? styles.stickyContent : ""].join(" ")}>
          <div className={`${styles.contentWrapper} ${rtlLanguage ? styles.rtl : ""}`}>
            <div className="spacer-64"></div>
            <div className={styles.titleContainer}>
              <Paragraph
                classNames="white text-center bold"
                fontClassName={windowWidth < 1024 ? "headline" : "h4"}
              >
                {getRightContent(rtlLanguage, [pageContent.title[0], pageContent.title[1].split(",")[0]])}
              </Paragraph>
              
              {/* <div className="spacer-16"></div> */}
              <div className={styles.logoImageContainer} ref={logoRef.ref}>
                <img
                  src={logoImage}
                  alt=""
                  className={styles.logoImage}
                  style={getVisibleSensorAnimation(
                    logoRef.inView,
                    "scale-from-center 1.2s 0.3s backwards"
                  )}
                />
              </div>
              {rtlLanguage && (<Paragraph
                classNames="white text-center bold"
                fontClassName={windowWidth < 1024 ? "headline" : "h4"}
              >
                {getRightContent(rtlLanguage, [pageContent.title[0], pageContent.title[1].split(",")[1]])}

              </Paragraph>)}
            </div>
            <div className="spacer-32"></div>
            <div className={styles.frameWrapper} ref={tier1Ref.ref}>
              <Frame primaryColor badge>
                <div className={styles.framerContent}>
                  <div className={styles.tier1Header}>
                    <img
                      style={getVisibleSensorAnimation(
                        tier1Ref.inView,
                        "scale-from-center 0.6s 0.3s backwards"
                      )}
                      src={medalImage}
                      className={styles.medalImage}
                      alt=""
                    />
                    <Paragraph
                      fontClassName="subheading"
                      classNames="color-aubergine-900 bold"
                    >
                      {getRightContent(rtlLanguage, pageContent.tier1)}
                    </Paragraph>
                  </div>
                  <div className="spacer-16"></div>
                  <Marquee images={tier1Images} />
                  <div className="spacer-16"></div>
                  <Marquee images={tier1Images2} />
                  {/* <div className={styles.tier1Images}>
                {tier1Images.map((img, index) => (
                  <div
                    key={index}
                    style={getVisibleSensorAnimation(
                      tier1Ref.inView,
                      `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                        windowWidth,
                        index
                      )}s backwards`
                    )}
                  >
                    <img src={img} className={styles.tier1Img} alt="" />
                  </div>
                ))}
              </div> */}
                </div>
              </Frame>
            </div>

            <div className="spacer-64"></div>
            <div className={styles.square} ref={inditexRef.ref}>
              <div className={styles.squareHeader}>
                <Paragraph classNames="bold" fontClassName="subheading">
                  {getRightContent(rtlLanguage, pageContent.inditex)}
                </Paragraph>
              </div>
              <div className={styles.squareContent}>
                <div className={styles.tier1Images}>
                  {inditexImages.map((img, index) => (
                    <div
                      key={index}
                      style={getVisibleSensorAnimation(
                        inditexRef.inView,
                        `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                          1025,
                          index
                        )}s backwards`
                      )}
                    >
                      <img src={img} className={styles.tier1Img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="spacer-64"></div>
            <div className={styles.square} ref={fashionRef.ref}>
              <div className={styles.squareHeader}>
                <Paragraph classNames="bold" fontClassName="subheading">
                  {getRightContent(rtlLanguage, pageContent.fashion)}
                </Paragraph>
              </div>
              <div className={styles.squareContent}>
                <div className={styles.tier1Images}>
                  {fashionImages.map((img, index) => (
                    <div
                      key={index}
                      style={getVisibleSensorAnimation(
                        fashionRef.inView,
                        `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                          1025,
                          index,
                          0.1
                        )}s backwards`
                      )}
                    >
                      <img src={img} className={styles.tier1Img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="spacer-64"></div>
            <div className={styles.square} ref={fandbRef.ref}>
              <div className={styles.squareHeader}>
                <Paragraph classNames="bold" fontClassName="subheading">
                  {getRightContent(rtlLanguage, pageContent.fb)}
                </Paragraph>
              </div>
              <div className={styles.squareContent}>
                <div className={styles.tier1Images}>
                  {fandbImages.map((img, index) => (
                    <div
                      key={index}
                      style={getVisibleSensorAnimation(
                        fandbRef.inView,
                        `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                          1025,
                          index,
                          0.1
                        )}s backwards`
                      )}
                    >
                      <img src={img} className={styles.tier1Img} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="spacer-64"></div>
            <div className={styles.twoSquare}>
              <div className={styles.square} ref={multimediaRef.ref}>
                <div className={styles.squareHeader}>
                  <Paragraph classNames="bold" fontClassName="subheading">
                    {getRightContent(rtlLanguage, pageContent.multimedia)}
                  </Paragraph>
                </div>
                <div className={styles.squareContent}>
                  <div className={styles.tier1Images}>
                    {multimediaImages.map((img, index) => (
                      <div
                        key={index}
                        style={getVisibleSensorAnimation(
                          multimediaRef.inView,
                          `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                            1025,
                            index,
                            0.1
                          )}s backwards`
                        )}
                      >
                        <img src={img} className={styles.tier1Img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.square} ref={lifestyleRef.ref}>
                <div className={styles.squareHeader}>
                  <Paragraph classNames="bold" fontClassName="subheading">
                    {getRightContent(rtlLanguage, pageContent.lifestyle)}
                  </Paragraph>
                </div>
                <div className={styles.squareContent}>
                  <div className={styles.tier1Images}>
                    {lifestyleImages.map((img, index) => (
                      <div
                        key={index}
                        style={getVisibleSensorAnimation(
                          lifestyleRef.inView,
                          `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                            1025,
                            index,
                            0.1
                          )}s backwards`
                        )}
                      >
                        <img src={img} className={styles.tier1Img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="spacer-64"></div>
            <div className={styles.twoSquare}>
              <div className={styles.square} ref={sportsRef.ref}>
                <div className={styles.squareHeader}>
                  <Paragraph classNames="bold" fontClassName="subheading">
                    {getRightContent(rtlLanguage, pageContent.sports)}
                  </Paragraph>
                </div>
                <div className={styles.squareContent}>
                  <div className={styles.tier1Images}>
                    {sportsImages.map((img, index) => (
                      <div
                        key={index}
                        style={getVisibleSensorAnimation(
                          sportsRef.inView,
                          `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                            1025,
                            index,
                            0.1
                          )}s backwards`
                        )}
                      >
                        <img src={img} className={styles.tier1Img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.square} ref={beautyRef.ref}>
                <div className={styles.squareHeader}>
                  <Paragraph classNames="bold" fontClassName="subheading">
                    {getRightContent(rtlLanguage, pageContent.beauty)}
                  </Paragraph>
                </div>
                <div className={styles.squareContent}>
                  <div className={styles.tier1Images}>
                    {beautyImages.map((img, index) => (
                      <div
                        key={index}
                        style={getVisibleSensorAnimation(
                          beautyRef.inView,
                          `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                            1025,
                            index,
                            0.1
                          )}s backwards`
                        )}
                      >
                        <img src={img} className={styles.tier1Img} alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="spacer-64"></div>
          </div>
        </div>
      </div>

      <div className="container horizontal-padding">
        <div className="spacer-64"></div>
        <Paragraph
          classNames="bold max-w-60"
          fontClassName={windowWidth < 1024 ? "h4" : "h3"}
        >
          {getRightContent(rtlLanguage, pageContent.brands)}
        </Paragraph>
        <div className="spacer-16"></div>
        <Paragraph classNames="bold" fontClassName="body-m">
          {getRightContent(rtlLanguage, pageContent.brandsText)}
        </Paragraph>

        <div className="spacer-64"></div>
        <div className={styles.brandsContainer}>
          <div className={styles.frameWrapper}>
            <Frame primaryColor badge>
              <div className={styles.tier1Images} ref={brandsRef.ref}>
                {brandsImages.map((img, index) => (
                  <div
                    key={index}
                    style={getVisibleSensorAnimation(
                      brandsRef.inView,
                      `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                        1025,
                        index,
                        0.1
                      )}s backwards`
                    )}
                  >
                    <img src={img} className={styles.tier1Img} alt="" />
                  </div>
                ))}
              </div>
            </Frame>
          </div>
          <div className={["image-wrapper-animation", styles.imageWrapper].join(" ")} ref={shoppingImageRef.ref}>
            <img

              style={getVisibleSensorAnimation(
                shoppingImageRef.inView,
                "scale-from-center-50 1s backwards"
              )}
              src={shoppingImage}
              className={styles.shoppingImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="spacer-16"></div>
      <div className="spacer-64"></div>
    </div>
  );
};
