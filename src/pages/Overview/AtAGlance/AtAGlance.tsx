import { useInView } from "react-intersection-observer";
import { FinanComp } from "../../../components/FinanComp/FinanComp";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import styles from "./AtAGlance.module.css";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";

import purpleImage1 from "./images/purple1.svg";
import purpleImage2 from "./images/purple2.svg";
import icon1 from "./images/strategic/icon1.svg";
import icon2 from "./images/strategic/icon2.svg";
import icon3 from "./images/strategic/icon3.svg";
import icon4 from "./images/strategic/icon4.svg";
import icon5 from "./images/strategic/icon5.svg";
import icon6 from "./images/strategic/icon6.svg";
import CardStrategic from "../../../components/CardStrategic/CardStrategic";
import Count from "../../../components/Count/Count";
const pageContent = content.pages.AtAGlance;

const purpleImages = [purpleImage1, purpleImage2];
const arrayIcon = [icon1, icon2, icon3, icon4, icon5, icon6];

export const AtAGlance = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  const financialRef = useInView();
  const purpleRef = useInView();
  const strategicRef = useInView();
  return (
    <div>
      <div className="container horizontal-padding">
        <Paragraph fontClassName="h3" classNames="color-aubergine-900 bold">
          {getRightContent(rtlLanguage, pageContent.financialHighlights)}{" "}
          <span className="normal">
            {getRightContent(rtlLanguage, pageContent.financialHighlights2)}
          </span>
        </Paragraph>

        {windowWidth < 1024 && <div className="spacer-32"></div>}
        <div className="flexWrap_2_3" ref={financialRef.ref}>
          {pageContent.items.map((item, index) => (
            <div
              key={index}
              style={getVisibleSensorAnimation(
                financialRef.inView,
                `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                  windowWidth,
                  index
                )}s backwards`
              )}
              className={"flex_item"}
            >
              <Paragraph
                fontClassName="headline"
                classNames="bold color-aubergine-1000"
              >
                {getRightContent(rtlLanguage, item.title)}
              </Paragraph>
              <div className="spacer-8"></div>
              {/* <Paragraph
                fontClassName="headline"
                classNames="color-aubergine-1000"
              >
                {getRightContent(rtlLanguage, item.subtitle)}
              </Paragraph> */}

              <Count
              containerClassName={index === 1 ? "hidden" : ""}
                countValue={item.countValue}
                decimalCount={1}
                percentage={getRightContent(rtlLanguage, item.percentage)}
                percentageAr={getRightContent(rtlLanguage, item.percentageAr)}
                countSpanLeft={getRightContent(rtlLanguage, item.countSpanLeft)}
                delay={getDelayedIndexBasedAnimationTime(windowWidth, index) + 0.2}
              />

              <div className="spacer-32"></div>
              <FinanComp
                invertBar1={[1, 2, 3, 4].includes(index)}
                invertBar2={[3,4].includes(index)}
                push={[1, 2].includes(index)}
                normalJustify={[3, 4].includes(index)}
                value1={item.value1}
                value2={item.value2}
                value1Content={item.value1Content}
                value2Content={item.value2Content}
                delay={getDelayedIndexBasedAnimationTime(windowWidth, index)}
              />
            </div>
          ))}
        </div>

        <div className="spacer-64"></div>
      </div>
      <div className={styles.purpleBackground}>
        <div className="spacer-64"></div>
        <div className="spacer-64"></div>
        <div className={styles.purpleBackgroundOpacity}></div>
        <div className="container horizontal-padding">
          {/* <div className="flexWrap_2_2" ref={purpleRef.ref}>
            {pageContent.purpleItems.map((item, index) => (
              <div
                key={index}
                style={getVisibleSensorAnimation(
                  purpleRef.inView,
                  `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                    windowWidth,
                    index
                  )}s backwards`
                )}
                className={styles.purpleItemWrapper}
              >
                <div className={styles.purpleItem}>
                  <img
                    style={getVisibleSensorAnimation(
                      purpleRef.inView,
                      `scale-from-center 1s ${
                        getDelayedIndexBasedAnimationTime(windowWidth, index) +
                        0.3
                      }s backwards`
                    )}
                    src={purpleImages[index]}
                    className={styles.image}
                    alt=""
                  />
                  <Paragraph fontClassName="subheading" classNames="white bold">
                    {getRightContent(rtlLanguage, item.title)}
                  </Paragraph>
                  <Paragraph fontClassName="subheading" classNames="white">
                    {getRightContent(rtlLanguage, item.text)}
                  </Paragraph>
                  {item.link && (
                    <a
                      href={"https://" + item.link}
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className="subheading white"
                    >
                      {item.link}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="spacer-64"></div> */}
          <Paragraph classNames="white bold" fontClassName="subheading">
            {getRightContent(rtlLanguage, pageContent.intro)}
          </Paragraph>
        </div>
        <div className="spacer-64"></div>
        <div className="spacer-64"></div>
      </div>
      <div >
        <div className="spacer-80"></div>
        {/* <div className="spacer-64"></div> */}
        <div className={["container horizontal-padding"].join(" ")}>
          <div>
            <Paragraph fontClassName="h3" classNames="color-aubergine-900 bold">
              {getRightContent(
                rtlLanguage,
                pageContent.StrategicHighlights.title
              )}
            </Paragraph>
          </div>
          <div className="spacer-64 "></div>
          <div className={styles.cardsection} ref={strategicRef.ref}>
            {pageContent.StrategicHighlights.content.map((item, index) => (
              <div
                key={index}
                className={styles.cardWrapper}
                style={getVisibleSensorAnimation(
                  strategicRef.inView,
                  `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                    windowWidth,
                    index
                  )}s backwards`
                )}
              >
                <CardStrategic
                  text={getRightContent(rtlLanguage, item.text)}
                  icon={arrayIcon[index]}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="spacer-80"></div>
      </div>

      <div className={styles.lightbackground}>
        <div className="spacer-64"></div>
        <div className="container horizontal-padding">
        <div className={styles.purpleItemsContainer} ref={purpleRef.ref}>
            {pageContent.purpleItems.map((item, index) => (
              <div
                key={index}
                style={getVisibleSensorAnimation(
                  purpleRef.inView,
                  `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                    windowWidth,
                    index
                  )}s backwards`
                )}
                className={styles.purpleItemWrapper}
              >
                <div className={styles.purpleItem}>
                  <img
                    style={getVisibleSensorAnimation(
                      purpleRef.inView,
                      `scale-from-center 1s ${
                        getDelayedIndexBasedAnimationTime(windowWidth, index) +
                        0.3
                      }s backwards`
                    )}
                    src={purpleImages[index]}
                    className={styles.image}
                    alt=""
                  />
                  <Paragraph fontClassName="subheading" classNames=" bold color-aubergine-900">
                    {getRightContent(rtlLanguage, item.title)}
                  </Paragraph>
                  <Paragraph fontClassName="subheading" classNames="">
                    {getRightContent(rtlLanguage, item.text)}
                  </Paragraph>
                  {item.link && (
                    <a
                      href={"https://" + item.link}
                      rel="noopener noreferrer"
                      target={"_blank"}
                      className={["subheading color-aubergine-900", styles.link].join(" ")}
                    >
                      {item.link}
                    </a>
                  )}
                </div>
              </div>
            ))}
          <div className="spacer-64"></div>
          </div>
</div>
      {windowWidth > 1023 && <div className="spacer-64"></div>}
      </div>
    </div>
  );
};
