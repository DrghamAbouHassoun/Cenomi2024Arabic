import CardAnimationHover from "../../../components/CardAnimationHover/CardAnimationHover";
import { CardOurValue } from "../../../components/CardOurValue/CardOurValue";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getDelayedIndexBasedAnimationTime, getRightContent, getVisibleSensorAnimation } from "../../../ts/util";
import styles from "./KPI.module.css";
import type { ReactNode } from "react";

import icon1 from "./images/icon1.svg";
import icon2 from "./images/icon2.svg";
import icon3 from "./images/icon3.svg";
import icon4 from "./images/icon4.svg";
import icon5 from "./images/icon5.svg";
import icon6 from "./images/icon6.svg";
import useWindowSize from "../../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";

const pageContent = content.pages.strategyAndKpis;
const arrayIcon = [icon2, icon3, icon4, icon5, icon6];
const KPI = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  return (
    <div>      

      <div className="container horizontal-padding">
        <Paragraph fontClassName="subheading" classNames="color-aubergine-900">
          {getRightContent(rtlLanguage, pageContent.pharagrapIntro)}
        </Paragraph>
      </div>

      <div className="spacer-64"></div>

      <div className={styles.cardOurValues}>
        <div className="container horizontal-padding">
          <div className="spacer-32"></div>
          <div className={styles.titleCard}>
            <div className={styles.content}>
              <img src={icon1} alt="icon" className={styles.icon} />
              <Paragraph fontClassName="headline" classNames="bold white">
                {getRightContent(rtlLanguage, pageContent.cardOurValue.title)}
              </Paragraph>
            </div>
          </div>

          <div className={styles.rowCardOurValue}>
            {pageContent.cardOurValue.content.map((item, index) => {
                const {ref, inView} = useInView()
                return(
              <div key={index} ref={ref} style={getVisibleSensorAnimation(inView, `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(windowWidth, index)}s backwards`)} className={styles.cardOurValueItem} >
                <CardOurValue
                  icon={arrayIcon[index]}
                  title={getRightContent(rtlLanguage, item.title)}
                  text={getRightContent(rtlLanguage, item.text)}
                />
              </div>
            )})}
          </div>

          <div className="spacer-32"></div>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <Paragraph
          fontClassName={windowWidth < 768 ? "h4" : "h3"}
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.titleSectionPhase)}
        </Paragraph>

        <div className="spacer-40"></div>

        {pageContent.cardPhase.map((element, indexCard) => {
          return (
            <>
              <div key={indexCard} >
                <Paragraph
                  fontClassName={windowWidth < 768 ? "headline" : "h4"}
                  classNames="bold color-aubergine-900"
                >
                  {getRightContent(rtlLanguage, element.numberPhase)}
                </Paragraph>

                <div className="spacer-4"></div>

                <Paragraph fontClassName={windowWidth < 768 ? "subheading" : "headline"} classNames="color-aubergine-900">
                  {getRightContent(rtlLanguage, element.titlePhase)}
                </Paragraph>

                <div className="spacer-32"></div>

                <div className={styles.cardPhase}>
                  {element.card.map((item, indexItem) => {
                    return (
                      <>
                        <CardAnimationHover
                          key={indexItem}
                          title={getRightContent(rtlLanguage, item.titleCard)}
                          text={getRightContent(rtlLanguage, item.textCard)}
                        />
                      </>
                    );
                  })}
                </div>
              </div>
              <div className="spacer-40"></div>
            </>
          );
        })}

        <Paragraph
          fontClassName="headline"
          classNames="bold color-aubergine-900"
        >
          {getRightContent(rtlLanguage, pageContent.goals.titleGoals)}
        </Paragraph>
        <div className={styles.lineGoals}></div>

        <div className="spacer-16"></div>

        <div className={styles.goalsFlex}>
        {pageContent.goals.itemGoals.map((e, i) => {
          return (
            <>
              <div key={i} className={styles.goalItem}>
                <Paragraph
                  fontClassName="subheading white"
                  classNames="bold "
                >
                  {getRightContent(rtlLanguage, e.item)}
                </Paragraph>
              </div>
            </>
          );
        })}
        </div>

        <div className={styles.goalsFlex}>
        {pageContent.goals.listtext5.map((element, indexElement) => {
          return (
            <>
              <div key={indexElement} className={styles.goalItem}>
                <Paragraph
                  fontClassName="subheading color-white"
                  classNames="bold white"
                >
                  {getRightContent(rtlLanguage, element.titleList)}
                </Paragraph>
                <div className="spacer-8"></div>
                <div>
                  {getRightContent(rtlLanguage, element.dataList).map(
                    (list: ReactNode, indexList: number) => {
                      return (
                        <Paragraph
                          classNames="normal white"
                          key={indexList}
                        >
                          <li className={styles.itemGoals}>{list}</li>
                          <div className="spacer-8"></div>
                        </Paragraph>
                        // <div key={indexList} className={styles.gloalBox}>
                        //   {list}
                        // </div>
                      );
                    }
                  )}
                </div>
              </div>
            </>
          );
        })}
        </div>

        <div className="spacer-64"></div>
      </div>
    </div>
  );
};
export default KPI;
