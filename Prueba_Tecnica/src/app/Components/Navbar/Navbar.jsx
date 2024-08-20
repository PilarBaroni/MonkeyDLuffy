"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { margarine } from "../Fonts/fonts";
import Image from "next/image";
import LogoLuffy from "../../../../public/customers/LogoOnePiece.png";
import { SideBar } from "../SideBar/SideBar";

export const Navbar = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      const sections = ["home", "sobre-mi", "mis-intereses", "contacto"];
      const scrollPos = window.scrollY + window.innerHeight / 2;
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          element.offsetTop <= scrollPos &&
          element.offsetTop + element.offsetHeight > scrollPos
        ) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen]);

  const handleLinkClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`${margarine.className} antialiased ${styles.navbar} ${
          isShrunk ? styles.shrink : ""
        }`}
      >
        <div className={styles.brand}>
          <Image
            src={LogoLuffy}
            alt="Logo"
            width={70}
            height={55}
            className={styles.logo}
          />
        </div>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          <div
            className={`${styles.hamburger} ${isMenuOpen ? styles.open : ""}`}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        <ul className={`${styles.menu} ${isMenuOpen ? styles.openMenu : ""}`}>
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? styles.active : ""}
              onClick={() => handleLinkClick("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              className={activeSection === "sobre-mi" ? styles.active : ""}
              onClick={() => handleLinkClick("sobre-mi")}
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#mis-intereses"
              className={activeSection === "mis-intereses" ? styles.active : ""}
              onClick={() => handleLinkClick("mis-intereses")}
            >
              Mis intereses
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              className={activeSection === "contacto" ? styles.active : ""}
              onClick={() => handleLinkClick("contacto")}
            >
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <SideBar />
    </div>
  );
};
