import { useInView } from "react-intersection-observer";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./Cover.module.css";
import { getVisibleSensorAnimation } from "../../ts/util";
import useWindowSize from "../../hooks/useWindowSize";
import { Frame } from "../Frame/Frame";
interface Props {
  image: string;
  title: string;
  subtitle?: string;
}
export const Cover = ({ title, subtitle, image }: Props) => {
  const imageRef = useInView();
  const windowWidth = useWindowSize();
  const smallDevice = windowWidth < 1024;
  const textContainerRef = useInView()
  return (
    <div className={[styles.container, ""].join(" ")}>
      <div className={styles.background}></div>
      <div
        className={[styles.content, "horizontal-padding container"].join(" ")}
      >
        <div className={styles.textContainerWrapper} ref={textContainerRef.ref}>
          <Frame avoidHeight100Percent key={textContainerRef.inView ? "0":"1"}>
            <div className={styles.textContainer}>
              <Paragraph
                classNames="white bold "
                fontClassName={smallDevice ? "h4" : "h2"}
                delay="0.4s"
              >
                {title}
              </Paragraph>
             {subtitle &&  <Paragraph
                classNames="white"
                fontClassName={smallDevice ? "body-l" : "subheading"}
                delay="1.2s"
              >
                {subtitle}
              </Paragraph>}
            </div>
          </Frame>
        </div>
        <div className={styles.imageContainer} ref={imageRef.ref}>
          <img
            src={image}
            className={[styles.image, styles.image1].join(" ")}
            alt=""
            // style={getVisibleSensorAnimation(
            //   imageRef.inView,
            //   "cover-image-31 s 0.8s forwards"
            // )}
          />
          <img
            src={image}
            className={[styles.image, styles.image2].join(" ")}
            alt=""
            style={getVisibleSensorAnimation(
              imageRef.inView,
              "cover-image-3 2.2s 0.6s forwards"
            )}
          />
          <img
            src={image}
            className={[styles.image, styles.image3].join(" ")}
            alt=""
            style={getVisibleSensorAnimation(
              imageRef.inView,
              "cover-image-2 2s 0.3s forwards"
            )}
          />
          <img
            src={image}
            className={[styles.image, styles.image4].join(" ")}
            alt=""
            style={getVisibleSensorAnimation(
              imageRef.inView,
              "cover-image 2.4s  forwards"
            )}
          />
        </div>
      </div>
    </div>
  );
};
