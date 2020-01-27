import React from "react";
import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <div className={styles.container}>
            <div className={styles.middleContainer}>
                <div className={styles.mySkillsHeader}>Мои навыки</div>
                <div className={styles.elements}>
                    <div className={styles.element}>
                        <div className={styles.skillContainer}>
                            <div className={styles.skillImg}></div>
                            <br/>
                            React JS
                            <br/>
                            <br/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio.</span>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <div className={styles.skillContainer}>
                            <div className={styles.skillImg}></div>
                            <br/>
                            HTML & CSS
                            <br/>
                            <br/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio.</span>
                        </div>
                    </div>
                    <div className={styles.element}>
                        <div className={styles.skillContainer}>
                            <div className={styles.skillImg}></div>
                            <br/>
                            JavaScript
                            <br/>
                            <br/>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio.</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills;