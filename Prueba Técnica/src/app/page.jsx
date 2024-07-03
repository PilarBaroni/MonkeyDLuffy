import { Suspense } from "react";
import { Cabecera } from "./Components/Cabecera/Cabecera";
import { Loading } from "./Components/Loading/Loading";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <main>
        <header className={styles.header}>
          <Suspense fallback={<Loading />}>
            <Cabecera />
          </Suspense>
        </header>
        <footer>Hola</footer>
      </main>
    </>
  );
}
