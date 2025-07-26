import { useState } from "react";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardStrategic.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";
import useAppStore from "../../store";
interface Props {
  text: string | React.ReactNode;
  icon: string;
}

const CardStrategic = ({ text, icon }: Props) => {
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  const [isHovered, setIsHovered] = useState(false);
  const windowWidth = useWindowSize();
  const { ref, inView } = useInView();
  return (
    <div
      className={`${styles.Card} ${rtlLanguage ? styles.rtl : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered
          ? "var(--color-aubergine-900)"
          : "var(--color-aubergine-200)",
      }}
    >
      <div>
        <Paragraph
          delay="0.3s"
          fontClassName={windowWidth < 1024 ? "subheading" : "headline"}
          classNames={[isHovered ? "white" : "color-aubergine-1000"].join(" ")}
        >
          {text}
        </Paragraph>
      </div>
      {/* <div className="spacer-64"></div> */}
      <div
        ref={ref}
        className={styles.icon}
        style={getVisibleSensorAnimation(
          inView,
          `scale-from-center .6s 0.4s  ease backwards`
        )}
      >
        <img
          src={icon}
          alt="icon"
          style={{ filter: isHovered ? "brightness(0) invert(1)" : "none" }}
        />
      </div>
    </div>
  );
};

export default CardStrategic;
