import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
    return (<div className={styles.aboutMe} >
        <div className={styles.container}>
            <div className={styles.greeting} >
                <span>Привет,</span>
                <span> меня зовут Иван Иванов</span>
                <span>я frontend developer</span>
            </div>
            <div className={styles.photo}>
                <img src="" alt=""/>
            </div>
        </div>
    </div>)
}

export default AboutMe;