import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (<div className={styles.aboutMe} >
        <div className={styles.container}>
            <div className={styles.greeting} >
                <span>Привет,</span>
                <span>Я Алексей</span>
                <span>Каравайчик</span>
                <h1>я front-end разработчик</h1>
            </div>
            <div className={styles.photoWrapper}>
                <div className={styles.photo}>
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    </div>)
}

export default AboutMe;