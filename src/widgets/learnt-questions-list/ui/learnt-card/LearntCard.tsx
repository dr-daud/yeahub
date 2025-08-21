import { useSelector } from "react-redux";
import type { TQuestions } from "../../../../entities/questions/model/types";
import {
  NegativeMark,
  PositiveMark,
} from "../../../../entities/questions/ui/mark/Mark";
import Image from "../../../../shared/ui/image/Image";
import "./learnt-card.css";
import type { RootState } from "../../../../app/appStore";
import { Link } from "react-router";

interface Props {
  question: TQuestions;
}

const LearntCard = ({ question }: Props) => {
  const { learntQuestions } = useSelector(
    (state: RootState) => state.questionsReducer
  );

  return (
    <div className="learnt-card">
      <div className="learnt-card__img">
        <Image image={question.imageSrc} />
      </div>
      <div className="learnt-card__wrap">
        <Link to={`${question.id}`} className="learnt-card__link">
          <div className="learnt-card__title">{question.title}</div>
        </Link>
        <div className="learnt-card__mark">
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
