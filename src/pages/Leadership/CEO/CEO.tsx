import Count from "../../../components/Count/Count";
import { Leader } from "../../../components/Leader/Leader";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import styles from "./CEO.module.css";
import globeImage from "./images/globe.svg";
import leaderImage from "./images/leader.png";
import bottomImage from "./images/bottom-image.jpg";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";

const pageContent = content.pages.CEO;

const Content = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  let classFontH2 = windowWidth < 400 ? "h4" : "h3";

  return (
    <div className={styles.contentWrapper}>
      <div className="spacer-8"></div>
      <Paragraph fontClassName="h4" classNames=" bold color-aubergine-200">
        {getRightContent(rtlLanguage, pageContent.quote)}
      </Paragraph>
      <div className="spacer-32"></div>
      <Paragraph fontClassName="subheading" classNames="white bold">
        {getRightContent(rtlLanguage, pageContent.name)}
      </Paragraph>

      <Paragraph classNames="white">
        {getRightContent(rtlLanguage, pageContent.position)}
      </Paragraph>
      <div className="spacer-32"></div>
      <div className={styles.counterBackground}>
        <Count
          countValue={pageContent.counter.countValue}
          countSpan={getRightContent(rtlLanguage, pageContent.counter.suffix)}
          countSpanLeft={getRightContent(
            rtlLanguage,
            pageContent.counter.prefix
          )}
          delay={0.3}
          classCountSpan={[classFontH2, "color-aubergine-900"].join(" ")}
          classCountSpanLeft={[classFontH2, "color-aubergine-900"].join(" ")}
          decimalCount={1}
          underText={getRightContent(
            rtlLanguage,
            pageContent.counter.underText
          )}
          classUnderText={["bold color-aubergine-900", "h4"].join(" ")}
        />
        <img src={globeImage} className={styles.globe} alt="" />
      </div>
    </div>
  );
};

export const CEO = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  const { ref: refBottomImage, inView: inViewBottomImage } = useInView();
  return (
    <div>
      <Leader image={leaderImage} content={<Content />} />
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <Paragraph fontClassName="subheading" classNames="color-aubergine-900">
          {getRightContent(rtlLanguage, pageContent.intro)}
        </Paragraph>

        <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.resetting)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.resettingText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.stronger)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.strongerText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.accelerating)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.acceleratingText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.reshaping)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.reshapingText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.developing)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.developingText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.moving)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.movingText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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

         <div className="spacer-32"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.acknowledgment)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.acknowledgmentText).map(
            (item: ReactNode, index: number) => (
              <Paragraph
              classNames="color-dark-gray normal"
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
      </div>

      <div className="spacer-64"></div>

      <img
        ref={refBottomImage}
        style={getVisibleSensorAnimation(
          inViewBottomImage,
          "scale-from-center-50 1s backwards"
        )}
        src={bottomImage}
        className={styles.bottomImage}
        alt=""
      />
    </div>
  );
};
