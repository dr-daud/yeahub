import { useState } from "react";
import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { LEVEL, MODE } from "../../model/constants";
import minus from "../../assets/Minus.svg";
import plus from "../../assets/Plus.svg";
import "./detailed-settings.css";

const DetailedSettings = () => {
  const [quanyity, setQuantity] = useState(0);

  return (
    <div className="settings">
      <div className="settings__level">
        <p className="settings__title body2">Уровень сложности</p>
        {LEVEL.map((level) => (
          <TransparentFrame>{level}</TransparentFrame>
        ))}
      </div>
      <div>
        <div className="settings__mode">
          <p className="settings__title body2">Выберите режим</p>
          {MODE.map((mode) => (
            <TransparentFrame>{mode}</TransparentFrame>
          ))}
        </div>
        <div className="settings__quantity">
          <p className="settings__title body2">Количество вопросов</p>
          <TransparentFrame>
            <button onClick={() => setQuantity((prev) => prev - 1)}>
              <img src={minus} alt="minus" />
            </button>
            {quanyity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>
              <img src={plus} alt="plus" />
            </button>
          </TransparentFrame>
        </div>
      </div>
    </div>
  );
};

export default DetailedSettings;
