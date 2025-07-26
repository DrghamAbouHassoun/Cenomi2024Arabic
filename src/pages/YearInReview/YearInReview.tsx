import { Cover } from "../../components/Cover/Cover";
import Paragraph from "../../components/Paragraph/Paragraph";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import styles from "./YearInReview.module.css";

import q1 from "./images/q1.svg";
import q2 from "./images/q2.svg";
import q3 from "./images/q3.svg";
import q4 from "./images/q4.svg";

import coverImage from "./images/cover.jpg";
// import VerticalCalendar from "../../components/VerticalCalendar/VerticalCalendar";
// import CardYearInReview from "./CardYearInReview/CardYearInReview";
import VerticalCalendar from "../../components/VerticalCalendar/VerticalCalendar";
import { useEffect } from "react";

const pageContent = content.pages.YearInReview;

const quarterImages = [q1, q2, q3, q4];

export const YearInReview = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  const currentPage = useAppStore((s) => s.currentPage);

  useEffect(() => {
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);

    return function () {
      clearTimeout(timeout);
    };
  }, [currentPage]);

  return (
    <div>
      <Cover
        image={coverImage}
        title={getRightContent(rtlLanguage, pageContent.title)}
        subtitle={getRightContent(rtlLanguage, pageContent.subtitle)}
      />
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <Paragraph classNames="color-aubergine-900" fontClassName="subheading">
          {getRightContent(rtlLanguage, pageContent.intro1)}
        </Paragraph>
        <div className="spacer-32"></div>
        <Paragraph classNames="color-aubergine-900" fontClassName="subheading">
          {getRightContent(rtlLanguage, pageContent.intro2)}
        </Paragraph>
      </div>

      <div className="spacer-64"></div>

      <div className={styles.background}>
        <div className="container horizontal-padding">
          <VerticalCalendar
            quarters={pageContent.textCard}
            quarterImages={quarterImages}
          />
          {/* <CardYearInReview /> */}
          {/* <div className="spacer-64"></div> */}
          <div className="spacer-64"></div>
          <div className="spacer-16"></div>
        </div>
      </div>

      {/* <div className="spacer-64"></div> */}
    </div>
  );
};
