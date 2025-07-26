import content from '../../content/content';
import useAppStore from '../../store';
import { getRightContent } from '../../ts/util';
import styles from './MenuToggle.module.css';

const MenuToggle = () => {
  const { menuOpen, toggleMenu,rtlLanguage } = useAppStore()

  return (
    <div className={styles.menuButtonWrapper} onClick={toggleMenu}>
      <p className={[styles.menu,'body-l'].join(' ')}>{getRightContent(rtlLanguage,content.general.menu)}</p>
      <button className={`${styles.menuButton} ${menuOpen ? styles.open : ''}`}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </div>
  );
};

export default MenuToggle;
