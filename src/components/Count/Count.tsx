import CountUp from "react-countup";
import styles from "./Count.module.css";
import useAppStore from "../../store";
// import { ReactNode } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { getVisibleSensorAnimation } from "../../ts/util";
import { useInView } from "react-intersection-observer";

interface Props {
  topTitle?: string;
  classTopTitleColor?: string;
  text?: string;
  countTitle?: string;
  countValue: number;
  percentage?: string;
  percentageAr?: string;
  countSpan?: string;
  countSpanLeft?: string;
  decimalCount?: number;
  showLine?: boolean;
  component?: React.ReactNode;
  src?: string;
  underText?: string;
  classUnderText?: string;
  classUnderTextColor?: string;
  classCountSpanLeft?: string;
  classImg?: string;
  classColor?: string;
  instateCount?: string;
  classWidth?: string;
  spanUnderText?: string;
  style?: React.CSSProperties;
  counterClassName?: string;
  containerClassName?: string;
  classInstateCount?: string;
  classCountSpan?: string;
  classTopTitle?: string;
  classSpanUnderText?: string;
  classCountValue?: string;
  classTextImg?: string;
  reduceCounterFontSize?: boolean;
  textImg?: string;
  increaseCounterFontSize?: boolean;
  delay?:number;
  showBox?:boolean;
}
const Count = ({
  showBox,
  increaseCounterFontSize,
  textImg,
  reduceCounterFontSize,
  classInstateCount = "h2",
  counterClassName = "",
  topTitle,
  text,
  delay = 0,
  countTitle,
  countValue,
  percentage,
  percentageAr,
  countSpan,
  countSpanLeft,
  decimalCount,
  component,
  showLine = false,
  src,
  underText,
  classImg = "",
  classColor = "#007985",
  instateCount,
  classWidth = "",
  classUnderText = "subheading",
  spanUnderText,
  classUnderTextColor = "color-aubergine-1000",
  style,
  classTopTitleColor = "#000",
  classCountSpan = "subheading",
  classTopTitle = "subheading",
  classCountValue = "color-aubergine-900",
  classSpanUnderText = "body-s",
  classTextImg,
  classCountSpanLeft = "",
  containerClassName = ""
}: Props) => {
  const rtlLanguage = useAppStore((state) => state.rtlLanguage);
  const windowWidth = useWindowSize();
  const { ref, inView: isVisible } = useInView();

  let classFontH2 = windowWidth < 400 ? "h4" : "h3";
  if (reduceCounterFontSize) classFontH2 = "subtitle-l";
  if (increaseCounterFontSize) classFontH2 = "h1";
  return (
    <div
      className={`${styles.countLine} ${
        showLine ? styles.withLine : styles.withoutLine
      } ${containerClassName}`}
      style={style}
    >
      {showLine && <div className={styles.line}></div>}

      <div className={styles.count}>
        <div className={styles.topCount} ref={ref}>
          {topTitle && (
            <p
              style={getVisibleSensorAnimation(
                isVisible,
                "fade-in-40px1 1s ease-in-out backwards"
              )}
              className={[
                classTopTitle,
                styles.topTitleWidth,
                styles[classTopTitleColor],
                styles.topTitle,
              ].join(" ")}
            >
              {topTitle}
            </p>
          )}

          {text && (
          
                <p
                  style={getVisibleSensorAnimation(
                    isVisible,
                    "fade-in-40px 1s ease-in-out backwards"
                  )}
                  className="subtitle-s"
                >
                  {text}
                </p>
       
          )}
        </div>

        <div className={styles[classImg]}>
          <div className={styles.imgText}>
            <img
              style={getVisibleSensorAnimation(
                isVisible,
                "scale-from-center 0.8s ease-in-out forwards"
              )}
              className={styles.img}
              src={src}
              alt=""
            />

            {textImg && <p
              style={getVisibleSensorAnimation(
                isVisible,
                "scale-from-center 0.8s ease-in-out forwards"
              )}
              className={["subheading color-green", classTextImg].join(" ")}
            >
              {textImg}
            </p>}
          </div>

          <div
            className={[
              styles.countText,
              !countTitle ? styles.withoutLine : "",
            ].join(" ")}
          >
            {countTitle && (
              <p
                style={getVisibleSensorAnimation(
                  isVisible,
                  "fade-in-40px 0.5s ease-in-out forwards"
                )}
                className={[
                  rtlLanguage ? "subtitle-l" : classFontH2,
                  styles.countTitle,
                ].join(" ")}
              >
                {countTitle}
              </p>
            )}

            {(countValue !== 0 || instateCount) && (
              <span>
                {isVisible ? (
                  <span
                    className={[
                      styles.countValueInline,
                      styles[classColor],
                      counterClassName,
                    ].join(" ")}
                  >
                    {showBox && <div style={getVisibleSensorAnimation(isVisible, `move-from-${rtlLanguage ? "right-count-box":"left-count-box"} 0.6s ${delay || 0}s forwards`)} className={[styles.countBox, showBox ? styles.showBox : ""].join(" ")}></div>}
                    {countSpanLeft && (
                      <span className={[classFontH2,  classCountSpanLeft].join(" ")}>
                        {countSpanLeft}
                      </span>
                    )}
                    {showBox && <div className={styles.emptyCountBoxSpace}></div>}
                    {instateCount ? (
                      <span
                        className={[
                          // styles.bold,
                          // "h2",
                          classInstateCount,
                          // styles.instateCountWidth,
                        ].join(" ")}
                      >
                        {instateCount}
                      </span>
                    ) : (
                      
                        <CountUp
                        duration={0.5}
                        className={[classFontH2, classCountValue].join(" ")}
                        end={countValue}
                        suffix={rtlLanguage ? "" : percentage}
                        prefix={rtlLanguage ? percentageAr : ""}
                        decimals={decimalCount}   
                        delay={delay}                     
                      />
                     
                    )}

                    <span
                      className={[
                        // classFontH2,
                        // styles.bold,
                        classCountSpan,
                        styles.countSpan,
                      ].join(" ")}
                    >
                      {countSpan}
                    </span>
                  </span>
                ) : (
                  "invisibility"
                )}
              </span>
            )}
          </div>

          {underText && <p
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 1s ease-in-out backwards"
            )}
            className={[
              classUnderText,
              styles.underText,
              styles[classUnderTextColor],
            ].join(" ")}
          >
            {underText}
          </p>}

          <p
            style={getVisibleSensorAnimation(
              isVisible,
              "fade-in-40px 1s ease-in-out backwards"
            )}
            className={[ classSpanUnderText].join(" ")}
          >
            {spanUnderText}
          </p>
        </div>
        {component ? (
          <div className={[styles.digram, styles[classWidth]].join(" ")}>
            {component}
          </div>
        ) : (
          <div className={styles.digram}>{component}</div>
        )}
      </div>
    </div>
  );
};

export default Count;
