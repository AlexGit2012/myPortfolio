import React from "react";
import styles from "./Slogan.module.css";

const Slogan = () => {
    return <div className={styles.slogan} >
        <div className={styles.hireMeSlogan}>Рассматриваю варианты удаленной работы</div>
        <button className={styles.hireButton}>Нанять меня</button>
    </div>
}

export default Slogan;