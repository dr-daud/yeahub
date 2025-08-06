import { useSpecializationsQuery } from "../../../entities/specializations/api";
import "./quiz-section.css";

const QuizSection = () => {
  const { data } = useSpecializationsQuery({ page: 1, limit: 10 });
  console.log(data);

  return (
    <section className="quiz">
      <div className="container quiz__wrap">
        <h4 className="quiz__title body6-med">Собеседование</h4>
        <div className="quiz__inner-wrap">
          <div className="quiz__categories">
            <p className="quiz__categories-title body2">Категории вопросов</p>
          </div>
          <div className="quiz__details">
            <p className="quiz__level body2">Уровень сложности</p>
            <p className="quiz__mode body2">Выберите режим</p>
            <p className="quiz__quantity body2">Количество вопросов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
