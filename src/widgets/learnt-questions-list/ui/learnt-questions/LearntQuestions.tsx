import { useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import { useQuestionsQuery } from "../../../../entities/questions/api/api";
import "./learnt-questions.css";
import LearntCard from "../learnt-card/LearntCard";
import Button from "../../../../shared/ui/button/Button";
import { Link, useSearchParams } from "react-router";
import WatchMore from "../../../../shared/ui/watch-more/WatchMore";
import useExpantionHook from "../../../../shared/hooks/useExpantionHook";

const LearntQuestions = () => {
  const { limit } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
  }));

  const { isExpanded, setIsExpanded, width } = useExpantionHook(1260);

  const [searchParams] = useSearchParams();
  const skills = searchParams.getAll("skills");
  const complexity = searchParams
    .getAll("complexities")
    .map((complexity) => Number(complexity));
  const specialization = Number(searchParams.get("selectedSpec"));

  const { data } = useQuestionsQuery({
    skills,
    complexity,
    limit,
    specialization,
  });

  const shownQuestions = isExpanded
    ? data?.questions
    : data?.questions.slice(0, 7);

  return (
    <section className="learnt">
      <div className="container learnt__wrap">
        <div className="body5-med learnt__title">
          Список пройденных вопросов собеседования
        </div>
        <div className="learnt__list">
          {shownQuestions?.map((question, i) => (
            <LearntCard question={question} key={i} />
          ))}
          {width <= 1260 && (
            <WatchMore
              onClick={() => setIsExpanded(!isExpanded)}
              isExpanded={isExpanded}
            />
          )}
        </div>
        <div className="learnt__flex">
          <Link to="/quiz/questions">
            <Button className="learnt__button">Пройти заново</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LearntQuestions;
