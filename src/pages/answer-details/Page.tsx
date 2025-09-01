import { useState } from 'react'

import { useSelector } from 'react-redux'
import { useParams } from 'react-router'

import { useGetSearchParams } from '@shared/hooks/useGetSearchParams'
import { useWindowWidth } from '@shared/hooks/useWindowWidth'

import { useQuestionsQuery } from '@entities/questions/api/api'

import AnswerDetailsTitle from '@widgets/answer-details-title/ui/AnswerDetailsTitle'
import AnswerInfo from '@widgets/answer-info/ui/AnswerInfo'
import FullAnswer from '@widgets/full-answer/ui/FullAnswer'
import ShortAnswer from '@widgets/short-answer/ui/ShortAnswer'

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
