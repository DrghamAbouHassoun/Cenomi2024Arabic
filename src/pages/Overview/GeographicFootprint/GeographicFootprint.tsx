
import styles from "./GeographicFootprint.module.css";
import { useInView } from "react-intersection-observer";
import content from "../../../content/content";
import useAppStore from "../../../store";
import starImage from "./images/star.svg";

import icon1 from "./images/counters/icon1.svg";
import icon2 from "./images/counters/icon2.svg";
import icon3 from "./images/counters/icon3.svg";
import icon4 from "./images/counters/icon4.svg";
import icon5 from "./images/counters/icon5.svg";
import icon6 from "./images/counters/icon6.svg";
import border from "./images/counters/vector-2.png";

import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
} from "../../../ts/util";
import useWindowSize from "../../../hooks/useWindowSize";
import Count from "../../../components/Count/Count";
import { Frame } from "../../../components/Frame/Frame";
import Map4 from "./Map4";
const pageContent = content.pages.GeographicFootprint;

const arrayIcons = [icon1,icon1, null, icon2, icon3, icon4, icon5, icon6];
const arrayBorder = [null,null, border, null, null, null, null, null];

export const GeographicFootprint = () => {
  const mapRef = useInView();
  const tableRef = useInView();
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const windowWidth = useWindowSize();
  const { ref, inView } = useInView();
  return (
    <div className={styles.container}>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <div className={styles.frameWrapper}>
          <Frame badge primaryColor whiteBadgeWrapper>
            <div className={styles.frameBox}>
              <div className={styles.countsContainer} ref={ref}>
                {pageContent.card.items.map((item, index) => (
                  <div
                    key={index}
                    className={styles.counterWithIcon}
                    style={getVisibleSensorAnimation(
                      inView,
                      `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                        windowWidth,
                        index
                      )}s backwards`
                    )}
                  >
                    {arrayIcons[index] && (
                      <div className={styles.iconWrapper}>
                        <img src={arrayIcons[index]} alt="" />
                      </div>
                    )}

                    <div className={styles.countsGroup}>
                      {arrayBorder[index] && (
                        <div className={styles.borderWrapper}>
                          <img
                            className={`${styles.iconborder} ${rtlLanguage ? styles.rtl : ""}`}
                            src={arrayBorder[index]}
                            alt=""
                          />
                        </div>
                      )}

                      <Count
                        countValue={item.countValue1}
                        underText={getRightContent(
                          rtlLanguage,
                          item.bottomTitle1
                        )}
                        
                      />
                      <Count
                        countValue={item.countValue2}
                        underText={getRightContent(
                          rtlLanguage,
                          item.bottomTitle2
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Frame>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div
        className={[
          styles.mapContainer,
          // windowWidth > 1023 ? "container horizontal-padding" : "",
        ].join(" ")}
        ref={mapRef.ref}
        style={getVisibleSensorAnimation(
          mapRef.inView,
          "fade-in-40px 0.9s backwards"
        )}
      >
        <Map4 key={mapRef.inView ? "0" : "1"} />
      </div>
      <div className="spacer-32"></div>
      <div className="container horizontal-padding">
        <img
          style={getVisibleSensorAnimation(
            tableRef.inView,
            "scale-from-center-50 1.8s ease backwards infinite alternate"
          )}
          src={starImage}
          className={styles.starImage}
          alt=""
        />
        <div className="spacer-16"></div>
        <table className={styles.table} ref={tableRef.ref}>
          <thead className={[styles.thead, "body-m bold"].join(" ")}>
            <tr>
              {getRightContent(rtlLanguage, pageContent.table.header).map(
                (item: string, index: number) => (
                  <th key={index}>{item}</th>
                )
              )}
            </tr>
          </thead>
          <tbody className="body-s bold">
            {getRightContent(rtlLanguage, pageContent.table.data).map(
              (row: { data: string[] }, indexRow: number) => (
                <tr
                  key={indexRow}
                  className={[
                    indexRow === 0 ? styles.firstRow : "",
                    styles.row,
                  ].join(" ")}
                >
                  {row.data.map((cell: string, indexCell: number) => (
                    <td
                      style={getVisibleSensorAnimation(
                        tableRef.inView,
                        `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                          1025,
                          indexRow + (indexRow + 1) * (indexCell + 1),
                          0.05
                        )}s backwards`
                      )}
                      key={indexCell}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
        <div className="spacer-16"></div>
        <div className="spacer-64"></div>
      </div>
    </div>
  );
};
