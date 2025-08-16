import { useSelector } from "react-redux";
import type { RootState } from "../../../app/appStore";
import { useQuestionsQuery } from "../../../entities/questions/api/api";
import "./learnt-questions.css";

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
      </div>
    </section>
  );
};

export default LearntQuestions;
