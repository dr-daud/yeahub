import "./specializations.css";
import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSpecializationsQuery } from "../api/api";
import Button from "../../../shared/ui/button/Button";
import { useLazySkillsQuery } from "../../skills/api/api";
import FrameSkeleton from "../../../shared/ui/frame-skeleton/FrameSkeleton";
import WatchMore from "../../../shared/ui/watch-more/WatchMore";
import useExpantionHook from "../../../shared/hooks/useExpantionHook";
import { useGetSearchParams } from "../../../shared/hooks/useGetSearchParams";

interface Props {
  setCurrentStep: (currentStep: number) => void;
}

const Specializations = ({ setCurrentStep }: Props) => {
  const { data, isLoading } = useSpecializationsQuery({ page: 1, limit: 19 });
  const [trigger] = useLazySkillsQuery();
  const { getParam, setSearchParams } = useGetSearchParams();

  const selectedSpec = getParam("selectedSpec");

  const handleClick = () => {
    setCurrentStep(2);
    trigger({ page: 1, limit: 10, specializations: Number(selectedSpec) });
  };

  const { isExpanded, setIsExpanded, width } = useExpantionHook(730);

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
