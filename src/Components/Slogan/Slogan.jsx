import React from "react";
import styles from "./Slogan.module.css";
import {Fade} from "react-reveal";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";

const Slogan = () => {
    return <div className={styles.slogan}>
        <Fade>
            <HeaderOfBlock headerText={"Рассматриваю варианты удаленной работы"}/>
            <a className={styles.hireButton}>Нанять меня</a>
        </Fade>
    </div>
}

export default Slogan;