import "./questions.css";
import { Link } from "react-router";
import Image from "../../../shared/ui/image/Image";
import Skeleton from "../../../shared/ui/skeleton/Skeleton";
import type { TQuestions } from "../model/types";

interface Props {
  isLoading: boolean;
  currentData?: TQuestions;
}

const Questions = ({ isLoading, currentData }: Props) => {
  return (
    <>
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
    </>
  );
};

export default Questions;
