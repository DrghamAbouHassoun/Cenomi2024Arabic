import styles from "./Logo.module.css";
import logoImage from "./images/logo.svg";
import useAppStore from "../../store";
const Logo = () => {
  const { toggleLogo, menuOpen, toggleMenu, changePage } = useAppStore();
  return (
    <img
      src={logoImage}
      alt="logo"
      className={styles.logo}
      onClick={() => {
        toggleLogo();
        changePage({mainPage:0, subMenuPageLevel1:0});
        if (menuOpen) toggleMenu();
      }}
    />
  );
};

export default Logo;
