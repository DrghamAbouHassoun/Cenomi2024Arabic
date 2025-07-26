import styles from "./VideoBackground.module.css";
import videoFile from "../../../assets/videos/intro.webm"

const VideoBackground = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoFile} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} />
    </div>
  );
};

export default VideoBackground;
