import { useState } from "react";
import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import "./quantity-selector.css";
import minus from "../assets/Minus.svg";
import plus from "../assets/Plus.svg";

const QuantitySelector = () => {
  const [quanyity, setQuantity] = useState(35);

  const handlePlus = () => {
    if (quanyity < 100) {
      setQuantity(quanyity + 1);
    }
  };

  const handleMinus = () => {
    if (quanyity > 1) {
      setQuantity(quanyity - 1);
    }
  };

  return (
    <div className="quantity">
      <p className="black700-title body2">Количество вопросов</p>
      <TransparentFrame className="quantity__wrap">
        <button onClick={handleMinus} className="quantity__button">
          <img src={minus} alt="minus" />
        </button>
        {quanyity}
        <button onClick={handlePlus} className="quantity__button">
          <img src={plus} alt="plus" />
        </button>
      </TransparentFrame>
    </div>
  );
};

export default QuantitySelector;
