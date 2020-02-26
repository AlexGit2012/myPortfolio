import styles from "./Project.module.css";
import React from "react";

export const Project = (props) => {
    return <div className={styles.myWorkElement}>
        <div className={styles.workImg}>
            <button className={styles.myWorkButton}>Смотреть проект</button>
            <button className={styles.myWorkButton}>Просмотр кода</button>
        </div>
        <div className={styles.workDescription}>
            <div className={styles.workDescriptionElement}>
                <div className={styles.workDescriptionName}>{props.projectName}</div>
                <div className={styles.workDescriptionText}>{props.projectDescription}</div>
            </div>
        </div>
    </div>
}
