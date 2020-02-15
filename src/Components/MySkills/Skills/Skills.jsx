import React from "react";
import styles from "./Skills.module.css";
import {HeaderOfBlock} from "../../Other/HeaderOfBlock/HeaderOfBlock";
import {Skill} from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={styles.container}>
            <HeaderOfBlock headerText={"Мои навыки"}/>
            <div className={styles.middleContainer}>
                <div className={styles.elements}>
                    <Skill skillName={"React JS"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio."}/>
                    <Skill skillName={"HTML & CSS"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio."}/>
                    <Skill skillName={"JavaScript"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Sed arcu metus, scelerisque at nisi eget, hendrerit commodo odio."}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;