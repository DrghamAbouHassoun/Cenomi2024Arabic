import { Leader } from "../../../components/Leader/Leader";
import leaderImage from "./images/leader.png";
import quoteImage from "./images/quote.svg";
import globeImage from "./images/globe.svg";
import styles from "./Chairman.module.css";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getDelayedIndexBasedAnimationTime, getRightContent } from "../../../ts/util";
import Count from "../../../components/Count/Count";
import useWindowSize from "../../../hooks/useWindowSize";
import type { ReactNode } from "react";

const pageContent = content.pages.Chairman;

const Content = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  let classFontH2 = windowWidth < 400 ? "h4" : "h3";

  return (
    <div className={styles.contentWrapper}>
      <img src={quoteImage} className={styles.quote} alt="" />
      <div className="spacer-8"></div>
      <Paragraph fontClassName="headline" classNames="color-aubergine-200">
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

      <div className="spacer-64"></div>

    </div>
  );
};

export const Chairman = () => {

    const rtlLanguage = useAppStore(s=>s.rtlLanguage);
    const windowWidth = useWindowSize()
  return (
    <div>
      <Leader image={leaderImage} content={<Content />} />
      
      <div className="container horizontal-padding">
         <div className="spacer-64"></div>

        <Paragraph
          fontClassName="subheading"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.building)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.buildingText).map(
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
          {getRightContent(rtlLanguage, pageContent.strategic)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.strategicText).map(
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
          {getRightContent(rtlLanguage, pageContent.saudi)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.saudiText).map(
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
          {getRightContent(rtlLanguage, pageContent.driving)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.drivingText).map(
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
          {getRightContent(rtlLanguage, pageContent.looking)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.lookingText).map(
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
          {getRightContent(rtlLanguage, pageContent.acknowledgments)}
        </Paragraph>
        <div className="spacer-8"></div>
        <div className="paragraph-container">
          {getRightContent(rtlLanguage, pageContent.acknowledgmentsText).map(
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

        <div className="spacer-64"></div>
      </div>
    </div>
  );
};
