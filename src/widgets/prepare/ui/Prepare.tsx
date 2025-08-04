import styles from "../ui/styles.module.css";
import newSquare from "../assets/Pen New Square.svg";
import accordeon from "../assets/question accordeon.png";
import filtersScreen from "../assets/filters example.png";
import filterIcon from "../assets/icons/Filter.svg";
import Button from "../../../shared/ui/button/Button";

const Prepare = () => {
  return (
    <section className={styles.prepare}>
      <div className="container">
        <div className={styles.prepare__top}>
          <h2 className={styles.prepare__title}>
            Подготовьтесь <br /> к собеседованию в IT
          </h2>
          <p className={`${"body3"} ${styles.prepare__text}`}>
            С YeaHub подготовка к собеседованию становится простым и
            захватывающим процессом.
          </p>
        </div>
        <div className={styles.prepare__bottom}>
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
                вас темам и уровню сложности.
              </p>
            </div>
          </div>
          <div className={styles.prepare__button}>
            <Button style={{ width: "256px", marginTop: "26px" }}>
              Пройти собеседование
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prepare;
