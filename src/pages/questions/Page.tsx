import { useSearchParams } from "react-router";
import { useQuestionsQuery } from "../../entities/questions/api/api";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/appStore";
import "./questions-page.css";
import QuestionsMain from "../../widgets/questions-stepper/questions-main/QuestionsMain";

const QuestionsPage = () => {
  const [searchParams] = useSearchParams();

  const skills = searchParams.getAll("skills");
  const complexities = searchParams.getAll("complexities").map(Number);
  const specialization = Number(searchParams.get("selectedSpec"));

  const { limit } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
    learnt: state.questionsReducer.learntQuestions,
  }));

  const { data, isLoading } = useQuestionsQuery({
    skills,
    complexity: complexities,
    limit,
    specialization,
  });

  return (
    <section className="questions">
      <QuestionsMain data={data} isLoading={isLoading} />
    </section>
  );
};

export default QuestionsPage;
