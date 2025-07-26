import content from "../../content/content";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
// import AnimationMenu from "../AnimationMenu/AnimationMenu";
import AnimationMenu2 from "../AnimationMenu/AnimationMenu2";
import DownloadIcon from "../DownloadIcon/DownloadIcon";
import LanguageToggler from "../LangaugeToggler/LanguageToggler";
import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Menu.module.css";
// import menuImage from "./images/menuImage.png";
export const Menu = () => {
  const windowWidth = useWindowSize();
  const { menuOpen, toggleMenu, rtlLanguage, changePage, currentPage } =
    useAppStore();

  const handleMenuItemClick = (mainLevel: number, subLevel = 0) => {
    changePage({ mainPage: mainLevel, subMenuPageLevel1: subLevel });
    menuOpen &&  toggleMenu();
  };

  return (
    <div className={[styles.container, menuOpen ? styles.open :""].join(" ")}>
      {windowWidth < 1024 && <div className={styles.languageDownloadWrapper}>
        <LanguageToggler />
        <DownloadIcon />
      </div>}
      <div className={styles.menuImageWrapper}>
      <ul className={[styles.menuList, "list no-style"].join(" ")}>
        {content.menuItems.map((menuItem, index) => (
          <li
            onClick={() => handleMenuItemClick(index + 1, 0)}
            className={[
              styles.menuItem,
              "white bold",
              windowWidth >= 1280 ? "h4" : windowWidth > 1023 ? "headline" : "subheading",
              currentPage.mainPage === index + 1 ? styles.active : "",
            ].join(" ")}
            key={index}
          >
            {getRightContent(rtlLanguage, menuItem.label)}            
          </li>
        ))}
      </ul>
      {/* {windowWidth > 1023 && <img src={menuImage} alt="" className={styles.menuImage} />} */}
      {windowWidth > 1023 && <div key={menuOpen ? "0" : "1"} className={styles.menuImage}><AnimationMenu2 /></div>}
      </div>
      <div className={styles.socialContainer}>

      {(windowWidth > 1023 && !menuOpen || windowWidth <1024 ) && <SocialIcons />}
      </div>
    </div>
  );
};
