import questionsList from '../../assets/question_list.jpg'
import './simulator-example.css'

const SimulatorExample = () => {
  return (
    <div className="simulator-example">
      <div className="simulator-example__wrap">
        <h4 className="body5-med">Список вопросов</h4>
        <div className="simulator-example__img-wrap">
          <img
            src={questionsList}
            alt="questionslist"
            className="simulator-example__img"
          />
        </div>
      </div>
    </div>
  )
}

export default SimulatorExample
