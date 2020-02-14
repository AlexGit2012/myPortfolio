import styles from "./Skil.module.css";
import React from "react";

export const Skill = (props) => {
    return <div className={styles.element}>
        <div className={styles.skillContainer}>
            <div className={styles.skillImg}></div>
            <br/>
            {props.skillName}
            <br/>
            <br/>
            <span>{props.skillDescription}</span>
        </div>
    </div>
}