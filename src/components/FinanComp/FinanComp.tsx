import { useInView } from "react-intersection-observer";
import useAppStore from "../../store";
import styles from "./FinanComp.module.css";
import { getVisibleSensorAnimation } from "../../ts/util";

interface Props {
  value1: number;
  value2: number;
  value1Content: string;
  value2Content: string;
  invertBar1?: boolean;
  invertBar2?: boolean;
  push?: boolean;
  normalJustify?: boolean;
  delay?:number;
}
export const FinanComp = ({
  value1,
  value2,
  value1Content,
  value2Content,
  invertBar1,
  invertBar2,
  push,
  normalJustify,
  delay
}: Props) => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const { ref, inView } = useInView();

  const Year1 = () => (
    <span
      className={[styles.year, "body-m bold color-aubergine-1000"].join(" ")}
    >
      {rtlLanguage ? "2023م" : "2023"}
    </span>
  );

  const Year2 = () => (
    <span
      className={[styles.year, "body-m bold color-aubergine-1000"].join(" ")}
    >
      {rtlLanguage ? "2024م" : "2024"}
    </span>
  );
  return (
    <div
      ref={ref}
      className={[styles.container, inView ? styles.show : ""].join(" ")}
    >
      <div className={[styles.row, invertBar1 ? styles.reverse : ""].join(" ")}>
        <Year1 />
        <div
          className={styles.barWrapper}
          style={{
            maxWidth:
              invertBar1 && !invertBar2
                ? `calc(${value1 + "%"} - 105px)`
                : value1 + "%",
          }}
        >
          <div
            className={styles.bar}
            style={{
              //   maxWidth: value1 + "%",
              ...getVisibleSensorAnimation(
                inView,
                `move-from-${
                  rtlLanguage || invertBar1 ? "right" : "left"
                } 0.6s ${(delay || 0) + 0.6}s backwards`
              ),
            }}
          >
            <span className="body-s">{value1Content}</span>
          </div>
        </div>
      </div>
      <div className={[styles.row,styles.row2,push ? styles.push:"",  invertBar2 ? styles.reverse : "", normalJustify ? styles.normalJustify : ""].join(" ")}>
        <Year2 />
        <div
          className={styles.barWrapper}
          style={{
            // maxWidth: value2 + "%",
            maxWidth:
              invertBar2 && !invertBar1
                ? `calc(${value2 + "%"} - 105px)`
                : value2 + "%",
          }}
        >
          <div
            className={styles.secondBar}
            style={getVisibleSensorAnimation(
              inView,
              `move-from-${
                rtlLanguage || invertBar2 ? "right" : "left"
              } 0.6s ${(delay || 0) + 1}s backwards`
            )}
          >
            <span className="body-s">{value2Content}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
