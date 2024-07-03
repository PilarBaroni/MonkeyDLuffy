import Image from "next/image";
import { monserrat } from "../Fonts/fonts";
import styles from "./cabecera.module.css";
import luffyCabecera from "../../../../public/customers/luffyCabecera.gif";

export const Cabecera = () => {
  return (
    <div className={`${monserrat.className} antialiased ${styles.container}`}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Monkey D. Luffy <br />
          <span className={styles.subtitle}>
            Capitán y fundador de los Piratas de Sombrero de Paja
          </span>
        </h1>
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
