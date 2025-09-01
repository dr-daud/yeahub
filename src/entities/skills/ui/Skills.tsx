import {
  FrameSkeleton,
  TransparentFrame,
  useGetSearchParams,
} from '@shared/index'

import { useSkillsQuery } from '../api/api'
import type { Props } from '../model/types'
import './skills.css'

export const Skills = ({ skills, handleClick }: Props) => {
  const { getParam } = useGetSearchParams()
  const selectedSpec = getParam('selectedSpec')

  const { data, isLoading } = useSkillsQuery({
    page: 1,
    limit: 10,
    specializations: Number(selectedSpec),
  })

  return (
    <div className="skills">
      <p className="skills__title body2">Категории вопросов</p>
      <div className="skills__flex">
        {isLoading ? (
          <FrameSkeleton quantity={10} />
        ) : (
          data?.data?.map((skill) => (
            <TransparentFrame
              onClick={() => handleClick(String(skill.id))}
              key={skill.id}
              className={skills.includes(String(skill.id)) ? 'active' : ''}
            >
              <div className="skills__wrap">
                {skill.imageSrc ? (
                  <img
                    src={skill.imageSrc}
                    alt="icon"
                    className="skills__img"
                  />
                ) : null}
                {skill.title}
              </div>
            </TransparentFrame>
          ))
        )}
      </div>
    </div>
  )
}
