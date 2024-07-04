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
    const [successMessage, setSuccessMessage] = useState("");
    const [showForm, setShowForm] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Limpiar errores cuando el usuario modifica un campo
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = Validaciones(formData.name, formData.email, formData.message);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccessMessage(""); // Limpiar mensaje de éxito si hay errores
        } else {
            // Simulación de envío exitoso (aquí deberías hacer la lógica real para enviar el formulario)
            setSuccessMessage("¡Mensaje enviado con éxito!");
            setErrors({}); // Limpiar errores
            setFormData({ name: "", email: "", message: "" }); // Limpiar campos del formulario
            setShowForm(false); // Ocultar el formulario después del envío exitoso
        }
    };

    const handleEnviarOtroMensaje = () => {
        setShowForm(true); // Mostrar el formulario nuevamente al hacer clic en "Enviar otro mensaje"
        setSuccessMessage(""); // Limpiar el mensaje de éxito
    };

    return (
        <div className={`${AbrilFatface.className} ${styles.contactSection}`}>
            <div className={styles.containerContact}>
                {showForm ? (
                    <div className={styles.contactForm}>
                        <h1>
                            <span className={styles.exclamacion}>¡</span>Contáctame
                            <span className={styles.exclamacion}>!</span>
                        </h1>
                        <h4>Envíame un mensaje para ser nakamas</h4>
                        {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
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
                ) : (
                    <div className={styles.successContainer}>
                        <p className={styles.successMessage}>{successMessage}</p>
                        <button onClick={handleEnviarOtroMensaje} className={styles.btnSubmit}>
                            Enviar otro mensaje
                        </button>
                    </div>
                )}
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