import styles from "./VerticalCalendar.module.css";
import useAppStore from "../../store";

// import useWindowSize from "../../hooks/useWindowSize";
import { getRightContent, getVisibleSensorAnimation } from "../../ts/util";
import { useInView } from "react-intersection-observer";
import type { ReactNode } from "react";
import Paragraph from "../Paragraph/Paragraph";

interface Props {
  quarters: { pharagraph: ReactNode[][] }[];
  quarterImages: string[];
}

// const Month = ({ index }: { index: number }) => {
//   const { ref, inView: isVisible } = useInView();
//   // const { ref: refIcon, inView: isVisibleIcon } = useInView();

//   const rtlLanguage = useAppStore((s) => s.rtlLanguage);
//   const windowWidth = useWindowSize();

//   return (
//     <div className={styles.monthWrapper}>
//       <p
//         className={[
//           styles.month,
//           index % 2 === 0 ? styles.textEnd : "",
//           "color-mepco-dark-accent-3 h4 extra-bold",
//         ].join(" ")}
//       >
//         {/* {calendarIcons[index] && (
//           <img
//             ref={refIcon}
//             alt=""
//             className={[
//               styles.calendarIcon,
//               index === 8 ? styles.bigger : "",
//               index % 2 === 0 ? styles.alignEnd : "",
//             ].join(" ")}
//             src={calendarIcons[index]}
//             style={getVisibleSensorAnimation(
//               isVisibleIcon,
//               "scale-from-center 0.6s backwards"
//             )}
//           />
//         )} */}
//         <div
//           ref={ref}
//           style={getVisibleSensorAnimation(
//             isVisible,
//             `move-from-${
//               windowWidth < 1024
//                 ? rtlLanguage
//                   ? "right"
//                   : "left"
//                 : index % 2 === 0
//                 ? rtlLanguage
//                   ? "left"
//                   : "right"
//                 : rtlLanguage
//                 ? "right"
//                 : "left"
//             } 0.9s  ease-in-out backwards`
//           )}
//         ></div>
//       </p>
//     </div>
//   );
// };

const VerticalCalendar = ({ quarters, quarterImages }: Props) => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const { ref: refTop, inView: inViewTop } = useInView();
  // const { ref: refBottom, inView: inViewBottom } = useInView();

  return (
    <div className={styles.wrapper}>
      <div className={styles.lineTop} ref={refTop}>
        <div
          style={getVisibleSensorAnimation(
            inViewTop,
            `scale-in-line 0.6s  ease-in-out backwards`
          )}
          className={[
            styles.line,

            // index === months.length - 1 ? "d-none" : "",
          ].join(" ")}
        ></div>
      </div>
      {quarters.map((quarter, index) => {
        const { ref: refEllipse, inView: isVisibleEllispse } = useInView();
        return (
          <div key={index} className={styles.monthContainer}>
            <div className={styles.ellipseContainer}>
              <img
              style={getVisibleSensorAnimation(isVisibleEllispse, "scale-from-center 0.6s backwards")}
                src={quarterImages[index]}
                alt=""
                className={[
                  styles.ellipse,
                  // index % 2 !== 0 ? styles.small : "",
                ].join(" ")}
              />
              <div
                ref={refEllipse}
                style={getVisibleSensorAnimation(
                  isVisibleEllispse,
                  `scale-in-line 0.9s  ease-in-out backwards`
                )}
                className={[
                  styles.line,
                  // index === months.length - 1 ? "d-none" : "",
                ].join(" ")}
              ></div>
            </div>

            <div className={styles.contentWrapper}>
              {/* <Month index={index} /> */}
              <ul className="list add-space">
                {getRightContent(rtlLanguage, quarter.pharagraph).map(
                  (list: ReactNode, indexList: number) => (
                    <Paragraph fontClassName="subheading" key={indexList}>
                      <li>{list}</li>
                    </Paragraph>
                  )
                )}
              </ul>
              {index !== (quarters.length - 1) && <div className="spacer-32"></div>}
            </div>
          </div>
        );
      })}

      {/* <div className={styles.lineBottom} ref={refBottom}>
        <div
          style={getVisibleSensorAnimation(
            inViewBottom,
            `scale-in-line 0.4s 0.6s  ease-in-out backwards`
          )}
          className={[
            styles.line,

            // index === months.length - 1 ? "d-none" : "",
          ].join(" ")}
        ></div>
      </div> */}
    </div>
  );
};

export default VerticalCalendar;
