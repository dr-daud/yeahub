import { useState } from "react";
import Skills from "../../../../entities/skills/ui/Skills";

const SkillsSelector = () => {
  const [skills, setSkills] = useState<number[]>([]);

  const handleClick = (id: number) => {
    setSkills((prevSkills) => {
      if (prevSkills.includes(id)) {
        return prevSkills.filter((skill) => skill !== id);
      } else {
        return [...prevSkills, id];
      }
    });
  };

  return <Skills skills={skills} handleClick={handleClick} />;
};

export default SkillsSelector;
