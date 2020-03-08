import React from "react";
import styles from "./MySkills.module.css";
import Skills from "./Skills/Skills";

const MySkills = () => {
    return <div className={styles.mySkills} id={"mySkills"} >
        <Skills />
    </div>
}

export default MySkills;