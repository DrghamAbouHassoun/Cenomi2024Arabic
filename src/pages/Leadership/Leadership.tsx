import { Cover } from "../../components/Cover/Cover"
import Tabs from "../../components/Tabs/Tabs"
import content from "../../content/content"
import useAppStore from "../../store"
import { getRightContent } from "../../ts/util"
import { CEO } from "./CEO/CEO"
import { Chairman } from "./Chairman/Chairman"

import coverImage from "./images/cover.jpg"

const pageContent = content.pages.Leadership;

export const Leadership = () => {
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
            <Chairman />
          </>,
          <>
            <div className="spacer-64"></div>
            <CEO />
          </>,
        ]}
      />
    </div>
  )
}
