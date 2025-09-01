import { useSelector } from 'react-redux'
import { Link } from 'react-router'

import { useGetSearchParams } from '@shared/hooks/useGetSearchParams'
import Image from '@shared/ui/image/Image'
import { NegativeMark, PositiveMark } from '@shared/ui/mark/Mark'

import type { TQuestions } from '@entities/questions/model/types'

import type { RootState } from '@app/appStore'

import './learnt-card.css'

interface Props {
  question: TQuestions
}

const LearntCard = ({ question }: Props) => {
  const { learntQuestions } = useSelector(
    (state: RootState) => state.questionsReducer,
  )
  const { searchParams } = useGetSearchParams()

  return (
    <div className="learnt-card">
      <div className="learnt-card__img">
        <Image image={question.imageSrc} />
      </div>
      <div className="learnt-card__wrap">
        <Link
          to={`${question.id}?${searchParams}`}
          className="learnt-card__link"
        >
          <div className="learnt-card__title">{question.title}</div>
        </Link>
        <div className="learnt-card__mark">
          {learntQuestions.includes(question.id) ? (
            <PositiveMark active />
          ) : (
            <NegativeMark active />
          )}
        </div>
      </div>
    </div>
  )
}

export default LearntCard
