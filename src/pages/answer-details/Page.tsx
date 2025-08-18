import AnswerDetailsTitle from "../../widgets/answer-details-title/ui/AnswerDetailsTitle";
import AnswerInfo from "../../widgets/answer-info/AnswerInfo";
import FullAnswer from "../../widgets/full-answer/ui/FullAnswer";
import ShortAnswer from "../../widgets/short-answer/ui/ShortAnswer";
import "./answer-details.css";

const AnswerDetails = () => {
  return (
    <div className="container wrap">
      <div>
        <AnswerDetailsTitle />
        <ShortAnswer />
        <FullAnswer />
      </div>
      <AnswerInfo />
    </div>
  );
};

export default AnswerDetails;
