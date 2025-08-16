import { useSelector } from "react-redux";
import type { TQuestions } from "../../../../entities/questions/model/types";
import {
  NegativeMark,
  PositiveMark,
} from "../../../../entities/questions/ui/mark/Mark";
import Image from "../../../../shared/ui/image/Image";
import "./learnt-card.css";
import type { RootState } from "../../../../app/appStore";

interface Props {
  question: TQuestions;
}

const LearntCard = ({ question }: Props) => {
  const { learntQuestions } = useSelector(
    (state: RootState) => state.questionsReducer
  );
  return (
    <div className="card">
      <div className="card__img">
        <Image image={question.imageSrc} />
      </div>
      <div className="card__wrap">
        <div className="card__title">{question.title}</div>
        <div className="card__mark">
          {learntQuestions.includes(question.id) ? (
            <PositiveMark active />
          ) : (
            <NegativeMark active />
          )}
        </div>
      </div>
    </div>
  );
};

export default LearntCard;
