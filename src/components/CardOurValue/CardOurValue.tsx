
import useWindowSize from "../../hooks/useWindowSize";
import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardOurValue.module.css";

interface Props {
  title: string;
  text: string;
  icon: string;
}

export const CardOurValue = ({ title, text, icon }: Props) => {
  const windowWidth =useWindowSize()
  return (<>
   <div className="spacer-32"></div>
    <div className={styles.section}>
      <div className={styles.cardContent}>
        <img src={icon} alt="img" className={styles.icon} />
<div className="spacer-8"></div>
        <Paragraph fontClassName={windowWidth >1023 ? "body-l" :"body-m"} classNames="bold white">
          {title}
        </Paragraph>

        <Paragraph  fontClassName={windowWidth >1023 ? "body-m" :"body-s"} classNames="white">
              {text}
        </Paragraph>
      </div>
    </div>
  </>);
};
