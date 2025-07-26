import { Cover } from "../../components/Cover/Cover"
import Tabs from "../../components/Tabs/Tabs";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util"
import { BusinessModel } from "./BusinessModel/BusinessModel";
import FinancialReview from "./FinancialReview/FinancialReview";

import coverImage from "./images/cover.jpg"
import KPI from "./KPI/KPI";

const pageContent = content.pages.StrategicReview;

export const StrategicReview = () => {

  const rtlLanguage = useAppStore(s => s.rtlLanguage);
  return (
    <div>
      <Cover
        image={coverImage}
        title={getRightContent(rtlLanguage, pageContent.title)}
        subtitle={getRightContent(rtlLanguage, pageContent.subtitle)}
      />
      <Tabs
        // contentClassNames={["", "borderBottomWhite", "", "borderBottomWhite"]}
        labels={getRightContent(rtlLanguage, pageContent.tabLabels)}
        contents={[
          <>
            <div className="spacer-64"></div>
            <KPI />
          </>,
          <>
            <div className="spacer-64"></div>
            <BusinessModel />
          </>,
          <>
            <div className="spacer-64"></div>
            <FinancialReview />
          </>
        ]}
      />
    </div>
  )
}
