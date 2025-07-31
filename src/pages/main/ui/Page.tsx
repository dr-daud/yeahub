import Mode from "../../../widgets/mode/ui/Mode";
import Prepare from "../../../widgets/prepare/ui/Prepare";
import SimulatorPromo from "../../../widgets/simulator-promo/ui/SimulatorPromo";
import TopQuestions from "../../../widgets/top-questions/ui/TopQuestions";

const MainPage = () => {
  return (
    <main>
      <TopQuestions />
      <SimulatorPromo />
      <Prepare />
      <Mode />
    </main>
  );
};

export default MainPage;
