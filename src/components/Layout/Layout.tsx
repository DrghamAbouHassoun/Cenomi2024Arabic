import { useEffect } from "react";
// import useWindowSize from "../../hooks/useWindowSize";
import { DownloadCenterPage } from "../../pages/DownloadCenterPage/DownloadCenterPage"; 
import { FinancialStatements } from "../../pages/FinancialStatements/FinancialStatements"; 
import { Home } from "../../pages/Home/Home"; 
import { Leadership } from "../../pages/Leadership/Leadership"; 
import { Overview } from "../../pages/Overview/Overview"; 
import { StrategicReview } from "../../pages/StrategicReview/StrategicReview"; 
import useAppStore, { type PagesStructure } from "../../store"; 
import ArrowNavigator from "../ArrowNavigator/ArrowNavigator";
import Modal from "../Modal/Modal";
import Navbar from "../Navbar/Navbar";
// import SocialIcons from "../SocialIcons/SocialIcons";
import styles from "./Layout.module.css";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";
import { YearInReview } from "../../pages/YearInReview/YearInReview";
import { OperationalReview } from "../../pages/OperationalReview/OperationalReview";
import ThemeModal from "../ThemeModal/ThemeModal";

const Layout = () => {
  // const windowWidth = useWindowSize();

  const {currentPage, logoToggled, menuOpen} = useAppStore()
  const {ref, inView} = useInView()

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuOpen]);

  const pageSelector = (currentPage: PagesStructure) => {
    const { mainPage } = currentPage;
    if (mainPage === 0) return <Home />;
    if (mainPage === 1) {
      return <Overview />;
      // if (subMenuPageLevel1 === 0) return <ATAGlancePage />;
      // if (subMenuPageLevel1 === 1) return <YearInReview />;
      // if (subMenuPageLevel1 === 2) return <StakeholderEngagement />;
    }
     if (mainPage === 2) return <YearInReview />;

    if (mainPage === 3) {
      return <Leadership />;
      // if (subMenuPageLevel1 === 0) return <Chairman />;
      // if (subMenuPageLevel1 === 0) return <ChairmanPage />;
      // if (subMenuPageLevel1 === 1) return <CEO />;

      // if (subMenuPageLevel1 === 2) return <CFOMessages />;
    }
    if (mainPage === 4) {
      return <StrategicReview />;
      // if (subMenuPageLevel1 === 0) return <MaadenStrategy2040 />;

      // if (subMenuPageLevel1 === 1) return <InvestmentCase />;
      // if (subMenuPageLevel1 === 2) return <Exploration />;
    }

    if (mainPage === 5) {
      return <OperationalReview />
      // if (subMenuPageLevel1 === 0) return <Phosphates />;

      // if (subMenuPageLevel1 === 1) return <Aluminum />;
      // if (subMenuPageLevel1 === 2) return <BaseMetalsAndNewMinerals />;
    }

   

    if (mainPage === 6) return <FinancialStatements />;
    if (mainPage === 7) return <DownloadCenterPage />;
  };
  return (
    <div ref={ref} key={logoToggled ? "0" :"1"} className={styles.container}>
      <div  style={getVisibleSensorAnimation(inView, "fade-in 1s 7s backwards")} className={styles.navbarWrapper}>
      <Navbar />
      </div>
      <main>
      {pageSelector(currentPage)}
      <ArrowNavigator />
      </main>
      
      <Modal />
      {/* {windowWidth > 1023 && currentPage.mainPage !== 0 && <SocialIcons />} */}

      {/* {windowWidth < 1024 && (
        <div
          className={[styles.menuWrapper, menuOpen ? styles.show : ""].join(
            " "
          )}
        >
          <Menu />
        </div>
      )} */}
    </div>
  );
};

export default Layout;
