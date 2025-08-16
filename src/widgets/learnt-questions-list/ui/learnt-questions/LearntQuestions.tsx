import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import { useQuestionsQuery } from "../../../../entities/questions/api/api";
import "./learnt-questions.css";
import LearntCard from "../learnt-card/LearntCard";
import Button from "../../../../shared/ui/button/Button";

const LearntQuestions = () => {
  const { skills, limit, complexityArr, specialization } = useSelector(
    (state: RootState) => ({
      skills: state.skillsReducer.skills,
      limit: state.questionsReducer.limit,
      complexityArr: state.questionsReducer.selectedComplexities,
      specialization: state.specializationsReducer.spec,
    })
  );

  const complexity = complexityArr?.map((el) => el.value).flat();

  const { data } = useQuestionsQuery({
    skills,
    complexity,
    limit,
    specialization,
  });
  console.log(data);

  return (
    <section className="learnt">
      <div className="container learnt__wrap">
        <div className="body5-med learnt__title">
          Список пройденных вопросов собеседования
        </div>
        <div className="learnt__list">
          {data?.questions.map((question) => (
            <LearntCard question={question} />
          ))}
        </div>
        <div className="learnt__flex">
          <Button className="learnt__button">Пройти занова</Button>
        </div>
      </div>
    </section>
  );
};

export default LearntQuestions;
