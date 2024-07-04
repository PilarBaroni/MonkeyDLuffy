import { Suspense } from "react";
import { Cabecera } from "./Components/Cabecera/Cabecera";
import { Loading } from "./Components/Loading/Loading";
import styles from "./index.module.css";
import { SobreMi } from "./Components/Sobre mi/SobreMi";
import { Contacto } from "./Components/Contacto/Contacto";
import { MisIntereses } from "./Components/MisIntereses/MisIntereses";

export default function Home() {
  return (
    <main>
      <header className={styles.header} id="home">
        <Suspense fallback={<Loading />}>
          <Cabecera />
        </Suspense>
      </header>
      <section id="sobre-mi">
        <Suspense fallback={<Loading />}>
          <SobreMi />
        </Suspense>
      </section>
      <section className={styles.section} id="mis-intereses">
        <Suspense fallback={<Loading />}>
          <div className={styles.div}>
            <MisIntereses />
          </div>
        </Suspense>
      </section>
      <Suspense fallback={<Loading />}>
        <footer className={styles.footer} id="contacto">
          <Contacto />
        </footer>
      </Suspense>
    </main>
  );
}
