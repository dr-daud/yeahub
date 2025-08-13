import "./questions.css";
import left from "../assets/chevrone_Left.svg";
import right from "../assets/chevrone_right.svg";
import { useQuestionsQuery } from "../api/api";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/appStore";

const Questions = () => {
  const { skills, limit } = useSelector((state: RootState) => ({
    skills: state.skillsReducer.skills,
    limit: state.questionsReducer.limit,
  }));
  const { data } = useQuestionsQuery({ skills, limit });

  return (
    <section className="questions">
      <div className="container questions__wrap">
        <div className="questions__nav">
          <button className="questions__button">
            <img src={left} alt="left arrow" /> Назад
          </button>
          <button className="questions__button">
            Далее
            <img src={right} alt="right arrow" />
          </button>
        </div>
        <div className="questions__main"></div>
      </div>
    </section>
  );
};

export default Questions;
