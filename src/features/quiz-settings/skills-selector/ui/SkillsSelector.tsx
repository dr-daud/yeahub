import Skills from "../../../../entities/skills/ui/Skills";
import { useGetSearchParams } from "../../../../shared/hooks/useGetSearchParams";
import { useSaveOldParams } from "../../../../shared/hooks/useSaveOldParams";

const SkillsSelector = () => {
  const { getAllParams } = useGetSearchParams();

  const skills = getAllParams("skills");
  const { handleClick } = useSaveOldParams("skills");

  return <Skills skills={skills} handleClick={handleClick} />;
};

export default SkillsSelector;
