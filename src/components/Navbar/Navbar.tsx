// import useScrollYNavbarChecker from "../../hooks/useScrollYNavbarChecker";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";
import DownloadIcon from "../DownloadIcon/DownloadIcon";
import LanguageToggler from "../LangaugeToggler/LanguageToggler";
import Logo from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
import MenuToggle from "../MenuToggle/MenuTogle";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const windowWidth = useWindowSize();
  const { menuOpen } = useAppStore();
  // const yscroll = useScrollYNavbarChecker(window.innerHeight)
  return (
    <nav className={[styles.container, menuOpen ? styles.open : "",
      // ((currentPage.mainPage === 17  ) && windowWidth > 1023 && yscroll) ? styles.fadeOut :""

    ].join(" ")}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>

      <div className={styles.languageDownloadWrapper}>
        {windowWidth > 1023 && (
          <div className={styles.languageDownloadLinesContainer}>
            <DownloadIcon />
            <div className={styles.line}></div>
            <LanguageToggler />
            {/* <div className={styles.line}></div> */}
          </div>
        )}
        <div className={styles.menuIconWrapper}>
          <MenuToggle />
        </div>
      </div>
      {/* <div className={styles.expandable}></div> */}
      <Menu />
    </nav>
  );
};

export default Navbar;
