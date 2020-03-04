import React from "react";
import styles from "./Slogan.module.css";
import {Fade} from "react-reveal";

const Slogan = () => {
    return <div className={styles.slogan}>
        <Fade>
            <div className={styles.hireMeSlogan}>Рассматриваю варианты удаленной работы</div>
            <button className={styles.hireButton}>Нанять меня</button>
        </Fade>
    </div>
}

export default Slogan;