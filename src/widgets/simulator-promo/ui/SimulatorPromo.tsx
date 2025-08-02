import styles from "./styles.module.css";
import "../../../shared/ui/index.css";
import questionsList from "../assets/question_list.jpg";
import graphUp from "../assets/icons/Graph Up.svg";
import structure from "../assets/icons/Structure.svg";

const SimulatorPromo = () => {
  return (
    <section className={styles["simulator-promo"]}>
      <div
        className={`${"container"} ${
          styles["simulator-promo__grid-container"]
        }`}
      >
        <div className={styles["simulator-promo__questions-list-wrap"]}>
          <div className={styles["simulator-promo__questions-list"]}>
            <h4 className="body5-med">Список вопросов</h4>
            <div className={styles["simulator-promo__img-wrap"]}>
              <img
                src={questionsList}
                alt="questionslist"
                className={styles["simulator-promo__img"]}
              />
            </div>
          </div>
        </div>
        <div className={styles["simulator-promo__title-wrap"]}>
          <h2>Удобный тренажёр</h2>
          <h4 className={`${"body3"} ${styles["simulator-promo__subtitle"]}`}>
            Практикуйте изученные темы в нашем тренажёре.
          </h4>
        </div>
        <div className={styles["simulator-promo__card-wrap"]}>
          <div className={styles["simulator-promo__start-learning"]}>
            <div className={styles["simulator-promo__graph-up"]}>
              <div
                className={`${
                  styles["simulator-promo__icon-wrap"]
                } ${"icon-wrap"}`}
              >
                <img src={graphUp} alt="graph up" />
              </div>
              <p className={`${"body3"} ${styles["simulator-promo__text"]}`}>
                Наш тренажёр предоставляет <br />
                уникальный шанс углубить свои <br />
                знания и поднять их на новый уровень
              </p>
            </div>
            <div className={styles["simulator-promo__structure"]}>
              <div
                className={`${
                  styles["simulator-promo__icon-wrap"]
                } ${"icon-wrap"}`}
              >
                <img src={structure} alt="structure" />
              </div>
              <p className={`${"body3"} ${styles["simulator-promo__text"]}`}>
                Изучение технологий <br />
                ещё никогда не было таким <br /> доступным и эффективным
              </p>
            </div>
          </div>
          <button
            className={`${"button"} ${styles["simulator-promo__button"]}`}
          >
            Начать обучение
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimulatorPromo;
