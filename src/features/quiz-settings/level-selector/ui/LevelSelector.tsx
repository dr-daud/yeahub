import { useState } from "react";
import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { LEVEL } from "../model/constants";
import type { TLevel } from "../model/types";

const LevelSelector = () => {
  const [level, setLevel] = useState<string[][]>([]);

  const handleClick = (obj: TLevel) => {
    if (level.includes(obj.value)) {
      setLevel(level.filter((item) => item !== obj.value));
    } else {
      setLevel([...level, obj.value]);
    }
  };

  return (
    <div className="level">
      <p className="back700-title body2">Уровень сложности</p>
      {LEVEL.map((obj, index) => (
        <TransparentFrame
          key={index}
          onClick={() => handleClick(obj)}
          className={level.includes(obj.value) ? "active" : ""}
        >
          {obj.label}
        </TransparentFrame>
      ))}
    </div>
  );
};

export default LevelSelector;
