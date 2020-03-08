import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (<div className={styles.aboutMe} id={"aboutMe"} >
        <div className={styles.container}>
            <div className={styles.greeting} >
                <span>Привет,</span>
                <span>Я Алексей <span>Каравайчик</span></span>
                <h1>я front-end разработчик</h1>
            </div>
            <div className={styles.photoWrapper}>
                <div className={styles.photo}>
                    <div className={styles.image} />
                </div>
            </div>
        </div>
    </div>)
}

export default AboutMe;