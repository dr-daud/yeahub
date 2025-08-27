import "./specializations.css";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSpecializationsQuery } from "../api/api";
import Button from "../../../shared/ui/button/Button";
import { useLazySkillsQuery } from "../../skills/api/api";
import FrameSkeleton from "../../../shared/ui/frame-skeleton/FrameSkeleton";
import WatchMore from "../../../shared/ui/watch-more/WatchMore";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../shared/hooks/useWindowWidth";
import { useSearchParams } from "react-router";

interface Props {
  setCurrentStep: (currentStep: number) => void;
}

const Specializations = ({ setCurrentStep }: Props) => {
  const width = useWindowWidth();
  const [isExpanded, setIsExpanded] = useState(true);
  const { data, isLoading } = useSpecializationsQuery({ page: 1, limit: 19 });
  const [trigger] = useLazySkillsQuery();
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedSpec = searchParams.get("selectedSpec");

  const handleClick = async () => {
    setCurrentStep(2);
    trigger({ page: 1, limit: 10, specializations: Number(selectedSpec) });
  };

  useEffect(() => {
    const mobileExpantion = () => {
      if (width <= 730) {
        setIsExpanded(false);
      }
    };
    mobileExpantion();
  }, [width]);

  const shownSpecializations = isExpanded ? data?.data : data?.data.slice(0, 7);

  const setSelectedSpec = (questionId: number) => {
    setSearchParams({ selectedSpec: questionId.toString() });
  };

  return (
    <div className="specializations">
      <p className="specializations__title body2">Специализация</p>
      <div className="speacializations__wrap">
        {isLoading ? (
          <FrameSkeleton quantity={30} />
        ) : (
          shownSpecializations?.map((spec) => (
            <TransparentFrame
              onClick={() => setSelectedSpec(spec.id)}
              key={spec.id}
              className={spec.id === Number(selectedSpec) ? "active" : ""}
            >
              {spec.title}
            </TransparentFrame>
          ))
        )}
        {width <= 730 && (
          <WatchMore
            onClick={() => setIsExpanded(!isExpanded)}
            isExpanded={isExpanded}
          />
        )}
      </div>
      <Button
        className="specializations__button"
        onClick={handleClick}
        disabled={selectedSpec === null}
      >
        Перейти
      </Button>
    </div>
  );
};

export default Specializations;
