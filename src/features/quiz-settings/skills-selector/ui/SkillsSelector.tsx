import { useGetSearchParams, useSaveOldParams } from '@shared/index'

import { Skills } from '@entities/skills'

export const SkillsSelector = () => {
  const { getAllParams } = useGetSearchParams()

  const skills = getAllParams('skills')
  const { handleClick } = useSaveOldParams('skills')

  return <Skills skills={skills} handleClick={handleClick} />
}
