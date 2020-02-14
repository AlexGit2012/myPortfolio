import React from "react";
import styles from "./HeaderOfBlock.module.css"

export const HeaderOfBlock = (props) => {
    return <div>
        <div className={styles.myHeader}>{props.headerText}</div>
        <div className={styles.decorationLineWrapper}>
            <div className={styles.decorationLine}/>
        </div>
    </div>
}