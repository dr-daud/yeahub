import { useDispatch, useSelector } from 'react-redux'

import TransparentFrame from '@shared/ui/transparent-frame/ui/TransparentFrame'

import { addLimit, reduceLimit } from '@entities/questions/model/questionsSlice'

import type { RootState } from '@app/appStore'

import minus from '../assets/Minus.svg'
import plus from '../assets/Plus.svg'
import './quantity-selector.css'

export const QuantitySelector = () => {
  const { limit } = useSelector((state: RootState) => state.questionsReducer)
  const dispatch = useDispatch()

  return (
    <div className="quantity">
      <p className="black700-title body2">Количество вопросов</p>
      <TransparentFrame className="quantity__wrap">
        <button
          onClick={() => dispatch(reduceLimit(limit))}
          className="qunatity__button"
        >
          <img src={minus} alt="minus" />
        </button>
        {limit}
        <button
          onClick={() => dispatch(addLimit(limit))}
          className="qunatity__button"
        >
          <img src={plus} alt="plus" />
        </button>
      </TransparentFrame>
    </div>
  )
}
