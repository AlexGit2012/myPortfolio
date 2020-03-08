import React from "react";
import styles from "./Contact.module.css";
import {Field} from "redux-form";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";
import Fade from 'react-reveal/Fade';


const Contacts = () => {
    return <div className={styles.contacts} id={"contacts"}>
        <div className={styles.container}>
            <HeaderOfBlock headerText="Контакты"/>
            <Fade left>
                <form className={styles.formFields}>
                    <div className={styles.contactInputFields}>
                        <input type="text" placeholder="Имя" className={styles.inputArea}/>
                        <input type="email" placeholder="E-mail" className={styles.inputArea}/>
                        <textarea name="" id="" cols="30" rows="10"
                                  placeholder="Сообщение"
                                  className={styles.messageArea}/>
                    </div>
                    <button className={styles.formButton}>Отправить</button>
                </form>
            </Fade>
        </div>
    </div>
}

export default Contacts;