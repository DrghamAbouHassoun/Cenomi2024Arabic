import { type ReactNode, useState } from "react";
import styles from "./Accordion.module.css";
import { AccordionHeader } from "./AccordionHeader/AccordionHeader";
import useWindowSize from "../../hooks/useWindowSize";
import {
  getDelayedIndexBasedAnimationTime,
  getVisibleSensorAnimation,
} from "../../ts/util";
import { useInView } from "react-intersection-observer";


interface AccordionItemI {
  title: string;
  content: ReactNode;
 
}
interface Props {
  items: AccordionItemI[];
   imgHeader:string[];
   addCaret?:boolean;
}
export const Accordion = ({ items, imgHeader, addCaret}: Props) => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const windowWidth = useWindowSize();

  const handleActiveAccordion = (index: number) => {
    if (activeIndex === index) return setActiveIndex(null);
    setActiveIndex(index);
  };
  return (
    <div className={[styles.container, "colorText"].join(" ")}>
      {items.map((item, index) => {
        const { ref, inView } = useInView();
        return (
          <div
            ref={ref}
            style={getVisibleSensorAnimation(
              inView,
              `fade-in-40px 0.6s ${getDelayedIndexBasedAnimationTime(
                windowWidth,
                index,
                0.05
              )}s backwards`
            )}
            className={styles.singleAccordion}
            key={index}
            // onMouseEnter={() => handleActiveAccordion(index)}
            // onMouseLeave={() => handleActiveAccordion(-1)}
          >
            <AccordionHeader
              img={imgHeader[index]}
              addCaret={addCaret}
              // titleClassNames={titleClassNames}
              active={index === activeIndex}
              title={item.title}
              handlePress={() => handleActiveAccordion(index)}
            />
            <div
              className={[
                styles.singleAccordionContent,
                activeIndex === index ? styles.active : "",
                "body-l",
              ].join(" ")}
            >
              <div className={styles.contentBackground}></div>
              {item.content}
            </div>            
          </div>
        );
      })}
    </div>
  );
};
