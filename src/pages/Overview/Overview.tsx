import { Cover } from "../../components/Cover/Cover"
import Tabs from "../../components/Tabs/Tabs"
import content from "../../content/content"
import useAppStore from "../../store"
import { getRightContent } from "../../ts/util"
import { AtAGlance } from "./AtAGlance/AtAGlance"
import { BrandPortfolio } from "./BrandPortfolio/BrandPortfolio"
import { GeographicFootprint } from "./GeographicFootprint/GeographicFootprint"
import { InvestmentCase } from "./InvestmentCase/InvestmentCase"

import coverImage from "./images/cover.jpg"

const pageContent = content.pages.Overview;

export const Overview = () => {
  const rtlLanguage = useAppStore(s => s.rtlLanguage)
  return (
    <div>
      <Cover image={coverImage} title={getRightContent(rtlLanguage, pageContent.title)} subtitle={getRightContent(rtlLanguage, pageContent.subtitle)} />
      <Tabs
        // contentClassNames={["", "borderBottomWhite", "", "borderBottomWhite"]}
        labels={getRightContent(rtlLanguage, pageContent.tabLabels)}
        contents={[
          <>
            <div className="spacer-64"></div>
            <AtAGlance />
          </>,
          <>
            <div className="spacer-64"></div>
            <GeographicFootprint />
          </>,
          <>
            <div className="spacer-64"></div>
            <BrandPortfolio />
          </>,
          <>
            <div className="spacer-64"></div>
            <InvestmentCase />
          </>,
        ]}
      />
    </div>
  )
}
