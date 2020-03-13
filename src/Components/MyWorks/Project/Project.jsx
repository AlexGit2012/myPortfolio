import styles from "./Project.module.css";
import React from "react";
import Fade from 'react-reveal/Fade';


export const Project = (props) => {
    return <Fade>
        <div className={styles.myWorkElement}>
            <div className={styles.workImg}>
                <a className={styles.myWorkButton} href={props.projectPath}>Смотреть проект</a>
                <a className={styles.myWorkButton} href={props.codePath}>Просмотр кода</a>
            </div>
            <div className={styles.workDescription}>
                <div className={styles.workDescriptionElement}>
                    <div className={styles.workDescriptionName}>{props.projectName}</div>
                    <div className={styles.workDescriptionText}>{props.projectDescription}</div>
                </div>
            </div>
        </div>
    </Fade>
}
