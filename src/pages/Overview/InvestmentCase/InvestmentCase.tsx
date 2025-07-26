import { Frame } from "../../../components/Frame/Frame";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useWindowSize from "../../../hooks/useWindowSize";
import useAppStore from "../../../store";
import { getRightContent } from "../../../ts/util";
import backgroundImageMobile from "./images/background-mobile.jpg";
import styles from "./InvestmentCase.module.css";

const pageContent = content.pages.InvestmentCase;
export const InvestmentCase = () => {
  const windowWidth = useWindowSize();
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  return (
    <div>
      <div className="container horizontal-padding">
        <Paragraph classNames="color-aubergine-900" fontClassName="subheading">
          {getRightContent(rtlLanguage, pageContent.intro)}
        </Paragraph>
        <div className="spacer-32"></div>
      </div>
      <div className={styles.backgroundImage}>
        {windowWidth < 1024 && (
          <img
            alt=""
            src={backgroundImageMobile}
            className={styles.backgroundSticky}
          />
        )}
        <div
          className={[
            "container horizontal-padding",
            windowWidth < 1024 ? styles.stickyContent : "",
          ].join(" ")}
        >
          <div className="spacer-64"></div>
          <div className={styles.contentWrapper}>
          <div className={styles.cards}>
            {pageContent.cards.map((item, index) => {
              return (
                <div className={styles.frameWrapper}>
                  <Frame badge darkBadgeWrapper>
                    <div className={styles.frameContent}>
                      <Paragraph
                        fontClassName="h1"
                        classNames="color-aubergine-600 bold"
                      >
                        {"0" + (index +1)}
                      </Paragraph>
                      <div className={styles.cardTextContainer}>
                        <Paragraph classNames="bold white" fontClassName="headline">{getRightContent(rtlLanguage, item.title)}</Paragraph>
                        <div className="spacer-8"></div>
                        <Paragraph classNames=" white"  fontClassName="body-l">{getRightContent(rtlLanguage, item.text)}</Paragraph>
                      </div>
                    </div>
                  </Frame>
                </div>
              );
            })}
          </div>
          </div>
          <div className="spacer-64"></div>
        </div>
      </div>
    </div>
  );
};
