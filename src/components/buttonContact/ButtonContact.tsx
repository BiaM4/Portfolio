import styles from './buttonContact.module.css';

interface ButtonProps {
    title: string;
    image: string;
    link?: string;
    file?: string
}

export function ButtonContact({ title, image, link, file }: ButtonProps) {
    const handleClick = () => {
        if (link && link.includes('@')) {
            // Se o link for um e-mail, abre diretamente o Gmail com o e-mail já setado
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${link}`;
            window.open(gmailLink, '_blank');
        } else if (file) {
            // Força o download do PDF
            const a = document.createElement("a");
            a.href = file;
            a.download = "cv-beatriz-marques.pdf"; 
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } else {
            // Se for qualquer outro link (rede social ou URL), abre diretamente
            window.open(link, '_blank');
        }
    };
    return (
        <button onClick={handleClick} className={styles.button}>
    <div>
        <img src={image} alt={title}/>
        <p className={styles.title}>{title}</p>
    </div>
</button>
    );
}
