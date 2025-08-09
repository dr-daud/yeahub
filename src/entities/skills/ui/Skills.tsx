import { useSelector } from "react-redux";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSkillsQuery } from "../api/api";
import type { RootState } from "../../../app/appStore";
import "./skills.css";

const Skills = () => {
  const { spec } = useSelector(
    (state: RootState) => state.specializationsReducer
  );
  const { data } = useSkillsQuery({
    page: 1,
    limit: 10,
    specializations: spec,
  });

  return (
    <div className="skills">
      <p className="skills__title body2">Категории вопросов</p>
      <div className="skills__flex">
        {data?.data?.map((skill) => (
          <TransparentFrame>
            <div className="skills__wrap">
              {skill.imageSrc ? (
                <img src={skill.imageSrc} alt="icon" className="skills__img" />
              ) : null}
              {skill.title}
            </div>
          </TransparentFrame>
        ))}
      </div>
    </div>
  );
};

export default Skills;
