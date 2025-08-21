import TransparentFrame from "../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { useSpecializationsQuery } from "../api/api";
import Button from "../../../shared/ui/button/Button";
import "./specializations.css";
import { useLazySkillsQuery } from "../../skills/api/api";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../app/appStore";
import { setSpec } from "../model/specializationsSlice";
import FrameSkeleton from "../../../shared/ui/frame-skeleton/FrameSkeleton";

interface Props {
  setCurrentStep: (currentStep: number) => void;
}

const Specializations = ({ setCurrentStep }: Props) => {
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

  return (
    <div className="specializations">
      <p className="specializations__title body2">Специализация</p>
      <div>
        {isLoading ? (
          <FrameSkeleton quantity={30} />
        ) : (
          data?.data.map((arr) => (
            <TransparentFrame
              onClick={() => dispatch(setSpec(arr.id))}
              key={arr.id}
              className={arr.id === spec ? "active" : ""}
            >
              {arr.title}
            </TransparentFrame>
          ))
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
