import styles from "./styles.module.css";
import logo from "../assets/image.png";
import { topIcons, bottomIcons } from "../model/constants";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className="container">
        <img className={styles.footer__logo} src={logo} alt="logo" />
        <p className={`${"body3"} ${styles.footer__subtitle}`}>
          Выбери, каким будет IT завтра,
          <br /> вместе с нами
        </p>
        <div className={styles["footer__logo-wrap"]}>
          {topIcons.map((icon) => (
            <img key={icon} src={icon} alt={icon} />
          ))}
        </div>
        <p className={`${"body1"} ${styles["footer__text"]}`}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>
        <div className={styles.footer__line}></div>
        <div className={styles.footer__bottom}>
          <p className={`${"body3"} ${styles["footer__bottom-text"]}`}>
            © 2024 YeaHub
          </p>
          <div className={styles["footer__inner-wrap"]}>
            <p className={`${"body3"} ${styles["footer__bottom-text"]}`}>
              Документы
            </p>
            {bottomIcons.map((icon) => (
              <img
                className={styles["footer__bottom-icon"]}
                key={icon}
                src={icon}
                alt={icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
