import "./answer-info.css";

const AnswerInfo = () => {
  return (
    <section className="info">
      <div className="info__level body3">Уровень:</div>
      <div>
        <div className="info__complexity"></div>
        <div className="info__rating"></div>
      </div>
      <div className="info__skills"></div>
      <div className="info__keywords"></div>
    </section>
  );
};

export default AnswerInfo;
