import { useEffect, useState } from "react";
import styles from "./YearNumber.module.css";
import content from "../../../content/content";

const pageContent = content.pages.Home.number;

const YearNumber = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % pageContent.length);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className={styles.container}>
      {pageContent.map((digit, index) => (
        <span
          key={index}
          className={` ${styles.digit} ${index === currentIndex ? styles.active : ""}`}
        >
          {digit}
        </span>
      ))}
    </div>
  );
};

export default YearNumber;
