import styles from "./CardYearInReview.module.css";
import content from "../../../content/content";
import useAppStore from "../../../store";

import {
  getRightContent,
  getDelayedIndexBasedAnimationTime,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import useWindowSize from "../../../hooks/useWindowSize";
import image1 from "./images/image1.svg";
import image2 from "./images/image2.svg";
import image3 from "./images/image3.svg";
import image4 from "./images/image4.svg";
import type { ReactNode } from "react";
import LinearAnimation from "../../../components/LinearAnimation/LinearAnimation";
import Paragraph from "../../../components/Paragraph/Paragraph";
import { useInView } from "react-intersection-observer";

const pageContent = content.pages.YearInReview.textCard;
const arrayImage = [image1, image1, image2, image3, image4];
const CardYearInReview = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  
  return (
    <>
      <div className={styles.container}>
        <div className="container horizontal-padding">
          {pageContent.map((item, index) => {
            const {ref, inView} = useInView()
            return (
              <div className={styles.containerCard} key={index} ref={ref}>
                <div>
                  {index == 0 ? (
                    <div className={styles.lineTop}>
                      <LinearAnimation />
                    </div>
                  ) : (
                    ""
                  )}
                  {index > 0 && (
                    <img
                    style={getVisibleSensorAnimation(inView, "scale-from-center 0.6s backwards")}
                    
                      className={[
                        styles.image,
                        index == 0 ? styles.hidden : "",
                      ].join(" ")}
                      src={arrayImage[index]}
                      alt=""
                    />
                  )}
                  {/* <div className={styles.liner}> 

                            </div> */}
                  <div className={styles.line}>
                    <LinearAnimation />
                  </div>
                </div>

                <div>
                  <ul className={["list add-space", styles.list].join(" ")}>
                    {getRightContent(rtlLanguage, item.pharagraph).map(
                      (list: ReactNode, indexList: number) => {
                        return (
                          <Paragraph
                            key={indexList}
                            delay={
                              getDelayedIndexBasedAnimationTime(
                                windowWidth,
                                index
                              ) + "s"
                            }
                            fontClassName="subheading"
                            classNames="color-dark-gray normal "
                          >
                            <li>{list}</li>
                          </Paragraph>
                        );
                      }
                    )}
                  </ul>
                  <div className="spacer-120"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CardYearInReview;
