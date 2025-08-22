import { useState } from "react";
import Specializations from "../../../../entities/specializations/ui/Specializations";
import "./quiz-section.css";
import DetailedSettings from "../detailed-settings/DetailedSettings";
import Button from "../../../../shared/ui/button/Button";
import arrow from "../../assets/Arrow-Right.svg";
import SkillsSelector from "../../../../features/quiz-settings/skills-selector/ui/SkillsSelector";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { limit, skills, selectedComplexities } = useSelector(
    (state: RootState) => ({
      limit: state.questionsReducer.limit,
      skills: state.skillsReducer.skills,
      selectedComplexities: state.questionsReducer.selectedComplexities,
    })
  );

  const isButtonDisabled = !!(
    skills.length &&
    selectedComplexities?.length &&
    limit
  );

  return (
    <section className="quiz">
      <div className="container quiz__wrap">
        <h4 className="quiz__title body6-med">Собеседование</h4>
        {currentStep === 1 ? (
          <Specializations setCurrentStep={setCurrentStep} />
        ) : (
          <>
            <div className="quiz__flex">
              <SkillsSelector skills={skills} />
              <DetailedSettings />
            </div>
            <Link to="/quiz/questions">
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
