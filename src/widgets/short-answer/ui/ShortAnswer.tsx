import "./short-answer.css";
interface Props {
  shortAnswer?: string;
}

const ShortAnswer = ({ shortAnswer }: Props) => {
  return (
    <section className="short">
      <div className="short__wrap">
        <div className="short__title body5-med">Краткий ответ</div>
        <div
          className="short__answer body3"
          dangerouslySetInnerHTML={{ __html: shortAnswer || "" }}
        />
      </div>
    </section>
  );
};

export default ShortAnswer;
