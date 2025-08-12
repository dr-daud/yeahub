import Skills from "../../../../entities/skills/ui/Skills";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import {
  addSkills,
  removeSkills,
} from "../../../../entities/questions/model/questionsSlice";

const SkillsSelector = () => {
  const dispatch = useDispatch();
  const { skills } = useSelector((state: RootState) => state.questionsReducer);

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
