import styles from "./SideBar.module.css";
import LogoIg from "../../../../public/customers/LogoIg.png";
import LogoTiktok from "../../../../public/customers/LogoTiktok.png";
import Image from "next/image";

export const SideBar = () => {
    return (
        <div className={styles.sidebar}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <Image src={LogoIg} alt="Logo" width={30} height={30} />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <Image src={LogoTiktok} alt="Logo" width={30} height={30} />
        </a>
      </div>
    );
}