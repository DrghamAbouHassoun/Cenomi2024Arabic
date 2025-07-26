import type { ReactNode } from "react";
import styles from "./Leader.module.css";
import Silk from "../Silk/Silk";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";
interface Props {
  content?: ReactNode;
  image: string;
}

export const Leader = ({ image, content }: Props) => {
    const {ref, inView} = useInView()
  return (
    <div className={styles.wrapper} ref={ref}>
        <div className="spacer-64"></div>
      <div className={styles.background}>
        <Silk
          speed={11}
          scale={0.8}
          color="#592B8A"
          noiseIntensity={0.3}
          rotation={3}
        />
      </div>
      <div
        className={["container horizontal-padding", styles.container].join(" ")}
      >
        <div style={getVisibleSensorAnimation(inView, `fade-in-40px 0.6s backwards`)} className={styles.contentWrapper}>{content}</div>

        <img style={getVisibleSensorAnimation(inView, "fade-in 1s 0.3s backwards")} src={image} className={styles.image} alt="" />
      </div>
      <div className="spacer-64"></div>
    </div>
  );
};
