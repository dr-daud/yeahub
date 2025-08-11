import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { LEVEL } from "../model/constants";

const LevelSelector = () => {
  // const [level, setLevel] = useState([]);

  return (
    <div className="level">
      <p className="back700-title body2">Уровень сложности</p>
      {LEVEL.map((level, index) => (
        <TransparentFrame key={index}>{level}</TransparentFrame>
      ))}
    </div>
  );
};

export default LevelSelector;
