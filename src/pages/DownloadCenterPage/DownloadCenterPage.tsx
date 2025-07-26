import { Cover } from "../../components/Cover/Cover";
import DownloadCenter from "../../components/DownloadCenter/DownloadCenter";
import content from "../../content/content";
import useAppStore from "../../store";
import { getRightContent } from "../../ts/util"

import coverImage from "./images/cover.jpg"

const pageContent = content.downloadCenter

export const DownloadCenterPage = () => {
  const rtlLanguage = useAppStore(s=>s.rtlLanguage);
  return (
    <div>
       <Cover image={coverImage} title={getRightContent(rtlLanguage, pageContent.title)} subtitle={getRightContent(rtlLanguage, pageContent.topText)} />
           <div className="container horizontal-padding">
               <div className="spacer-64"></div>

               <DownloadCenter />

               <div className="spacer-64"></div>
               <div className="spacer-32"></div>
    </div>
    </div>
  )
}
