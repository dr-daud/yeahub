import "./quiz-section.css";
import { useState } from "react";
import Specializations from "../../../../entities/specializations/ui/Specializations";
import DetailedSettings from "../detailed-settings/DetailedSettings";
import Button from "../../../../shared/ui/button/Button";
import arrow from "../../assets/Arrow-Right.svg";
import SkillsSelector from "../../../../features/quiz-settings/skills-selector/ui/SkillsSelector";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import { useGetSearchParams } from "../../../../shared/hooks/useGetSearchParams";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { limit } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
  }));
  const { getAllParams, searchParams } = useGetSearchParams();

  const skills = getAllParams("skills");
  const complexities = getAllParams("complexities");

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
