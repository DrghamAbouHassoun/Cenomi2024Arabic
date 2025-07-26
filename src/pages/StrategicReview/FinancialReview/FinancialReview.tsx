import Count from "../../../components/Count/Count";
import Paragraph from "../../../components/Paragraph/Paragraph"
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getRightContent } from "../../../ts/util"
import styles from "./FinancialReview.module.css"
import SideImage from "./images/women.jpg";
import labelIcon1 from "./icons/icon-1.svg";
import labelIcon2 from "./icons/icon-2.svg";
import DownloadButton from "../../../components/DownloadButton/DownloadButton";

const pageContent = content.pages.FinancialReview;

const FinancialReview = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  return (
    <div>
      <div className={styles.header}>
        <div className="container horizontal-padding">
          <Paragraph fontClassName="subheading bold" classNames="white">
            {getRightContent(rtlLanguage, pageContent.header.firstTitle)}
          </Paragraph>
          <div className="spacer-8"></div>
          <Paragraph fontClassName="subheading bold" classNames="white">
            {getRightContent(rtlLanguage, pageContent.header.secondTitle)}
          </Paragraph>
          <div className="spacer-8"></div>
          <Paragraph fontClassName="subheading" classNames="white">
            {getRightContent(rtlLanguage, pageContent.header.firstParagraph)}
          </Paragraph>
          <div className="spacer-32"></div>
          <Paragraph fontClassName="subheading" classNames="white">
            {getRightContent(rtlLanguage, pageContent.header.secondParagraph)}
          </Paragraph>


        </div>
      </div>
      <div className="spacer-32"></div>
      <div className="container horizontal-padding">
        <div className={`${styles.secondarySection} `}>
          <Paragraph
            fontClassName="subheading bold"
            classNames="color-aubergine-900"
          >{getRightContent(rtlLanguage, pageContent.section1.title)}</Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph1)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph2)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph3)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph4)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section1.paragraph5)}
          </Paragraph>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <div className={`${styles.secondarySection} `}>
          <Paragraph
            fontClassName="subheading bold"
            classNames="color-aubergine-900"
          >{getRightContent(rtlLanguage, pageContent.section2.title)}</Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section2.paragraph1)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section2.paragraph2)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section2.paragraph3)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section2.paragraph4)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section2.paragraph5)}
          </Paragraph>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className={`${styles.coloredSection} ${rtlLanguage ? styles.rtl : ""}`}>
        <div className={styles.coloredSectionFlex}>
          <div className={styles.coloredSectionFirstCol}>
            <Paragraph
              fontClassName="subheading bold"
              classNames="white"
            >{getRightContent(rtlLanguage, pageContent.section3.title)}</Paragraph>
            <div className="spacer-16"></div>
            <Paragraph
              fontClassName="body-l"
              classNames="white"
            >
              {getRightContent(rtlLanguage, pageContent.section3.paragraph1)}
            </Paragraph>
            <div className="spacer-16"></div>
            <Paragraph
              fontClassName="body-l"
              classNames="white"
            >
              {getRightContent(rtlLanguage, pageContent.section3.paragraph2)}
            </Paragraph>
            <div className="spacer-16"></div>
            <Paragraph
              fontClassName="body-l"
              classNames="white"
            >
              {getRightContent(rtlLanguage, pageContent.section3.paragraph3)}
            </Paragraph>
            <div className="spacer-16"></div>
            <Paragraph
              fontClassName="body-l"
              classNames="white"
            >
              {getRightContent(rtlLanguage, pageContent.section3.paragraph4)}
            </Paragraph>
            <div className="spacer-16"></div>
            <Paragraph
              fontClassName="body-l"
              classNames="white"
            >
              {getRightContent(rtlLanguage, pageContent.section3.paragraph5)}
            </Paragraph>
            <div className={styles.labelsFlex}>
              <div className={styles.infoLabel}>
                <img className={styles.labelIcon} src={labelIcon1} alt="" />
                <Count
                  countValue={pageContent.section3.lable1.number}
                  countSpan={getRightContent(rtlLanguage, pageContent.section3.lable1.suffix)}
                  // countSpanLeft={getRightContent(
                  //   rtlLanguage,
                  //   pageContent.section3.label2.prefix
                  // )}
                  classCountValue={["h2", "white"].join(" ")}
                  delay={0.3}
                  classCountSpan={["h4", "white"].join(" ")}
                  classCountSpanLeft={["h4", "white"].join(" ")}
                  decimalCount={1}
                  underText={getRightContent(
                    rtlLanguage,
                    pageContent.section3.lable1.underText
                  )}
                  classUnderText={["bold white", "body-l"].join(" ")}
                />
              </div>
              <div className={styles.infoLabel}>
                <img className={styles.labelIcon} src={labelIcon2} alt="" />
                <Count
                  countValue={pageContent.section3.label2.number}
                  countSpan={getRightContent(rtlLanguage, pageContent.section3.label2.suffix)}
                  countSpanLeft={getRightContent(
                    rtlLanguage,
                    pageContent.section3.label2.prefix
                  )}
                  classCountValue={["h2", "white"].join(" ")}
                  delay={0.3}
                  classCountSpan={["h4", "white"].join(" ")}
                  classCountSpanLeft={["h4", "white"].join(" ")}
                  decimalCount={1}
                  underText={getRightContent(
                    rtlLanguage,
                    pageContent.section3.label2.underText
                  )}
                  classUnderText={["bold white", "body-l"].join(" ")}
                />
              </div>
            </div>
          </div>
          <div className={styles.coloredSectionSecondCol}>
            <div className={styles.labelsFlex2}>
              <div className={styles.infoLabel}>
                <img className={styles.labelIcon} src={labelIcon1} alt="" />
                <Count
                  countValue={pageContent.section3.lable1.number}
                  countSpan={getRightContent(rtlLanguage, pageContent.section3.lable1.suffix)}
                  // countSpanLeft={getRightContent(
                  //   rtlLanguage,
                  //   pageContent.section3.label2.prefix
                  // )}
                  classCountValue={["h2", "white"].join(" ")}
                  delay={0.3}
                  classCountSpan={["h4", "white"].join(" ")}
                  classCountSpanLeft={["h4", "white"].join(" ")}
                  decimalCount={1}
                  underText={getRightContent(
                    rtlLanguage,
                    pageContent.section3.lable1.underText
                  )}
                  classUnderText={["bold white", "body-l"].join(" ")}
                />
              </div>
              <div className={styles.infoLabel}>
                <img className={styles.labelIcon} src={labelIcon2} alt="" />
                <Count
                  countValue={pageContent.section3.label2.number}
                  countSpan={getRightContent(rtlLanguage, pageContent.section3.label2.suffix)}
                  countSpanLeft={getRightContent(
                    rtlLanguage,
                    pageContent.section3.label2.prefix
                  )}
                  classCountValue={["h2", "white"].join(" ")}
                  delay={0.3}
                  classCountSpan={["h4", "white"].join(" ")}
                  classCountSpanLeft={["h4", "white"].join(" ")}
                  decimalCount={1}
                  underText={getRightContent(
                    rtlLanguage,
                    pageContent.section3.label2.underText
                  )}
                  classUnderText={["bold white", "body-l"].join(" ")}
                />
              </div>
            </div>
            <img className={styles.sideImage} src={SideImage} alt="Financial Review" />
          </div>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <div className={`${styles.secondarySection} `}>
          <Paragraph
            fontClassName="subheading bold"
            classNames="color-aubergine-900"
          >{getRightContent(rtlLanguage, pageContent.section4.title)}</Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section4.paragraph1)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section4.paragraph2)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section4.paragraph3)}
          </Paragraph>
          <div className="spacer-16"></div>
          <Paragraph
            fontClassName="body-l"
            classNames="black"
          >
            {getRightContent(rtlLanguage, pageContent.section4.paragraph4)}
          </Paragraph>
        </div>
      </div>
      <div className="spacer-64"></div>
      <div className="container horizontal-padding">
        <Paragraph classNames="bold subheading color-aubergine-900">
          {getRightContent(rtlLanguage, ["To view the full Financial review chapter, please click here to download the PDF.", "لمشاهدة الفصل المالي الكامل، يرجى النقر هنا لتحميل الملف الإلكتروني."
          ])}
        </Paragraph>
        <div className="spacer-16"></div>
        <DownloadButton
          text={["Download PDF", "تحميل الملف"]}
          link="./pdf/Financial_review.pdf"
        />
      </div>
      <div className="spacer-64"></div>
    </div>
  )
}

export default FinancialReview