import screenShot from "../assets/image.png";
import styles from "./styles.module.css";
import bookMark from "../assets/icons/Bookmark.svg";
import student from "../assets/icons/Student.svg";

const Mode = () => {
  return (
    <section className={styles.mode}>
      <h2 className={styles.mode__title}>режим прохождения собеседований</h2>
      <div className={`${"container"} ${styles["mode__flex"]}`}>
        <div className={styles.mode__left}>
          <img
            src={screenShot}
            alt="screenshot"
            className={styles.mode__screenshot}
          />
        </div>
        <div className={styles.mode__right}>
          <div className={`${styles["card"]} ${styles["top"]}`}>
            <div className={`${"icon-wrap"} ${styles["card__icon-top"]}`}>
              <img src={student} alt="srudent icon" />
            </div>
            <p className={`${"body3"} ${styles["card__text"]}`}>
              Практикуйте изученные темы в режиме собеседований.
            </p>
          </div>
          <div className={`${styles["card"]} ${styles["bottom"]}`}>
            <div className={`${"icon-wrap"} ${styles["card__icon-bottom"]}`}>
              <img src={bookMark} alt="bookmark icon" />
            </div>
            <p className={`${"body3"} ${styles["card__text"]}`}>
              Воспользуйтесь удобными карточками для запоминания и возможностью
              сохранения материала для последующего повторения.
            </p>
          </div>
          <p className={`${"body5-med"} ${styles["mode__text"]}`}>
            Это идеальный способ подготовиться к реальным собеседованиям.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mode;
