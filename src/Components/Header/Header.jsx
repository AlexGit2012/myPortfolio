import React from "react";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu/NavMenu";
import Menu from "../Other/Menu/Menu";

const Header = () => {
    return <div>
        <div className={styles.header}>
            <div className={styles.container}>
                <NavMenu/>
            </div>
        </div>
        <Menu className={styles.menuBtn}/>
    </div>



}

export default Header;