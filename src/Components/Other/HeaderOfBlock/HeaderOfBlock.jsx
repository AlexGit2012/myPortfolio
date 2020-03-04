import React from "react";
import styles from "./HeaderOfBlock.module.css"
import Fade from 'react-reveal/Fade';


export const HeaderOfBlock = (props) => {
    return <Fade>
        <div className={styles.headerElement}>
        <div className={styles.myHeader}>{props.headerText}</div>
        <div className={styles.decorationLineWrapper}>
            <div className={styles.decorationLine}/>
        </div>
    </div>
    </Fade>
}