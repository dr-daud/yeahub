import { Link } from 'react-router'

import { Image, Skeleton } from '@shared/index'

import type { TQuestions } from '../model/types'
import './questions.css'

interface Props {
  isLoading: boolean
  currentData?: TQuestions
}

export const Questions = ({ isLoading, currentData }: Props) => {
  return (
    <>
      <div>
        {isLoading ? (
          <Skeleton />
        ) : (
          <>
            <div className="body5-med questions__title">
              {currentData?.title}
            </div>
            <Link
              to={`/quiz/questions/learnt-questions/${currentData?.id}`}
              className="body2 questions__link"
            >
              Посмотреть ответ
            </Link>
          </>
        )}
      </div>
      <div className="questions__img">
        <Image image={currentData?.imageSrc} />
      </div>
    </>
  )
}
