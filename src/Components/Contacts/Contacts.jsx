import React from "react";
import styles from "./Contact.module.css";
import {Field} from "redux-form";

const Contacts = () => {
    return <div className={styles.contacts}>
            <div className={styles.container}>
                <div className={styles.contactHeader}>Контакты</div>
                <form className={styles.formFields}>
                    <div className={styles.contactInputFields}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"/>
                    </div>
                        <button>Click</button>
                </form>
            </div>
        </div>
}

export default Contacts;