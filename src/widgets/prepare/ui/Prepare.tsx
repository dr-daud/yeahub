import styles from "../ui/styles.module.css";
import newSquare from "../assets/Pen New Square.svg";
import accordeon from "../assets/question accordeon.png";
import filtersScreen from "../assets/filters example.png";
import filterIcon from "../assets/icons/Filter.svg";

const Prepare = () => {
  return (
    <section className={styles.prepare}>
      <div className={`${"container"} ${styles["prepare__flex"]}`}>
        <div className={styles.prepare__left}>
          <h2>
            Подготовьтесь <br /> к собеседованию в IT
          </h2>
          <div className={styles.prepare__inner}>
            <div className={styles.prepare__promo}>
              <div className={`${styles["prepare__icon-wrap"]} ${"icon-wrap"}`}>
                <img src={newSquare} alt="new square" />
              </div>
              <p className="body3">
                Наша платформа предлагает обширную базу <br /> актуальных
                вопросов по широкому спектру тем <br />и навыков, которая
                регулярно обновляется.
              </p>
            </div>
            <img
              src={accordeon}
              alt="accordion"
              className={styles.prepare__img}
            />
          </div>
        </div>
        <div className={styles.prepare__right}>
          <p className="body3">
            С YeaHub подготовка к собеседованию становится простым и
            захватывающим процессом.
          </p>
          <div className={styles["prepare__filters-wrap"]}>
            <img
              src={filtersScreen}
              alt="filters screen"
              className={styles["prepare__filters-screen"]}
            />
            <div className={styles["prepare__filters-flex"]}>
              <div
                className={`${
                  styles["prepare__filter-icon-wrap"]
                } ${"icon-wrap"}`}
              >
                <img src={filterIcon} alt="filter icon" />
              </div>
              <p className="body3">
                Используйте удобные фильтры для поиска вопросов по интересующим
                вас темам <br />и уровню сложности.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
