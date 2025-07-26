import type { PropsWithChildren } from "react";
import styles from "./Frame.module.css";
import { useInView } from "react-intersection-observer";

interface Props {
  primaryColor?: boolean;
  badge?: boolean;
  triggerOnce?: boolean;
  whiteBadgeWrapper?: boolean;
  darkBadgeWrapper?: boolean;
  avoidHeight100Percent?: boolean;
  customBadgeBackground?: string;
  hiddenContent?: React.ReactNode;
  isFilp?: boolean;
}
export const Frame = ({
  children,
  primaryColor,
  badge,
  triggerOnce = false,
  whiteBadgeWrapper,
  darkBadgeWrapper,
  avoidHeight100Percent,
  customBadgeBackground,
  hiddenContent,
  isFilp = false,
}: PropsWithChildren & Props) => {
  const { ref, inView } = useInView({ triggerOnce });
  return (
    <div className={[styles.wrapper, isFilp ? styles.isFilp : "",].join(" ")}>
      <div
        ref={ref}
        key={inView ? "0" : "1"}
        className={[
          styles.container,
          avoidHeight100Percent ? styles.avoidHeight100Percent : "",
          primaryColor ? styles.primaryColor : "",
          badge ? styles.badge : "",

        ].join(" ")}
      >
        <div className={styles.hiddenContent}>
          {hiddenContent}
        </div>
        <div className={styles.content}>
        {children}
        </div>
        {badge && (
          <div
            className={[
              styles.badgeWrapper,
              whiteBadgeWrapper ? styles.whiteBadgeWrapper : "",
              darkBadgeWrapper ? styles.darkBadgeWrapper : "",
            ].join(" ")}
            style={
              customBadgeBackground ? { background: customBadgeBackground } : {}
            }
          ></div>
        )}
        {!badge && (
          <div className={[styles.top, styles.horizontalFrame].join(" ")}></div>
        )}
        {badge && (
          <div className={[styles.top1, styles.horizontalFrame].join(" ")}></div>
        )}
        <div className={[styles.right, styles.verticalFrame].join(" ")}></div>
        <div className={[styles.bottom, styles.horizontalFrame].join(" ")}></div>
        <div className={[styles.left, styles.verticalFrame].join(" ")}></div>
        {badge && (
          <div className={[styles.top2, styles.horizontalFrame].join(" ")}></div>
        )}
      </div>
    </div>
  );
};
