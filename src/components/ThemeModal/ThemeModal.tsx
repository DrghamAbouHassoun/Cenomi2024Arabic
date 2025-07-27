import { useContext, useEffect } from "react";
import styles from "./ThemeModal.module.css"
import { ThemeModalContext } from "./ThemeModalContext";
import CloseIcon from "./icons/close.svg";
import content from "../../content/content";
import { getRightContent } from "../../ts/util";
import useAppStore from "../../store";
import Paragraph from "../Paragraph/Paragraph";
import ThemeModalImage from "./images/them-modal-image.png";
import ThemeModalImageBg from "./images/theme-modal-bg.jpg";

const ThemeModal = () => {
  const { isOpen, handleToggle } = useContext(ThemeModalContext);

  const rtlLanguage = useAppStore((s) => s.rtlLanguage);

  useEffect(() => {
    console.log("isOpen: ", isOpen)
  }, [isOpen])

  return (
    <div id="themeModal" className={`${styles.themeModal}`} style={{ transform: isOpen ? "translateY(0)" : "translateY(-100vh)" }}>
      <img src={ThemeModalImageBg} alt="themeModalBg" className={styles.themeModalBg} />
      <button onClick={() => handleToggle(!isOpen)} className={`${styles.closeButton} ${rtlLanguage ? styles.rtl : ""}`}>
        <img src={CloseIcon} alt="close" className={styles.closeIcon} />
      </button>
      <div className={styles.themeModalContainer}>
        <div className={styles.themeModalContent}>
          <Paragraph classNames={`${styles.themeModalTitle} white`} fontClassName="bold h1">{getRightContent(rtlLanguage, content.themeModal.title)}</Paragraph>
          <Paragraph classNames={`${styles.themeModalSubtitle} white`} fontClassName="h4">{getRightContent(rtlLanguage, content.themeModal.subtitle)}</Paragraph>
          <Paragraph classNames={`${styles.themeModalParagraph} white`} fontClassName="body-l">{getRightContent(rtlLanguage, content.themeModal.paragraph1)}</Paragraph>
          <Paragraph classNames={`${styles.themeModalParagraph} white`} fontClassName="body-l">{getRightContent(rtlLanguage, content.themeModal.paragraph2)}</Paragraph>
          <Paragraph classNames={`${styles.themeModalParagraph} white`} fontClassName="body-l">{getRightContent(rtlLanguage, content.themeModal.paragraph3)}</Paragraph>
        </div>
        <div className={styles.themeModalImageWrapper}>
          <img src={ThemeModalImage} alt="themeModal" className={styles.themeModalImage} />
        </div>
      </div>
    </div>
  )
}

export default ThemeModal