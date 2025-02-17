import { Button } from "../button/Button";
import styles from './navbar.module.css'
import Logo from '../../assets/logo.svg'
import Menu from '../../assets/menu.svg'
import X from '../../assets/x.svg'
import { useState } from "react";

export function Navbar(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return(
<nav className={`${styles.navbar} ${isOpen ? styles.isOpen : ''}`}>
    <div className={styles.geral}>
        <img src={Logo}/>

        <div className={styles.geralButton}>
        <Button route="sobre" title="Sobre mim"/>
        <Button route="projetos" title="Projetos"/>
        <Button route="contato" title="Contato"/>
        </div>

        <button className={`${styles.mobileButton} ${isOpen ? styles.isOpen : ''}`}onClick={toggleMenu} >
            <img src={Menu} className={`${styles.imgMobileButton} ${isOpen ? styles.isOpen : ''}`}/>
            {isOpen && (
                <img src={X}/>
            )}
        </button>
    </div>
        {isOpen && (
<div className={`${styles.mobileGerButton} ${isOpen ? styles.isOpen : ''}`}>
        <Button route="sobre" title="Sobre mim"/>
        <Button route="projetos" title="Projetos"/>
        <Button route="contato" title="Contato"/>
</div>
   )}
</nav>

    );
}