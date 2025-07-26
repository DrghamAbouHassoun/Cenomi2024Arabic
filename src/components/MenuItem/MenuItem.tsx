import useWindowSize from "../../hooks/useWindowSize";
import styles from "./MenuItem.module.css";
interface Props {
  label: string;
  handleClick: () => void;
  smallerFont?: boolean;
  active?: boolean;
}
export const MenuItem = ({
  label,
  handleClick,
  smallerFont,
  active,
}: Props) => {
  const windowWidth = useWindowSize();
  const smallDevice = windowWidth < 400;
  return (
    <div
      className={[styles.container, active ? styles.active : ""].join(" ")}
      onClick={handleClick}
    >
      <div className={styles.border}></div>
      <div className={[styles.greenBackground].join(" ")}></div>
      <div className={styles.yellowBackground}>
        <p
          className={`${
            smallDevice
              ? "subheading"
              : smallerFont
              ? windowWidth > 1023 && windowWidth < 1200
                ? "body-l"
                : "subheading"
              : "h4"
          } ${active ? styles.active : ""} ${
            styles.label
          } bold text-center color-aubergine-900`}
        >
          {label}
        </p>
      </div>
    </div>
  );
};
