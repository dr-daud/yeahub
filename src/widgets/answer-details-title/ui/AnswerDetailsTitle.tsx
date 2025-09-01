import { DetailsIcon, Image } from '@shared/index'

import type { TQuestions } from '@entities/questions/model/types'

import './answer-details-title.css'

interface Props {
  currentData?: TQuestions
  setIsMenuOpen: (bool: boolean) => void
}

const AnswerDetailsTitle = ({ currentData, setIsMenuOpen }: Props) => {
  return (
    <section className="answer">
      <div className="answer__inner">
        <div className="answer__img-wrap">
          <Image />
        </div>
        <div className="answer__wrap">
          <div className="answer__flex">
            <div className="answer__title body6-med">{currentData?.title}</div>
            <DetailsIcon onClick={() => setIsMenuOpen(true)} />
          </div>
          <div className="answer__descr body3">{currentData?.description}</div>
        </div>
      </div>
    </section>
  )
}

export default AnswerDetailsTitle
