import { Link } from "react-router";
import Button from "../../../shared/ui/button/Button";
import figmaIcons from "../assets/figma-icons.png";
import progress from "../assets/progress.png";
import user from "../assets/user.png";
import { cards } from "../model/constants";

import styles from "./styles.module.css";

const TopQuestions = () => {
  return (
    <section className={styles["top-questions"]}>
      <div className="container">
        <div className={styles["top-questions__flex"]}>
          <div className={styles["top-questions__left"]}>
            <button className={styles["top-questions__light-button"]}>
              Топ вопросов
            </button>
            <h1 className={styles["top-questions__title"]}>
              YEAHUB помогает расти и достигать целей
            </h1>
            <p className={`${"body3"} ${styles["top-questions__text"]}`}>
              Развивайте и улучшайте свои навыки на одной платформе: изучайте
              новое, готовьтесь к собеседованиям, погружайтесь в нюансы или
              обновляйте знания — YeaHub поможет справиться с любой задачей
            </p>

            <Button className={`${styles["top-questions__button"]}`}>
              <Link to="/quiz">Присоединиться</Link>
            </Button>
          </div>
          <div className={styles["top-questions__right"]}>
            <img
              src={user}
              alt="user"
              className={styles["top-questions__user"]}
            />
            <img
              src={figmaIcons}
              alt="icons"
              className={styles["top-questions__figma"]}
            />
            <img
              src={progress}
              alt="icons"
              className={styles["top-questions__progress"]}
            />
          </div>
        </div>
        <div className={styles["top-questions__bottom"]}>
          {cards.map((card, i) => (
            <div className={styles["top-questions__card-wrap"]} key={i}>
              <div
                className={`${
                  styles["top-questions__card-icon-wrap"]
                } ${"icon-wrap"}`}
              >
                <img
                  src={card.icon}
                  alt="icon"
                  className={`${styles["top-questions__card-icon"]} ${"icon"}`}
                />
              </div>
              <p
                className={`${"body5-med"} ${
                  styles["top-questions__card-title"]
                }`}
              >
                {card.title}
              </p>
              <p
                className={`${"body3"} ${
                  styles["top-questions__card-description"]
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopQuestions;
