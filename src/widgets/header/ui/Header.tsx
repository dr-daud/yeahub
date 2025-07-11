import styles from "./styles.module.css";
import "../../../shared/ui/index.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.header__nav}>
          <ul className={styles.header__links}>
            <li className={styles["header__link-item"]}>
              {/* <img src="" alt="" /> */}
            </li>
            <li className={styles["header__link-item"]}>База вопросов</li>
            <li className={styles["header__link-item"]}>Тренажер</li>
          </ul>
        </nav>
        <div className={styles.header__access}>
          <a href="" className={styles["header__access-link"]}>
            вход
          </a>
          <button className={styles["header__access-button"]}></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
