import React from 'react';
import styles from './App.module.css';
import AboutMe from "./Components/AboutMe/AboutMe";
import MySkills from "./Components/MySkills/MySkills";
import MyWorks from "./Components/MyWorks/MyWorks";
import Distance from "./Components/Distance/Distance";
import Contacts from "./Components/Contacts/Contacts";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Slogan from "./Components/Slogan/Slogan";

function App() {
    return (
        <div className={styles.App}>
            <div className="portfolio">
                <Header />
                <AboutMe />
                <MySkills />
                <MyWorks />
                <Slogan />
{/*                <Distance />  Удаленный вариант работы*/}
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;
