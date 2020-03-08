import React from "react";
import styles from "./NavMenu.module.css";
import {Link, animateScroll as scroll} from "react-scroll"

const Footer = () => {
    return (
        <div className={styles.nav}>
            <Link duration={"400ms"} smooth={true} className={styles.link} to="aboutMe">Главная</Link>
            <Link duration={"400ms"} smooth={true} className={styles.link} to="mySkills">Навыки</Link>
            <Link duration={"500ms"} smooth={true} className={styles.link} to="myWorks">Работы</Link>
            <Link duration={"600ms"} smooth={true} className={styles.link} to="contacts">Контакты</Link>
        </div>
    )
}

export default Footer;