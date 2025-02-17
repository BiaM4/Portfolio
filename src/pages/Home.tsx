import { Navbar } from "../components/navbar/Navbar";
import Nome from "../assets/NomeCargo.svg"
import Myphoto from "../assets/myphoto.svg"
import Ola from "../assets/Olá, seja bem-vindo(a),.svg"
import Habilidades from "../assets/Minhas habilidades.svg"
import Atention from "../assets/emBreeve.svg"
import Title from "../assets/Projetos.svg"
import Contact from "../assets/Contact.svg"
import Seta from "../assets/seta.svg"
import LinkedIn from "../assets/Linkedin.svg"
import GitHub from "../assets/Github.svg"
import Mail from "../assets/Mail.svg"
import CV from "../assets/CV.svg"
import styles from "./home.module.css"
import {ButtonContact} from "../components/buttonContact/ButtonContact";

export function Home(){
    return(
        <div className={ styles.background}>
            <Navbar/>
            <div className={ styles.imgContainer}>
                <img src={Nome}alt="Imagem do nome" className={styles.imgName}/>
                <div>
                <img className={styles.imgSeta} src={Seta} alt="seta roxa para baixo" />
                </div>
            </div>
            
            <h1 id="sobre" className={styles.id} >seção</h1>
            <div className={styles.aboutGeral}>
                <img src={Myphoto} alt="minha foto" className={styles.profilePictur} />
                <div className={styles.about}>
                    <img className={styles.imgAbout}src={Ola} alt="" />
                    <p className={styles.text}>
                    Sou desenvolvedora front-end iniciante com formação em Análise e Desenvolvimento de Sistemas pela FATEC de Mogi das Cruzes. Tenho uma paixão por criar experiências digitais que sejam tanto funcionais quanto visualmente atraentes. Adoro unir programação e design, buscando sempre novas ferramentas e técnicas para melhorar minhas habilidades e entregar resultados de qualidade.
                    </p>
                    <p className={styles.text}>
                        Quando não estou programando, você pode me encontrar explorando novos restaurantes ou assistindo a filmes no cinema, essas atividades me ajudam a encontrar novas inspirações e a pensar fora da caixa. Estou sempre em busca de desafios que me permitam crescer e contribuir para experiências digitais que realmente façam a diferença na vida das pessoas.
                    </p>
                    <p className={styles.text}>
                    Estou animada para crescer como desenvolvedora e contribuir para a criação de interfaces que ofereçam uma experiência de usuário fluida e impactante.
                    </p>

                    <img className={styles.imgSkills} src={Habilidades} alt="" />
                    <p className={styles.text}>
                    Linguagens de programação: JavaScript;
                    </p>
                    <p className={styles.text}>
                    Tecnologias web: HTML5, CSS3 ;
                    </p>
                    <p className={styles.text}>
                    Frameworks, bibliotecas e ambientes de execução: React Native, React, Node.js ;
                    </p>
                    <p className={styles.text}>
                    Ferramentas: Git, GitHub, Microsoft Power BI,  Figma; 
                    </p>
                    <p className={styles.text}>
                    Metodologias: Scrum;
                    </p>
                </div>

            </div>
        
            <h1 id="projetos" className={styles.id} >seção</h1>
            <div className={styles.titleContainer} >
                <img className={styles.imgTitle} src={Title} alt="titulo projetos"/>   
                <div className={styles.atentionContainer}>
                <img className={styles.imgAtention} src={Atention} alt="titulo projetos"/>   
            </div>
            </div>
           

            <h1 id="contato" className={styles.id} >seção</h1>
            <div className={styles.titleContainer} >
                <img className={styles.imgContact} src={Contact} alt="titulo" />
                <div className={styles.imgCardContact}>
                    <ButtonContact title={"LinkedIn"} image={LinkedIn} link={"https://www.linkedin.com/in/beatriz-santos-marques-817138206/"}/>
                    <ButtonContact title={"GitHub"} image={GitHub} link={"https://github.com/BiaM4"}/>
                    <ButtonContact title={"E-mail"} image={Mail} link="bialebru12@gmail.com"/>
                    <ButtonContact title={"Currículo"} image={CV} file="/cv-beatriz-marques.pdf"/>
                </div>
                </div>
               

            
        </div>
        
    )
}