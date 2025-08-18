import Image from "../../../shared/ui/image/Image";
import "./answer-details-title.css";

const AnswerDetailsTitle = () => {
  return (
    <section className="answer">
      <div className="answer__inner">
        <div className="answer__img-wrap">
          <Image />
        </div>
        <div className="answer__wrap">
          <div className="answer__title body6-med">
            Что такое Virtual DOM, и как он работает?
          </div>
          <div className="answer__descr body3">
            Вопрос проверяет знание React под капотом
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnswerDetailsTitle;
