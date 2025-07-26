import { useState } from "react";
import styles from "./Marquee.module.css";

const Marquee = ({ images }: { images: string[] }) => {
  const [paused, setPaused] = useState(false);
  // Duplicate the image array
  const duplicatedImages = [...images, ...images];

  return (
    <div
      className={styles.marquee}
      onMouseDown={() => setPaused(true)}
      onMouseUp={() => setPaused(false)}
      onMouseLeave={() => setPaused(false)}
      // For touch devices you might want onTouchStart and onTouchEnd as well
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div
        className={[styles.marqueeInner, paused ? styles.paused : ""].join(" ")}
      >
        {duplicatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`award-${index}`}
            className={styles.awardImg}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
