import React from "react";
import styles from "./Skills.module.css";
import {HeaderOfBlock} from "../../Other/HeaderOfBlock/HeaderOfBlock";
import {Skill} from "./Skill/Skill";
import reactIcon from "../../../assets/icons/icons8-react-native.svg";
import reduxIcon from "../../../assets/icons/redux_4691205.png"
import htmlIcon from "../../../assets/icons/iconfinder_10-html5_104494.ico"
import cssIcon from "../../../assets/icons/css-3-logo.svg"
import javascriptIcon from "../../../assets/icons/iconfinder_js_282802.ico"


const Skills = () => {
    return (
        <div className={styles.container}>
            <HeaderOfBlock headerText={"Мои навыки"}/>
            <div className={styles.middleContainer}>
                <div className={styles.elements}>
                    <Skill icon={reactIcon} skillName={"React JS"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
                    <Skill icon={reduxIcon} skillName={"Redux"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
                    <Skill icon={htmlIcon} skillName={"HTML"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
                    <Skill icon={cssIcon} skillName={"CSS"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
                    <Skill icon={javascriptIcon} skillName={"JavaScript"} skillDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
                </div>
            </div>

        </div>
    )
}

export default Skills;