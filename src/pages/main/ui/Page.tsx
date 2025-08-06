import Mode from "../../../widgets/mode/ui/Mode";
import Prepare from "../../../widgets/prepare/ui/Prepare";
import SimulatorPromo from "../../../widgets/simulator-promo/ui/SimulatorPromo";
import TopQuestions from "../../../widgets/top-questions/ui/TopQuestions";
import Track from "../../../widgets/track/ui/Track";

const MainPage = () => {
  return (
    <main>
      <TopQuestions />
      <SimulatorPromo />
      <Prepare />
      <Mode />
      <Track />
    </main>
  );
};

export default MainPage;
