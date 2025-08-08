import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useLazySkillsQuery } from "../api/api";

const Skills = () => {
  const [trigger, { data }] = useLazySkillsQuery();
  console.log(data);

  return data?.data?.map((skill) => (
    <TransparentFrame className="skills">{skill.title}</TransparentFrame>
  ));
};

export default Skills;
