import { Navbar } from "./Components/Navbar/Navbar";
import styles from "./index.module.css";
import "./global.css";

export const metadata = {
  title: "Monkey D Luffy",
  description: "Portafolio de Monkey D Luffy",
  openGraph: {
    title: "Monkey D Luffy",
    description: "Portafolio de Monkey D Luffy.",
    url: "https://monkey-d-luffy.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Monkey D Luffy" />
        <meta
          property="og:description"
          content="Portafolio de Monkey D Luffy"
        />
        <meta property="og:image" content="./LuffyPag.png" />
        <meta property="og:url" content="https://monkey-d-luffy.vercel.app/" />
        <meta property="og:type" content="website" />
        <title>Monkey D Luffy</title>
      </head>
      <body className={styles.body}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
