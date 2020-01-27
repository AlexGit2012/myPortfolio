import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return <div className={styles.aboutMe} >
        <div className={styles.container}>
            <div>Иван Иванов</div>
            <div className={styles.socialRefBar}>
                <div className={styles.socialRefElement}></div>
                <div className={styles.socialRefElement}></div>
                <div className={styles.socialRefElement}></div>
                <div className={styles.socialRefElement}></div>
            </div>
            <div>@2020. Все права защищены</div>
        </div>
    </div>
}

export default Footer;