import './progress-bar.css'

interface Props {
  currentQuestion: number
  totalAmount?: number
  isLoading: boolean
}

const ProgressBar = ({ currentQuestion, totalAmount, isLoading }: Props) => {
  const progress =
    totalAmount && Math.round(((currentQuestion + 1) * 100) / totalAmount)

  return (
    <div className="container progress">
      <div className="progress__flex-wrap">
        <div className="body5-med">Вопросы собеседования</div>
        {isLoading ? null : (
          <div className="progress__count body2">
            {currentQuestion + 1}/{totalAmount}
          </div>
        )}
      </div>
      <div className="progress__bc">
        <div
          className="progress__bar"
          style={{
            width: `${progress}%`,
          }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
