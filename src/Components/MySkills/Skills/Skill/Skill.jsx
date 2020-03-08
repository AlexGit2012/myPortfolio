import styles from "./Skil.module.css";
import React from "react";
import Fade from 'react-reveal/Fade';


export const Skill = (props) => {
    return <Fade>
        <div className={styles.element}>
            <div className={styles.skillContainer}>
                <div className={styles.skillImg}>
                    <img src={props.icon} width="45px" alt="Skill icon"/>
                </div>
                <h3 className={styles.titleText}>{props.skillName}</h3>
                <br/>
                <br/>
                <span>{props.skillDescription}</span>
            </div>
        </div>
    </Fade>
}