import {
  TransparentFrame,
  useGetSearchParams,
  useSaveOldParams,
} from '@shared/index'

import { LEVEL } from '../model/constants'

export const LevelSelector = () => {
  const { getAllParams } = useGetSearchParams()
  const complexities = getAllParams('complexities')

  const { handleClick } = useSaveOldParams('complexities')

  return (
    <div className="level">
      <p className="back700-title body2">Уровень сложности</p>
      {LEVEL.map((obj, index) => (
        <TransparentFrame
          key={index}
          onClick={() => handleClick(obj.id.toString())}
          className={complexities?.includes(obj.id.toString()) ? 'active' : ''}
        >
          {obj.label}
        </TransparentFrame>
      ))}
    </div>
  )
}
