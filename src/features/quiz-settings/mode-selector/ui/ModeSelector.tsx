import TransparentFrame from "../../../../shared/ui/transparent-frame/ui/TransparentFrame";
import { MODE } from "../model/constants";
import "./mode-selector.css";

const ModeSelector = () => {
  return (
    <div className="mode">
      <p className="black700-title body2">Выберите режим</p>
      {MODE.map((mode) => (
        <TransparentFrame>{mode}</TransparentFrame>
      ))}
    </div>
  );
};

export default ModeSelector;
