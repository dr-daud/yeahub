import { useState } from "react";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSpecializationsQuery } from "../api/api";
import Button from "../../../shared/ui/button/Button";
import "./specializations.css";
import { useLazySkillsQuery } from "../../skills/api/api";

interface Props {
  setCurrentStep: (currentStep: number) => void;
}

const Specializations = ({ setCurrentStep }: Props) => {
  const [spec, setSpec] = useState<number | null>(null);
  const { data } = useSpecializationsQuery({ page: 1, limit: 19 });
  const [trigger, { data: skills }] = useLazySkillsQuery();
  console.log(skills);

  const handleClick = () => {
    setCurrentStep(2);
    trigger({ page: 1, limit: 10, specializations: spec });
  };

  return (
    <div className="specializations">
      <p className="specializations__title body2">Специализация</p>
      <div>
        {data?.data.map((arr) => (
          <TransparentFrame
            onClick={() => setSpec(arr.id)}
            key={arr.id}
            className={arr.id === spec ? "active" : ""}
          >
            {arr.title}
          </TransparentFrame>
        ))}
      </div>
      <Button
        className="specializations__button"
        onClick={handleClick}
        disabled={spec === null}
      >
        Перейти
      </Button>
    </div>
  );
};

export default Specializations;
