import React from "react";
import styles from "./MyWorks.module.css";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";
import {Project} from "./Project/Project";

const MyWorks = () => {
    return <div className={styles.myWorks} id={"myWorks"}>
        <HeaderOfBlock headerText={"Мои работы"}/>
        <div className={styles.container}>
            <Project
                projectPath={""}
                codePath={"https://github.com/AlexGit2012/social-network-react/tree/master/social-network-project"}
                projectName={"Simple social network"}
                projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
            <Project
                projectPath={""}
                codePath={"https://github.com/AlexGit2012/social-network-react/tree/master/social-network-project"}
                projectName={"Simple social network"}
                projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id lacinia purus."}/>
        </div>
    </div>
}

export default MyWorks;