import { useState } from "react";
import Specializations from "../../../../entities/specializations/ui/Specializations";
import "./quiz-section.css";
import DetailedSettings from "../detailed-settings/DetailedSettings";
import Button from "../../../../shared/ui/button/Button";
import arrow from "../../assets/Arrow-Right.svg";
import SkillsSelector from "../../../../features/quiz-settings/skills-selector/ui/SkillsSelector";
import { Link, useSearchParams } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { limit } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
  }));
  const [searchParams] = useSearchParams();
  const skills = searchParams.getAll("skills");
  const complexities = searchParams.getAll("complexities");

  const isButtonDisabled = !!(skills.length && complexities?.length && limit);

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
            <Link to={`/quiz/questions?${searchParams}`}>
              <Button className="quiz__button" disabled={!isButtonDisabled}>
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
