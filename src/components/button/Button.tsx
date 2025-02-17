import React, { useEffect, useState } from 'react';
import styles from './button.module.css';

interface ButtonProps {
    route: string;
    title: string;
}

export function Button({ route, title }: ButtonProps) {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        const element = document.getElementById(route);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const element = document.getElementById(route);
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsActive(entry.isIntersecting); 
            },
            { threshold: 0.1} // 
        );

        observer.observe(element); // Começa a observar a seção

        return () => {
            observer.disconnect(); // Limpa o observer ao desmontar o componente
        };
    }, [route]);

    return (
        <button
            onClick={handleClick}
            className={`${styles.button} ${isActive ? styles.active : ''}`} // Aplica a classe 'active' se a seção estiver visível
        >
            <div>
                <p className={`${styles.title} ${isActive ? styles.active : ''}`}>{title}</p>
            </div>
        </button>
    );
}
