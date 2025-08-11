import LevelSelector from "../../../../features/quiz-settings/level-selector/ui/LevelSelector";
import ModeSelector from "../../../../features/quiz-settings/mode-selector/ui/ModeSelector";
import QuantitySelector from "../../../../features/quiz-settings/quantity-selector/ui/QuantitySelector";

const DetailedSettings = () => {
  return (
    <div className="settings">
      <LevelSelector />
      <ModeSelector />
      <QuantitySelector />
    </div>
  );
};

export default DetailedSettings;
