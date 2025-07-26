import type {  ReactNode } from "react";
import styles from "./AnimatedText.module.css";
import { useInView } from "react-intersection-observer";
import { getVisibleSensorAnimation } from "../../ts/util";

interface Props{
    children: ReactNode;
    delay?:number;
    classNameContainer?:string;
}
const AnimatedText = ({children, delay = 0, classNameContainer = ""}: Props) => {
    const {ref, inView} = useInView()
  return (
    <div ref={ref} style={getVisibleSensorAnimation(inView, `drawText .9s ${delay}s ease forwards`)} className={[styles.animatedText, classNameContainer].join(" ")}>
        {children}
    </div>
  )
}

export default AnimatedText