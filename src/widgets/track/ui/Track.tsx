import styles from "./styles.module.css";
import statistic from "../assets/image.png";
import graph from "../assets/icons/Graph New.svg";
import person from "../assets/icons/PersonArmsSpread.svg";

const Track = () => {
  return (
    <section className={styles.track}>
      <div className={`${"container"} ${styles.track__grid}`}>
        <div className={styles.track__title}>
          <h2>отслеживайте свой прогресс</h2>
          <p className={`${styles.track__subtitle} ${"body3"}`}>
            YeaHub предоставляет продвинутые инструменты для мониторинга вашего
            обучения.
          </p>
        </div>
        <div className={styles["track__inner-flex"]}>
          <div className={styles["track__inner-wrap"]}>
            <div className={`${styles["track__icon-wrap"]} ${"icon-wrap"}`}>
              <img src={person} alt="person" />
            </div>
            <p className={`${styles.track__text} ${"body3"}`}>
              В вашем личном профиле доступна детализированная статистика,
              включая количество пройденных вопросов и тем.
            </p>
          </div>
          <div className={styles["track__inner-wrap"]}>
            <div className={`${styles["track__icon-wrap"]} ${"icon-wrap"}`}>
              <img src={graph} alt="graph" />
            </div>
            <p className={`${styles.track__text} ${"body3"}`}>
              Определите свой текущий уровень и выявите пробелы в знаниях для
              более целенаправленного обучения или подготовки к поиску работы.
            </p>
          </div>
        </div>
        <div className={styles.track__right}>
          <img src={statistic} alt="statistic" className={styles.track__img} />
        </div>
      </div>
    </section>
  );
};

export default Track;
