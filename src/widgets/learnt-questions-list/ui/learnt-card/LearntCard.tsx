import type { TQuestions } from "../../../../entities/questions/model/types";
import { PositiveMark } from "../../../../entities/questions/ui/mark/Mark";
import Image from "../../../../shared/ui/image/Image";
import "./learnt-card.css";

interface Props {
  question: TQuestions;
}

const LearntCard = ({ question }: Props) => {
  return (
    <div className="card">
      <div className="card__img">
        <Image image={question.imageSrc} />
      </div>
      <div className="card__wrap">
        <div className="card__title">{question.title}</div>
        <div className="card__mark">
          <PositiveMark active />
        </div>
      </div>
    </div>
  );
};

export default LearntCard;
