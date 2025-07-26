import styles from "./AccordionHeader.module.css";
import caretImage from "../images/caret.svg";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../../ts/util";

import movingCaret from "./images/move-caret.svg"
import useWindowSize from "../../../hooks/useWindowSize";

interface Props {
  title: string;
  active: boolean;
  handlePress: () => void;
  whiteChevron?: boolean;
  titleClassNames?: string;
  img?: string;
  addCaret?: boolean;
}
export const AccordionHeader = ({
  active,
  title,
  handlePress,
  titleClassNames,
  img,
  addCaret,
}: Props) => {
  const { ref, inView } = useInView();
  const windowWidth = useWindowSize()
  return (
    <div ref={ref}>
      <div
        onClick={handlePress}
        className={[styles.container, active ? styles.active : ""].join(" ")}
      >
       <div className={styles.iconTitleContainer}>
         <img src={img} alt="" className={styles.icon} />
        <p
          className={[
            `color-mepco-dark-accent-3 ${windowWidth < 300 ? "body-s" : windowWidth < 768 ? "body-l" :"subheading"} white bold`,
            titleClassNames,
          ].join(" ")}
        >
          {title}
        </p>
       </div>
        <img src={movingCaret} className={styles.movingCaret} alt="" />
      </div>
      {addCaret && !active && (
        <img
          onClick={handlePress}
          alt=""
          style={getVisibleSensorAnimation(inView, "fade-in 1s backwards")}
          src={caretImage}
          className={styles.caretImage}
        />
      )}
    </div>
  );
};
