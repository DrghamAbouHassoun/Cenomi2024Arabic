import styles from "./DownloadIcon.module.css";
import downloadImage from "./images/download.svg";
import useAppStore from "../../store";
const DownloadIcon = () => {
  const { changePage, menuOpen, toggleMenu } = useAppStore();
  const handleIconClick = () => {
    changePage({mainPage:7, subMenuPageLevel1:0});
    menuOpen && toggleMenu();
  };
  return (
    <div className={styles.wrapper} onClick={handleIconClick}>
      <img src={downloadImage} alt="" />
    </div>
  );
};

export default DownloadIcon;
