import { cards } from "../../model/constants";
import "./promo-cards.css";

const PromoCards = () => {
  return (
    <div className={"promo-cards"}>
      {cards.map((card, i) => (
        <div className={"promo-cards__wrap"} key={i}>
          <div className="promo-cards__icon-wrap icon-wrap">
            <img
              src={card.icon}
              alt="icon"
              className="promo-cards__icon icon"
            />
          </div>
          <p className="body5-med promo-cards__title">{card.title}</p>
          <p className="body3 promo-cards__description">{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PromoCards;
