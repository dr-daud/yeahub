import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import "./quantity-selector.css";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../../app/appStore";
import {
  addLimit,
  reduceLimit,
} from "../../../../entities/questions/model/questionsSlice";

const QuantitySelector = () => {
  const { limit } = useSelector((state: RootState) => state.questionsReducer);
  const dispatch = useDispatch();

  const handlePlus = () => {
    if (limit < 100) {
      dispatch(addLimit(limit));
    }
  };

  const handleMinus = () => {
    if (limit > 1) {
      dispatch(reduceLimit(limit));
    }
  };

  return (
    <div className="quantity">
      <p className="black700-title body2">Количество вопросов</p>
      <TransparentFrame className="quantity__wrap">
        <button onClick={handleMinus} className="qunatity__button">
          <img src={minus} alt="minus" />
        </button>
        {limit}
        <button onClick={handlePlus} className="qunatity__button">
          <img src={plus} alt="plus" />
        </button>
      </TransparentFrame>
    </div>
  );
};

export default QuantitySelector;
