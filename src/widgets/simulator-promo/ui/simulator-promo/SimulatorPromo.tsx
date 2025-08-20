import "./simulator-promo.css";
import "../../../../shared/ui/index.css";
import SimulatorTitle from "../simulator-title/SimulatorTitle";
import SimulatorExample from "../simulator-example/SimulatorExample";
import SimulatorCards from "../simulator-cards/SimulatorCards";
import { Link } from "react-router";

const SimulatorPromo = () => {
  return (
    <section className="simulator-promo">
      <div className="container simulator-promo__grid-container">
        <SimulatorExample />
        <SimulatorTitle />
        <div className="simulator-promo__wrap">
          <SimulatorCards />
          <Link to="/quiz">
            <button className="button simulator-promo__button">
              Начать обучение
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SimulatorPromo;
