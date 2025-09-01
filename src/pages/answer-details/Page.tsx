import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { useGetSearchParams, useWindowWidth } from '@shared/index'

import { useQuestionsQuery } from '@entities/questions/api/api'

import {
  AnswerDetailsTitle,
  AnswerInfo,
  FullAnswer,
  ShortAnswer,
} from '@widgets/index'

import type { RootState } from '@app/appStore'

import './answer-details.css'

export const AnswerDetails = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const width = useWindowWidth()
  const { id } = useParams()

  const { getAllParams, searchParams } = useGetSearchParams()

  const skills = getAllParams('skills')
  const complexity = searchParams
    .getAll('complexities')
    .map((complexity) => Number(complexity))
  const specialization = Number(searchParams.get('selectedSpec'))

  const { limit } = useSelector((state: RootState) => state.questionsReducer)

  const { data } = useQuestionsQuery({
    skills,
    complexity,
    limit,
    specialization,
  })

  const currentData = id
    ? data?.questions.find((question) => question.id == Number(id))
    : undefined

  return (
    <div className="container wrap">
      <div>
        <AnswerDetailsTitle
          currentData={currentData}
          setIsMenuOpen={setIsMenuOpen}
        />
        <ShortAnswer shortAnswer={currentData?.shortAnswer} />
        <FullAnswer longAnswer={currentData?.longAnswer} />
      </div>
      {isMenuOpen || width > 1260 ? (
        <AnswerInfo currentData={currentData} setIsMenuOpen={setIsMenuOpen} />
      ) : null}
    </div>
  )
}
