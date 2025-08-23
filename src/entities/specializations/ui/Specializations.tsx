import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSpecializationsQuery } from "../api/api";
import Button from "../../../shared/ui/button/Button";
import "./specializations.css";
import { useLazySkillsQuery } from "../../skills/api/api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/appStore";
import { setSpec } from "../model/specializationsSlice";
import FrameSkeleton from "../../../shared/ui/frame-skeleton/FrameSkeleton";
import WatchMore from "../../../shared/ui/watch-more/WatchMore";
import { useEffect, useState } from "react";
import { useWindowWidth } from "../../../shared/hooks/useWindowWidth";

interface Props {
  setCurrentStep: (currentStep: number) => void;
}

const Specializations = ({ setCurrentStep }: Props) => {
  const width = useWindowWidth();
  const [isExpanded, setIsExpanded] = useState(true);
  const { data, isLoading } = useSpecializationsQuery({ page: 1, limit: 19 });
  const [trigger] = useLazySkillsQuery();
  const { spec } = useSelector(
    (state: RootState) => state.specializationsReducer
  );
  const dispatch = useDispatch();

  const handleClick = async () => {
    setCurrentStep(2);
    trigger({ page: 1, limit: 10, specializations: spec });
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

  return (
    <div className="specializations">
      <p className="specializations__title body2">Специализация</p>
      <div className="speacializations__wrap">
        {isLoading ? (
          <FrameSkeleton quantity={30} />
        ) : (
          shownSpecializations?.map((arr) => (
            <TransparentFrame
              onClick={() => dispatch(setSpec(arr.id))}
              key={arr.id}
              className={arr.id === spec ? "active" : ""}
            >
              {arr.title}
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
        disabled={spec === null}
      >
        Перейти
      </Button>
    </div>
  );
};

export default Specializations;
