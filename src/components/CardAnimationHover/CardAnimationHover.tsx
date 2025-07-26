import Paragraph from "../Paragraph/Paragraph";
import styles from "./CardAnimationHover.module.css";

interface Props {
  title: string;
  text: string[];
  key: number;
}

const CardAnimationHover = ({ title, text, key }: Props) => {
  return (
    <div key={key} className={styles.cardHover}>
      <div className={`${styles.squearHover} ${styles.topRight}`}></div>
      <div className={`${styles.squearHover} ${styles.bottomLeft}`}></div>

      <div className={styles.textCardHover}>
        <ul>
          {text.map((item, index) => (
            <Paragraph
              key={index}
              fontClassName="body-s"
              classNames="normal color-aubergine-1000"
            >
              <li>{item}</li>
            </Paragraph>
          ))}
        </ul>
      </div>

      <div className={styles.titleCard}>
        <Paragraph fontClassName="headline" classNames="bold white">
          {title}
        </Paragraph>
      </div>
    </div>
  );
};

export default CardAnimationHover;
