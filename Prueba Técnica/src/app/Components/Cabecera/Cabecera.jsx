import Image from "next/image";
import { LilitaOne, AbrilFatface } from "../Fonts/fonts";
import styles from "./cabecera.module.css";
import luffyCabecera from "../Cabecera/LuffyCabecera.gif";
export const Cabecera = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <h1 className={`${LilitaOne.className} ${styles.title}`}>
          Monkey <span>D</span> Luffy <br />
          <span className={`${AbrilFatface.className} ${styles.subtitle}`}>
            Capitán y fundador de los Piratas de Sombrero de Paja
          </span>
        </h1>
        <div className={styles.arrowDown}></div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={luffyCabecera}
          alt="LuffyCabecera"
          quality={100}
          priority
          className={styles.image}
        />
      </div>
    </div>
  );
};
