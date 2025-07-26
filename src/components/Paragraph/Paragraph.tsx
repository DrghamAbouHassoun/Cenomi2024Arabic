

import type { CSSProperties, ReactNode } from "react";
import { getVisibleSensorAnimation } from "../../ts/util"; 
import styles from "./Paragraph.module.css";
import { useInView } from "react-intersection-observer";
const Paragraph = ({
  children,
  classNames = "colorText",
  style = {},
  fontClassName = "body-l",
  delay ="0s",
  triggerOnce = false,
  dontAnimate
}: {
  children: ReactNode;
  classNames?: string;
  style?: CSSProperties;
  fontClassName?: string;
  delay?:string;
  triggerOnce?:boolean;
  dontAnimate?:boolean;
}) => {

  const {ref, inView} = useInView({triggerOnce})
  return (

        <div ref={ref}
          style={{
            ...getVisibleSensorAnimation(
              inView,
              `fade-in-40px${dontAnimate ? "xxx":""} 0.6s ${delay} ease-in-out backwards`
            ),
            ...style,
          }}
          className={[styles.wrapper, "color-text", classNames, fontClassName].join(" ")}
        >
          {children}
        </div>

  );
};

export default Paragraph;
