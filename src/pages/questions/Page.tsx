import { useSelector } from 'react-redux'

import { useGetSearchParams } from '@shared/index'

import { useQuestionsQuery } from '@entities/questions/api/api'

import QuestionsMain from '@widgets/questions-stepper/questions-main/QuestionsMain'

import type { RootState } from '@app/appStore'

import './questions-page.css'

export const QuestionsPage = () => {
  const { getAllParams, searchParams } = useGetSearchParams()

  const skills = getAllParams('skills')
  const complexities = getAllParams('complexities').map(Number)
  const specialization = Number(searchParams.get('selectedSpec'))

  const { limit } = useSelector((state: RootState) => ({
    limit: state.questionsReducer.limit,
    learnt: state.questionsReducer.learntQuestions,
  }))

  const { data, isLoading } = useQuestionsQuery({
    skills,
    complexity: complexities,
    limit,
    specialization,
  })

  return (
    <section className="questions">
      <QuestionsMain data={data} isLoading={isLoading} />
    </section>
  )
}
