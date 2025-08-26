import { Link } from "react-router";
import type { TQuestions } from "../../../entities/questions/model/types";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import cross from "../assets/Close Circle.svg";
import "./answer-info.css";
import { useRef } from "react";
import { useOnClickOutside } from "../../../shared/hooks/useOnClickOutside";

interface Props {
  currentData?: TQuestions;
  setIsMenuOpen: (bool: boolean) => void;
}

const AnswerInfo = ({ currentData, setIsMenuOpen }: Props) => {
  const ref = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useOnClickOutside(ref, closeMenu);

  return (
    <section className="info" ref={ref}>
      <div className="info__cross" onClick={() => setIsMenuOpen(false)}>
        <img src={cross} alt="cross" />
      </div>
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
