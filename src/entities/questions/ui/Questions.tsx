import "./questions.css";
import left from "../assets/chevrone_Left.svg";
import right from "../assets/chevrone_right.svg";
import { useQuestionsQuery } from "../api/api";
import { useSelector } from "react-redux";
import type { RootState } from "../../../app/appStore";
import { useState } from "react";
import Image from "../../../shared/ui/image/Image";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  const { skills, limit, complexityArr, specialization } = useSelector(
    (state: RootState) => ({
      skills: state.skillsReducer.skills,
      limit: state.questionsReducer.limit,
      complexityArr: state.questionsReducer.selectedComplexities,
      specialization: state.specializationsReducer.spec,
    })
  );

  const complexity = complexityArr?.map((el) => el.value).flat();

  const { data } = useQuestionsQuery({
    skills,
    complexity,
    limit,
    specialization,
  });

  const currentData = data && data.questions[currentQuestion];

  console.log(currentData?.title);

  return (
    <section className="questions">
      <div className="container questions__wrap">
        <div className="questions__nav">
          <button
            className="questions__button"
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
          >
            <img src={left} alt="left arrow" /> Назад
          </button>
          <button
            className="questions__button"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
          >
            Далее
            <img src={right} alt="right arrow" />
          </button>
        </div>
        <div className="questions__main">
          <div className="body5-med questions__title">{currentData?.title}</div>
          <div className="questions__img">
            <Image image={currentData?.imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
