import { useState } from "react";
import Specializations from "../../../../entities/specializations/ui/Specializations";
import "./quiz-section.css";
import DetailedSettings from "../detailed-settings/DetailedSettings";
import Button from "../../../../shared/ui/button/Button";
import arrow from "../../assets/Arrow-Right.svg";
import SkillsSelector from "../../../../features/quiz-settings/skills-selector/ui/SkillsSelector";
import { Link } from "react-router";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="quiz">
      <div className="container quiz__wrap">
        <h4 className="quiz__title body6-med">Собеседование</h4>
        {currentStep === 1 ? (
          <Specializations setCurrentStep={setCurrentStep} />
        ) : (
          <>
            <div className="quiz__flex">
              <SkillsSelector />
              <DetailedSettings />
            </div>
            <Link to="/quiz/questions">
              <Button className="quiz__button">
                {"Начать"} <img src={arrow} alt="arrow" />
              </Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
