import content from "../../content/content";
// import facebookIcon from "./images/social/facebook.svg";
// import instagramIcon from "./images/social/instagram.svg";
// import linkedinIcon from "./images/social/linkedin.svg";
// import twitterIcon from "./images/social/twitter.svg";
// import youtubeIcon from "./images/social/youtube.svg";
// import irIcon from "./images/social/ir.svg";
// import facebookIconWhite from "./images/social/facebook-white.svg";
// import instagramIconWhite from "./images/social/instagram-white.svg";
import linkedinIconWhite from "./images/social/linkedin-white.svg";
import twitterIconWhite from "./images/social/twitter-white.svg";
// import youtubeIconWhite from "./images/social/youtube-white.svg";
import irIconWhite from "./images/social/ir-white.svg";
import styles from "./SocialIcons.module.css";
import useAppStore from "../../store";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";
import useWindowSize from "../../hooks/useWindowSize";

// const socialIcons = [
//   irIcon,
//   facebookIcon,
//   twitterIcon,
//   youtubeIcon,
//   linkedinIcon,
//   instagramIcon,
// ];

const socialIconsWhite = [
  irIconWhite,
  // facebookIconWhite,
  twitterIconWhite,
  // youtubeIconWhite,
  linkedinIconWhite,
  // instagramIconWhite,
];

export default function SocialIcons({ whiteIcons }: { whiteIcons?: boolean }) {
  const { toggleIR, rtlLanguage } = useAppStore();
  const { ref, inView } = useInView();
  const windowWidth = useWindowSize()
  const smallDevice = windowWidth < 1024;
  return (
    <div
      className={styles.wrapper}
      ref={ref}
      style={getVisibleSensorAnimation(
        inView,
        `${smallDevice ? "fade-in-40px" : `move-from-${rtlLanguage ? "left" : "left"}`} 0.9s  backwards`
      )}
    >
      {content.general.socialIcons.map(
        (icon: { link?: string; modal?: boolean }, index: number) =>
          icon.modal ? (
            <div key={index} className={styles.iconWrapper} onClick={() => toggleIR()}>
              <img src={whiteIcons ? socialIconsWhite[index] : socialIconsWhite[index]} alt="" className={styles.icon} />
            </div>
          ) : (
            <a
              key={index}
              href={icon.link}
              rel="noopener noreferrer"
              target={"_blank"}
            // className={styles.iconWrapper}
            >
              <img
                src={whiteIcons ? socialIconsWhite[index] : socialIconsWhite[index]}
                alt=""
                className={[styles.icon].join(" ")}
                style={{ width: "16px", height: "16px"}}
              />
            </a>
          )
      )}
    </div>
  );
}
