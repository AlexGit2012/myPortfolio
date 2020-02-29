import React from "react";
import styles from "./Footer.module.css";
import {SocialRef} from "./SocialRef/SocialRef";
import githubIcon from "../../assets/icons/github.svg"
import linkedinIcon from "../../assets/icons/linkedin.svg"
import skypeIcon from "../../assets/icons/skype.svg"
import telegramIcon from "../../assets/icons/telegram.svg"
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";

const Footer = () => {
    return <div className={styles.aboutMe} >
        <div className={styles.container}>
            <HeaderOfBlock headerText={"Алексей Каравайчик"}/>
{/*            <div>Alexey Karavaychik</div>*/}
            <div className={styles.socialRefBar}>
                <SocialRef socialRefImage={linkedinIcon} socialRef={"https://www.linkedin.com/in/alexey-karavaychik-73a326174/"}/>
                <SocialRef socialRefImage={githubIcon} socialRef={"https://github.com/AlexGit2012"}/>
                <SocialRef socialRefImage={telegramIcon} socialRef={"http://t.me/AlexeyKaravaychik"}/>
                <SocialRef socialRefImage={skypeIcon} socialRef={"skype:alexey.karavaychik.wm"}/>
            </div>
            <div>©2020. Все права защищены</div>
        </div>
    </div>
}

export default Footer;