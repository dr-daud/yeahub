import { useGetSearchParams } from '@shared/hooks/useGetSearchParams'
import { useSaveOldParams } from '@shared/hooks/useSaveOldParams'

import { Skills } from '@entities/skills'

export const SkillsSelector = () => {
  const { getAllParams } = useGetSearchParams()

  const skills = getAllParams('skills')
  const { handleClick } = useSaveOldParams('skills')

  return <Skills skills={skills} handleClick={handleClick} />
}
