import { Link } from "react-router";
import type { TQuestions } from "../../../entities/questions/model/types";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import "./answer-info.css";

interface Props {
  currentData?: TQuestions;
}

const AnswerInfo = ({ currentData }: Props) => {
  return (
    <section className="info">
      <div className="info__level body3">Уровень:</div>
      <div className="info__wrap">
        <div className="info__inner">
          Сложность: <span> {currentData?.complexity}</span>
        </div>
        <div className="info__inner">
          Рейтинг: <span>{currentData?.rate}</span>
        </div>
      </div>
      <div className="info__skills">
        Навыки:
        {currentData?.questionSkills.map((skill) => (
          <TransparentFrame className="info__frame">
            <img src={skill.imageSrc} alt="" />
            {skill.title}
          </TransparentFrame>
        ))}
      </div>
      <div className="info__keywords">
        Ключевые слова:
        <div className="info__links-wrap">
          {currentData?.keywords.map((word, i) => (
            <Link to="/" key={i} className="info__link">
              #{word}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnswerInfo;
