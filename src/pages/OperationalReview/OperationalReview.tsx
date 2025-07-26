import { Cover } from "../../components/Cover/Cover";
import Tabs from "../../components/Tabs/Tabs";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util";
import { ECommerce } from "./ECommerce/ECommerce";
import { FoodAndBeverage } from "./FoodAndBeverage/FoodAndBeverage";
import { InternationalRetail } from "./InternationalRetail/InternationalRetail";
import { KingdomSaudi } from "./KingdomSaudi/KingdomSaudi";
// import styles from "./OperationalReview.module.css"
import coverImage from "./images/cover.jpg"

const pageContent = content.pages.OperationalReview

export const OperationalReview = () => {
  const rtlLanguage = useAppStore(s=>s.rtlLanguage);
  return (
    <div>
 <Cover image={coverImage} title={getRightContent(rtlLanguage, pageContent.title)} subtitle={getRightContent(rtlLanguage, pageContent.subtitle)} />

 <Tabs
        // contentClassNames={["", "borderBottomWhite", "", "borderBottomWhite"]}
        labels={getRightContent(rtlLanguage, pageContent.tabLabels)}  
              
        contents={[
          <>
            <div className="spacer-64"></div>
            <KingdomSaudi />
          </>,
          <>
            <div className="spacer-64"></div>
            <InternationalRetail />
          </>,
          <>
            <div className="spacer-64"></div>
            <FoodAndBeverage />
          </>,
          <>
            <div className="spacer-64"></div>
            <ECommerce />
          </>,
        ]}
      />
    </div>
  )
}
