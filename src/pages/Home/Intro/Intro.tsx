import VideoBackground from "../VideoBackground/VideoBackground"
import styles from "./Intro.module.css";
import logoImage from "../../../components/Logo/images/logo.svg"
import content from "../../../content/content";
import useAppStore from "../../../store";
import { getRightContent } from "../../../ts/util";
import Paragraph from "../../../components/Paragraph/Paragraph";
import useWindowSize from "../../../hooks/useWindowSize";
import AnimatedText from "../../../components/AnimatedText/AnimatedText";

const pageContent = content.pages.Home;
export const Intro = () => {
    const rtlLanguage = useAppStore(s=>s.rtlLanguage);
    const windowWidth = useWindowSize()
  return (
    <div className={styles.container}>
        <VideoBackground />
        <div className={styles.itemsWrapper}>
            <img src={logoImage} className={styles.logo} alt="" />
            <div className={styles.textContainer}>
                {getRightContent(rtlLanguage, pageContent.title).map((item:string, index:number) => (
                    // <Paragraph fontClassName={windowWidth < 768 ? "h3" :"display"} classNames="white" key={index} delay={`${index*0.3 + 1}s`}>{item}</Paragraph>
                    <AnimatedText delay={index*0.9 + 1.5} classNameContainer={[(windowWidth < 768 ? "h3" :"display"), ""].join(" ")} key={index}>{item}</AnimatedText>
                ))}
            </div>
            <Paragraph delay="3.9s" classNames="white bold" fontClassName={windowWidth < 768 ? "subheading":"headline"}>{getRightContent(rtlLanguage, content.general.annualReport)}</Paragraph>
        </div>
    </div>
  )
}
