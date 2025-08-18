import type { TQuestions } from "../../../entities/questions/model/types";
import Image from "../../../shared/ui/image/Image";
import "./answer-details-title.css";

interface Props {
  currentData?: TQuestions;
}

const AnswerDetailsTitle = ({ currentData }: Props) => {
  return (
    <section className="answer">
      <div className="answer__inner">
        <div className="answer__img-wrap">
          <Image />
        </div>
        <div className="answer__wrap">
          <div className="answer__title body6-med">{currentData?.title}</div>
          <div className="answer__descr body3">{currentData?.description}</div>
        </div>
      </div>
    </section>
  );
};

export default AnswerDetailsTitle;
