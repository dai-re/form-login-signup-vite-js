import { FaFacebook, FaGithub, FaTelegram } from "react-icons/fa";
import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <ul className={styles.sosiallist}>
        <li className={styles.nolist}>
          <a href="https://github.com/dai-re/" target="_blank">
            <FaGithub />
          </a>
        </li>
        <li className={styles.nolist}>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li className={styles.nolist}>
          <a href="#">
            <FaTelegram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
