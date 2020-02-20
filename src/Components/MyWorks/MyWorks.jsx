import React from "react";
import styles from "./MyWorks.module.css";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";
import {Project} from "./Project/Project";

const MyWorks = () => {
    return <div className={styles.myWorks} >
        <HeaderOfBlock headerText={"Мои работы"} />
        <div className={styles.container}>
            <Project/>
            <Project/>
        </div>
    </div>
}

export default MyWorks;