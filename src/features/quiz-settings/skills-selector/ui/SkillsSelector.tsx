import { useSearchParams } from "react-router";
import Skills from "../../../../entities/skills/ui/Skills";

const SkillsSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const skills = searchParams.getAll("skills");

  const handleClick = (id: string) => {
    const current = searchParams.getAll("skills");
    let updated: string[];

    if (current.includes(id)) {
      updated = current.filter((skill) => skill !== id);
    } else {
      updated = [...current, id];
    }

    const newParams = new URLSearchParams(searchParams);
    newParams.delete("skills");
    updated.forEach((skill) => newParams.append("skills", skill));

    setSearchParams(newParams);
  };

  return <Skills skills={skills} handleClick={handleClick} />;
};

export default SkillsSelector;
