import { Navbar } from "../components/navbar/Navbar";
import Title from "../assets/Projetos.svg"
import Atention from "../assets/emBreeve.svg"
import Styles from "../pages/works.module.css"

export function Works(){
    return(
        <>
        <div className={Styles.background}>
            <Navbar/>
            <div className={Styles.imgTitle}>
            <img src={Title} alt="titulo projetos"/>   
            </div>
            <div className={Styles.imgAtention}>
            <img src={Atention} alt="titulo projetos"/>   
            </div>
        </div>
        </>
        
    )
}