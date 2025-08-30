import { useState } from "react";
import ProgressBar from "../progress-bar/ProgressBar";
import type { TQuestionsResponse } from "../../../entities/questions/model/types";
import QuestionsNav from "../../../features/questions/questions-nav/ui/QuestionsNav";
import Questions from "../../../entities/questions/ui/questions/Questions";
import { Link } from "react-router";
import "./questions-main.css";
import QusetionsMark from "../../../features/questions/questions-mark/ui/QuestionsMark";
import { useGetSearchParams } from "../../../shared/hooks/useGetSearchParams";

interface Props {
  data?: TQuestionsResponse;
  isLoading: boolean;
}

const QuestionsMain = ({ data, isLoading }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const currentData = data && data.questions[currentQuestion];
  const { searchParams } = useGetSearchParams();

  const hasNext =
    !!data?.fullCount && !!(currentQuestion + 2 > data?.fullCount);

  return (
    <>
      <ProgressBar
        isLoading={isLoading}
        currentQuestion={currentQuestion}
        totalAmount={data?.fullCount}
      />
      <div className="container questions__wrap">
        <QuestionsNav
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          hasNext={hasNext}
        />
        <div className="questions__main">
          <Questions currentData={currentData} isLoading={isLoading} />
          <QusetionsMark currentData={currentData} />
        </div>
        <div className="questions__btn-wrap">
          <Link to={`learnt-questions?${searchParams}`}>
            <button className="questions__complete-btn body3-strong">
              Завершить
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuestionsMain;
