import Skills from "../../../../entities/skills/ui/Skills";
import { useDispatch } from "react-redux";
import {
  addSkills,
  removeSkills,
} from "../../../../entities/skills/model/skillsSlice";

interface Props {
  skills: string[];
}

const SkillsSelector = ({ skills }: Props) => {
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    if (skills?.includes(id)) {
      dispatch(removeSkills(id));
    } else {
      dispatch(addSkills(id));
    }
  };

  return <Skills skills={skills} handleClick={handleClick} />;
};

export default SkillsSelector;
