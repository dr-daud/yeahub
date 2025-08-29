import left from "../assets/chevrone_Left.svg";
import right from "../assets/chevrone_right.svg";
import "./questions-nav.css";

interface Props {
  setCurrentQuestion: (currentQuestion: number) => void;
  currentQuestion: number;
  hasNext: boolean;
}

const QuestionsNav = ({
  setCurrentQuestion,
  currentQuestion,
  hasNext,
}: Props) => {
  return (
    <div className="questions__nav">
      <button
        className="questions__button"
        onClick={() => setCurrentQuestion(currentQuestion - 1)}
        disabled={currentQuestion == 0}
      >
        <img src={left} alt="left arrow" /> Назад
      </button>
      <button
        className="questions__button"
        onClick={() => setCurrentQuestion(currentQuestion + 1)}
        disabled={hasNext}
      >
        Далее
        <img src={right} alt="right arrow" />
      </button>
    </div>
  );
};

export default QuestionsNav;
