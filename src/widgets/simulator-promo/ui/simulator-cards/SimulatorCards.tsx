import { Link } from "react-router";
import { SIMULATOR_CARDS } from "../../model/constants";
import "./simulator-cards.css";

const SimulatorCards = () => {
  return (
    <div className="simulator-cards">
      <div className="simulator-cards__wrap">
        {SIMULATOR_CARDS.map((card) => (
          <div className="simulator-cards__inner">
            <div className="simulator-cards__icon-wrap icon-wrap">
              <img src={card.icon} alt="graph up" />
            </div>
            <p className="body3 simulator-cards__text">{card.text}</p>
          </div>
        ))}
      </div>
      <Link to="/quiz">
        <button className="button simulator-promo__button">
          Начать обучение
        </button>
      </Link>
    </div>
  );
};

export default SimulatorCards;
