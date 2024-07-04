import { Suspense } from "react";
import { Cabecera } from "./Components/Cabecera/Cabecera";
import { Loading } from "./Components/Loading/Loading";
import styles from "./index.module.css";
import { SobreMi } from "./Components/Sobre mi/SobreMi";
import { Contacto } from "./Components/Contacto/Contacto";

export default function Home() {
  return (
    <main>
      <header className={styles.header}>
        <Suspense fallback={<Loading />}>
          <Cabecera />
        </Suspense>
      </header>
      <section>
        <SobreMi/>
      </section>
      <footer className={styles.footer}>
        <Contacto/>
      </footer>
    </main>
  );
}
