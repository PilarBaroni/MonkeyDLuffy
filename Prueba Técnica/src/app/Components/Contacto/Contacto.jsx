"use client";   
import Image from "next/image";
import styles from "./Contacto.module.css";
import Luffy from "../../../../public/customers/Luffy.png";
import { AbrilFatface, monserrat } from "../Fonts/fonts";
import { Validaciones } from "./Validaciones";
import { useState } from "react";
export const Contacto = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = Validaciones(formData.name, formData.email, formData.message);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
      } else {
        console.log("Formulario enviado:", formData);
      }
    };

    return (
        <div className={`${AbrilFatface.className} ${styles.contactSection}`}>
          <div className={styles.containerContact}>
            <div className={styles.contactForm}>
              <h1>
                <span className={styles.exclamacion}>¡C</span>ontactame
                <span className={styles.exclamacion}>!</span>
              </h1>
              <h4>Envíame un mensaje...</h4>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.inputGroup} ${errors.name ? styles.errorGroup : ''}`}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    value={formData.name}
                    onChange={handleChange}
                    className={monserrat.className}
                  />
                  {errors.name && <p className={styles.error}>{errors.name}</p>}
                </div>
                <div className={`${styles.inputGroup} ${errors.email ? styles.errorGroup : ''}`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={monserrat.className}
                  />
                  {errors.email && <p className={styles.error}>{errors.email}</p>}
                </div>
                <div className={`${styles.inputGroup} ${errors.message ? styles.errorGroup : ''}`}>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Escribe tu mensaje aquí"
                    value={formData.message}
                    onChange={handleChange}
                    className={monserrat.className}
                  />
                  {errors.message && <p className={styles.error}>{errors.message}</p>}
                </div>
                <button type="submit" className={styles.btnSubmit}>
                  Contactar
                </button>
              </form>
            </div>
            <Image
              src={Luffy}
              alt="Luffy"
              quality={100}
              priority
              className={styles.image}
            />
          </div>
        </div>
      );
    };