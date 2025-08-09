import { useState } from "react";
import Specializations from "../../../../entities/specializations/ui/Specializations";
import "./quiz-section.css";
import Skills from "../../../../entities/skills/ui/Skills";
import DetailedSettings from "../detailed-settings/DetailedSettings";

const QuizSection = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <section className="quiz">
      <div className="container quiz__wrap">
        <h4 className="quiz__title body6-med">Собеседование</h4>
        {currentStep === 1 ? (
          <Specializations setCurrentStep={setCurrentStep} />
        ) : (
          <div className="quiz__flex">
            <Skills />
            <DetailedSettings />
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizSection;
