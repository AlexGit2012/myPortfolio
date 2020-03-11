import React from "react";
import styles from "./Header.module.css";
import NavMenu from "./NavMenu/NavMenu";
import Menu from "../Other/Menu/Menu";
import Fade from 'react-reveal/Fade';

const Header = () => {
    return <div>
        <div className={styles.menuBtn}>
            <Menu/>
            <Fade duration={500} top={true}>
                <div className={styles.hiddenContainer}>
                    <div className={styles.header}>
                        <div className={styles.container}>
                            <NavMenu/>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    </div>


}

export default Header;