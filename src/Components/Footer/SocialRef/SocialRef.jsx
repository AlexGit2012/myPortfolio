import React from "react";
import styles from "./Social.module.css"

export const SocialRef = (props) => {
    return <div className={styles.socialRefElement}>
        <a href={props.socialRef}>
            <img className={styles.socialRefIcon} src={props.socialRefImage} alt=""/>
        </a>
    </div>
}