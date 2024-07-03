import Image from "next/image";
import Luffy from "../../../../public/customers/LuffySobreMi.jpg";
import styles from "./SobreMi.module.css";
import { margarine } from "../Fonts/fonts";
import Link from "next/link";

export const SobreMi = () => {
  return (
    <div className={`${margarine.className} antialiased ${styles.container}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={Luffy}
          alt="Luffy"
          quality={100}
          priority
          className={styles.image}
        />
        <div className={styles.overlay}>
          <h1 className={styles.title}>Sobre mí...</h1>
        </div>
        <p className={styles.subtitle}>
          ¡Hola! Soy Monkey D. Luffy, un personaje de ficción y el protagonista
          principal del manga One Piece, creado por Eiichirō Oda. Me apodan
          'Sombrero de Paja' debido a mi característico sombrero que llevo desde
          niño. Mi cuerpo está hecho de goma porque comí la Fruta Goma Goma. ¡Es
          genial tener la oportunidad de presentarme!{" "}
        </p>
        <div className={styles.buttonContainer}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://onepiece.fandom.com/es/wiki/Monkey_D._Luffy"
          >
            <p className={styles.button}>Conocer más</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
