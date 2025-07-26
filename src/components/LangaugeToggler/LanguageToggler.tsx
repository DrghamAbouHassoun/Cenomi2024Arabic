import useAppStore from "../../store";
import styles from "./LanguageToggler.module.css";
const LanguageToggler = () => {
  const { toggleLanguage, rtlLanguage, menuOpen, toggleMenu } = useAppStore();
  return (
    <div
      className={[styles.languageToggler, "body-l bold"].join(" ")}
      onClick={() => {toggleLanguage();
      if(menuOpen) toggleMenu() }}
    >
      {rtlLanguage ? "English" : "العربية"}
    </div>
  );
};

export default LanguageToggler;
