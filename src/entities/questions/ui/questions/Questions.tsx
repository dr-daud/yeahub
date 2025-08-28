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
import Skeleton from "../../../../shared/ui/skeleton/Skeleton";
import { useSearchParams } from "react-router";

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const skills = searchParams.getAll("skills");
  const complexity = searchParams
    .getAll("complexities")
    .map((complexity) => Number(complexity));
  const specialization = Number(searchParams.get("selectedSpec"));

  const { limit, learnt } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
    learnt: state.questionsReducer.learntQuestions,
  }));

  const { data, isLoading } = useQuestionsQuery({
    skills,
    complexity,
    limit,
    specialization,
  });

  const currentData = data && data.questions[currentQuestion];

  const isNextQuestion =
    !!data?.fullCount && !!(currentQuestion + 2 > data?.fullCount);

  return (
    <section className="questions">
      <ProgressBar
        isLoading={isLoading}
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
          <div>
            {isLoading ? (
              <Skeleton />
            ) : (
              <>
                <div className="body5-med questions__title">
                  {currentData?.title}
                </div>
                <Link
                  to={`/quiz/questions/learnt-questions/${currentData?.id}`}
                  className="body2 questions__link"
                >
                  Посмотреть ответ
                </Link>
              </>
            )}
          </div>
          <div className="questions__img">
            <Image image={currentData?.imageSrc} />
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
              onClick={() => dispatch(addLearntQuestion(currentData?.id))}
            />
          </div>
        </div>
        <div className="questions__btn-wrap">
          <Link to={`learnt-questions?${searchParams}`}>
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
