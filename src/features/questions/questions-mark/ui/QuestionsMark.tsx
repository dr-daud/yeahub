import { useDispatch, useSelector } from 'react-redux'

import { NegativeMark, PositiveMark } from '@shared/ui/mark/Mark'

import {
  addLearntQuestion,
  removeLearntQuestion,
} from '@entities/questions/model/questionsSlice'
import type { TQuestions } from '@entities/questions/model/types'

import type { RootState } from '@app/appStore'

import './questions-mark.css'

interface Props {
  currentData?: TQuestions
}

const QusetionsMark = ({ currentData }: Props) => {
  const dispatch = useDispatch()

  const { learntQuestions } = useSelector(
    (state: RootState) => state.questionsReducer,
  )
  return (
    <div className="questions__mark">
      <NegativeMark
        active={
          currentData?.id ? learntQuestions.includes(currentData?.id) : false
        }
        onClick={() => dispatch(removeLearntQuestion(currentData?.id))}
      />
      <PositiveMark
        active={
          currentData?.id ? learntQuestions.includes(currentData?.id) : false
        }
        onClick={() => dispatch(addLearntQuestion(currentData?.id))}
      />
    </div>
  )
}

export default QusetionsMark
