import { useInView } from "react-intersection-observer";
import useWindowSize from "../../hooks/useWindowSize";
import useAppStore from "../../store";
import {
  getDelayedIndexBasedAnimationTime,
  getRightContent,
  getVisibleSensorAnimation,
  setAdditionalClasses,
} from "../../ts/util";
import styles from "./CheckBoxList2.module.css";

interface Props {
  list: any[];
  chapter: number;
  handleOnChange: (checkedChapter: number, index: number) => void;
  checkBoxList: any[];
  mainTitle?:boolean;
}
function CheckBoxList2({ list, chapter, handleOnChange, checkBoxList, mainTitle }: Props) {
  const windowWidth = useWindowSize();
  const rtlLanguage = useAppStore((s) => s.rtlLanguage);
  return (
    <ul className={[styles.list].join(" ")}>
      {list.map((listItem, index) => {
        const { ref, inView: isVisible } = useInView();
        return (
          <li
            ref={ref}
            className={`${[
              styles.listItem,
              (list.length > 1   || mainTitle) ? styles.titleSection : "",
            ].join(" ")} ${
              index === 0 && list.length > 1 || mainTitle
                ? "subheading"
                : "body-m colorText"
            } ${setAdditionalClasses(["display-none"], [listItem.hide])}`}
            style={getVisibleSensorAnimation(
              isVisible,
              `fade-in-40px 1s ${getDelayedIndexBasedAnimationTime(
                windowWidth,
                index,
                0.1
              )}s ease-in-out backwards`
            )}
          >
            <input
              id={`custom-checkbox-${chapter}-${index}`}
              type="checkbox"
              value={listItem.value}
              checked={checkBoxList && checkBoxList[index]}
              onChange={() => handleOnChange(chapter, index)}
              className={[styles.checkboxInput, styles.regularCheckBox].join(
                " "
              )}
            />
            <label
              className={styles.listItemLabel}
              htmlFor={`custom-checkbox-${chapter}-${index}`}
            >
              {getRightContent(rtlLanguage, listItem.label)}
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default CheckBoxList2;
