import { Navbar } from "./Components/Navbar/Navbar";
import styles from "./index.module.css";
import "./global.css";

export const metadata = {
  title: "Monkey D Luffy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}> 
       <Navbar/> 
       {children}
      </body>
    </html>
  );
}
