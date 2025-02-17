import { Navbar } from "../components/navbar/Navbar";

import Styles from "../pages/about.module.css"

export function About(){
    return(
        <>
        <div className={Styles.background}>
            <Navbar/>
            <h1>
            Sobre mim!
            </h1>
        </div>
        </>
        
    )
}