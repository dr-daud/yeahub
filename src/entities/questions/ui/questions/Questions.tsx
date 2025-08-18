import "./questions.css";
import left from "../../assets/chevrone_Left.svg";
import right from "../../assets/chevrone_right.svg";
import { useQuestionsQuery } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import { useState } from "react";
import Image from "../../../../shared/ui/image/Image";
import { NegativeMark, PositiveMark } from "../mark/Mark";
import ProgressBar from "../../../../widgets/progress-bar/ProgressBar";
import { Link } from "react-router";
import {
  addLearntQuestion,
  removeLearntQuestion,
} from "../../model/questionsSlice";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const dispatch = useDispatch();
  const { skills, limit, complexityArr, specialization, learnt } = useSelector(
    (state: RootState) => ({
      skills: state.skillsReducer.skills,
      limit: state.questionsReducer.limit,
      complexityArr: state.questionsReducer.selectedComplexities,
      specialization: state.specializationsReducer.spec,
      learnt: state.questionsReducer.learntQuestions,
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

  const addLearnt = (id?: number) => {
    if (!id) return;
    if (learnt.includes(id)) return;
    dispatch(addLearntQuestion(id));
  };

  const isNextQuestion =
    !!data?.fullCount && !!(currentQuestion + 2 > data?.fullCount);

  return (
    <section className="questions">
      <ProgressBar
        currentQuestion={currentQuestion}
        totalAmount={data?.fullCount}
      />
      <div className="container questions__wrap">
        <div className="questions__nav">
          <button
            className="questions__button"
            onClick={() => setCurrentQuestion(currentQuestion - 1)}
            disabled={currentQuestion == 0}
          >
            <img src={left} alt="left arrow" /> Назад
          </button>
          <button
            className="questions__button"
            onClick={() => setCurrentQuestion(currentQuestion + 1)}
            disabled={isNextQuestion}
          >
            Далее
            <img src={right} alt="right arrow" />
          </button>
        </div>
        <div className="questions__main">
          <div className="questions__inner">
            <div>
              <div className="body5-med questions__title">
                {currentData?.title}
              </div>
              <Link to={`/quiz/questions/learnt-questions/${currentData?.id}`}>
                <a href="" className="body2 questions__link">
                  Посмотреть ответ
                </a>
              </Link>
            </div>
            <div className="questions__mark">
              <NegativeMark
                active={
                  currentData?.id ? learnt.includes(currentData?.id) : false
                }
                onClick={() => dispatch(removeLearntQuestion(currentData?.id))}
              />
              <PositiveMark
                active={
                  currentData?.id ? learnt.includes(currentData?.id) : false
                }
                onClick={() => addLearnt(currentData?.id)}
              />
            </div>
          </div>
          <div className="questions__img">
            <Image image={currentData?.imageSrc} />
          </div>
        </div>
        <div className="questions__btn-wrap">
          <Link to="learnt-questions">
            <button className="questions__complete-btn body3-strong">
              Завершить
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Questions;
