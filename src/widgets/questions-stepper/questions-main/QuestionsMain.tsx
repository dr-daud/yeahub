import { useState } from 'react'

import { Link } from 'react-router'

import { useGetSearchParams } from '@shared/index'

import { Questions } from '@entities/questions'
import type { TQuestionsResponse } from '@entities/questions/model/types'

import { QuestionsNav, QusetionsMark } from '@features/questions'

import ProgressBar from '../progress-bar/ProgressBar'
import './questions-main.css'

interface Props {
  data?: TQuestionsResponse
  isLoading: boolean
}

export const QuestionsMain = ({ data, isLoading }: Props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const currentData = data && data.questions[currentQuestion]
  const { searchParams } = useGetSearchParams()

  const hasNext = !!data?.fullCount && !!(currentQuestion + 2 > data?.fullCount)

  return (
    <>
      <ProgressBar
        isLoading={isLoading}
        currentQuestion={currentQuestion}
        totalAmount={data?.fullCount}
      />
      <div className="container questions__wrap">
        <QuestionsNav
          setCurrentQuestion={setCurrentQuestion}
          currentQuestion={currentQuestion}
          hasNext={hasNext}
        />
        <div className="questions__main">
          <Questions currentData={currentData} isLoading={isLoading} />
          <QusetionsMark currentData={currentData} />
        </div>
        <div className="questions__btn-wrap">
          <Link to={`learnt-questions?${searchParams}`}>
            <button className="questions__complete-btn body3-strong">
              Завершить
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}
