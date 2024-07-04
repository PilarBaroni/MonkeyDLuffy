"use client";
import Image from "next/image";
import styles from "./MisIntereses.module.css";
import { useState } from "react";
import Carne from "../../../../public/customers/Carrousel/Comer.jpg";
import Hermanos from "../../../../public/customers/Carrousel/Hermanos.jpg";
import Pelear from "../../../../public/customers/Carrousel/Pelea.jpg";
import OnePiece from "../../../../public/customers/Carrousel/OnePiece.jpg";
import ReyPirata from "../../../../public/customers/Carrousel/ReyPirata.jpg";
import { LilitaOne, margarine, monserrat } from "../Fonts/fonts";

export const MisIntereses = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: Carne, name: "Comer" },
        { src: Hermanos, name: "Hermanos" },
        { src: Pelear, name: "Pelear" },
        { src: OnePiece, name: "Encontrar el One Piece" },
        { src: ReyPirata, name: "Ser Rey Pirata" },
    ];
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={styles.carrousel}>
            <div className={`${LilitaOne.className} ${styles.titulo}`}>Mis Intereses</div>
            <div className={`${monserrat.className} ${styles.grande}`} style={{ transform: `translateX(-${currentIndex * 100 / images.length}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imgContainer}>
                        <div className={styles.imgName}>{image.name}</div>
                        <Image src={image.src} alt={image.name} className={styles.img} />
                    </div>
                ))}
            </div>
            <div className={styles.puntos}>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.punto} ${currentIndex === index ? styles.activo : ''}`}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};