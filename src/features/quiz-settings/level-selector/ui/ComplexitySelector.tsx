import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { LEVEL } from "../model/constants";
import type { TComplexity } from "../model/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import {
  addComplexity,
  removeComplexity,
} from "../../../../entities/questions/model/questionsSlice";

const LevelSelector = () => {
  const dispatch = useDispatch();
  const { selectedComplexities } = useSelector(
    (state: RootState) => state.questionsReducer
  );

  const handleClick = (obj: TComplexity) => {
    if (selectedComplexities?.find((i) => i.id === obj.id)) {
      dispatch(removeComplexity(obj.id));
    } else {
      dispatch(addComplexity(obj));
    }
  };

  return (
    <div className="level">
      <p className="back700-title body2">Уровень сложности</p>
      {LEVEL.map((obj, index) => (
        <TransparentFrame
          key={index}
          onClick={() => handleClick(obj)}
          className={
            selectedComplexities?.find((i) => i.id === obj.id) ? "active" : ""
          }
        >
          {obj.label}
        </TransparentFrame>
      ))}
    </div>
  );
};

export default LevelSelector;
