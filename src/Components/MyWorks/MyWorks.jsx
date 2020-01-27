import React from "react";
import styles from "./MyWorks.module.css";

const MyWorks = () => {
    return <div className={styles.myWorks} >
        <div className={styles.myWorksHeader}>Мои работы</div>
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