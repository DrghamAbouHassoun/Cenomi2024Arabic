import type { ReactNode } from "react";
import { Accordion } from "../../../components/Accordion/Accordion";
import Paragraph from "../../../components/Paragraph/Paragraph";
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getRightContent } from "../../../ts/util";


import accHeader1 from "./images/headers_accordion/1.svg";
import accHeader2 from "./images/headers_accordion/2.svg";
import accHeader3 from "./images/headers_accordion/3.svg";
import accHeader4 from "./images/headers_accordion/4.svg";

import styles from "./BusinessModel.module.css"

const accHeaderImages = [accHeader1, accHeader2, accHeader3, accHeader4];

const pageContent = content.pages.BusinessModel;

export const BusinessModel = () => {
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  return (
    <div>
      <div className="container horizontal-padding">
        <Paragraph fontClassName="subheading" classNames="color-aubergine-900">
          {getRightContent(rtlLanguage, pageContent.pharagrapIntro)}
        </Paragraph>

        <div className="spacer-64"></div>
        <Accordion
          // addCaret
          imgHeader={accHeaderImages}
          items={pageContent.accordion.map((acc) => ({
            title: getRightContent(rtlLanguage, acc.title),
            content: getRightContent(rtlLanguage, acc.text).map(
              (item: ReactNode, indexAcc: number) => (
                <Paragraph  key={indexAcc} classNames={["white", styles.itemAccordion].join(" ")}>
                  {item}
                </Paragraph>
              )
            ),
          }))}
        />
        <div className="spacer-64"></div>
      </div>
    </div>
  );
};
