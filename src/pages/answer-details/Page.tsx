import { useParams } from "react-router";
import AnswerDetailsTitle from "../../widgets/answer-details-title/ui/AnswerDetailsTitle";
import AnswerInfo from "../../widgets/answer-info/AnswerInfo";
import FullAnswer from "../../widgets/full-answer/ui/FullAnswer";
import ShortAnswer from "../../widgets/short-answer/ui/ShortAnswer";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/appStore";
import { useQuestionsQuery } from "../../entities/questions/api/api";
import "./answer-details.css";

const AnswerDetails = () => {
  const { id } = useParams();

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

  const currentData = id
    ? data?.questions.find((question) => question.id == Number(id))
    : undefined;

  return (
    <div className="container wrap">
      <div>
        <AnswerDetailsTitle currentData={currentData} />
        <ShortAnswer shortAnswer={currentData?.shortAnswer} />
        <FullAnswer longAnswer={currentData?.longAnswer} />
      </div>
      <AnswerInfo currentData={currentData} />
    </div>
  );
};

export default AnswerDetails;
