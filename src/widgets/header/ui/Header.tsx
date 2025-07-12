import yeahub_logo from "../../../shared/assets/yeahub_logo.svg";

import styles from "./styles.module.css";
import "../../../shared/ui/index.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${"container"} ${styles.header__flex}`}>
        <nav className={styles.header__nav}>
          <ul className={styles.header__links}>
            <li className={styles["header__link-item"]}>
              <img src={yeahub_logo} alt="" />
            </li>
            <li className={styles["header__link-item"]}>База вопросов</li>
            <li className={styles["header__link-item"]}>Тренажер</li>
          </ul>
        </nav>
        <div className={styles.header__access}>
          <a href="" className={styles["header__access-link"]}>
            вход
          </a>
          <button className={`${"button"} ${styles["header__access-button"]}`}>
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
