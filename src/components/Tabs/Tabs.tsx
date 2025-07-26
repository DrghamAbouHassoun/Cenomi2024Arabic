import {  useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./Tabs.module.css";

import useWindowSize from "../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import {
  getDelayedIndexBasedAnimationTime,
  getVisibleSensorAnimation,
} from "../../ts/util";

import useAppStore from "../../store";
import { MenuItem } from "../MenuItem/MenuItem";

interface Props {
  labels: string[];
  contents: ReactNode[];
  contentClassNames?: string[];
  labelsText?: string[];
}

const Tabs = ({ labels, contents, contentClassNames = [""] }: Props) => {
  const { ref: refLabel, inView: isVisibleLabel } = useInView();
  const { ref: refContent, inView: isVisibleContent } = useInView();
  const ref = useRef<HTMLDivElement>(null);
  const windowWidth = useWindowSize();
  const {
    changePage,
    menuOpen,
    currentPage: { subMenuPageLevel1, mainPage },
  } = useAppStore();
  // const [activeTabIndex, setActiveTabIndex] = useState(subMenuPageLevel1);
  const [pressedFromInsideTabs, setPressedFromInsideTabs] = useState(false);

  const handleClicktab = (index: number) => {
    // setActiveTabIndex(index);
    changePage({ mainPage, subMenuPageLevel1: index });
    if (ref.current) {
      if (subMenuPageLevel1 === 0 && !pressedFromInsideTabs)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      else ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleClicktab(subMenuPageLevel1);
  }, [subMenuPageLevel1, mainPage]);
  return (
    <div className={styles.wrapper}>
      <div ref={ref} className={styles.scrollMark}></div>
      <div
        className={[
          styles.labelContainer,
          menuOpen ? styles.hideTabs : "",
          styles[contentClassNames[subMenuPageLevel1]],
        ].join(" ")}
      >
        <div
          ref={refLabel}
          className={["container", styles.labelContainerWrapper, windowWidth > 1023 ? "horizontal-padding" :""].join(" ")}
        >
          {labels.map((label, index) => (
            <div
              style={getVisibleSensorAnimation(
                isVisibleLabel,
                `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                  1025,
                  index
                )}s ease-in-out backwards`
              )}
              className={styles.labelWrapper}
              key={index}
            >
              <MenuItem
                active={index === subMenuPageLevel1}
                smallerFont
                label={label}
                handleClick={() => {
                  handleClicktab(index);
                  if (index === 0) setPressedFromInsideTabs(true);
                  else setPressedFromInsideTabs(false);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div
        key={subMenuPageLevel1}
        className={[styles.contentContainer].join(" ")}
      >
        <div
          ref={refContent}
          style={getVisibleSensorAnimation(
            isVisibleContent,
            "fade-in 0.3s backwards"
          )}
          // style={getVisibleSensorAnimation(
          //   isVisible,
          //   `tab-content-enter${
          //     rtlLanguage ? "-reverse" : ""
          //   } 1s ease-in-out backwards`
          // )}
        >
          {contents[subMenuPageLevel1]}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
