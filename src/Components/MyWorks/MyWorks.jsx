import React from "react";
import styles from "./MyWorks.module.css";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";

const MyWorks = () => {
    return <div className={styles.myWorks} >
        <HeaderOfBlock headerText={"Мои работы"} />
        <div className={styles.container}>
            <div className={styles.myWorkElement}>
                <div className={styles.workImg}></div>
                <div className={styles.workDescription}>
                    <div className={styles.workDescriptionElement}>
                        <div className={styles.workDescriptionName}>Название проекта</div>
                        <div className={styles.workDescriptionText}>Краткое описание</div>
                    </div>
                </div>
            </div>
            <div className={styles.myWorkElement}>
                <div className={styles.workImg}></div>
                <div className={styles.workDescription}>
                    <div className={styles.workDescriptionElement}>
                        <div className={styles.workDescriptionName}>Название проекта</div>
                        <div className={styles.workDescriptionText}>Краткое описание</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default MyWorks;