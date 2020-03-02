import React from "react";
import styles from "./Contact.module.css";
import {Field} from "redux-form";
import {HeaderOfBlock} from "../Other/HeaderOfBlock/HeaderOfBlock";

const Contacts = () => {
    return <div className={styles.contacts}>
            <div className={styles.container}>
                <HeaderOfBlock headerText="Контакты"/>
                <form className={styles.formFields}>
                    <div className={styles.contactInputFields}>
                        <input type="text" placeholder="Имя" className={styles.inputArea}/>
                        <input type="email"placeholder="E-mail" className={styles.inputArea}/>
                        <textarea name="" id="" cols="30" rows="10"
                                  placeholder="Сообщение"
                                  className={styles.messageArea}/>
                    </div>
                        <button className={styles.formButton}>Отправить</button>
                </form>
            </div>
        </div>
}

export default Contacts;