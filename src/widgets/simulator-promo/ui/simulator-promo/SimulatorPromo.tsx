import "./simulator-promo.css";
import "../../../../shared/ui/index.css";
import SimulatorTitle from "../simulator-title/SimulatorTitle";
import SimulatorExample from "../simulator-example/SimulatorExample";
import SimulatorCards from "../simulator-cards/SimulatorCards";

const SimulatorPromo = () => {
  return (
    <section className="simulator-promo">
      <div className="container simulator-promo__grid-container">
        <SimulatorExample />
        <SimulatorTitle />
        <SimulatorCards />
      </div>
    </section>
  );
};

export default SimulatorPromo;
