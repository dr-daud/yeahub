import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSkillsQuery } from "../api/api";
import "./skills.css";
import type { Props } from "../model/types";
import FrameSkeleton from "../../../shared/ui/frame-skeleton/FrameSkeleton";
import { useSearchParams } from "react-router";

const Skills = ({ skills, handleClick }: Props) => {
  const [searchParams] = useSearchParams();
  const selectedSpec = searchParams.get("selectedSpec");

  const { data, isLoading } = useSkillsQuery({
    page: 1,
    limit: 10,
    specializations: Number(selectedSpec),
  });

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
              className={skills.includes(String(skill.id)) ? "active" : ""}
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
  );
};

export default Skills;
