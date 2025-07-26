import { useEffect, useRef, useState } from 'react';
import styles from "./LinearAnimation.module.css";

const LinearAnimation = () => {
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return; // تحقق إذا ref موجود

      const rect = lineRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    setTimeout(() => handleScroll(), 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  
      <div className={styles.lineContainer} ref={lineRef}>
        <div className={`${styles.line} ${isVisible ? styles.grow : ''}`}></div>
      </div> 
  );
};

export default LinearAnimation;
