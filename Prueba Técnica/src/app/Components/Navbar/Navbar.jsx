"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { margarine } from "../Fonts/fonts";
import Image from "next/image";
import LogoLuffy from "../../../../public/customers/LogoOnePiece.png";
import { SideBar } from "../SideBar/SideBar";

export const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`${margarine.className} antialiased ${styles.navbar} ${
          isShrunk ? styles.shrink : ""
        }`}
      >
        <div className={styles.brand}>
          <Image src={LogoLuffy} alt="Logo" width={70} height={55} />
        </div>
        <ul className={styles.menu}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Sobre mí</a>
          </li>
          <li>
            <a href="#">Mis intereses</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
      <SideBar/>
    </div>
  );
};
